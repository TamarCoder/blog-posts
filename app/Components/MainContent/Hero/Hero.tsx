import styles from "./Hero.module.scss";
import React from "react";

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Where Ideas Grow</h1>
        <p className={styles.subtitle}>
          A Space Where Ideas Are Born, Nurtured, and Transformed Into Reality.
        </p>
      </div>
    </section>
  );
};
