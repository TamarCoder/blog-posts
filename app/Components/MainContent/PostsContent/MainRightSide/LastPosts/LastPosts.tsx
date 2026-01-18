import { isLastPosts } from "./lastPosts";
import styles from "./LastPosts.module.scss";

export const LastPosts = () => {
  const lastPosts =  isLastPosts

  return (
    <div className={styles.lastPosts}>
      <div className={styles.postsHeading}>
        <h1 className={styles.title}>Last Posts</h1>
      </div>

      <div className={styles.list}>
        {lastPosts.map((post) => (
          <div key={post.id} className={styles.postBox}>
            <div className={styles.postImageWrapper}>
              <img src={post.image} alt={post.name} className={styles.image} />
            </div>
            <div className={styles.postContent}>
              <div className={styles.postTitle}>{post.name}</div>
              <div className={styles.postDate}>{post.date}</div>
            </div>      
          </div>
        ))}
      </div>
    </div>
  );
};
