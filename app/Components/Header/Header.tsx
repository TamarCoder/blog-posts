import styles from "./Header.module.scss";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import UserButtons from "./User/userButtons";

export default function Header() {
  return (
    <header className={styles.header}>
      <section className={styles.headerContent}>
        <Logo />
        <div className={styles.headerRight}>
          <Navigation />
          <UserButtons />
        </div>
      </section>
    </header>
  );
}
