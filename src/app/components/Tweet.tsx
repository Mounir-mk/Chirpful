import React from "react";
import {
  IoEllipsisHorizontalSharp,
  IoChatboxOutline,
  IoShareSocialOutline,
  IoShareOutline,
  IoHeartOutline,
} from "react-icons/io5";

function Tweet() {
  const name = "John Doe";
  const username = "JohnDoe";
  return (
    <section id="tweet" className="card card-bordered w-full bg-base-100">
      <div className="card-body">
        <div className="card-title">
          <div className="avatar">
            <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://i.pravatar.cc/300" />
            </div>
          </div>
          <h2 className="text-lg font-bold">
            {name.length > 10 ? name.substring(0, 5) + "..." : name}
          </h2>
          <p className="text-sm font-normal">
            {username.length > 10
              ? "@" + username.substring(0, 7) + "..."
              : "@" + username}
          </p>
          <p className="text-sm font-light">19 juin</p>
          <button className="btn btn-ghost btn-sm rounded-btn">
            <IoEllipsisHorizontalSharp />
          </button>
        </div>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <img src="https://placehold.co/600x400" alt="placeholder" />
        <div className="card-actions">
          <button className="btn btn-ghost btn-sm rounded-btn">
            <IoChatboxOutline />
            <p className="font-light text-sm">1456</p>
          </button>
          <button className="btn btn-ghost btn-sm rounded-btn">
            <IoShareSocialOutline />
            <p className="font-light text-sm">258</p>
          </button>
          <button className="btn btn-ghost btn-sm rounded-btn">
            <IoHeartOutline />
            <p className="font-light text-sm">15896</p>
          </button>
          <button className="btn btn-ghost btn-sm rounded-btn">
            <IoShareOutline />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Tweet;
