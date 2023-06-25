"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import { IoRepeatSharp } from "react-icons/io5";

function Retweet() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsModalOpen((prev) => !prev)}
        className="btn btn-ghost btn-sm rounded-btn"
      >
        <IoRepeatSharp />
        <p className="font-light text-sm">258</p>
      </button>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <button className="btn btn-ghost justify-start">
          <IoRepeatSharp className="w-6 h-6" />
          Retweeter @johndoe
        </button>
      </Modal>
    </>
  );
}

export default Retweet;
