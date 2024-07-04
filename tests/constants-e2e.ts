import {
  SmartTokenParams,
  balanceOfFn,
  allowanceFn,
  SmartToken,
  balancesFn,
  allowedFn,
  _balancesFn,
  _allowancesFn,
} from '../tests/smart-tokens';
import { Address } from '../src/types';
import { ETHER_ADDRESS, Network } from '../src/constants';

export const GIFTER_ADDRESS = '0xb22fC4eC94D555A5049593ca4552c810Fb8a6d00';
export const GENERIC_ADDR1 = '0xbe9317f6711e2da074fe1f168fd9c402bc0a9d1b';
export const GENERIC_ADDR2 = '0x230a1ac45690b9ae1176389434610b9526d2f21b';

export const Tokens: {
  [network: number]: { [symbol: string]: SmartTokenParams };
} = {
  [Network.MAINNET]: {
    ETH: {
      address: ETHER_ADDRESS,
      decimals: 18,
    },
    SWETH: {
      address: '0xf951e335afb289353dc249e82926178eac7ded78',
      decimals: 18,
    },
    BAT: {
      address: '0x0d8775f648430679a709e98d2b0cb6250d2887ef',
      decimals: 18,
    },
    rswETH: {
      address: '0xFAe103DC9cf190eD75350761e95403b7b8aFa6c0',
      decimals: 18,
    },
    REQ: {
      address: '0x8f8221aFbB33998d8584A2B05749bA73c37a938a',
      decimals: 18,
    },
    AMPL: {
      address: '0xd46ba6d942050d489dbd938a2c909a5d5039a161',
      decimals: 9,
    },
    USDC: {
      address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      decimals: 6,
      symbol: 'USDC',
      addBalance: balancesFn,
      addAllowance: allowedFn,
    },
    aEthUSDC: {
      address: '0x98c23e9d8f34fefb1b7bd6a91b7ff122f4e16f5c',
      decimals: 6,
    },
    aEthWETH: {
      address: '0x4d5f47fa6a74757f35c14fd3a6ef8e3c9bc514e8',
      decimals: 18,
    },
    MAV: {
      address: '0x7448c7456a97769f6cd04f1e83a4a23ccdc46abd',
      decimals: 18,
    },
    SUSHI: {
      address: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
      decimals: 18,
    },
    CUSDC: {
      address: '0x39AA39c021dfbaE8faC545936693aC917d5E7563',
      decimals: 8,
    },
    TUSD: {
      address: '0x0000000000085d4780b73119b644ae5ecd22b376',
      decimals: 18,
    },
    WBTC: {
      address: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
      decimals: 8,
      addBalance: balancesFn,
      addAllowance: allowedFn,
    },
    sBTC: {
      address: '0xfe18be6b3bd88a2d2a7f928d00292e7a9963cfc6',
      decimals: 18,
    },
    tBTCv2: {
      address: '0x18084fbA666a33d37592fA2633fD49a74DD93a88',
      decimals: 18,
    },
    BADGER: {
      address: '0x3472A5A71965499acd81997a54BBA8D852C6E53d',
      decimals: 18,
    },
    USDT: {
      address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
      decimals: 6,
      addBalance: balancesFn,
      addAllowance: allowedFn,
    },
    STETH: {
      address: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
      decimals: 18,
    },
    SDEX: {
      address: '0x5DE8ab7E27f6E7A1fFf3E5B337584Aa43961BEeF',
      decimals: 18,
    },
    wstETH: {
      address: '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0',
      decimals: 18,
    },
    frxETH: {
      address: '0x5E8422345238F34275888049021821E8E08CAa1f',
      decimals: 18,
    },
    WETH: {
      address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      decimals: 18,
      addBalance: balanceOfFn,
      addAllowance: allowanceFn,
    },
    PSP: {
      address: '0xcafe001067cdef266afb7eb5a286dcfd277f3de5',
      decimals: 18,
    },
    SETH: {
      address: '0x5e74C9036fb86BD7eCdcb084a0673EFc32eA31cb',
      decimals: 18,
    },
    LINK: {
      address: '0x514910771af9ca656af840dff83e8264ecf986ca',
      decimals: 18,
    },
    DAI: {
      address: '0x6b175474e89094c44da98b954eedeac495271d0f',
      decimals: 18,
      addBalance: balanceOfFn,
      addAllowance: allowanceFn,
    },
    MLN: {
      address: '0xec67005c4e498ec7f55e092bd1d35cbc47c91892',
      decimals: 18,
    },
    SENT: {
      address: '0xa44E5137293E855B1b7bC7E2C6f8cD796fFCB037',
      decimals: 8,
    },
    oldFRAX: {
      address: '0x853d955acef822db058eb8505911ed77f175b99e',
      decimals: 18,
    },
    aDAI: {
      address: '0x028171bCA77440897B824Ca71D1c56caC55b68A3',
      decimals: 18,
    },
    aUSDT: {
      address: '0x3Ed3B47Dd13ECAURA9a98b44e6204A523E766B225811',
      decimals: 6,
    },
    waUSDT: {
      address: '0xf8Fd466F12e236f4c96F7Cce6c79EAdB819abF58',
      decimals: 6,
    },
    ALUSD: {
      address: '0xbc6da0fe9ad5f3b0d58160288917aa56653660e9',
      decimals: 18,
    },
    BAL: {
      address: '0xba100000625a3754423978a60c9317c58a424e3D',
      decimals: 18,
    },
    OHM: {
      address: '0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5',
      decimals: 9,
    },
    AURA: {
      address: '0xc0c293ce456ff0ed870add98a0828dd4d2903dbf',
      decimals: 18,
    },
    WISE: {
      address: '0x66a0f676479cee1d7373f3dc2e2952778bff5bd6',
      decimals: 18,
    },
    DDIM: {
      address: '0xFbEEa1C75E4c4465CB2FCCc9c6d6afe984558E20',
      decimals: 18,
    },
    DODO: {
      address: '0x43Dfc4159D86F3A37A5A4B3D4580b888ad7d4DDd',
      decimals: 18,
    },
    STG: {
      address: '0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6',
      decimals: 18,
    },
    ADAI: {
      address: '0x028171bca77440897b824ca71d1c56cac55b68a3',
      decimals: 18,
    },
    AWETH: {
      address: '0x030ba81f1c18d280636f32af80b9aad02cf0854e',
      decimals: 18,
    },
    ALPHA: {
      address: '0xa1faa113cbe53436df28ff0aee54275c13b40975',
      decimals: 18,
    },
    CRV: {
      address: '0xd533a949740bb3306d119cc777fa900ba034cd52',
      decimals: 18,
    },
    INCH: {
      address: '0x111111111117dC0aa78b770fA6A738034120C302',
      decimals: 18,
    },
    mUSD: {
      address: '0xe2f2a5c287993345a840db3b0845fbc70f5935a5',
      decimals: 18,
    },
    mBTC: {
      address: '0x945facb997494cc2570096c74b5f66a3507330a1',
      decimals: 18,
    },
    renBTC: {
      address: '0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D',
      decimals: 8,
    },
    HBTC: {
      address: '0x0316EB71485b0Ab14103307bf65a021042c6d380',
      decimals: 18,
    },
    tBTC: {
      address: '0x8dAEBADE922dF735c38C80C7eBD708Af50815fAa',
      decimals: 18,
    },
    BUSD: {
      address: '0x4fabb145d64652a948d72533023f6e7a623c7c53',
      decimals: 18,
    },
    GUSD: {
      address: '0x056fd409e1d7a124bd7017459dfea2f387b6d5cd',
      decimals: 2,
    },
    ADAIv1: {
      address: '0xfC1E690f61EFd961294b3e1Ce3313fBD8aa4f85d',
      decimals: 18,
    },
    CETH: {
      address: '0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5',
      decimals: 8,
    },
    CDAI: {
      address: '0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643',
      decimals: 8,
    },
    MIM: {
      address: '0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3',
      decimals: 18,
    },
    AnkETH: {
      address: '0xE95A203B1a91a908F9B9CE46459d101078c2c3cb',
      decimals: 18,
    },
    EURS: {
      address: '0xdB25f211AB05b1c97D595516F45794528a807ad8',
      decimals: 2,
    },
    EURT: {
      address: '0xC581b735A1688071A1746c968e0798D642EDE491',
      decimals: 6,
    },
    jEUR: {
      address: '0x0f17bc9a994b87b5225cfb6a2cd4d667adb4f20b',
      decimals: 18,
    },
    jCHF: {
      address: '0x53dfea0a8cc2a2a2e425e1c174bc162999723ea0',
      decimals: 18,
    },
    jGBP: {
      address: '0x7409856cae628f5d578b285b45669b36e7005283',
      decimals: 18,
    },
    XAUT: {
      address: '0x68749665FF8D2d112Fa859AA293F07A622782F38',
      decimals: 6,
    },
    CVX: {
      address: '0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B',
      decimals: 18,
    },
    UST: {
      address: '0xa47c8bf37f92abed4a126bda807a7b7498661acd',
      decimals: 18,
    },
    SAITAMA: {
      address: '0x8b3192f5eebd8579568a2ed41e6feb402f93f73f',
      decimals: 9,
    },
    BBAUSDT: {
      // bpt of USDT Linear Pool
      address: '0x2bbf681cc4eb09218bee85ea2a5d3d13fa40fc0c',
      decimals: 18,
    },
    BBADAI: {
      // bpt of DAI Linear Pool
      address: '0x804cdb9116a10bb78768d3252355a1b18067bf8f',
      decimals: 18,
    },
    BBAUSD: {
      address: '0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb2',
      decimals: 18,
    },
    BBFDAI: {
      address: '0x8f4063446f5011bc1c9f79a819efe87776f23704',
      decimals: 18,
    },
    FEI: {
      address: '0x956F47F50A910163D8BF957Cf5846D573E7f87CA',
      decimals: 18,
    },
    newFRAX: {
      address: '0x853d955aCEf822Db058eb8505911ED77F175b99e',
      decimals: 18,
    },
    sETH: {
      address: '0x5e74C9036fb86BD7eCdcb084a0673EFc32eA31cb',
      decimals: 18,
    },
    sUSD: {
      address: '0x57Ab1ec28D129707052df4dF418D58a2D46d5f51',
      decimals: 18,
    },
    USDD: {
      address: '0x0c10bf8fcb7bf5412187a595ab97a3609160b5c6',
      decimals: 18,
    },
    alETH: {
      address: '0x0100546f2cd4c9d97f798ffc9755e47865ff7ee6',
      decimals: 18,
    },
    SHIBA: {
      address: '0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE',
      decimals: 18,
    },
    dUSDC: {
      address: '0xc411db5f5eb3f7d552f9b8454b2d74097ccde6e3',
      decimals: 6,
    },
    EURA: {
      address: '0x1a7e4e63778b4f12a199c062f3efdd288afcbce8',
      decimals: 18,
      symbol: 'EURA',
    },
    EUROC: {
      address: '0x1aBaEA1f7C830bD89Acc67eC4af516284b1bC33c',
      decimals: 6,
      symbol: 'EUROC',
    },
    bERNX: {
      address: '0x3f95AA88dDbB7D9D484aa3D482bf0a80009c52c9',
      decimals: 18,
      symbol: 'bERNX',
    },
    bC3M: {
      address: '0x2F123cF3F37CE3328CC9B5b8415f9EC5109b45e7',
      decimals: 18,
      symbol: 'bC3M',
    },
    stEUR: {
      address: '0x004626a008b1acdc4c74ab51644093b155e59a23',
      decimals: 18,
    },
    USDA: {
      address: '0x0000206329b97DB379d5E1Bf586BbDB969C63274',
      decimals: 18,
      symbol: 'USDA',
    },
    bIB01: {
      address: '0xCA30c93B02514f86d5C86a6e375E3A330B435Fb5',
      decimals: 18,
      symbol: 'bIB01',
    },
    steakUSDC: {
      address: '0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB',
      decimals: 18,
      symbol: 'steakUSDC',
    },
    stUSD: {
      address: '0x0022228a2cc5E7eF0274A7Baa600d44da5aB5776',
      decimals: 18,
    },
    GHO: {
      address: '0x40d16fc0246ad3160ccc09b8d0d3a2cd28ae6c2f',
      decimals: 18,
    },
    USDe: {
      address: '0x4c9EDD5852cd905f086C759E8383e09bff1E68B3',
      decimals: 18,
    },
    crvUSD: {
      address: '0xf939E0A03FB07F59A73314E73794Be0E57ac1b4E',
      decimals: 18,
    },
    wibBTC: {
      address: '0x8751d4196027d4e6da63716fa7786b5174f04c15',
      decimals: 18,
    },
    MATIC: {
      address: '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0',
      decimals: 18,
    },
    POL: {
      address: '0x455e53CBB86018Ac2B8092FdCd39d8444aFFC3F6',
      decimals: 19,
    },
    GYD: {
      address: '0xe07f9d810a48ab5c3c914ba3ca53af14e4491e8a',
      decimals: 18,
    },
    LUSD: {
      address: '0x5f98805a4e8be255a32880fdec7f6728c6568ba0',
      decimals: 18,
    },
    BNT: {
      address: '0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c',
      decimals: 18,
    },
    sDAI: {
      address: '0x83f20f44975d03b1b09e64809b757c47f942beea',
      decimals: 18,
    },
    eETH: {
      address: '0x35fa164735182de50811e8e2e824cfb9b6118ac2',
      decimals: 18,
    },
    weETH: {
      address: '0xcd5fe23c85820f7b72d0926fc9b05b43e359b7ee',
      decimals: 18,
    },
    stataUSDT: {
      address: '0x862c57d48becb45583aeba3f489696d22466ca1b',
      decimals: 6,
    },
    aaveUSDT: {
      address: '0x23878914efe38d27c4d67ab83ed1b93a74d4086a',
      decimals: 6,
    },
  },
  [Network.POLYGON]: {
    jGBP: {
      address: '0x767058f11800fba6a682e73a6e79ec5eb74fac8c',
      decimals: 18,
    },
    DAI: {
      address: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
      decimals: 18,
    },
    // native bridged wormhole
    USDCe: {
      address: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
      decimals: 6,
      addBalance: _balancesFn,
      addAllowance: _allowancesFn,
    },
    TEL: {
      address: '0xdf7837de1f2fa4631d716cf2502f8b230f1dcc32',
      decimals: 2,
    },
    // wormhole
    USDC: {
      address: '0x576Cf361711cd940CD9C397BB98C4C896cBd38De',
      decimals: 6,
    },
    // circle issued usdc
    USDCn: {
      address: '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359',
      decimals: 6,
    },
    stataUSDCn: {
      address: '0x2dCa80061632f3F87c9cA28364d1d0c30cD79a19',
      decimals: 6,
    },
    aaveUSDCn: {
      address: '0xa4d94019934d8333ef880abffbf2fdd611c762bd',
      decimals: 6,
    },
    POPS: {
      address: '0xa92A1576D11dB45c53be71d59245ac97ce0d8147',
      decimals: 18,
    },
    CRV: {
      address: '0x172370d5cd63279efa6d502dab29171933a610af',
      decimals: 18,
    },
    BAL: {
      address: '0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3',
      decimals: 18,
    },
    AAVE: {
      address: '0xd6df932a45c0f255f85145f286ea0b292b21c90b',
      decimals: 18,
    },
    PSP: {
      address: '0x42d61d766b85431666b39b89c43011f24451bff6',
      decimals: 18,
    },
    WETH: {
      address: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
      decimals: 18,
    },
    crvUSD: {
      address: '0xc4ce1d6f5d98d65ee25cf85e9f2e9dcfee6cb5d6',
      decimals: 18,
    },
    WMATIC: {
      address: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
      decimals: 18,
      addBalance: balanceOfFn,
      addAllowance: allowanceFn,
    },
    AMWMATIC: {
      address: '0x8dF3aad3a84da6b69A4DA8aeC3eA40d9091B2Ac4',
      decimals: 18,
    },
    aPolWMATIC: {
      address: '0x6d80113e533a2c0fe82eabd35f1875dcea89ea97',
      decimals: 18,
    },
    MUST: {
      address: '0x9C78EE466D6Cb57A4d01Fd887D2b5dFb2D46288f',
      decimals: 18,
    },
    AMDAI: {
      address: '0x27F8D03b3a2196956ED754baDc28D73be8830A6e',
      decimals: 18,
    },
    BTU: {
      address: '0xfdc26cda2d2440d0e83cd1dee8e8be48405806dc',
      decimals: 18,
    },
    USDT: {
      address: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
      decimals: 6,
    },
    WBTC: {
      address: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6',
      decimals: 8,
    },
    MATIC: { address: ETHER_ADDRESS, decimals: 18 },
    mUSD: {
      address: '0xe840b73e5287865eec17d250bfb1536704b43b21',
      decimals: 18,
    },
    AMWETH: {
      address: '0x28424507fefb6f7f8e9d3860f56504e4e5f5f390',
      decimals: 18,
    },
    AMWBTC: {
      address: '0x5c2ed810328349100a66b82b78a1791b101c9d61',
      decimals: 8,
    },
    KNC: {
      address: '0x1c954e8fe737f99f68fa1ccda3e51ebdb291948c',
      decimals: 18,
    },
    jEUR: {
      address: '0x4e3decbb3645551b8a19f0ea1678079fcb33fb4c',
      decimals: 18,
    },
    jGPB: {
      address: '0x767058f11800fba6a682e73a6e79ec5eb74fac8c',
      decimals: 18,
    },
    jCHF: {
      address: '0xbd1463f02f61676d53fd183c2b19282bff93d099',
      decimals: 18,
    },
    RADIO: {
      address: '0x613a489785C95afEB3b404CC41565cCff107B6E0',
      decimals: 18,
    },
    HANZO: {
      address: '0x37eb60f78e06c4bb2a5f836b0fc6bccbbaa995b3',
      decimals: 9,
    },
    RVLT: {
      address: '0xf0f9d895aca5c8678f706fb8216fa22957685a13',
      decimals: 18,
    },
    stMATIC: {
      address: '0x3a58a54c066fdc0f2d55fc9c89f0415c92ebf3c4',
      decimals: 18,
    },
    axlUSDC: {
      address: '0x750e4c4984a9e0f12978ea6742bc1c5d248f40ed',
      decimals: 6,
    },
    deUSDC: {
      address: '0x1ddcaa4ed761428ae348befc6718bcb12e63bfaa',
      decimals: 6,
    },
    amUSDT: {
      address: '0x60d55f02a771d515e077c9c2403a1ef324885cec',
      decimals: 6,
    },
    amUSDC: {
      address: '0x1a13F4Ca1d028320A707D99520AbFefca3998b7F',
      decimals: 6,
    },
    MAI: {
      address: '0xa3fa99a148fa48d14ed51d610c367c61876997f1',
      decimals: 18,
    },
    EURA: {
      address: '0xe0b52e49357fd4daf2c15e02058dce6bc0057db4',
      decimals: 18,
      symbol: 'EURA',
    },
    stEUR: {
      address: '0x004626a008b1acdc4c74ab51644093b155e59a23',
      decimals: 18,
    },
    USDA: {
      address: '0x0000206329b97DB379d5E1Bf586BbDB969C63274',
      decimals: 18,
      symbol: 'USDA',
    },
    stUSD: {
      address: '0x0022228a2cc5E7eF0274A7Baa600d44da5aB5776',
      decimals: 18,
    },
    BUSD: {
      address: '0x9C9e5fD8bbc25984B178FdCE6117Defa39d2db39',
      decimals: 18,
    },
    TUSD: {
      address: '0x2e1ad108ff1d8c782fcbbb89aad783ac49586756',
      decimals: 18,
    },
    SDEX: {
      address: '0x6899fAcE15c14348E1759371049ab64A3a06bFA6',
      decimals: 18,
    },
    MATICX: {
      address: '0xfa68fb4628dff1028cfec22b4162fccd0d45efb6',
      decimals: 18,
    },
    SUSHI: {
      address: '0x0b3f868e0be5597d5db7feb59e1cadbb0fdda50a',
      decimals: 18,
    },
  },
  [Network.FANTOM]: {
    FTM: { address: ETHER_ADDRESS, decimals: 18 },
    SOLID: {
      address: '0x777cf5ba9c291a1a8f57ff14836f6f9dc5c0f9dd',
      decimals: 18,
    },
    WFTM: {
      address: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83',
      decimals: 18,
    },
    DAI: {
      address: '0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e',
      decimals: 18,
    },
    USDC: {
      address: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
      decimals: 6,
    },
    FUSDT: {
      address: '0x049d68029688eabf473097a2fc38ef61633a3c7a',
      decimals: 6,
    },
    LQDR: {
      address: '0x10b620b2dbac4faa7d7ffd71da486f5d44cd86f9',
      decimals: 18,
    },
    EQUAL: {
      address: '0x3fd3a0c85b70754efc07ac9ac0cbbdce664865a6',
      decimals: 18,
    },
    beFTM: {
      address: '0x7381ed41f6de418dde5e84b55590422a57917886',
      decimals: 18,
    },
    POPS: {
      address: '0x9dE4b40bDcE50Ec6a1A668bF85997BbBD324069a',
      decimals: 18,
    },
    MIM: {
      address: '0x82f0b8b456c1a451378467398982d4834b6829c1',
      decimals: 18,
    },
    FRAX: {
      address: '0xdc301622e621166BD8E82f2cA0A26c13Ad0BE355',
      decimals: 18,
    },
    nETH: {
      address: '0x67C10C397dD0Ba417329543c1a40eb48AAa7cd00',
      decimals: 18,
    },
    WETH: {
      address: '0x74b23882a30290451A17c44f4F05243b6b58C76d',
      decimals: 18,
    },
    SPIRIT: {
      address: '0x5cc61a78f164885776aa610fb0fe1257df78e59b',
      decimals: 18,
    },
    wBOMB: {
      address: '0xc09a82ad5075b3067d80f54f05e1e22229699cc1',
      decimals: 18,
    },
    TOR: {
      address: '0x74e23df9110aa9ea0b6ff2faee01e740ca1c642e',
      decimals: 18,
    },
    BOO: {
      address: '0x841fad6eae12c286d1fd18d1d525dffa75c7effe',
      decimals: 18,
    },
    ETH: {
      address: '0x74b23882a30290451A17c44f4F05243b6b58C76d',
      decimals: 18,
    },
    GDAI: {
      address: '0x07E6332dD090D287d3489245038daF987955DCFB',
      decimals: 18,
    },
    GUSDC: {
      address: '0xe578C856933D8e1082740bf7661e379Aa2A30b26',
      decimals: 6,
    },
    axlUSDC: {
      address: '0x1B6382DBDEa11d97f24495C9A90b7c88469134a4',
      decimals: 6,
    },
    lzUSDC: {
      address: '0x28a92dde19D9989F39A49905d7C9C2FAc7799bDf',
      decimals: 6,
    },
    FVM: {
      address: '0x07BB65fAaC502d4996532F834A1B7ba5dC32Ff96',
      decimals: 18,
    },
    USDCe: {
      address: '0x2f733095b80a04b38b0d10cc884524a3d09b836a',
      decimals: 6,
    },
    scrvUSDC_e: {
      address: '0x0cf1aa18ab7020973705aa9c46bbec6150e2782b',
      decimals: 18,
    },
    scrvUSDC_p: {
      address: '0x8b697f95d8c9fbbcc597a89223b10b80369490a1',
      decimals: 18,
    },
  },
  [Network.BSC]: {
    POPS: {
      address: '0xa1051433EC7b5cc249c75Fdd5b96BF423f2f4A32',
      decimals: 18,
    },
    DAI: {
      address: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
      decimals: 18,
    },
    WBNB: {
      address: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
      decimals: 18,
    },
    BNBx: {
      address: '0x1bdd3Cf7F79cfB8EdbB955f20ad99211551BA275',
      decimals: 18,
    },
    BUSD: {
      address: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
      decimals: 18,
    },
    USDT: {
      address: '0x55d398326f99059ff775485246999027b3197955',
      decimals: 18,
    },
    ETH: {
      address: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
      decimals: 18,
    },
    UST: {
      address: '0x23396cf899ca06c4472205fc903bdb4de249d6fc',
      decimals: 18,
    },
    USDC: {
      address: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
      decimals: 18,
    },
    RADIO: {
      address: '0x30807D3b851A31d62415B8bb7Af7dCa59390434a',
      decimals: 18,
    },
    BNB: { address: ETHER_ADDRESS, decimals: 18 },
    bBTC: {
      address: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
      decimals: 18,
    },
    anyBTC: {
      address: '0x54261774905f3e6E9718f2ABb10ed6555cae308a',
      decimals: 8,
    },
    nUSD: {
      address: '0x23b891e5C62E0955ae2bD185990103928Ab817b3',
      decimals: 18,
    },
    CONE: {
      address: '0xA60205802E1B5C6EC1CAFA3cAcd49dFeECe05AC9',
      decimals: 18,
    },
    axlUSD: {
      address: '0x4268B8F0B87b6Eae5d897996E6b845ddbD99Adf3',
      decimals: 6,
    },
    FRAX: {
      address: '0x90C97F71E18723b0Cf0dfa30ee176Ab653E89F40',
      decimals: 18,
    },
    frxETH: {
      address: '0x64048A7eEcF3a2F1BA9e144aAc3D7dB6e58F555e',
      decimals: 18,
    },
    USDFI: {
      address: '0x11A38e06699b238D6D9A0C7A01f3AC63a07ad318',
      decimals: 18,
    },
    XRP: {
      address: '0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe',
      decimals: 18,
    },
    SDEX: {
      address: '0xFdc66A08B0d0Dc44c17bbd471B88f49F50CdD20F',
      decimals: 18,
    },
    EURA: {
      address: '0x12f31B73D812C6Bb0d735a218c086d44D5fe5f89',
      decimals: 18,
      symbol: 'EURA',
    },
    USDA: {
      address: '0x0000206329b97DB379d5E1Bf586BbDB969C63274',
      decimals: 18,
      symbol: 'USDA',
    },
    stUSD: {
      address: '0x0022228a2cc5E7eF0274A7Baa600d44da5aB5776',
      decimals: 18,
    },
    stataUSDT: {
      address: '0x0471d185cc7be61e154277cab2396cd397663da6',
      decimals: 18,
    },
    aaveUSDT: {
      address: '0xa9251ca9de909cb71783723713b21e4233fbf1b1',
      decimals: 18,
    },
  },
  [Network.AVALANCHE]: {
    LINKe: {
      address: '0x5947bb275c521040051d82396192181b413227a3',
      decimals: 18,
    },
    PHAR: {
      address: '0xAAAB9D12A30504559b0C5a9A5977fEE4A6081c6b',
      decimals: 18,
    },
    USDCe: {
      address: '0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664',
      decimals: 6,
    },
    USDC: {
      address: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
      decimals: 6,
    },
    USDTe: {
      address: '0xc7198437980c041c805A1EDcbA50c1Ce5db95118',
      decimals: 6,
    },
    USDT: {
      address: '0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7',
      decimals: 6,
      addAllowance: _allowancesFn,
      addBalance: balanceOfFn,
    },
    POPS: {
      address: '0x240248628B7B6850352764C5dFa50D1592A033A8',
      decimals: 18,
    },
    WAVAX: {
      address: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      decimals: 18,
      addAllowance: allowanceFn,
      addBalance: balanceOfFn,
    },
    sAVAX: {
      address: '0x2b2C81e08f1Af8835a78Bb2A90AE924ACE0eA4bE',
      decimals: 18,
    },
    WETHe: {
      address: '0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB',
      decimals: 18,
    },
    ETH: {
      address: '0xf20d962a6c8f70c731bd838a3a388D7d48fA6e15',
      decimals: 18,
    },
    WBTC: {
      address: '0x408D4cD0ADb7ceBd1F1A1C33A0Ba2098E1295bAB',
      decimals: 8,
    },
    WETH: {
      address: '0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB',
      decimals: 18,
    },
    TUSD: {
      address: '0x1c20e891bab6b1727d14da358fae2984ed9b59eb',
      decimals: 18,
    },
    oldFRAX: {
      address: '0xdc42728b0ea910349ed3c6e1c9dc06b5fb591f98',
      decimals: 18,
    },
    newFRAX: {
      address: '0xd24c2ad096400b6fbcd2ad8b24e7acbc21a1da64',
      decimals: 18,
    },
    DAIE: {
      address: '0xd586e7f844cea2f87f50152665bcbc2c279d8d70',
      decimals: 18,
    },
    PNG: {
      address: '0x60781c2586d68229fde47564546784ab3faca982',
      decimals: 18,
    },
    SHIBX: {
      address: '0x440aBbf18c54b2782A4917b80a1746d3A2c2Cce1',
      decimals: 18,
    },
    wBTC: {
      address: '0x50b7545627a5162F82A992c33b87aDc75187B218',
      decimals: 8,
    },
    renBTC: {
      address: '0xDBf31dF14B66535aF65AaC99C32e9eA844e14501',
      decimals: 8,
    },
    BTCb: {
      address: '0x152b9d0FdC40C096757F570A51E494bd4b943E50',
      decimals: 8,
    },
    ADAI: {
      address: '0x47AFa96Cdc9fAb46904A55a6ad4bf6660B53c38a',
      decimals: 18,
    },
    avWAVAX: {
      address: '0xDFE521292EcE2A4f44242efBcD66Bc594CA9714B',
      decimals: 18,
    },
    MIM: {
      address: '0x130966628846BFd36ff31a822705796e8cb8C18D',
      decimals: 18,
    },
    TSD: {
      address: '0x4fbf0429599460D327BD5F55625E30E4fC066095',
      decimals: 18,
    },
    avUSDT: {
      address: '0x532e6537fea298397212f09a61e03311686f548e',
      decimals: 6,
    },
    THO: {
      address: '0xAE4AA155D2987B454C29450ef4f862CF00907B61',
      decimals: 18,
    },
    AVAX: { address: ETHER_ADDRESS, decimals: 18 },
    aETH: {
      address: '0x3a3A65aAb0dd2A17E3F1947bA16138cd37d08c04',
      decimals: 18,
    },
    aUSDT: {
      address: '0x71fc860f7d3a592a4a98740e39db31d25db65ae8',
      decimals: 6,
    },
    YUSD: {
      address: '0x111111111111ed1D73f860F57b2798b683f2d325',
      decimals: 18,
    },
    H2O: {
      address: '0x026187BdbC6b751003517bcb30Ac7817D5B766f8',
      decimals: 18,
    },
    MONEY: {
      address: '0x0f577433Bf59560Ef2a79c124E9Ff99fCa258948',
      decimals: 18,
    },
    nETH: {
      address: '0x19E1ae0eE35c0404f835521146206595d37981ae',
      decimals: 18,
    },
    avWETH: {
      address: '0x53f7c5869a859F0AeC3D334ee8B4Cf01E3492f21',
      decimals: 18,
    },
    nUSD: {
      address: '0xCFc37A6AB183dd4aED08C204D1c2773c0b1BDf46',
      decimals: 18,
    },
    BETS: {
      address: '0x94025780a1ab58868d9b2dbbb775f44b32e8e6e5',
      decimals: 18,
    },
    HATCHY: {
      address: '0x502580fc390606b47fc3b741d6d49909383c28a9',
      decimals: 18,
    },
    AMPL: {
      address: '0x027dbcA046ca156De9622cD1e2D907d375e53aa7',
      decimals: 9,
    },
    stataUSDT: {
      address: '0x5525ee69bc1e354b356864187de486fab5ad67d7',
      decimals: 6,
    },
    aaveUSDT: {
      address: '0x6ab707aca953edaefbc4fd23ba73294241490620',
      decimals: 6,
    },
  },
  [Network.ARBITRUM]: {
    SEN: {
      address: '0x154388a4650D63acC823e06Ef9e47C1eDdD3cBb2',
      decimals: 18,
    },
    BAL: {
      address: '0x040d1edc9569d4bab2d15287dc5a4f10f56a56b8',
      decimals: 18,
    },
    DAI: {
      address: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
      decimals: 18,
    },
    ARB: {
      address: '0x912ce59144191c1204e64559fe8253a0e49e6548',
      decimals: 18,
    },
    WETH: {
      address: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
      decimals: 18,
      addBalance: _balancesFn,
      addAllowance: _allowancesFn,
    },
    ETH: { address: ETHER_ADDRESS, decimals: 18 },
    USDCe: {
      address: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
      decimals: 6,
    },
    USDC: {
      address: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
      decimals: 6,
      symbol: 'USDC',
    },
    crvUSD: {
      address: '0x498bf2b1e120fed3ad3d42ea2165e9b73f99c1e5',
      decimals: 18,
    },
    OHM: {
      address: '0xf0cb2dc0db5e6c66b9a70ac27b06b878da017028',
      decimals: 9,
    },
    RDNT: {
      address: '0x3082cc23568ea640225c2467653db90e9250aaa0',
      decimals: 18,
    },
    USDT: {
      address: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
      decimals: 6,
      addBalance: _balancesFn,
      addAllowance: _allowancesFn,
    },
    FRAX: {
      address: '0x17FC002b466eEc40DaE837Fc4bE5c67993ddBd6F',
      decimals: 18,
    },
    nUSD: {
      address: '0x2913E812Cf0dcCA30FB28E6Cac3d2DCFF4497688',
      decimals: 18,
    },
    nETH: {
      address: '0x3ea9B0ab55F34Fb188824Ee288CeaEfC63cf908e',
      decimals: 18,
    },
    EURS: {
      address: '0xd22a58f79e9481d1a88e00c343885a588b34b68b',
      decimals: 2,
    },
    AAVE: {
      address: '0xba5ddd1f9d7f570dc94a51479a000e3bce967196',
      decimals: 18,
    },
    MIM: {
      address: '0xFEa7a6a0B346362BF88A9e4A88416B77a57D6c2A',
      decimals: 18,
    },
    VST: {
      address: '0x64343594ab9b56e99087bfa6f2335db24c2d1f17',
      decimals: 18,
    },
    POPS: {
      address: '0xa0b20DecBc557E3f68E140eD5a0c69bc865F865A',
      decimals: 18,
    },
    ZYB: {
      address: '0x3B475F6f2f41853706afc9Fa6a6b8C5dF1a2724c',
      decimals: 18,
    },
    WBTC: {
      address: '0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f',
      decimals: 8,
    },
    LEX: {
      address: '0x6bB7A17AcC227fd1F6781D1EEDEAE01B42047eE0',
      decimals: 18,
    },
    EURA: {
      address: '0xfa5ed56a203466cbbc2430a43c66b9d8723528e7',
      decimals: 18,
      symbol: 'EURA',
    },
    stEUR: {
      address: '0x004626a008b1acdc4c74ab51644093b155e59a23',
      decimals: 18,
    },
    USDA: {
      address: '0x0000206329b97DB379d5E1Bf586BbDB969C63274',
      decimals: 18,
      symbol: 'USDA',
    },
    stUSD: {
      address: '0x0022228a2cc5E7eF0274A7Baa600d44da5aB5776',
      decimals: 18,
    },
    GRAIL: {
      address: '0x3d9907f9a368ad0a51be60f7da3b97cf940982d8',
      decimals: 18,
    },
    AURY: {
      address: '0x11bf4f05eb28b802ed3ab672594decb20ffe2313',
      decimals: 9,
    },
    wstETH: {
      address: '0x5979D7b546E38E414F7E9822514be443A4800529',
      decimals: 18,
    },
    RDPX: {
      address: '0x32eb7902d4134bf98a28b963d26de779af92a212',
      decimals: 18,
    },
    SDEX: {
      address: '0xabD587f2607542723b17f14d00d99b987C29b074',
      decimals: 18,
    },
    LINK: {
      address: '0xf97f4df75117a78c1a5a0dbb814af92458539fb4',
      decimals: 18,
    },
    DMT: {
      address: '0x8b0e6f19ee57089f7649a455d89d7bc6314d04e8',
      decimals: 18,
    },
    PENDLE: {
      address: '0x0c880f6761f1af8d9aa9c466984b80dab9a8c9e8',
      decimals: 18,
    },
    stataUSDT: {
      address: '0xb165a74407fe1e519d6bcbdec1ed3202b35a4140',
      decimals: 6,
    },
    aaveUSDT: {
      address: '0x6ab707aca953edaefbc4fd23ba73294241490620',
      decimals: 6,
    },
  },
  [Network.OPTIMISM]: {
    DAI: {
      address: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
      decimals: 18,
    },
    WETH: {
      address: '0x4200000000000000000000000000000000000006',
      decimals: 18,
    },
    ETH: { address: ETHER_ADDRESS, decimals: 18 },
    USDCe: {
      address: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
      decimals: 6,
    },
    USDC: {
      address: '0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85',
      decimals: 6,
    },
    USDT: {
      address: '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58',
      decimals: 6,
    },
    PSTAKE: {
      address: '0x023550adde4fa2f90d63a41d9282bee0294c04cd',
      decimals: 18,
    },
    GRAIN: {
      address: '0xfd389dc9533717239856190f42475d3f263a270d',
      decimals: 18,
    },
    tBTC: {
      address: '0x6c84a8f1c29108f47a79964b5fe888d4f4d0de40',
      decimals: 18,
    },
    GRAI: {
      address: '0x894134a25a5fac1c2c26f1d8fbf05111a3cb9487',
      decimals: 18,
    },
    LUSD: {
      address: '0xc40f949f8a4e094d1b49a23ea9241d289b7b2819',
      decimals: 18,
    },
    POPS: {
      address: '0x3D51a9fB5dCc87F7B237B04975559b920a9a56Ff',
      decimals: 18,
    },
    crvUSD: {
      address: '0xc52d7f23a2e460248db6ee192cb23dd12bddcbf6',
      decimals: 18,
    },
    OP: {
      address: '0x4200000000000000000000000000000000000042',
      decimals: 18,
    },
    sETH: {
      address: '0xE405de8F52ba7559f9df3C368500B6E6ae6Cee49',
      decimals: 18,
    },
    sUSD: {
      address: '0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9',
      decimals: 18,
    },
    wstETH: {
      address: '0x1f32b1c2345538c0c6f582fcb022739c4a194ebb',
      decimals: 18,
    },
    rETH: {
      address: '0x9bcef72be871e61ed4fbbc7630889bee758eb81d',
      decimals: 18,
    },
    MAI: {
      address: '0xdfa46478f9e5ea86d57387849598dbfb2e964b02',
      decimals: 18,
    },
    WBTC: {
      address: '0x68f180fcCe6836688e9084f035309E29Bf0A2095',
      decimals: 8,
    },
    EURA: {
      address: '0x9485aca5bbbe1667ad97c7fe7c4531a624c8b1ed',
      decimals: 18,
      symbol: 'EURA',
    },
    stEUR: {
      address: '0x004626a008b1acdc4c74ab51644093b155e59a23',
      decimals: 18,
    },
    USDA: {
      address: '0x0000206329b97DB379d5E1Bf586BbDB969C63274',
      decimals: 18,
      symbol: 'USDA',
    },
    stUSD: {
      address: '0x0022228a2cc5E7eF0274A7Baa600d44da5aB5776',
      decimals: 18,
    },
    frxETH: {
      address: '0x6806411765Af15Bddd26f8f544A34cC40cb9838B',
      decimals: 18,
    },
    stataUSDT: {
      address: '0x035c93db04e5aaea54e6cd0261c492a3e0638b37',
      decimals: 6,
    },
    aaveUSDT: {
      address: '0x6ab707aca953edaefbc4fd23ba73294241490620',
      decimals: 6,
    },
  },
  [Network.ZKEVM]: {
    ETH: {
      address: ETHER_ADDRESS,
      decimals: 18,
    },
    WETH: {
      address: '0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9',
      decimals: 18,
    },
    MATIC: {
      address: '0xa2036f0538221a77a3937f1379699f44945018d0',
      decimals: 18,
    },
    WBTC: {
      address: '0xea034fb02eb1808c2cc3adbc15f447b93cbe08e1',
      decimals: 8,
    },
    USDC: {
      address: '0xa8ce8aee21bc2a48a5ef670afcc9274c7bbbc035',
      decimals: 6,
    },
  },
  [Network.BASE]: {
    PRIME: {
      address: '0xfA980cEd6895AC314E7dE34Ef1bFAE90a5AdD21b',
      decimals: 18,
    },
    WETH: {
      address: '0x4200000000000000000000000000000000000006',
      decimals: 18,
    },
    MAV: {
      address: '0x64b88c73A5DfA78D1713fE1b4c69a22d7E0faAa7',
      decimals: 18,
    },
    crvUSD: {
      address: '0x417ac0e078398c154edfadd9ef675d30be60af93',
      decimals: 18,
    },
    USDC: {
      address: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
      symbol: 'USDC',
      decimals: 6,
    },
    USDM: {
      address: '0x59d9356e565ab3a36dd77763fc0d87feaf85508c',
      decimals: 18,
    },
    USDbC: {
      address: '0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA',
      decimals: 6,
    },
    DOG: {
      address: '0xAfb89a09D82FBDE58f18Ac6437B3fC81724e4dF6',
      decimals: 18,
    },
    cbETH: {
      address: '0x2ae3f1ec7f1f5012cfeab0185bfc7aa3cf0dec22',
      decimals: 18,
    },
    tBTC: {
      address: '0x236aa50979d5f3de3bd1eeb40e81137f22ab794b',
      decimals: 18,
    },
    DAI: {
      address: '0x50c5725949a6f0c72e6c4a641f24049a917db0cb',
      decimals: 18,
    },
    ALB: {
      address: '0x1dd2d631c92b1acdfcdd51a0f7145a50130050c4',
      decimals: 18,
    },
    BAL: {
      address: '0x4158734d47fc9692176b5085e0f52ee0da5d47f1',
      decimals: 18,
    },
    GOLD: {
      address: '0xbeFD5C25A59ef2C1316c5A4944931171F30Cd3E4',
      decimals: 18,
    },
    SDEX: {
      address: '0xFd4330b0312fdEEC6d4225075b82E00493FF2e3f',
      decimals: 18,
    },
    EURA: {
      address: '0xA61BeB4A3d02decb01039e378237032B351125B4',
      decimals: 18,
      symbol: 'EURA',
    },
    USDA: {
      address: '0x0000206329b97DB379d5E1Bf586BbDB969C63274',
      decimals: 18,
      symbol: 'USDA',
    },
    stUSD: {
      address: '0x0022228a2cc5E7eF0274A7Baa600d44da5aB5776',
      decimals: 18,
    },
    ETH: { address: ETHER_ADDRESS, decimals: 18 },
    AERO: {
      address: '0x940181a94A35A4569E4529A3CDfB74e38FD98631',
      decimals: 18,
    },
    stataUSDC: {
      address: '0x4ea71a20e655794051d1ee8b6e4a3269b13ccacc',
      decimals: 6,
    },
    aaveUSDC: {
      address: '0x4e65fe4dba92790696d040ac24aa414708f5c0ab',
      decimals: 6,
    },
  },
};

