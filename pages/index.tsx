import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Navbar from '../components/Navbar'
import homeImg from "../assets/homeImg.png"

export default function Home() {
  return (
    <>
      <Head>
        <title>Shelley Chen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div>
        <h2>Hi, I'm Shelley</h2>
        <p>A developer who thrives in collaborative and creative spaces. Constantly growing.</p>
        {/* <img src="homeImg" alt="me" width={150} height={150}/> */}
      </div>
    </>
  )
}
