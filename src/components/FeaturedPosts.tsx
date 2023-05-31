import { Post, getFeaturedPosts } from "@/app/api/posts";
import Card from "./Card";

const FeaturedPosts = async () => {
  const featuredPosts = await getFeaturedPosts();
  return (
    <div>
      <h3 className="font-bold">Featured Posts</h3>
      <div className="grid grid-cols-3 gap-4">
        {featuredPosts.map((post: Post, idx) => {
          return <Card key={idx} post={post} />;
        })}
      </div>
    </div>
  );
};

export default FeaturedPosts;
