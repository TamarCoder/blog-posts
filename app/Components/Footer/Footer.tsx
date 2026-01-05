import Link from "next/dist/client/link";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>

      <div className={styles.footerBoxs}>
        <div className={styles.footerBox}>
          <div className={styles.BoxAbout}>
            <h3 className={styles.aboutTitle}>About ThinkBlog</h3>
            <p>
              ThinkBlog is a platform where you can share your thoughts,
              ideas, and stories with the world. Join our community of writers
              and readers today!
            </p>
          </div>
        </div>
        <div className={styles.footerBox}>
          <h3 className={styles.aboutTitle}>Quick Links</h3>
          <ul className={styles.footerLinks}>
            <li className={styles.Item}>
              <Link href="/" className={styles.linkItem}>Home</Link>
            </li>
            <li className={styles.Item}>
              <Link href="/about" className={styles.linkItem}>About Us</Link>
            </li>
            <li className={styles.Item}>
              <Link href="/categories" className={styles.linkItem}>Categories</Link>
            </li>
            <li className={styles.Item}>
              <Link href="/blog" className={styles.linkItem}>Blog</Link>
            </li>
            <li className={styles.Item}>
              <Link href="/contact" className={styles.linkItem}>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerBox}> 
          <h3 className={styles.aboutTitle}>Contact Us</h3>
          <p>Email: contact@thinkblog.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 123 Main St, Anytown, USA</p>
        </div>
        <div className={styles.footerBox}>
          <h3 className={styles.aboutTitle}>Follow Us</h3>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.linkItem}>Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.linkItem}>Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.linkItem}>Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.linkItem}>LinkedIn</a>
          </div>
        </div>
      </div>


      <div className={styles.footerCopyright}></div>
    </footer>
  );
};
