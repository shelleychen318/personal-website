import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import classProfile from "../public/assets/classProfile.png";
import coursify from "../public/assets/coursify.png";
import aritzia from "../public/assets/aritziaApp.png";
import movie from "../public/assets/movieDetailsApp.png";
import expense from "../public/assets/expenseTrackerApp.png";
import styles from "../styles/Projects.module.scss";

export default function Projects() {
  const projects = [
    {
      id: 1,
      image: classProfile,
      title: "SYDE '27 Class Profile",
      description:
        "The official class profile for the Systems Design Engineering 2027 cohort! Built using Next.js and MongoDB.",
      link: "https://www.syde27classprofile.ca",
    },
    {
      id: 2,
      image: coursify,
      title: "Coursify",
      description:
        "A full-stack web app that keeps track of the courses you've completed in university so far. Built using the MERN stack.",
      link: "https://github.com/shelleychen318/coursify",
    },
    {
      id: 3,
      image: aritzia,
      title: "Aritzia App",
      description:
        "Mobile shopping app prototype for Aritzia. Built using SwiftUI for iOS.",
      link: "https://github.com/shelleychen318/aritzia-app",
    },
    {
      id: 4,
      image: movie,
      title: "Movie Details App",
      description:
        "Web application that displays details of any movie. Built using Next.js and IMDb API and styled using Tailwind CSS.",
      link: "https://movie-details-app.vercel.app/",
    },
    {
      id: 5,
      image: expense,
      title: "Expense Tracker App",
      description:
        "Mobile app that displays your history of expenses as well as a chart that tracks the current month's spending. Built using SwiftUI for iOS.",
      link: "https://github.com/shelleychen318/expense-tracker",
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
          <Link key={id} href={link} target="_blank">
            <div className={styles.projectCard}>
              <div className={styles.imageContainer}>
                <Image src={image} alt={title} className={styles.image} />
              </div>
              <div className={styles.info}>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Footer />
    </>
  );
}
