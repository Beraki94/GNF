"use client";

import { X } from "@phosphor-icons/react";
import "./PopUpModal.css";

const PopUpModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal__close" onClick={onClose}>
          <X size={30} />
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
  );
};

export default PopUpModal;
