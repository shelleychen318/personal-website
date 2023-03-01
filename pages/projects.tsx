import Head from "next/head";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import blog from "../public/assets/blog.jpg";
import aritzia from "../public/assets/aritziaAppImg.png"
import styles from "../styles/Projects.module.scss";

export default function Projects() {
  const projects = [
    {
      id: 1,
      image: blog,
      title: "Blog Website",
      description:
        "A personal blog website where I share my thoughts on various topics. Built using React, Next.js, and GraphQL.",
      link: "https://github.com/shelleychen318/javascript-blog",
      demo: "https://javascript-blog.vercel.app/",
    },
    {
      id: 2,
      image: aritzia,
      title: "Movie Details Website",
      description:
        "Web app that displays details of any movie. Built using Next.js and IMDb API.",
      link: "https://github.com/shelleychen318/movie-details-app",
      demo: "https://movie-details-app.vercel.app",
    },
    {
      id: 3,
      image: blog,
      title: "Expense Tracker App",
      description:
        "Mobile app that displays your history of expenses as well as a chart that tracks the current month's spending. Built using SwiftUI for iOS.",
      link: "https://github.com/shelleychen318/expense-tracker",
      demo: "https://github.com/shelleychen318/expense-tracker#demo",
    },
  ];

  return (
    <>
      <Head>
        <title>Projects | Shelley Chen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className={styles.container}>
        <h2>Projects</h2>
        {projects.map(({ id, image, title, description, link }) => (
          <Link key={id} href={link}>
            <div className={styles.projectCard}>
              <div className={styles.imageContainer}>
                <Image src={image} alt={title} fill className={styles.image} />
              </div>
              <div className={styles.info}>
                <h3>{title}</h3>
                <p>{description}</p>
                {/* <Link href={github} /> */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
