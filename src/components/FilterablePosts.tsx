"use client";
import React, { useState } from "react";
import { Post } from "@/app/api/posts";
import Category from "@/components/Category";
import GridView from "./GridView";

interface Props {
  posts: Post[];
  categories: string[];
}
const FilterablePosts = ({ posts, categories }: Props) => {
  const [selected, setSelected] = useState("allPosts");
  const filtered =
    selected === "allPosts"
      ? posts
      : posts.filter((post) => post.category === selected);

  return (
    <div className="max-w-screen-xl mx-auto flex mt-8">
      <div className="w-4/5">
        <GridView posts={filtered} />
      </div>
      <Category
        categories={categories}
        selected={selected}
        onClick={setSelected}
      />
    </div>
  );
};

export default FilterablePosts;
