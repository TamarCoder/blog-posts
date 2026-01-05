import styles from "./Logo.module.scss";
import Image from "next/image";

export default function Logo() {
  return (
    <div className={styles.logoContainer}>
      <Image
        src="/images/Logo.svg"
        alt="Logo"
        className={styles.logoImage}
        width={45}
        height={45}
      />
      <p className={styles.logoText}>ThinkBlog</p>
    </div>
  );
}
