import React, { Suspense } from "react";
import UserData from "../UserData";

function ProfileDetails() {
  return (
    <div className="w-[80%] h-fit custom-scrollbar flex gap-4">
      
       <UserData/>

    </div>
  );
}

export default ProfileDetails;
