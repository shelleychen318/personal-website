import Link from "next/link";
import { useRouter } from "next/router";
import styles from "styles/Navbar.module.scss";

export default function Navbar() {
  const router = useRouter();

  const isHomePage = router.pathname === "/";
  const isProjectsPage = router.pathname === "/projects";

  return (
    <nav
      className={`${styles.container} ${isProjectsPage ? styles.centered : ""}`}
    >
      <ul className={styles.links}>
        {isHomePage ? (
          <>
            <li>
              <Link href="/projects">projects</Link>
            </li>
            <li>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                resume
              </a>
            </li>
          </>
        ) : (
          <li>
            <Link href="/">// return home</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
