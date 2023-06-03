import React from "react";
import Card from "./Card";
import { Post } from "@/app/api/posts";

interface Props {
  posts: Post[];
}
const GridView = ({ posts }: Props) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {posts.map((post, idx) => {
        return <Card key={idx} post={post} />;
      })}
    </div>
  );
};

export default GridView;
