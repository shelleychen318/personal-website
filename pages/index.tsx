import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Shelley Chen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div>home page</div>
    </>
  )
}
