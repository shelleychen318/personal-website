import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BiHome, BiArchive, BiPaperPlane } from "react-icons/bi";
import styles from "styles/Navbar.module.scss";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", updatePosition);

    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};

export default function Navbar() {
  const router = useRouter();
  const currentLink = router.pathname;

  const links = [
    {
      id: 1,
      link: "home",
      icon: <BiHome size={25} />,
      href: "/",
    },
    {
      id: 2,
      link: "projects",
      icon: <BiArchive size={25} />,
      href: "/projects",
    },
    {
      id: 3,
      link: "about",
      icon: <BiPaperPlane size={25} />,
      href: "/about",
    },
  ];

  const scrollPosition = useScrollPosition();

  return (
    <header className={`${styles.navbar} ${scrollPosition > 0 ? styles.scrolledNav : ""} `}>
      <Link href="/" className={styles.logo}>
        SHELLEYCHEN
      </Link>
      <nav className={styles.links}>
        {links.map(({ id, link, icon, href }) => (
          <Link
            key={id}
            href={href}
            onClick={() => router.push(href)}
            className={currentLink === href ? styles.activeLink : ""}
          >
            <span className={styles.linksText}>{link}</span>
            <span className={styles.icons}>{icon}</span>
          </Link>
        ))}
      </nav>
    </header>
  );
}
