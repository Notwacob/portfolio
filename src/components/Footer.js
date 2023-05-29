import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <h1 className={styles.title}>Jacob Wilson</h1>
      <p>2360 Esplanade Drive, Virginia Beach, Virginia, USA </p>
      <p>+757 434 1748 | wilson.a.jacob@gmail.com</p>
      <div className={styles.socials}>
        <a href="https://twitter.com/notwacob" target="_blank" rel="noreferrer"><img
          src="/assets/socials/twitter.png"
          alt="social-icon"
          className={styles.icon}
        /></a>
        <a href="https://www.linkedin.com/in/jacob-a-wilson/" target="_blank" rel="noreferrer"><img
          src="/assets/socials/linkedin.png"
          alt="social-icon"
          className={styles.icon}
        /></a>
        <a href="https://github.com/Notwacob" target="_blank" rel="noreferrer"><img
          src="/assets/socials/github.png"
          alt="social-icon"
          className={styles.icon}
        /></a>
      </div>
    </footer>
  );
};