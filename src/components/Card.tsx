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
      <div className="text-right">{post.date}</div>
      <div className="flex flex-col items-center">
        <div>{post.title}</div>
        <div>{post.description}</div>
        <div>{post.category}</div>
      </div>
    </div>
  );
};

export default Card;
