import React, { useState } from "react";
import "./style.css";

function UserCard({ key, user, profilePic }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className=" group h-96 w-80 [perspective:1000px]">
      <div className=" h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0">
          <img
            className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
            src={profilePic.urls.small}
            alt={user.name}
          />
        </div>
        <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex min-h-full flex-col items-center justify-center">
            <h1 className="text-3xl font-bold">{user.name}</h1>
            <p className="text-lg">{user.email}</p>
            <p className="text-base">{user.phone}</p>
            <div
              className={`list-none text-base font-bold transition-all duration-500 max-h-0 ${
                showMore ? "max-h-full" : ""
              }`}
            >
              {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode} 
             {user.website} 
               
            </div>
            <button
              className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900 "
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show less" : "Show more"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
