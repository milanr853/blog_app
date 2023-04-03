import { GlobalStyles } from '@/assets/GlobalStyles'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Header from '@/components/Header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <GlobalStyles />
      <Header title='Blogs' />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
