import ProjectCard from "../components/ProjectCard";
import styles from "styles/Projects.module.scss";

const PROJECTS = [
  {
    id: 1,
    name: "SYDE 2027 Class Profile",
    languages: ["Next.js", "React", "Chart.js", "MongoDB"],
    description:
      "Full-stack web app that showcases dynamic data on the Systems Design Engineering 2027 cohort.",
    link: "https://github.com/shelleychen318/syde27-class-profile",
    pic: "/assets/class_profile.png",
  },
  {
    id: 2,
    name: "Marillac Place",
    languages: [
      "React",
      "Typescript",
      "Express.js",
      "GraphQL",
      "PostgreSQL",
      "Docker",
    ],
    description:
      "(UW Blueprint) Task managment platform for Marillac Place, a non-profit organization dedicated to supporting mothers experiencing homelessness in the Waterloo Region.",
    link: "https://github.com/uwblueprint/marillac-place",
    pic: "/assets/marillac_place.png",
  },
];

export default function Projects() {
  return (
    <div className={styles.container}>
      <p className={styles.header}>from concept to code - my projects</p>
      <div className={styles.projectsList}>
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
