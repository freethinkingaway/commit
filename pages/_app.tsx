import { AppProps } from "next/app";
import { createWeb3ReactRoot, Web3ReactProvider } from "@web3-react/core";
import Web3ReactManager from "../components/Web3ReactManager";
import { NETWORK_CONTEXT } from "../common/constants";
import { getWeb3Library } from "../utils";
import "../styles/globals.css";

const Web3ProviderNetwork = createWeb3ReactRoot(NETWORK_CONTEXT);

if (typeof window !== "undefined" && !!window.ethereum) {
  window.ethereum.autoRefreshOnNetworkChange = false;
}

function App({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getWeb3Library}>
      <Web3ProviderNetwork getLibrary={getWeb3Library}>
        <Web3ReactManager>
          <Component {...pageProps} />
        </Web3ReactManager>
      </Web3ProviderNetwork>
    </Web3ReactProvider>
  );
}

export default App;
