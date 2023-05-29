import styles from "./Contacts.module.css";

export const Contacts = () => {
  return (
    <form
      className={styles.wrapper}
      target="_blank"
      action="https://formsubmit.co/6ef4b69d09757e72454e5efa10db020d"
      method="POST"
    >
      <div className={styles.inputs}>
        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder="Your name"
          required
        />
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="Your email"
          required
        />
      </div>
      <div className={styles.textareas}>
        <textarea
          className={styles.textarea}
          type="text"
          name="message"
          placeholder="Your message"
          required
        />
        <button className={styles.send} type="submit">
          <img className={styles.icon} src="/assets/actions/send.png" alt="" />
        </button>
      </div>
    </form>
  );
};