import { Connectors } from 'web3-react';
const {
  MetaMaskConnector,
  // WalletConnectConnector,
  NetworkOnlyConnector,
} = Connectors;

const INFURA_API_KEY = process.env.REACT_APP_INFURA_API_KEY || 'e99b01ab413f41e1975e2189dbe507ae';

const metaMask = new MetaMaskConnector();

// const walletConnect = new WalletConnectConnector({
//   bridge: 'https://bridge.walletconnect.org',
//   supportedNetworkURLs: { 1: 'https://mainnet.infura.io/v3/...' },
//   defaultNetwork: 1,
// });

const infura = new NetworkOnlyConnector({
  providerURL: `https://mainnet.infura.io/v3/${INFURA_API_KEY}`,
});

const ganache = new NetworkOnlyConnector({
  providerURL: 'http://127.0.0.1:8545',
});

export const connectors = {
  metaMask,
  infura,
  ganache,
  //  walletConnect,
};