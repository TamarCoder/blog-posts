import styles from "./PostsHeading.module.scss";

interface Props {
    title: string;
}

export const PostsHeading = ({ title }: Props) => {
    return (
        <div className={styles.postsHeading}>
            <h1 className={styles.title}>{title}</h1>
        </div>
    );
};