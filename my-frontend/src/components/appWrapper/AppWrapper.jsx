"use client";

import { useState, createContext, useContext } from "react";
import PopUpModal from "../contactModal/PopUpModal";

// Create a context to expose modal control
const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

const AppWrapper = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider value={{ openModal }}>
      {children}
      <PopUpModal isOpen={isModalOpen} onClose={closeModal} />
    </ModalContext.Provider>
  );
};

export default AppWrapper;
