"use client";

import React, { useEffect, useRef } from "react";
import logo from "../assets/logo/logo-focus.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let lastScrollPosition = 0;
    const header = headerRef.current;

    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;

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
          <img src="https://i.pravatar.cc/300" />
        </div>
      </div>
      {pathname === "/" && (
        <Image src={logo} alt="logo" width={50} height={50} />
      )}
    </header>
  );
}

export default Header;
