import React from "react";
import { getAllPosts } from "../api/posts";
import FilterablePosts from "@/components/FilterablePosts";

const postsPage = async () => {
  const allPosts = await getAllPosts();
  const categories = [...new Set(allPosts.map((post) => post.category))];

  return <FilterablePosts posts={allPosts} categories={categories} />;
};

export default postsPage;
