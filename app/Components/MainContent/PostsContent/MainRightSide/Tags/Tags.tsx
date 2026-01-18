import styles from "./Tags.module.scss";

export const Tags = () => {
  const tags = [
    { id: 1, name: "Technology" },
    { id: 2, name: "Design" },
    { id: 3, name: "Travel" },
    { id: 4, name: "Food" },
    { id: 5, name: "Art" },
    { id: 6, name: "Coding" },
    { id: 7, name: "Lifestyle" },
    { id: 8, name: "Music" },
    { id: 9, name: "Nature" },
  ];

  return (
    <div className={styles.tags}>
      <div className={styles.postsHeading}>
        <h1 className={styles.title}>Tags</h1>
      </div>
      <div className={styles.tagCloud}>
        {tags.map((tag) => (
          <button key={tag.id} className={styles.tag}>
            #{tag.name}
          </button>
        ))}
      </div>
    </div>
  );
};
