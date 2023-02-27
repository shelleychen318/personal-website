import Link from "next/link";
import { useRouter } from "next/router";
import { BiHome, BiGridAlt, BiPaperPlane } from "react-icons/bi";
import styles from "styles/Navbar.module.scss";

export default function Navbar() {
  const router = useRouter();

  const links = [
    {
      id: 1,
      link: "Home",
      icon: <BiHome size={25} />,
      href: "/",
    },
    {
      id: 2,
      link: "Projects",
      icon: <BiGridAlt size={25} />,
      href: "/projects",
    },
    {
      id: 3,
      link: "About",
      icon: <BiPaperPlane size={25} />,
      href: "/about",
    },
  ];

  return (
    <header className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        SC
      </Link>
      <nav className={styles.links}>
        {links.map(({ id, link, icon, href }) => (
          <Link key={id} href={href} onClick={() => router.push(href)}>
            <span className={styles.linksText}>{link}</span>
            <span className={styles.icons}>{icon}</span>
          </Link>
        ))}
      </nav>
    </header>
  );
}
