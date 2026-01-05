import { MainContent } from "./Components/MainContent/MainContent";
import styles from "./page.module.scss";

export default function Home() {
  return <div className={styles.container}>
     <MainContent/>
  </div>;
}
