import Link from "next/dist/client/link";
import styles from "./Footer.module.scss";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerBoxs}>
        <div className={styles.footerBox}>
          <div className={styles.BoxAbout}>
            <h3 className={styles.aboutTitle}>About ThinkBlog</h3>
            <p className={styles.aboutText}>
              ThinkBlog is a platform where you can share your thoughts, ideas,
              and stories with the world. Join our community of writers and
              readers today!
            </p>
          </div>
        </div>
        <div className={styles.footerBox}>
          <h3 className={styles.aboutTitle}>Quick Links</h3>

          <ul className={styles.footerLinks}>
            <li className={styles.Item}>
              <Link href="/" className={styles.linkItem}>
                Home
              </Link>
            </li>
            <li className={styles.Item}>
              <Link href="/about" className={styles.linkItem}>
                About Us
              </Link>
            </li>
            <li className={styles.Item}>
              <Link href="/categories" className={styles.linkItem}>
                Categories
              </Link>
            </li>
            <li className={styles.Item}>
              <Link href="/blog" className={styles.linkItem}>
                Blog
              </Link>
            </li>
            <li className={styles.Item}>
              <Link href="/contact" className={styles.linkItem}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.footerBox}>
          <h3 className={styles.aboutTitle}>Contact Us</h3>
          <p className={styles.contactText}>Email: contact@thinkblog.com</p>
          <p className={styles.contactText}>Phone: +1 (123) 456-7890</p>
          <p className={styles.contactText}>
            Address: 123 Main St, Anytown, USA
          </p>
        </div>

        <div className={styles.footerBox}>
          <h3 className={styles.aboutTitle}>Follow Us</h3>
          <div className={styles.socialIcons}>
            <Link href="https://facebook.com" className={styles.socialIcon} aria-label="Facebook">
              <Facebook size={24} />
            </Link>
            <Link href="https://twitter.com" className={styles.socialIcon} aria-label="Twitter">
              <Twitter size={24} />
            </Link>
            <Link href="https://instagram.com" className={styles.socialIcon} aria-label="Instagram">
              <Instagram size={24} />
            </Link>
            <Link href="https://linkedin.com" className={styles.socialIcon} aria-label="LinkedIn">
              <Linkedin size={24} />
            </Link>
            <Link href="https://youtube.com" className={styles.socialIcon} aria-label="YouTube">
              <Youtube size={24} />
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.footerCopyright}>
        &copy; {new Date().getFullYear()} ThinkBlog. All rights reserved.
      </div>
    </footer>
  );
};
