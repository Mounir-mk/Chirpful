"use client";

import React from "react";
import { clsx } from "clsx";
import {
  IoCloseSharp,
  IoAddCircleOutline,
  IoPersonSharp,
} from "react-icons/io5";

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
        "fixed top-0 left-0 flex flex-col h-screen w-80 text-base-content bg-base-100 transition-all duration-300 z-40 p-4 shadow-2xl",
        {
          "translate-x-0": isDrawerOpen,
          "-translate-x-full": !isDrawerOpen,
        }
      )}
    >
      <div
        id="drawer-action"
        className="flex w-full justify-between items-center"
      >
        <p className="font-medium text-lg">Informations sur le compte</p>
        <button
          className="p-1 btn btn-ghost rounded-btn"
          onClick={() => {
            setIsDrawerOpen(false);
          }}
        >
          <IoCloseSharp className="w-6 h-6" />
        </button>
      </div>
      <div id="account-info" className="flex flex-col gap-3 w-full mt-10">
        <section className="flex justify-between items-center">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src="https://i.pravatar.cc/300" />
            </div>
          </div>
          <IoAddCircleOutline className="w-10 h-10" />
        </section>
        <section className="flex flex-col">
          <p className="font-bold text-lg">John Doe</p>
          <p className="text-sm text-gray-600">@johndoe</p>
        </section>
        <section className="flex items-center">
          <p>
            <span className="font-medium">24</span>
            <span className="text-gray-600"> abonnements</span>
          </p>
          <p className="ml-4">
            <span className="font-medium">24</span>
            <span className="text-gray-600"> abonnés</span>
          </p>
        </section>
      </div>
      <div className="mt-6">
        <button className="btn btn-block">
          <IoPersonSharp className="w-6 h-6" />
          <span className="ml-2">Voir le profil</span>
        </button>
      </div>
    </section>
  );
}

export default ProfileSidebar;
