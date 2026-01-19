"use client";
import Post from "./Post/Post";
import styles from "./PostsContent.module.scss";
import React, { useState, useMemo, useEffect } from "react";
import { PostsHeading } from "./PostsHeading/PostsHeading";
import { MainRightSide } from "./MainRightSide/MainRightSide";
import { posts } from "./PostDate";
import { Pagination } from "../../ReusableComponents/Pagination";
import { filterStore } from "../../../store/categroyFilter";

const POSTS_PER_PAGE = 4;

export const PostsContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const activeCategory = filterStore((state) => state.activeCategory);

  const filteredByCategory = posts.filter((post) =>
    activeCategory === "All" ? true : post.categories === activeCategory,
  );
  const totalPages = Math.ceil(filteredByCategory.length / POSTS_PER_PAGE);


  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    return filteredByCategory.slice(startIndex, endIndex);
  }, [currentPage, filteredByCategory]);

  function handlePageChange(page: number): void {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className={styles.postsContent}>
      <div className={styles.postTopSide}>
        <div className={styles.mainLeftSide}>
          <PostsHeading title="Latest Posts" />
          <div className={styles.Posts}>
            {paginatedPosts.map((post, index) => (
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

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        variant="rounded"
      />
    </div>
  );
};
