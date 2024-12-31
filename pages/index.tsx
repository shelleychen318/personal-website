import Head from "next/head";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import styles from "styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shelley Chen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
}
