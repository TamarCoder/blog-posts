import styles from "./PostsContent.module.scss";
import React from "react";

export const PostsContent: React.FC = () => {
  return (
    <div className={styles.postsContent}>
      <div className={styles.postTopSide}>
        <div className={styles.mainLeftSide}>
          <div className={styles.heading}></div>
          <div className={styles.Posts}>
            <div className={styles.post}></div>
            <div className={styles.post}></div>
            <div className={styles.post}></div>
            <div className={styles.post}></div>
            <div className={styles.post}></div>
            <div className={styles.post}></div>
          </div>
        </div>
        <div className={styles.mainRightSide}>
          <div className={styles.search}>
            <div className={styles.heading}>Search </div>
            <div className={styles.input}>input</div>
            <button className={styles.button}>Search</button>
          </div>
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
      </div>

      <div className={styles.pagination}></div>
    </div>
  );
};
