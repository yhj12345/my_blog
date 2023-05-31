"use client";
import Image from "next/image";
import profileImage from "../../public/images/profile.jpg";
import { useRouter } from "next/navigation";

const Profile = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center">
      <Image
        className="rounded-full w-32 h-32 object-cover"
        src={profileImage}
        alt="profileImage"
      />
      <h1 className="text-2xl font-bold">Hi, I&prime;m HJ</h1>
      <h2 className="text-xl font-bold">Frontend Engineer</h2>
      <p>성장하는 개발자, 윤호준입니다</p>
      <button
        className="rounded-lg bg-amber-500 font-bold mt-2 p-1"
        onClick={() => router.push("/contact")}
      >
        Contact Me
      </button>
    </div>
  );
};

export default Profile;
