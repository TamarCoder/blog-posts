import Post from "./Post/Post";
import styles from "./PostsContent.module.scss";
import React from "react";
import { PostsHeading } from "./PostsHeading/PostsHeading";
import { MainRightSide } from "./MainRightSide/MainRightSide";
import { posts } from "./PostDate";
import Pagination from "../../ReusableComponents/Pagination/Pagination";

export const PostsContent: React.FC = () => {
  return (
    <div className={styles.postsContent}>
      <div className={styles.postTopSide}>
        <div className={styles.mainLeftSide}>
          <PostsHeading title="Latest Posts" />

          <div className={styles.Posts}>
            {posts.map((post, index) => (
              <Post
                key={index}
                postImage={post.postImage}
                categories={post.categories}
                postTitle={post.postTitle}
                description={post.description}
                postData={post.postData}
              />
            ))}
          </div>
        </div>
        <MainRightSide />
      </div>

       <Pagination/>
    </div>
  );
};
