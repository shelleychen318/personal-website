import Link from "next/link";
import styles from "../styles/Body.module.scss";

export default function Body() {
  return (
    <div className={styles.container}>
      <p>At the moment, I'm...</p>
      <ul>
        <li>
          working at{" "}
          <Link
            href="https://www.thescore.com"
            target="_blank"
            className={styles.link}
          >
            theScore
          </Link>{" "}
          as a Software Developer Intern in Toronto
        </li>
      </ul>
      <br></br>

      <p>Previously, I...</p>
      <ul>
        <li>
          built scalable backend systems for the financial ledger at{" "}
          <Link
            href="https://www.wealthsimple.com"
            target="_blank"
            className={styles.link}
          >
            Wealthsimple
          </Link>
        </li>
        <li>
          shipped features for IoT traffic-monitoring devices at{" "}
          <Link
            href="https://www.miovision.com"
            target="_blank"
            className={styles.link}
          >
            Miovision
          </Link>
        </li>
        <li>
          worked with a team of students to build a task management platform
          with{" "}
          <Link
            href="https://uwblueprint.org/"
            target="_blank"
            className={styles.link}
          >
            UW Blueprint
          </Link>
        </li>
      </ul>

      <br></br>

      <p>In my free time, you can find me...</p>
      <ul>
        <li>taking a pilates class to build strength and balance</li>
        <li>
          travelling to explore vibrant cities and immerse in diverse cultures
        </li>
        <li>going on a hike to soak up fresh air and scenic views</li>
      </ul>
    </div>
  );
}
