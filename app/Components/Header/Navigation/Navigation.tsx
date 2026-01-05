import Link from "next/dist/client/link";
import styles from "./Navigation.module.scss";
import NavItem from "./NavItem/NavItem";

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigationList}>
        <Link href="/">
          <NavItem title="Home" />
        </Link>
        <Link href="/Blog">
          <NavItem title="Blog" />
        </Link>
        <Link href="/Category">
          <NavItem title="Category" />
        </Link>
        <Link href="/About">
          <NavItem title="About" />
        </Link>
        <Link href="/Contact">
          <NavItem title="Contact" />
        </Link>
      </ul>
    </nav>
  );
}
