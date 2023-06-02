import { AiTwotoneCalendar } from "react-icons/ai";
import MarkdownViewer from "@/components/MarkdownViewer";
import { PostData } from "@/app/api/posts";

interface Props {
  post: PostData;
}
const PostContent = ({ post }: Props) => {
  const { date, title, description, content } = post;
  return (
    <div className="flex flex-col p-4 w-full">
      <div className="flex items-center self-end text-sky-600">
        <AiTwotoneCalendar />
        <p className="font-semibold ml-2">{date}</p>
      </div>
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="font-bold">{description}</p>
      <div className="w-44 border-2 border-sky-600 mt-4 mb-8" />
      <MarkdownViewer content={content} />
    </div>
  );
};

export default PostContent;
