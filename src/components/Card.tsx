import Image from "next/image";
import reviewImage from "../../public/images/posts/review-2023.png";
import { Post } from "@/app/api/posts";

interface CardProps {
  post: Post;
}

const Card = ({ post }: CardProps) => {
  return (
    <div className="rounded border-2 border-gray-300">
      <Image src={reviewImage} alt="thumbnail" />
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
