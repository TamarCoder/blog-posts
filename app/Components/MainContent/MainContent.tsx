import { Hero } from "./Hero/Hero";
import styles from "./MainContent.module.scss";
import React from "react";

export const MainContent: React.FC = () => {
  return (
    <main className={styles.mainContent}>
      <Hero />
    </main>
  );
};
