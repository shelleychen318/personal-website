import Link from "next/link";
import styles from "styles/Navbar.module.scss";

export default function Navbar() {
  const links = [
    {
      id: 1,
      link: "Home",
      href: "/",
    },
    {
      id: 2,
      link: "About",
      href: "/about",
    },
    {
      id: 3,
      link: "Projects",
      href: "/projects",
    },
  ];

  return (
    <header className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        SC
      </Link>
      <nav className={styles.links}>
        {links.map(({ id, link, href }) => (
          <Link key={id} href={href}>
            {link}
          </Link>
        ))}
      </nav>
    </header>
  );
}
