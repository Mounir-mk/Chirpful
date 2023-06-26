"use client";

import React, { useState, useEffect } from "react";
import logo from "../../assets/logo/logo-focus.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IoSearchOutline } from "react-icons/io5";
import MenuIcon from "./MenuIcon";
import ProfileSidebar from "./ProfileSidebar";
import { clsx } from "clsx";

function Header() {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollPosition = 0;

    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition > lastScrollPosition) {
        setIsScrolled(true);
      } else if (currentScrollPosition < lastScrollPosition) {
        setIsScrolled(false);
      }
      lastScrollPosition = currentScrollPosition;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={clsx(
          "fixed inset-0 h-14 flex justify-center items-center z-30 bg-base-100 transition-all duration-300",
          "md:h-24",
          {
            "-translate-y-full": isScrolled && window.innerWidth < 768,
            "translate-y-0": !isScrolled && window.innerWidth < 768,
            "md:hidden": pathname === "/",
          }
        )}
      >
        <MenuIcon
          isDrawerOpen={isDrawerOpen}
          setIsDrawerOpen={setIsDrawerOpen}
        />
        {pathname === "/" && (
          <Image
            src={logo}
            alt="logo"
            width={50}
            height={50}
            className="md:hidden"
          />
        )}
        {pathname === "/search" && (
          <div className="join ml-4">
            <button className="btn btn-sm btn-ghost btn-disabled join-item">
              <IoSearchOutline className="w-6 h-6" />
            </button>
            <input
              className="input input-bordered input-sm join-item"
              placeholder="Search..."
            />
          </div>
        )}
        {pathname === "/notifications" && (
          <h1 className="font-bold">Notifications</h1>
        )}
        {pathname === "/messages" && (
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold">Messages</h1>
            <div className="join ml-4">
              <button className="btn btn-sm btn-ghost btn-disabled join-item">
                <IoSearchOutline className="w-6 h-6" />
              </button>
              <input
                className="input input-bordered input-sm join-item"
                placeholder="Search..."
              />
            </div>
          </div>
        )}
      </header>
      <ProfileSidebar
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
    </>
  );
}

export default Header;
