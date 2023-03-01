import Head from "next/head";
import Image from "next/image";
import blog from "../public/assets/blog.jpg";
import Navbar from "../components/Navbar";
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
        <Image src={blog} alt="me" className={styles.image} />
        <br />
        <br />
        <div className={styles.text}>
          <p>
            My name is Shelley Chen. I am a first year Systems Design
            Engineering student at the Unviersity of Waterloo. I am passionate
            about technology, design, and innovation and am looking to gain more
            experience in full stack development and UI/UX.
          </p>
          <br />
          <p>
            Currently, I am working at Health and Rehab Research Inc. as a
            Software Engineering Research Assistant where I work with machine
            learning algorithms to develop products that contribute to the
            health care of patients.
          </p>
          <br />
          <p>
            In my free time, I enjoy travelling, playing badminton, and trying
            out new restaurants. I am also an avid Netflix watcher when I have
            enough time to do that!
          </p>
        </div>
      </div>
    </>
  );
}
