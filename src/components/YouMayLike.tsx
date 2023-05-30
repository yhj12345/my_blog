import { getNonFeaturedPosts } from "@/app/api/posts";
import Card from "@/components/Card";
import MultiCarousel from "./MultiCarousel";

const YouMayLike = async () => {
  const nonFeaturedPosts = await getNonFeaturedPosts();

  return (
    <div className="max-w-screen-xl mx-auto">
      <h3 className="font-bold">You may like</h3>
      <MultiCarousel>
        {nonFeaturedPosts.map((post, idx) => {
          return <Card key={idx} post={post} />;
        })}
      </MultiCarousel>
      ;
    </div>
  );
};

export default YouMayLike;
