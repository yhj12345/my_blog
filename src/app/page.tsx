import FeaturedPosts from "@/components/FeaturedPosts";
import Profile from "@/components/Profile";

export default function Home() {
  return (
    <section className="w-full">
      <Profile />
      <FeaturedPosts />
    </section>
  );
}
