import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { EthereumClient, modalConnectors, walletConnectProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { arbitrum, avalanche, baseGoerli, goerli, polygonMumbai, mainnet, optimism, polygon, zkSyncTestnet, Chain } from 'wagmi/chains'
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";


// 0. Configure custom chains like Scroll
const scroll: Chain = {
  id: 534353,
  name: 'Scroll',
  network: 'scroll',
  nativeCurrency: {
    name: 'ETH',
    symbol: 'ETH',
    decimals: 18
  },
  rpcUrls: {
    default: { http: ['https://alpha-rpc.scroll.io/l2']},
    public: { http: ['https://alpha-rpc.scroll.io/l2']}
  },
  blockExplorers: {
    default: {url: 'https://blockscout.scroll.io', name: 'Scroll Block Explorer'},
  }
}

// 1. Get projectID at https://cloud.walletconnect.com
if (!process.env.NEXT_PUBLIC_PROJECT_ID) {
  throw new Error('You need to provide NEXT_PUBLIC_PROJECT_ID env variable')
}
const projectId = process.env?.NEXT_PUBLIC_PROJECT_ID ?? ""

// 2. Configure wagmi client
const chains = [mainnet, polygon, polygonMumbai, avalanche, arbitrum, goerli, optimism, zkSyncTestnet, baseGoerli, scroll]

const { provider } = configureChains(chains, [walletConnectProvider({ projectId })])

const client = createClient({
  autoConnect: true,
  connectors: modalConnectors({ version: '2', appName: 'myRoom', chains, projectId }),
  provider
})

// 3. Configure modal ethereum client
const ethereumClient = new EthereumClient(client, chains)

const apolloClient = new ApolloClient({
    uri: 'https://api.lens.dev',
    cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
  <ApolloProvider client={apolloClient}>
  <WagmiConfig client={client}>
    <Component {...pageProps} />
  </WagmiConfig>
  <Web3Modal themeMode="light" themeColor="orange" themeBackground="themeColor" projectId={projectId} ethereumClient={ethereumClient} />
  </ApolloProvider>
  )
}
