"use client";
import React from "react";
import {
  IoNotificationsOutline,
  IoHomeOutline,
  IoSearchOutline,
  IoMailOutline,
} from "react-icons/io5";
import Link from "next/link";
function BottomNavBar() {
  const [activeTab, setActiveTab] = React.useState("home");

  return (
    <aside className="btm-nav md:hidden">
      <Link
        href="/"
        id="home"
        onClick={() => setActiveTab("home")}
        className={activeTab === "home" ? "active" : ""}
      >
        <IoHomeOutline />
      </Link>

      <Link
        id="search"
        href="/search"
        onClick={() => setActiveTab("search")}
        className={activeTab === "search" ? "active" : ""}
      >
        <IoSearchOutline />
      </Link>
      <Link
        id="notifications"
        href="/notifications"
        onClick={() => setActiveTab("notifications")}
        className={activeTab === "notifications" ? "active" : ""}
      >
        <IoNotificationsOutline />
      </Link>
      <Link
        id="messages"
        href="/messages"
        onClick={() => setActiveTab("messages")}
        className={activeTab === "messages" ? "active" : ""}
      >
        <IoMailOutline />
      </Link>
    </aside>
  );
}

export default BottomNavBar;
