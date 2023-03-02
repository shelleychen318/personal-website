import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { BiRocket } from "react-icons/bi";
import Navbar from "../components/Navbar";
import duck from "../public/assets/duck.png";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shelley Chen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className={styles.container}>
        <div className={styles.textContainer}>
          <div className={styles.text}>
            <h1>Hi there! I'm Shelley.</h1>
            <h4>
              A developer who thrives in collaborative and creative spaces.
              Constantly growing.
            </h4>
            <Link
              href="/projects"
              className={`${styles.link} ${styles.bounce}`}
            >
              <h4>View some of my work </h4>
              <BiRocket size={25} className={styles.icon} />
            </Link>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={duck} alt="duck" width="350" height="350" />
        </div>
      </div>
    </>
  );
}
