import styles from "./Categories.module.scss";

type CategoryProps = {
  CategoryTitle: string;
};

export const Categories = ({ CategoryTitle }: CategoryProps) => {
  const categories = [
    { id: 1, name: "Category" },
    { id: 2, name: "Business" },
    { id: 3, name: "Lifestyle" },
    { id: 4, name: "Travel" },
    { id: 5, name: "Education" },
  ];

  return (
    <div className={styles.categories}>
      <div className={styles.postsHeading}>
        <h1 className={styles.title}>{CategoryTitle}</h1>
      </div>
      {categories.map((category) => (
        <button key={category.id} className={styles.category}>
          {category.name}
        </button>
      ))}
    </div>
  );
};
