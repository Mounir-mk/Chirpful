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
        "md:fixed md:left-1/2 md:top-1/2 md:bottom-auto md:w-96 md:shadow-sm md:rounded-lg md:bg-base-100 md:border md:-translate-x-1/2 md:-translate-y-1/2",
        {
          "translate-y-0": isModalOpen && window.innerWidth < 768,
          "translate-y-full": !isModalOpen && window.innerWidth < 768,
          "md:hidden": !isModalOpen && window.innerWidth >= 768,
        }
      )}
    >
      {children}
    </div>
  );
}

export default Modal;
