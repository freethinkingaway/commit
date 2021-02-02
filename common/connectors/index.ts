import { Web3Provider } from "@ethersproject/providers";
import { InjectedConnector } from "@web3-react/injected-connector";
// import { WalletLinkConnector } from '@web3-react/walletlink-connector'

// import { FortmaticConnector } from './Fortmatic'
import { NetworkConnector } from "./NetworkConnector";

const NETWORK_URL = process.env.NEXT_PUBLIC_NETWORK_URL;
// const FORMATIC_KEY = process.env.NEXT_PUBLIC_FORTMATIC_KEY

export const NETWORK_CHAIN_ID: number = parseInt(
  process.env.NEXT_PUBLIC_CHAIN_ID ?? "1"
);

if (typeof NETWORK_URL === "undefined") {
  throw new Error(
    `NEXT_PUBLIC_NETWORK_URL must be a defined environment variable`
  );
}

export const network = new NetworkConnector({
  urls: { [NETWORK_CHAIN_ID]: NETWORK_URL },
});

let networkLibrary: Web3Provider | undefined;
export function getNetworkLibrary(): Web3Provider {
  return (networkLibrary =
    networkLibrary ?? new Web3Provider(network.provider as any));
}

export const injected = new InjectedConnector({
  supportedChainIds: [1, 5, 42],
});

// // mainnet only
// export const fortmatic = new FortmaticConnector({
//   apiKey: FORMATIC_KEY ?? '',
//   chainId: 1
// })

// // mainnet only
// export const walletlink = new WalletLinkConnector({
//   url: NETWORK_URL,
//   appName: 'Commit'
// })
