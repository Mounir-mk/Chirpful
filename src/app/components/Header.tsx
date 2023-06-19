"use client";

import React, { useEffect, useRef } from "react";
import logo from "../assets/logo/logo-focus.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IoCloseSharp } from "react-icons/io5";

function Header() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let lastScrollPosition = 0;
    const header = headerRef.current;

    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition > lastScrollPosition) {
        header?.classList.add("hidden");
      } else if (currentScrollPosition < lastScrollPosition) {
        header?.classList.remove("hidden");
      }
      lastScrollPosition = currentScrollPosition;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed inset-0 h-14 flex justify-center items-center z-30 bg-base-100"
    >
      <div className="avatar absolute top-1/2 left-4 -translate-y-1/2">
        <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <button onClick={() => checkboxRef.current?.click()}>
            <img src="https://i.pravatar.cc/300" />
          </button>
        </div>
      </div>
      <div className="drawer absolute">
        <input
          ref={checkboxRef}
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li className="flex flex-row justify-between items-center">
              <p>Information sur le compte</p>
              <button
                type="button"
                onClick={() => {
                  checkboxRef.current?.click();
                }}
              >
                <IoCloseSharp className="w-6 h-6" />
              </button>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
      {pathname === "/" && (
        <Image src={logo} alt="logo" width={50} height={50} />
      )}
    </header>
  );
}

export default Header;
