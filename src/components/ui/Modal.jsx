import React from "react";
import { modalStore } from "../../store";

const Modal = ({ children }) => {
  const { isOpen, closeModal } = modalStore();

  if (!isOpen) return;
  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center px-4">
      <div
        className="fixed top-5 right-5 lg:top-10 lg:right-10 bg-white py-1 px-2.5 lg:py-2 lg:px-4 rounded-4xl cursor-pointer"
        onClick={closeModal}
      >
        X
      </div>
      {children}
    </div>
  );
};

export default Modal;
