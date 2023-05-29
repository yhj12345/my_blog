import Card from "@/components/Card";
import React from "react";

const posts = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex">
      <div className="w-4/5 grid grid-cols-3 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
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
