import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import me from "../public/assets/pic.png";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shelley Chen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <h1>Shelley Chen 🦆</h1>
        <Image src={me} alt="me" className={styles.image} />
        <div className={styles.text}>
          <p>
            Hello world! My name is Shelley and I'm a 2nd year Systems Design
            Engineering student at the Unviersity of Waterloo. Previously, I
            worked at{" "}
            <Link href="https://miovision.com/" target="_blank">
              Miovision
            </Link>{" "}
            as a Software Developer.
          </p>
          <br />
          <p>
            What excites me about software development is being able to merge my
            creativity with problem-solving skills to create innovative
            solutions that address real problems. I enjoy learning new
            technologies and crafting engaging products with intuitive UI.
          </p>
          <br />
          <p>
            In my free time, I enjoy travelling, going on hikes, and trying out
            new restaurants!
          </p>
          <br />
          <br />
          <br />

          <Footer />
        </div>
      </div>
    </>
  );
}
