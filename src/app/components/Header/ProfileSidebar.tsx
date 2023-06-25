"use client";

import React from "react";
import { clsx } from "clsx";
import { IoCloseSharp } from "react-icons/io5";

interface ProfileSidebarProps {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (value: boolean) => void;
}

function ProfileSidebar({
  isDrawerOpen,
  setIsDrawerOpen,
}: ProfileSidebarProps) {
  return (
    <section
      className={clsx(
        "fixed top-0 left-0 flex flex-col justify-center items-center  h-screen w-80 text-base-content bg-black transition-all duration-300 z-40",
        {
          "translate-x-0": isDrawerOpen,
          "-translate-x-full": !isDrawerOpen,
        }
      )}
    >
      <button
        className="absolute top-4 right-4 bg-white rounded-full p-1"
        onClick={() => {
          setIsDrawerOpen(false);
        }}
      >
        <IoCloseSharp className="w-6 h-6" />
      </button>
    </section>
  );
}

export default ProfileSidebar;