export const Holders: {
  [network: number]: { [tokenAddress: string]: Address };
} = {
  [Network.MAINNET]: {
    ETH: '0x0a4c79cE84202b03e95B7a692E5D728d83C44c76',
    USDC: '0x7713974908Be4BEd47172370115e8b1219F4A5f0',
    AMPL: '0x223592a191ECfC7FDC38a9256c3BD96E771539A9',
    WBTC: '0x6daB3bCbFb336b29d06B9C793AEF7eaA57888922',
    tBTCv2: '0x84eA3907b9206427F45c7b2614925a2B86D12611',
    sBTC: '0xA2e3475D13776C6E42ff37B47286827d959B2195',
    TUSD: '0x88369cB14F9893aEA737F61ad31Bc6d018af7985',
    aEthUSDC: '0x42EFD1E0DB4ADa762cc5092ECBD052dE7c6e72E2',
    MAV: '0x92582aa69BB6117903a01eDdfe6EFfDDe564A69f',
    BADGER: '0x34e2741a3f8483dbe5231f61c005110ff4b9f50a',
    STETH: '0x50b42514389F25E1f471C8F03f6f5954df0204b0',
    SUSHI: '0x8a108e4761386c94b8d2f98A5fFe13E472cFE76a',
    wstETH: '0x5fEC2f34D80ED82370F733043B6A536d7e9D7f8d',
    WETH: '0x6B44ba0a126a2A1a8aa6cD1AdeeD002e141Bcd44',
    USDT: '0xAf64555DDD61FcF7D094824dd9B4eBea165aFc5b',
    XAUT: '0xc4e161e8d8a4bc4ac762ab33a28bbac5474203d7',
    R: '0xBfe4c9D3235475C138a61f62e9e72FaD94A3303b',
    sDAI: '0x4C612E3B15b96Ff9A6faED838F8d07d479a8dD4c',
    CVX: '0x0aCA67Fa70B142A3b9bF2eD89A81B40ff85dACdC',
    MIM: '0xa046a8660e66d178ee07ec97c585eeb6aa18c26c',
    AnkETH: '0xF7260D4ADc48fEefd5a19a9Eb23f9747CeE15C92',
    DAI: '0xd1668fb5f690c59ab4b0cabad0f8c1617895052b',
    oldFRAX: '0x183d0dc5867c01bfb1dbbc41d6a9d3de6e044626',
    newFRAX: '0x183d0dc5867c01bfb1dbbc41d6a9d3de6e044626',
    FEI: '0x19c549357034d10db8d75ed812b45be1dd8a7218',
    BAL: '0x0659FB78b5139eE5bC9238b2C85944a112A7b591',
    OHM: '0x3D7FEAB5cfab1c7De8ab2b7D5B260E76fD88BC78',
    AURA: '0xBB19053E031D9B2B364351B21a8ed3568b21399b',
    WISE: '0x25c315e0758beeab30ee048a4e2080e7084b64b3',
    DDIM: '0x229cbd1955fee93ab6e7876c1b17f6d0b859e953',
    DODO: '0x3e19d726ed435afd3a42967551426b3a47c0f5b7',
    ADAI: '0x826c3064d4f5b9507152f5cb440ca9326e1ec8fa',
    AWETH: '0xa433105e7396070a5e1fdd7e2b2338f1bfa0de68',
    BUSD: '0xf977814e90da44bfa03b6295a0616a897441acec',
    INCH: '0x4ee7c0f5480eb1edd8902a5e8b991ed52992d5f5',
    mUSD: '0x3aD1D5CFCF9169Da73C23D85d5f2Bf53bC9d39dF',
    mBTC: '0x15A295e9BCFcF93a8721DCb9A19330fc59771271',
    renBTC: '0xAaE0633E15200bc9C50d45cD762477D268E126BD',
    tBTC: '0xC25099792E9349C7DD09759744ea681C7de2cb66',
    HBTC: '0x52885fF60Cd7Ae081e0665968C457DdACF888C90',
    GUSD: '0x550Def3DB74F583c7A1eDf2DFFE84a7398850D0c',
    LINK: '0x8d4169cCf3aD88EaFBB09580e7441D3eD2b4B922',
    ADAIv1: '0x3021026e4ff227571a5a563ad19ea657c7027e59',
    CETH: '0x712d0f306956a6a4b4f9319ad9b9de48c5345996',
    CDAI: '0xab4ce310054a11328685ece1043211b68ba5d082',
    CUSDC: '0xC2F61a6eEEC48d686901D325CDE9233b81c793F3',
    EURS: '0xC1056Adeb61a01964Ea265cA95EffB7016f9Ed78',
    EURT: '0x6914FC70fAC4caB20a8922E900C4BA57fEECf8E1',
    CRV: '0x7a16fF8270133F063aAb6C9977183D9e72835428',
    jEUR: '0x937Df4e3d6dB229A10ff0098ab3A1bCC40C33ea4',
    UST: '0xf16e9b0d03470827a95cdfd0cb8a8a3b46969b91',
    SAITAMA: '0x763d5d93f27615aac852b70549f5877b92193864',
    aETH: '0xc03c4476fbe25138bf724fa1b95551c6e6b8fd2c',
    aWETH: '0x3ddfa8ec3052539b6c9549f12cea2c295cff5296',
    aUSDT: '0x4aef720f7bbe98f916221bbc2fb5a15efe6d2cb8',
    BBAUSD: '0x4361b7425cff39b1be9bf12cee2ef32f89656cda',
    sETH: '0x274d9E726844AB52E351e8F1272e7fc3f58B7E5F',
    sUSD: '0xcb68110C43C97b6051FEd5e2Bacc2814aDaD1688',
    USDD: '0xf89d7b9c864f589bbf53a82105107622b35eaa40',
    alETH: '0x500a4f1280a0b63f47862d658b6c335cc939aaed',
    SHIBA: '0x73af3bcf944a6559933396c1577b257e2054d935',
    aEthWETH: '0xfEA3F5b06D41Cb1526b9cAf8be63c5b37C475f23',
    dUSDC: '0x2FC2F705110A7F46Ce85F701d7217EF1018f01A3',
    PSP: '0xE5E5440a1CE69C5cf67BFFA74d185e57c31b43E5',
    EUROC: '0x64AE5802620398143FC7113037769175F74825Ea',
    bC3M: '0x5f9F41497f9e11fd7D4c4B067413199682eE2CFF',
    bERNX: '0x5F7A4c11bde4f218f0025Ef444c369d838ffa2aD',
    bIB01: '0x5F7A4c11bde4f218f0025Ef444c369d838ffa2aD',
    steakUSDC: '0xC977d218Fde6A39c7aCE71C8243545c276B48931',
    EURA: '0xa116f421ff82a9704428259fd8cc63347127b777',
    stEUR: '0xdC7Aa225964267c7E0EfB35f4931426209E90312',
    USDA: '0x2686bC6A56D205010637CE1DF124b20Cb19E4054',
    stUSD: '0x4e83c0a323b68E3Bc7CC8a4E35326Fd0544A291E',
    crvUSD: '0xA920De414eA4Ab66b97dA1bFE9e6EcA7d4219635',
    GHO: '0x844Dc85EdD8492A56228D293cfEbb823EF3E10EC',
    wibBTC: '0xFbdCA68601f835b27790D98bbb8eC7f05FDEaA9B',
    MATIC: '0x7073783eee7e9b3e6e4ddac4d7f49dc46044dd9a',
    POL: '0x05A47D9f589a001C15E38D068dCc5DaE6D96a2eb',
    SDEX: '0xB0470cF15B22a6A32c49a7C20E3821B944A76058',
    frxETH: '0x9df2322bdAEC46627100C999E6dDdD27837fec6e',
    LUSD: '0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA',
    BNT: '0xf727e20e081aAE428E7c6bE07b156bB21ab587a7',
    USDe: '0x74e6c48e667d698a4cf90665b6960a5bae39e603',
    eETH: '0x0f1DfeF1a40557d279d0de6E49aB306891A638b8',
    stataUSDT: '0x6803364AceD5181877abC11E865FB27cB654a426',
    aaveUSDT: '0x32c98a981Fe7C333Bd4e8E7630E8e0CF5ce20987',
    weETH: '0x267ed5f71EE47D3E45Bb1569Aa37889a2d10f91e',
  },
  [Network.POLYGON]: {
    jGBP: '0x02aa0B826c7BA6386DdBE04C0a8715A1c0A16B24',
    MATIC: '0xfCbB9e5BB354B6F9fd40362Cee043F510dd3028D',
    DAI: '0x98F911D496Cf46bf9FF9CdD7039Cf579B26F01B9',
    WETH: '0x62ac55b745f9b08f1a81dcbbe630277095cf4be1',
    WMATIC: '0x0AFF6665bB45bF349489B20E225A6c5D78E2280F',
    AMWMATIC: '0x975779102B2A82384f872EE759801DB5204CE331',
    USDC: '0xf89d7b9c864f589bbf53a82105107622b35eaa40',
    BAL: '0xF1CFf6380D9A15dB33Eed0309541E254fC7dE695',
    AAVE: '0x256e063f7fb60a3004D13e1D09e7A9D200A5C5bA',
    PSP: '0xa902c6a26bcaC4c62Eb8667E3Ef9368f78421dB5',
    POPS: '0x2693b57ee51f4e2a26dfb339a911fa8731061f49',
    MUST: '0x9f2a409848fb9b7bd058b24a23e8dbf1e166a109',
    AMDAI: '0xFA0DCe8280FCDf369a4cbFc1830d3302789307a6',
    mUSD: '0x5084f622cbDf1E22E473d66d97916524745B9b6e',
    USDT: '0x2D55eccD5F50D325ee3CE192322911f87113bCd3',
    WBTC: '0xdc9232e2df177d7a12fdff6ecbab114e2231198d',
    AMWETH: '0x6f1c28c40b5fed4fb546f85959ae2f7c16365cad',
    KNC: '0x41Af7fd16dFC29bdA8D8aAA4CeFfC0E8046992eC',
    jEUR: '0x807B465fC3f72aF3AAfda74480CA7E4E55964cd3',
    aUSDT: '0x027ffd3c119567e85998f4e6b9c3d83d5702660c',
    aPolUSDT: '0x941da3d6759147736456cee36647213183079337',
    aPolWMATIC: '0xfB3C01F90B4629DBD4Fd5310E995Ef3FE2e7AbeE',
    RADIO: '0x60531b9c3645546d864604ee0fc5b7d6adc81cc2',
    HANZO: '0x8a151b6ec99c7b90b342ab401d511b480309b220',
    RVLT: '0x815f87ca3db2b9491115a7769aeacb140361c5a9',
    stMATIC: '0x7C8963BddC17095aDbc9387Cc6cdcCaA798feA52',
    axlUSDC: '0x9298F93ee0393a823C242D80F1a4aDf4c8a3Feef',
    deUSDC: '0x94d5ead1f80cf0b4d3480ab59dff16d47c93e9fe',
    amUSDT: '0x832b11846a27b3ba25d68ae80c39fab155d18c49',
    amUSDC: '0x6e7f19cd23049c7118e14470e2bf85d2e26ee0ae',
    MAI: '0x9a8cf02f3e56c664ce75e395d0e4f3dc3dafe138',
    SDEX: '0xB0470cF15B22a6A32c49a7C20E3821B944A76058',
    CRV: '0x2151578e1fEc29361bB0481312Ea6b935014D636',
    SUSHI: '0x1605CE87dD176b38a17d30e8926370ffD5268bf6',
    EURA: '0x9A760aa1Fe631fD9aC0Aee0965736121c7c132cc',
    stEUR: '0xA9DdD91249DFdd450E81E1c56Ab60E1A62651701',
    USDA: '0x741383AbD73891b40822A069f14d6fc5b5685020',
    stUSD: '0xA9DdD91249DFdd450E81E1c56Ab60E1A62651701',
    stataUSDCn: '0xFAB1420c84fF5E058B8AD12604D24247e268f362',
    aaveUSDCn: '0xEBA9C3C1B41A846431F970aCA5Eee10f55969B76',
    crvUSD: '0xB498de532C68dc3cd93D54187E082E5D789a9e47',
    USDCe: '0xA67EFB69A4f58F568aAB1b9d51110102985835b0',
    USDCn: '0x4B6f17856215eab57c29ebfA18B0a0F74A3627bb',
  },
  [Network.FANTOM]: {
    DAI: '0x370f4b2dcf75c94d8d4450b493661a9c6170d0b5',
    FTM: '0x431e81E5dfB5A24541b5Ff8762bDEF3f32F96354',
    WFTM: '0xB7D0fB518a5b7bf8dc7ea19A715E8FD8BD983e27',
    USDC: '0xf53feaeb035361c046e5669745695e450ebb4028',
    USDCe: '0x305fa2FB5AF034D490A9C9be8bcd9b01902480BF',
    FUSDT: '0x9ade1c17d25246c405604344f89E8F23F8c1c632',
    POPS: '0x4b78b52e7de4d8b7d367297cb8a87c1875a9d591',
    aFanUSDT: '0x8EBc96fF91A30059E447bFC7C0a7394f8A5793E6',
    aFanWFTM: '0x935AD0fBea9572bB24138F23A69e314f0BDbdDbE',
    MIM: '0xbcab7d083cf6a01e0dda9ed7f8a02b47d125e682',
    FRAX: '0x4423ac71f53ca92e2f2be5917a9c2468e7412f4a',
    nETH: '0x16b658270ac50c0063940ed287c401b3df7ccf70',
    WETH: '0x7b7b957c284c2c227c980d6e2f804311947b84d0',
    SPIRIT: '0x0d0707963952f2fba59dd06f2b425ace40b492fe',
    wBOMB: '0x28aa4f9ffe21365473b64c161b566c3cdead0108',
    TOR: '0x70de4b5ed310fd93da3c0bae824fb99cb4d44dd8',
    BOO: '0xf778f4d7a14a8cb73d5261f9c61970ef4e7d7842',
    ETH: '0xf48883940b4056801de30f12b934dcea90133ee6',
    GUSDC: '0x894d774a293f8aa3d23d67815d4cadb5319c1094',
    GDAI: '0x0e2ed73f9c1409e2b36fe6c46e60d4557b7c2ac0',
    EQUAL: '0x8b187ea19c93091a4d6b426b71871648182b5fac',
    FVM: '0x07BB65fAaC502d4996532F834A1B7ba5dC32Ff96',
    lzUSDC: '0x06F1C4A56357bF3971C79063f2B58E58c547BC0B',
    axlUSDC: '0xccf932cd565c21d2e516c8ff3a4f244eea27e09a',
    SOLID: '0xdF6A50d16320D9eAf0D91e0039fcE89c700F95F1',
    scrvUSDC_e: '0xb8c1dAb69724da9d3225F14bfD76Ae97bB92BFda',
    scrvUSDC_p: '0x74796478d7755a77807fADd2389A18DF1baf9e7c',
  },
  [Network.BSC]: {
    DAI: '0xf68a4b64162906eff0ff6ae34e2bb1cd42fef62d',
    WBNB: '0x59d779bed4db1e734d3fda3172d45bc3063ecd69',
    BUSD: '0x0D0707963952f2fBA59dD06f2b425ace40b492Fe',
    POPS: '0x4b78b52e7de4d8b7d367297cb8a87c1875a9d591',
    BNB: '0xf68a4b64162906eff0ff6ae34e2bb1cd42fef62d',
    USDT: '0xf89d7b9c864f589bbf53a82105107622b35eaa40',
    ETH: '0xefdca55e4bce6c1d535cb2d0687b5567eef2ae83',
    USDC: '0x554b52bf57b387fd09d6644368c5a8aacaaf5ae0',
    RADIO: '0x75b3efed620e2d6750d88263cd4d7a27b0d7d3c5',
    bBTC: '0x72a53cdbbcc1b9efa39c834a540550e23463aacb',
    anyBTC: '0x4ffef8e8a75c20ab0ddf96c50d2457277d27923c',
    nUSD: '0x28ec0b36f0819ecb5005cab836f4ed5a2eca4d13',
    axlUSD: '0xc03fbeda9069b22a120ae6a09349a0b5eea5570a',
    FRAX: '0xEB4576fE753DAB07635c0Bb6c8f0A355e1Db5d31',
    frxETH: '0xf324adC872005197A6f7DAE214d3b63aa0C3625F',
    USDFI: '0x2E00D722e091836B39Db3e4dcE6eE51c90c5B221',
    SDEX: '0xB0470cF15B22a6A32c49a7C20E3821B944A76058',
    BNBx: '0xFF4606bd3884554CDbDabd9B6e25E2faD4f6fc54',
    EURA: '0x4A5362ef534FFB27510E4E4C9A215BB5436377C2',
    USDA: '0x230c1f68aBE6033Cba3Fe0D2C0D7097e9923C3bC',
    stUSD: '0x0022228a2cc5E7eF0274A7Baa600d44da5aB5776',
    stataUSDT: '', // no holders yet
    aaveUSDT: '0x5DE3c5BE52D7aDbdC3aEFe2eA061A2ECE0C7d766',
  },
  [Network.AVALANCHE]: {
    LINKe: '0x9efa0A617C0552F1558c95993aA8b8A68b3e709C',
    AVAX: '0xD6216fC19DB775Df9774a6E33526131dA7D19a2c',
    avWAVAX: '0xc5ed2333f8a2C351fCA35E5EBAdb2A82F5d254C3',
    WAVAX: '0x5CfCd7E6D055Ba4f7B998914336254aDE3F69f26',
    sAVAX: '0xC73DF1e68FC203F6E4b6270240D6f82A850e8D38',
    BETS: '0x8cc2284c90d05578633418f9cde104f402375a65',
    HATCHY: '0x14ec295ec8def851ec6e2959df872dd24e422631',
    USDCe: '0x3a2434c698f8d79af1f5a9e43013157ca8b11a66',
    USDC: '0x0d0707963952f2fba59dd06f2b425ace40b492fe',
    USDTe: '0x84d34f4f83a87596cd3fb6887cff8f17bf5a7b83',
    WETHe: '0x9bdB521a97E95177BF252C253E256A60C3e14447',
    POPS: '0x5268c2331658cb0b2858cfa9db27d8f22f5434bc',
    ETH: '0x9852e84b5AA485683d8AeE7B0332e42442763b75',
    DAIE: '0xED2a7edd7413021d440b09D654f3b87712abAB66',
    TUSD: '0x5Db946411F08f15300f23D9bde4A407B07D56C03',
    PNG: '0x348b11CF986e8E1CdA10c4A7E375aA252b47fc55',
    SHIBX: '0xfE5ADf65BE1a46b83EF3d352A8F9258A039f3050',
    wBTC: '0xbB2BD754A45f400A01158A8b3C89DE085D58ABF1',
    renBTC: '0xb8D1D22609D10078Db36915fc4610F8674b44319',
    ADAI: '0xc5ed2333f8a2C351fCA35E5EBAdb2A82F5d254C3',
    MIM: '0x64cb3f5aada07d831b8db6c6d9c715c53c251ef3',
    TSD: '0x691A89db352B72dDb249bFe16503494eC0D920A4',
    THO: '0xc40d16c47394a506d451475c8a7c46c1175c1da1',
    aAvaUSDT: '0x50B1Ba98Cf117c9682048D56628B294ebbAA4ec2',
    USDT: '0x0d0707963952f2fba59dd06f2b425ace40b492fe',
    aAvaWAVAX: '0x1B18Df70863636AEe4BfBAb6F7C70ceBCA9bA404',
    oldFRAX: '0x4e3376018add04ebe4c46bf6f924ddec8c67aa7b',
    newFRAX: '0x4e3376018add04ebe4c46bf6f924ddec8c67aa7b',
    nETH: '0xcf2ef00e75558512ae735679ea5df62ad2056786',
    avWETH: '0x92d78e32b990d10aeca0875dc5585f1a6f958179',
    YUSD: '0x6c1a5ef2acde1fd2fc68def440d2c1eb35bae24a',
    BTCb: '0x2446bEb3905CfFbd2c5eB18F1f9c2996B05257c4',
    AMPL: '0xfcaA5ea7F8eb0631BcA72C345025C0A5a6D93f0E',
    PHAR: '0x654296D56532f62B7d91d335791d3c364a9385b5',
    stataUSDT: '', // no holders yet
    aaveUSDT: '0xB2d3ad6e99D2A043EF77e3812461Ad2D4Ae3da8B',
  },
  [Network.ARBITRUM]: {
    SEN: '0x76d39045d856caf9bfae12ba611ca4a94449a4f1',
    RDPX: '0x115b818593c00da4f9d1d8f5ce7d7f88cce48bee',
    ARB: '0xb65edba80a3d81903ecd499c8eb9cf0e19096bd0',
    ETH: '0xfa0a32e5c33b6123122b6b68099001d9371d14e9',
    DAI: '0x2d070ed1321871841245d8ee5b84bd2712644322',
    WETH: '0x3368e17064c9ba5d6f1f93c4c678bea00cc78555',
    BAL: '0x7b7b957c284c2c227c980d6e2f804311947b84d0',
    USDCe: '0x62383739d68dd0f844103db8dfb05a7eded5bbe6',
    USDC: '0xb38e8c17e38363af6ebdcb3dae12e0243582891d',
    OHM: '0xebce5f29ff5ca9aa330ebdf7ec6b5f474bff271e',
    USDT: '0xf977814e90da44bfa03b6295a0616a897441acec',
    POPS: '0x4b78b52e7de4d8b7d367297cb8a87c1875a9d591',
    FRAX: '0x59bf0545fca0e5ad48e13da269facd2e8c886ba4',
    nUSD: '0x9dd329f5411466d9e0c488ff72519ca9fef0cb40',
    nETH: '0xa067668661c84476afcdc6fa5d758c4c01c34352',
    AAVE: '0x8D2876aD4D2A994C529F19D846CA541015dc3f05',
    aArbAAVE: '0x439901eCaB06F75B14bC25fD60d53bB3A3b9e277',
    EURS: '0x251aeE4A9eB1d8251485D1A9b3bE68975B39EC33',
    aArbEURS: '0xD2BC982A2035dB0E1Be7c2C1a9f87E31794C653e',
    MIM: '0xf46bb6dda9709c49efb918201d97f6474eac5aea',
    VST: '0x59bf0545fca0e5ad48e13da269facd2e8c886ba4',
    aArbUSDC: '0x048BF2F5908e95976CeAD0E47D805b3803E286e2',
    ZYB: '0x3ec0eddcd1e25025077327886a78133589082fb2',
    WBTC: '0xd9d611c6943585bc0e18e51034af8fa28778f7da',
    RDNT: '0x62383739d68dd0f844103db8dfb05a7eded5bbe6',
    SDEX: '0xb0470cf15b22a6a32c49a7c20e3821b944a76058',
    LINK: '0x7f1fa204bb700853d36994da19f830b6ad18455c',
    DMT: '0x40414f138eb2ef938e6c3629897ef99d4464d4e8',
    PENDLE: '0x5bdf85216ec1e38d6458c870992a69e38e03f7ef',
    wstETH: '0x27edc7700f1820cb38ec3bbb84c542945f21b5a1',
    EURA: '0x6dd7b830896b56812aa667bdd14b71c8b3252f8e',
    stEUR: '0xE588611e7A2392507879E3be80531654b85C16aA',
    USDA: '0xa86ff337db9107b54862d30d1a598f8be847b05e',
    stUSD: '0xa9ddd91249dfdd450e81e1c56ab60e1a62651701',
    stataUSDT: '0x403D37c861fb54b8F37a3A1870aBce335954840B',
    aaveUSDT: '0xAfa788fab589fe61C23DF76905558f4734444D67',
    crvUSD: '0x9755e99bdb99495d3d31d953785d993c6df8552e',
  },
  [Network.OPTIMISM]: {
    ETH: '0xF6D4E5a7c5215F91f59a95065190CCa24bf64554',
    DAI: '0x1337bedc9d22ecbe766df105c9623922a27963ec',
    WETH: '0x86bb63148d17d445ed5398ef26aa05bf76dd5b59',
    POPS: '0x3cbd9044aaabef08ce93a68448e093cff405ad76',
    USDCe: '0xdecc0c09c3b5f6e92ef4184125d5648a66e35298',
    USDC: '0x8aF3827a41c26C7F32C81E93bb66e837e0210D5c',
    USDT: '0xf977814e90da44bfa03b6295a0616a897441acec',
    OP: '0xEBb8EA128BbdFf9a1780A4902A9380022371d466',
    aOptWETH: '0x7B7D80C40415F744864f051B806b466e2fbB8E68',
    aOptUSDC: '0x8c0Fcf914E90fF5d7f2D02c1576BF4245FaD2B7F',
    sBTC: '0xbbb33d2e7bd7ddc722e53da9ca8ee97df41cfabf',
    sETH: '0xce3850927d0e631b6082f9d45a6391a3794c51eb',
    sUSD: '0xa5f7a39e55d7878bc5bd754ee5d6bd7a7662355b',
    wstETH: '0x63f6D9E7d3953106bCaf98832BD9C88A54AfCc9D',
    rETH: '0x4c2e69e58b14de9afedfb94319519ce34e087283',
    WBTC: '0xb9c8f0d3254007ee4b98970b94544e473cd610ec',
    frxETH: '0x4d4edf8291d169f975b99914b6ab3326abb45938',
    EURA: '0xC18dAC166eDa9538933258d21A272C1775C19c73',
    stEUR: '0xA9DdD91249DFdd450E81E1c56Ab60E1A62651701',
    USDA: '0xC18dAC166eDa9538933258d21A272C1775C19c73',
    stUSD: '0xC98b0729695A25152B8D5b6B95709070605A7F60',
    crvUSD: '0x528e7aF33043Da06ca3DD407626a71DbBD3173D6',
    LUSD: '0xf0a9abb11958a071e168f2ee5bcbacf1abbde9cf',
    GRAI: '0x92b051204816DC4fbA7AC1A68a2cf319A9a387CB',
    stataUSDT: '0xd55263b84685Ced7e10a77607C7fFD763D495B6e',
    aaveUSDT: '0x1Fd458C52fEb7Bb35097ebd9566DB6C269341FDD',
    tBTC: '0xf7b4531e52211CC44379102F719cad29411dB053',
    PSTAKE: '0xc45398444B83183b2018e0224B3D332b42D492Af',
  },
  [Network.ZKEVM]: {
    ETH: '0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9',
    WETH: '0xc44b0378e400a9958219ec8f294c23b9976e3c5d',
    MATIC: '0x8f2a1450c040b3c19efe9676165d8f30d8280019',
    WBTC: '0x99b31498b0a1dae01fc3433e3cb60f095340935c',
    USDC: '0x99b31498b0a1dae01fc3433e3cb60f095340935c',
  },
  [Network.BASE]: {
    WETH: '0x4bb6b2efe7036020ba6f02a05602546c9f25bf28',
    PRIME: '0xe3879b7359695f802d6FD56Bb76fD82C362Dafd6',
    ETH: '0xd34ea7278e6bd48defe656bbe263aef11101469c',
    MAV: '0xf977814e90da44bfa03b6295a0616a897441acec',
    USDC: '0xaac391f166f33cdaefaa4afa6616a3bea66b694d',
    USDbC: '0x4bb6b2efe7036020ba6f02a05602546c9f25bf28',
    DAI: '0x20f03e26968b179025f65c1f4afadfd3959c8d03',
    BAL: '0x854b004700885a61107b458f11ecc169a019b764',
    GOLD: '0x1374c25b3710758c326ee0c70ec48b595d5ccf8c',
    SDEX: '0xa5d378c05192e3f1f365d6298921879c4d51c5a3',
    EURA: '0x5b5614b9fffab7c751799eb12d5cb9165c8c40ad',
    stEUR: '0xA9DdD91249DFdd450E81E1c56Ab60E1A62651701',
    USDA: '0x7FE4b2632f5AE6d930677D662AF26Bc0a06672b3',
    stUSD: '0x8deeffb6047b8ee91b09334eb2a4ca120f43f596',
    ALB: '0x365c6d588e8611125de3bea5b9280c304fa54113',
    AERO: '0x807877258b55bfefabdd469da1c72731c5070839',
    tBTC: '0x9f1920d0cbb63ed03376a1e09fd2851d601234c8',
    DOG: '0xbe3ab8a87730684ef1e476064c2e43c3e982f8e8',
    stataUSDC: '0x88Cac91ADDE2208039A227B373C2A692C0700547',
    aaveUSDC: '0x5DE3c5BE52D7aDbdC3aEFe2eA061A2ECE0C7d766',
    USDM: '0x492EC4591c55962C5739A8dC98F0B401897Db038',
    crvUSD: '0xBbAbDB1385deA5285113581A7024d6DC04131101',
    cbETH: '0x50e011dD1e2b4906F1534623cD134B30422bb11E',
  },
};

