"use client";
import { useState } from "react";
import styles from "./Post.module.scss";
import Image from "next/image";

type PostProps = {
  postImage: string;
  categories: string;
  postTitle: string;
  description: string;
  postData: {
    data: string;
    author: string;
    comments: string;
  };
};
export default function Post({
  postImage,
  categories,
  postTitle,
  description,
  postData,
}: PostProps) {
  const [isExpanded, setIsExpanded] = useState(false);
 

  return (
        <div  className={styles.post}>
          <div className={styles.postImage}>
            <Image
              src={postImage}
              alt="postImage"
              width={403}
              height={200}
              className={styles.Image}
            />
          </div>
          <div className={styles.categories}>
            <span className={styles.spanCategories}>{categories}</span>
          </div>
          <div className={styles.postTitle}>
            <span className={styles.spanPostTitle}>{postTitle}</span>
          </div>
          <div className={styles.description}>
            <span
              onClick={() => setIsExpanded(!isExpanded)}
              className={styles.spanDescription}
            >
              {isExpanded ? description : description.slice(0, 100) + "....."}
            </span>
            <button
              className={styles.seeMoreBtn}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "See Less" : "See More"}
            </button>
          </div>
          <div className={styles.postDates}>
            <div className={styles.postData}>
              <span className={styles.spanPostData}>{postData.data}</span>
            </div>
            <div className={styles.postData}>
              <span className={styles.spanPostData}>{postData.author}</span>
            </div>
            <div className={styles.postData}>
              <span className={styles.spanPostData}>{postData.comments}</span>
            </div>
          </div>
        </div>
      
  );
}
