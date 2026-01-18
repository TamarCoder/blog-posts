import styles from "./MainRightSide.module.scss";
import { SearchBar } from "./Search/Search";

export const MainRightSide = () => {
  return (
    <div className={styles.mainRightSide}>
      <SearchBar />
      <div className={styles.categories}>
        <div className={styles.heading}>Categories</div>
        <div className={styles.category}>ტექნოლოგია</div>
        <div className={styles.category}>ბიზნესი</div>
        <div className={styles.category}>ლაიფსთაილი</div>
        <div className={styles.category}>მოგზაურობა</div>
        <div className={styles.category}>განათლება</div>
      </div>
      <div className={styles.lastPosts}>
        <div className={styles.heading}>last Posts</div>
        <div className={styles.postBox}>last Posts 1</div>
        <div className={styles.postBox}>last Posts 2</div>
        <div className={styles.postBox}>last Posts 3</div>
        <div className={styles.postBox}>last Posts 4</div>
      </div>
      <div className={styles.tags}>
        <div className={styles.heading}>Tags</div>
        <div className={styles.postBox}>Tags 1</div>
        <div className={styles.postBox}>Tags 2</div>
        <div className={styles.postBox}>Tags 3</div>
        <div className={styles.postBox}>Tags 4</div>
      </div>
    </div>
  );
};
