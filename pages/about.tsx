import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/About.module.scss"

export default function About() {
  return (
    <>
      <Head>
        <title>About | Shelley Chen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className={styles.title}>about page</div>
    </>
  );
}
