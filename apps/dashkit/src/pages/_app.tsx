import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { createClient, configureChains, mainnet, WagmiConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const { provider, webSocketProvider } = configureChains(
  [mainnet],
  [publicProvider()],
)
 
const client = createClient({
  provider,
  webSocketProvider,
})


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
  </ApolloProvider>
  )
}
