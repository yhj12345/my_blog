import Profile from "@/components/Profile";
import ProfileInfo from "@/components/ProfileInfo";
import React from "react";

const about = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto">
        <Profile />
        <ProfileInfo />
      </div>
    </div>
  );
};

export default about;