export const SmartTokens = Object.keys(Tokens).reduce((acc, _network) => {
  const network = parseInt(_network, 10);
  acc[+network] = Object.keys(Tokens[network]).reduce((_acc, tokenName) => {
    const token: SmartTokenParams = Tokens[network][tokenName]!;

    if (token.addAllowance && token.addBalance) {
      _acc[tokenName] = new SmartToken(token);
    }

    return _acc;
  }, {} as Record<string, SmartToken>);
  return acc;
}, {} as Record<number, Record<string, SmartToken>>);

export const NativeTokenSymbols: { [network: number]: string } = {
  [Network.MAINNET]: 'ETH',
  [Network.POLYGON]: 'MATIC',
  [Network.BSC]: 'BNB',
  [Network.AVALANCHE]: 'AVAX',
  [Network.FANTOM]: 'FTM',
  [Network.ARBITRUM]: 'ETH',
  [Network.OPTIMISM]: 'ETH',
  [Network.BASE]: 'ETH',
};

export const WrappedNativeTokenSymbols: { [network: number]: string } = {
  [Network.MAINNET]: 'WETH',
  [Network.POLYGON]: 'WMATIC',
  [Network.BSC]: 'WBNB',
  [Network.AVALANCHE]: 'WAVAX',
  [Network.FANTOM]: 'WFTM',
  [Network.ARBITRUM]: 'WETH',
  [Network.OPTIMISM]: 'WETH',
  [Network.BASE]: 'WETH',
};
