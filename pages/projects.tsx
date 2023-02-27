import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/Projects.module.scss"

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Shelley Chen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div>project page</div>
    </>
  );
}