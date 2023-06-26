"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

function CustomTweetFeed() {
  const [tab, setTab] = useState("global");
  return (
    <section
      id="tabs"
      className={clsx("flex flex-col items-center w-full mt-14", {
        "md:mt-4": usePathname() === "/",
      })}
    >
      <div className="tabs">
        <button
          onClick={() => setTab("global")}
          className={
            "tab tab-lifted tab-lg" + (tab === "global" ? " tab-active" : "")
          }
        >
          Global
        </button>
        <button
          onClick={() => setTab("abonnements")}
          className={
            "tab tab-lifted tab-lg" +
            (tab === "abonnements" ? " tab-active" : "")
          }
        >
          Abonnements
        </button>
      </div>
      <div className="divider-horizontal bg-gray-400 h-0.5 w-full"></div>
    </section>
  );
}

export default CustomTweetFeed;
