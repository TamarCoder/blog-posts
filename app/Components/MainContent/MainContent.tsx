import { Hero } from "./Hero/Hero";
import styles from "./MainContent.module.scss";
import React from "react";
import { PostsContent } from "./PostsContent/PostsContent";

export const MainContent: React.FC = () => {
  return (
    <main className={styles.mainContent}>
      <Hero />
      <PostsContent/>
    </main>
  );
};
