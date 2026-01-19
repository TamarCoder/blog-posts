import styles from "./MainRightSide.module.scss";
import { SearchBar } from "../../../ReusableComponents/Search/Search";
import { Categories } from "./Categories/Categories";
import { LastPosts } from "./LastPosts/LastPosts";
import { Tags } from "./Tags/Tags";

export const MainRightSide = () => {
  return (
    <div className={styles.mainRightSide}>
      <SearchBar />
      <Categories CategoryTitle="Categories"/>
      <LastPosts />
      <Tags />
    </div>
  );
};
