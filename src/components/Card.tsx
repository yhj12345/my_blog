import Image from "next/image";
import { Post } from "@/app/api/posts";

interface CardProps {
  post: Post;
}

const Card = ({ post }: CardProps) => {
  return (
    <div className="rounded border-2 border-gray-300">
      <Image
        width={1000}
        height={50}
        src={`/images/posts/${post.path}.png`}
        alt="thumbnail"
      />
      <div className="flex flex-col items-center">
        <time className="self-end">{post.date}</time>
        <h2 className="font-bold">{post.title}</h2>
        <p className="w-full truncate text-center">{post.description}</p>
        <span className="bg-green-100 px-2 my-2">{post.category}</span>
      </div>
    </div>
  );
};

export default Card;
