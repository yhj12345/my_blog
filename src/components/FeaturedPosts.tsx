import Card from "./Card";

const FeaturedPosts = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <h3 className="font-bold">Featured Posts</h3>
      <div className="grid grid-cols-3 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default FeaturedPosts;
