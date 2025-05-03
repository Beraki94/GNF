"use client";

import { useState } from "react";
import { X } from "@phosphor-icons/react";
import "./PopUpModal.css";

const PopUpModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button className="nav-btn" onClick={openModal}>
        Contact
      </button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="modal__close" onClick={closeModal}>
              <X size={24} />
            </button>
            <form className="modal__form">
              <div className="modal__form-group">
                <input type="text" placeholder="First Name" required />
                <input type="text" placeholder="Last Name" required />
              </div>
              <input type="email" placeholder="Email Address" required />
              <textarea placeholder="Your Message" rows="4" required></textarea>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUpModal;
