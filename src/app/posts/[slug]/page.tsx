import { getPostData } from "@/app/api/posts";
import AdjacentPostCard from "@/components/AdjacentPostCard";
import PostContent from "@/components/PostContent";
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: {
    slug: string;
  };
}
const PostPage = async ({ params: { slug } }: Props) => {
  const post = await getPostData(slug);
  const { path, prev, next } = post;
  return (
    <div className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4">
      <Image
        className="w-full h-1/5 max-h-[500px]"
        src={`/images/posts/${path}.png`}
        alt="thumbnail"
        width={600}
        height={300}
      />
      <PostContent post={post} />
      <div className="flex">
        {prev && <AdjacentPostCard type="prev" post={prev} />}
        {next && <AdjacentPostCard type="next" post={next} />}
      </div>
    </div>
  );
};

export default PostPage;
