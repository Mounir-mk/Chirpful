import React, { useRef } from "react";
import { clsx } from "clsx";
import { useOnClickOutside } from "usehooks-ts";

interface ModalProps {
  children: React.ReactNode;
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
}

function Modal({ children, isModalOpen, setIsModalOpen }: ModalProps) {
  const ref = useRef(null);
  useOnClickOutside(ref, () => {
    setIsModalOpen(false);
  });
  return (
    <div
      ref={ref}
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
