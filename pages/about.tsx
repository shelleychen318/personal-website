import Head from "next/head";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Shelley Chen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div>about page</div>
    </>
  );
}
