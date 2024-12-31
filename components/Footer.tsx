import styles from "styles/Footer.module.scss";
import Link from "next/link";
import { FiLinkedin, FiMail } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";

const LINKS = [
  {
    id: 1,
    name: "Github",
    link: "https://github.com/shelleychen318",
    icon: <AiFillGithub size={25} />,
  },
  {
    id: 2,
    name: "Linkedin",
    link: "https://www.linkedin.com/in/shelleychenn/",
    icon: <FiLinkedin size={25} />,
  },
  {
    id: 3,
    name: "Email",
    link: "mailto:s39chen@uwaterloo.ca",
    icon: <FiMail size={25} />,
  },
];

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.links}>
          {LINKS.map(({ id, link, icon }) => (
            <Link key={id} href={link} target="_blank">
              <span className={styles.icon}>{icon}</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
