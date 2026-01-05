"use client";

import Link from "next/dist/client/link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.scss";
import NavItem from "./NavItem/NavItem";

export default function Navigation() {
  const pathname = usePathname();

  const menuItems = {
    home: { title: "Home", href: "/" },
    blog: { title: "Blog", href: "/Blog" },
    category: { title: "Category", href: "/Category" },
    about: { title: "About", href: "/About" },
    contact: { title: "Contact", href: "/Contact" },
  };

  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigationList}>
        {Object.values(menuItems).map((item, index) => (
          <Link key={index} href={item.href} passHref>
            <NavItem
              title={item.title}
              className={pathname === item.href ? "active" : ""}
            />
          </Link>
        ))}
      </ul>
    </nav>
  );
}
