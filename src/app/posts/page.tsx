import Card from "@/components/Card";
import React from "react";
import { getAllPosts } from "../api/posts";

const posts = async () => {
  const allPosts = await getAllPosts();

  return (
    <div className="max-w-screen-xl mx-auto flex">
      <div className="w-4/5 grid grid-cols-3 gap-4">
        {allPosts.map((post, idx) => {
          return <Card key={idx} post={post} />;
        })}
      </div>
      <div className="w-1/5">
        <div>Category</div>
        <div>All Posts</div>
        <div>My stroy</div>
        <div>frontend</div>
        <div>javascript</div>
      </div>
    </div>
  );
};

export default posts;
