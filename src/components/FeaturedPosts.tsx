import { Post, getFeaturedPosts } from "@/app/api/posts";
import Card from "./Card";
import GridView from "./GridView";

const FeaturedPosts = async () => {
  const featuredPosts = await getFeaturedPosts();
  return (
    <div className="mt-8">
      <h3 className="font-bold">Featured Posts</h3>
      <GridView posts={featuredPosts} />
    </div>
  );
};

export default FeaturedPosts;
