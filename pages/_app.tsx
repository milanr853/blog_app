import { GlobalStyles, ViewArea } from '@/assets/GlobalStyles'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Header from '@/components/Header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <GlobalStyles />
      <Header title='BLOGS' />
      <ViewArea>
        <Component {...pageProps} />
      </ViewArea>
    </ChakraProvider>
  )
}
