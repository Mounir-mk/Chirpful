"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import { IoChatboxOutline, IoCloseSharp } from "react-icons/io5";

function TweetResponse() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsModalOpen((prev) => !prev)}
        className="btn btn-ghost btn-sm rounded-btn"
      >
        <IoChatboxOutline />
        <p className="font-light text-sm">1456</p>
      </button>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <div className="flex justify-center items-start gap-4 mt-6">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src="https://i.pravatar.cc/300" />
            </div>
          </div>
          <textarea
            className="textarea textarea-primary h-64 flex-1"
            placeholder="Tweetez votre réponse"
          ></textarea>
        </div>
        <div className="flex justify-end items-center gap-4 my-4">
          <button
            className="btn btn-primary btn-sm rounded-btn"
            onClick={() => setIsModalOpen(false)}
          >
            <IoCloseSharp />
          </button>
          <button className="btn btn-primary btn-sm rounded-btn">
            Répondre
          </button>
        </div>
      </Modal>
    </>
  );
}

export default TweetResponse;
