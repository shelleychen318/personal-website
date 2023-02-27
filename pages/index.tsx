import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Navbar from '../components/Navbar'
import homeImg from "../public/assets/homeImg.png"

export default function Home() {
  return (
    <>
      <Head>
        <title>Shelley Chen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className={styles.container}>
        <h1 className={styles.title}>Hi there! I'm Shelley.</h1>
        <h4>
          A developer who thrives in collaborative and creative spaces.
          Constantly growing.
        </h4>
        <Image src={homeImg} alt="me" className={styles.image} />
      </div>
    </>
  );
}
