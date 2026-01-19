import { filterStore } from "../../../../../store/categroyFilter";
import styles from "./Categories.module.scss";

type CategoryProps = {
  CategoryTitle: string;
};

export const Categories = ({ CategoryTitle }: CategoryProps) => {
  const categories = filterStore((state) => state.categories);
  const activeCategory = filterStore((state) => state.activeCategory);
  const setActiveCategory = filterStore((state) => state.setActiveCategory);

  

  return (
    <div className={styles.categories}>
      <div className={styles.postsHeading}>
        <h1 className={styles.title}>{CategoryTitle}</h1>
      </div>
      {categories.map((category) => (
        <button
          key={category}
          className={`${styles.category} ${
            activeCategory === category ? styles.active : ""
          }`}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
 