import Image from "next/image";
import me from "../public/assets/shelley.png";
import styles from "../styles/Header.module.scss";

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.text}>
        <h1>Hi, I'm Shelley!</h1>
        <p>
          I'm an aspiring software engineer, currently studying Systems Design
          Engineering at the University of Waterloo.
        </p>
      </div>
      <div className={styles.image}>
        <Image src={me} alt="Shelley Chen" />
      </div>
    </header>
  );
}
