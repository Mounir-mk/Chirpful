"use client";

import React from "react";

interface MenuIconProps {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (value: boolean) => void;
}

function MenuIcon({ isDrawerOpen, setIsDrawerOpen }: MenuIconProps) {
  return (
    <div className="avatar z-10 absolute top-1/2 left-4 -translate-y-1/2 md:hidden">
      <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <button
          onClick={() => {
            console.log("opening drawer");
            setIsDrawerOpen(true);
            console.log("isDrawerOpen", isDrawerOpen);
          }}
        >
          <img src="https://i.pravatar.cc/300" />
        </button>
      </div>
    </div>
  );
}

export default MenuIcon;
