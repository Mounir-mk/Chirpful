import React, { useState } from "react";
import { clsx } from "clsx";

interface ModalProps {
  children: React.ReactNode;
  isModalOpen: boolean;
}

function Modal({ children, isModalOpen }: ModalProps) {
  return (
    <div
      className={clsx(
        "fixed bottom-0 left-0 w-full bg-base-300 z-50 shadow-xl transition-all duration-300 flex flex-col px-4",
        {
          "translate-y-0": isModalOpen,
          "translate-y-full": !isModalOpen,
        }
      )}
    >
      {children}
    </div>
  );
}

export default Modal;
