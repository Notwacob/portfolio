import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./NotFoundPage.module.css";

export const NotFoundPage = () => {
  return (
    <>
      <div className={styles.hitTheFloor}>404</div>
      <p style={{ textAlign: "center" }}>
        <Link to="/">Go to Home </Link>
      </p>
    </>
  );
};