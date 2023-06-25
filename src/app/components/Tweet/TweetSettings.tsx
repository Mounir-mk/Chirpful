"use client";

import React, { useState } from "react";
import {
  IoEllipsisHorizontalSharp,
  IoPersonRemove,
  IoPersonAdd,
  IoBanOutline,
} from "react-icons/io5";
import Modal from "./Modal";

function TweetSettings() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <button
        className="btn btn-sm rounded-btn"
        onClick={() => setIsModalOpen((prev) => !prev)}
      >
        <IoEllipsisHorizontalSharp />
      </button>
      <Modal isModalOpen={isModalOpen}>
        <button className="btn btn-ghost justify-start">
          <IoPersonRemove className="w-6 h-6" />
          Se désabonner de @johndoe
        </button>
        <button className="btn btn-ghost justify-start">
          <IoPersonAdd className="w-6 h-6" />
          Suivre @johndoe
        </button>
        <button className="btn btn-ghost justify-start">
          <IoBanOutline className="w-6 h-6" />
          Bloquer @johndoe
        </button>
        <button
          className="btn btn-sm rounded-btn btn-outline my-4"
          onClick={() => setIsModalOpen(false)}
        >
          Annuler
        </button>
      </Modal>
    </>
  );
}

export default TweetSettings;
