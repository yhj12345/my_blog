import FeaturedPosts from "@/components/FeaturedPosts";
import Profile from "@/components/Profile";
import YouMayLike from "@/components/YouMayLike";

export default function Home() {
  return (
    <section className="w-full">
      <Profile />
      <FeaturedPosts />
      <YouMayLike />
    </section>
  );
}
