import styles from "./Projects.module.css";

import { projects } from "../content/projects";

export const Projects = () => {
  return (
    <section className={styles.wrapper}>
      {projects.map((project, index) => {
        return (
          <div className={styles.card} key={index}>
            <div className={styles.info}>
              <img className={styles.image} src={project.image} alt="cover" />
            </div>

            <div className={styles.info}>
              <h2 className={styles.title}>{project.title}</h2>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.btns}>
                {project.project_link !== "" ? (
                  <a href={project.project_link} target="_blank" className={styles.button} rel="noreferrer">Project Link</a>
                ) : null}
                {project.code_link !== "" ? (
                  <a href={project.code_link} target="_blank" className={styles.button} rel="noreferrer">Code Link</a>
                ) : null}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};