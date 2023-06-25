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
      <Modal isModalOpen={isModalOpen}>
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src="https://i.pravatar.cc/300" />
                </div>
              </div>
              <p className="font-bold text-lg ml-2">John Doe</p>
            </div>
            <button
              className="btn btn-ghost btn-sm rounded-btn"
              onClick={() => {
                setIsModalOpen(false);
              }}
            >
              <IoCloseSharp className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col gap-3 mt-10">
            <div className="flex justify-end">
              <button className="btn btn-sm rounded-btn btn-outline">
                Répondre
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default TweetResponse;
