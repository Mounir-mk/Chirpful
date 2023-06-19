"use client";

import React, { useState } from "react";

function CustomTweetFeed() {
  const [tab, setTab] = useState("global");
  return (
    <section id="tabs" className="flex flex-col items-center w-full mt-6">
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
