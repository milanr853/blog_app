import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import ListViewComponet from '@/components/ListViewComponet'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <ListViewComponet />
    </>
  )
}
