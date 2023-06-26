"use client";

import React, { useState } from "react";
import { clsx } from "clsx";
import {
  IoCloseSharp,
  IoAddCircleOutline,
  IoPersonSharp,
  IoHomeOutline,
  IoSearchOutline,
  IoMailOutline,
  IoNotificationsOutline,
} from "react-icons/io5";
import { useOnClickOutside } from "usehooks-ts";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo/logo-focus.png";

interface ProfileSidebarProps {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (value: boolean) => void;
}

function ProfileSidebar({
  isDrawerOpen,
  setIsDrawerOpen,
}: ProfileSidebarProps) {
  const ref = React.useRef(null);
  useOnClickOutside(ref, () => {
    setIsDrawerOpen(false);
  });
  const [activeTab, setActiveTab] = React.useState("home");
  return (
    <section
      ref={ref}
      className={clsx(
        "fixed top-0 left-0 flex flex-col h-screen w-80 text-base-content bg-base-100 transition-all duration-300 z-40 p-4 shadow-2xl",
        "md:translate-x-0 md:shadow-none md:sticky md:border-r-2 md:border-base-200",
        {
          "translate-x-0": isDrawerOpen,
          "-translate-x-full": !isDrawerOpen,
        }
      )}
    >
      <div
        id="logo"
        className="hidden md:flex md:justify-start md:items-center md:my-4 md:h-10 md:w-full"
      >
        <Image src={logo} alt="logo" width={50} height={50} />
      </div>
      <div
        id="drawer-action"
        className="flex w-full justify-between items-center"
      >
        <p className="font-medium text-lg">Informations sur le compte</p>
        <button
          className="p-1 btn btn-ghost rounded-btn md:hidden"
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
      <div
        id="nav-links"
        className="hidden md:flex md:flex-col md:mt-10 md:border-t-2 md:border-base-200"
      >
        <Link
          href="/"
          id="home"
          onClick={() => setActiveTab("home")}
          className={`flex gap-3 items-center hover:bg-base-200 rounded-btn p-2 ${
            activeTab === "home" ? "bg-base-200" : ""
          }`}
        >
          <IoHomeOutline className="w-6 h-6" />
          <p>Accueil</p>
        </Link>
        <Link
          id="search"
          href="/search"
          onClick={() => setActiveTab("search")}
          className={`flex gap-3 items-center hover:bg-base-200 rounded-btn p-2 ${
            activeTab === "search" ? "bg-base-200" : ""
          }`}
        >
          <IoSearchOutline className="w-6 h-6" />
          <p>Recherche</p>
        </Link>
        <Link
          id="notifications"
          href="/notifications"
          onClick={() => setActiveTab("notifications")}
          className={`flex gap-3 items-center hover:bg-base-200 rounded-btn p-2 ${
            activeTab === "notifications" ? "bg-base-200" : ""
          }`}
        >
          <IoNotificationsOutline className="w-6 h-6" />
          <p>Notifications</p>
        </Link>
        <Link
          id="messages"
          href="/messages"
          onClick={() => setActiveTab("messages")}
          className={`flex gap-3 items-center hover:bg-base-200 rounded-btn p-2 ${
            activeTab === "messages" ? "bg-base-200" : ""
          }`}
        >
          <IoMailOutline className="w-6 h-6" />
          <p>Messages</p>
        </Link>
      </div>
    </section>
  );
}

export default ProfileSidebar;
