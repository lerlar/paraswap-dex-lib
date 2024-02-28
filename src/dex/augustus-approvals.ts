import { Address, ParaSwapVersion } from '@paraswap/core';
import { CACHE_PREFIX, ETHER_ADDRESS } from '../constants';
import { ICache, IDexHelper } from '../dex-helper';
import { Interface } from '@ethersproject/abi';
import ERC20ABI from '../abi/erc20.json';
import { uint256ToBigInt } from '../lib/decoders';
import { MultiCallParams, MultiWrapper } from '../lib/multi-wrapper';
import { ConfigHelper } from '../config';

const DEFAULT_APPROVE_CACHE_KEY_VALUE = 'true';

// key = spender_token_target
type ApprovalsMapping = Record<string, boolean>;

export class AugustusApprovals {
  erc20Interface: Interface;

  private cache: ICache;

  protected network: number;
  protected augustusAddress: Address;
  protected augustusV6Address: Address | undefined;

  private readonly cacheApprovesKey: string;

  constructor(
    config: ConfigHelper,
    cache: ICache,
    protected multiWrapper: MultiWrapper,
  ) {
    this.network = config.data.network;
    this.augustusAddress = config.data.augustusAddress;
    this.augustusV6Address = config.data.augustusV6Address;
    this.erc20Interface = new Interface(ERC20ABI);
    this.cache = cache;

    this.cacheApprovesKey = `${CACHE_PREFIX}_${this.network}_approves`;
  }

  async hasApproval(
    spender: Address,
    token: Address,
    target: Address,
  ): Promise<boolean> {
    const approvals = await this.hasApprovals(spender, [[token, target]]);
    return approvals[0];
  }

  async hasApprovals(
    spender: Address,
    tokenTargetMapping: [token: Address, target: Address][],
  ): Promise<boolean[]> {
    let approvalsMapping: Record<string, boolean> = {};

    tokenTargetMapping.forEach(([token, target]) => {
      const key = this.createCacheKey(spender, token, target);
      // set approved 'true' for ETH
      approvalsMapping[key] = token.toLowerCase() === ETHER_ADDRESS;
    });

    approvalsMapping = await this.addCachedApprovals(approvalsMapping);

    const cachedApprovals = Object.values(approvalsMapping);
    if (cachedApprovals.every(approval => approval === true))
      return cachedApprovals;

    approvalsMapping = await this.addOnChainApprovals(approvalsMapping);

    // to keep same order and length as input
    return tokenTargetMapping
      .map(([token, target]) => this.createCacheKey(spender, token, target))
      .map(key => approvalsMapping[key]);
  }

  private async addCachedApprovals(
    approvalsMapping: ApprovalsMapping,
  ): Promise<ApprovalsMapping> {
    const keys = this.filterKeys(approvalsMapping);
    if (keys.length === 0) return approvalsMapping;

    const approvals = await this.cache.hmget(this.cacheApprovesKey, keys);

    approvals.forEach((approved, index) => {
      if (approved !== null) {
        approvalsMapping[keys[index]] = true;
      }
    });

    return approvalsMapping;
  }

  private async setCachedApprovals(
    approvalsMapping: ApprovalsMapping,
  ): Promise<void> {
    const keys = this.filterKeys(approvalsMapping, true);
    if (keys.length === 0) return;

    const mappings = Object.fromEntries(
      keys.map(key => [key, DEFAULT_APPROVE_CACHE_KEY_VALUE]),
    );

    await this.cache.hmset(this.cacheApprovesKey, mappings);
  }

  private async getOnChainApprovals(
    spenderTokenTargetMapping: [
      spender: Address,
      token: Address,
      target: Address,
    ][],
  ): Promise<boolean[]> {
    const allowanceCalldata: MultiCallParams<bigint>[] =
      spenderTokenTargetMapping.map(([spender, token, target]) => ({
        target: token,
        callData: this.erc20Interface.encodeFunctionData('allowance', [
          spender,
          target,
        ]),
        decodeFunction: uint256ToBigInt,
      }));

    const allowances = await this.multiWrapper.tryAggregate<bigint>(
      false,
      allowanceCalldata,
    );

    return allowances.map(allowance =>
      // as we are give approvals for max amount, just check if it's not zero
      allowance.success ? allowance.returnData !== 0n : false,
    );
  }

  private async addOnChainApprovals(approvalsMapping: ApprovalsMapping) {
    const keys = this.filterKeys(approvalsMapping);
    if (keys.length === 0) return approvalsMapping;

    const onChainApprovals = await this.getOnChainApprovals(
      keys.map(key => this.splitCacheKey(key)),
    );

    if (onChainApprovals.includes(true)) {
      const setApprovalsInCache: Record<string, boolean> = {};
      onChainApprovals.forEach((approved, index) => {
        if (approved) {
          approvalsMapping[keys[index]] = true;
          setApprovalsInCache[keys[index]] = true;
        }
      });

      await this.setCachedApprovals(setApprovalsInCache);
    }

    return approvalsMapping;
  }

  private createCacheKey(
    spender: Address,
    token: Address,
    target: Address,
  ): string {
    return `${spender}_${token}_${target}`;
  }

  private splitCacheKey(
    key: string,
  ): [spender: Address, token: Address, target: Address] {
    return key.split('_') as [Address, Address, Address];
  }

  private filterKeys(tokenTargetMapping: ApprovalsMapping, approved = false) {
    return Object.entries(tokenTargetMapping)
      .filter(([key, app]) => app === approved)
      .map(([key]) => key);
  }
}
