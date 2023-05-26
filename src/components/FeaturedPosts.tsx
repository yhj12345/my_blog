import Image from "next/image";
import reviewImage from "../../public/images/posts/review-2023.png";

const FeaturedPosts = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <h3 className="font-bold">Featured Posts</h3>
      <div className="grid grid-cols-3 gap-4">
        <div className="rounded border-2 border-gray-300">
          <Image src={reviewImage} alt="thumbnail" />
          <div className="text-right">날짜</div>
          <div className="flex flex-col items-center">
            <div>제목</div>
            <div>부제목</div>
            <div>태그</div>
          </div>
        </div>
        <div className="rounded border-2 border-gray-300">
          <Image src={reviewImage} alt="thumbnail" />
          <div className="text-right">날짜</div>
          <div className="flex flex-col items-center">
            <div>제목</div>
            <div>부제목</div>
            <div>태그</div>
          </div>
        </div>
        <div className="rounded border-2 border-gray-300">
          <Image src={reviewImage} alt="thumbnail" />
          <div className="text-right">날짜</div>
          <div className="flex flex-col items-center">
            <div>제목</div>
            <div>부제목</div>
            <div>태그</div>
          </div>
        </div>
        <div className="rounded border-2 border-gray-300">
          <Image src={reviewImage} alt="thumbnail" />
          <div className="text-right">날짜</div>
          <div className="flex flex-col items-center">
            <div>제목</div>
            <div>부제목</div>
            <div>태그</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
