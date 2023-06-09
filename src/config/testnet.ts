import {ChainId} from '@layerzerolabs/lz-sdk';
import {Token} from '@layerzerolabs/x-trader-joe-bridge';

const tokens = [
  new Token(ChainId.FUJI, '0xaB1a4d4f1D656d2450692D237fdD6C7f9146e814', 18, 'BUSD'),
  new Token(ChainId.BSC_TESTNET, '0xaB1a4d4f1D656d2450692D237fdD6C7f9146e814', 18, 'BUSD'),
];

const proxy = [
  {
    chainId: ChainId.FUJI,
    address: '0x4Fb062cA2F036576C78e5D91B94Cb60FbAaFEe80',
  },
];

export const testnet = {tokens, proxy};
