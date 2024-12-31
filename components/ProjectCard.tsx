import styles from "styles/ProjectCard.module.scss";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";

interface Project {
  id: number;
  name: string;
  languages: string[];
  description: string;
  link: string;
  pic: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={project.pic} alt={project.name} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.projectName}>
          <p>{project.name}</p>
          <Link
            href={project.link}
            target="_blank"
            className={styles.githubLink}
          >
            <AiFillGithub size={20} />
          </Link>
        </div>
        <p className={styles.languages}>{project.languages.join(", ")}</p>
        <p className={styles.description}>{project.description}</p>
      </div>
    </div>
  );
}
