import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import me from "../public/assets/aboutMeImg.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/About.module.scss";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Shelley Chen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className={styles.container}>
        <h2>About</h2>
        <Image src={me} alt="me" className={styles.image} />
        <br />
        <br />
        <div className={styles.text}>
          <p>
            Hi, I'm Shelley! I am a first year Systems Design Engineering
            student at the Unviersity of Waterloo. I'm passionate about
            technology and design, and am looking to gain more experience in
            full stack development.
          </p>
          <br />
          <p>
            What excites me about development is getting to turn my wildest
            ideas into reality through the power of writing code. I enjoy
            learning new technologies and crafting engaging products with
            intuitive UI. The nitty gritty details of my work are available on{" "}
            <Link href="https://github.com/shelleychen318" target="_blank">
              Github
            </Link>
            .
          </p>
          <br />
          <p>
            In my free time, I enjoy travelling, playing badminton, and trying
            out new restaurants!
          </p>
          <br />
          <p>
            Looking to get to know me better? Reach out to me on{" "}
            <Link href="https://linkedin.com/in/shelleychenn" target="_blank">
              LinkedIn
            </Link>
            .
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
