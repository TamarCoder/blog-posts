"use client";
import { SquareMenu } from "lucide-react";
import { Button } from "../ReusableComponents/Button/Button";
import styles from "./Header.module.scss";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import UserButtons from "./User/userButtons";
import React from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    console.log("Menu button clicked");
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <section className={styles.headerContent}>
        <Logo />

        <div className={`${styles.headerRight} ${isMenuOpen ? styles.menuOpen : styles.menuClosed}`}>
          <Navigation />
          <UserButtons />
        </div>

        <Button
          variant="outline"
          size="md"
          className={styles.burgerMenu}
          onClick={toggleMenu}
        >
          <SquareMenu size={20} />
        </Button>
      </section>
    </header>
  );
}
