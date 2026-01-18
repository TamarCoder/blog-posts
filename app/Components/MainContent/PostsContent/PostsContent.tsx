import Post from "./Post/Post";
import styles from "./PostsContent.module.scss";
import React from "react";
import { PostsHeading } from "./PostsHeading/PostsHeading";
import { MainRightSide } from "./MainRightSide/MainRightSide";

export const PostsContent: React.FC = () => {
  const posts = [
    {
      postImage: "/images/postCard-1.jpg",
      categories: "Technologies",
      postTitle: "Post Title",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, nobis. Expedita repellat laudantium hic officiis ullam ipsam, voluptate et nostrum.",
      postData: {
        data: "2022-01-01",
        author: "Author",
        comments: "Comments",
      },
    },
  ];

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

      <div className={styles.pagination}></div>
    </div>
  );
};
