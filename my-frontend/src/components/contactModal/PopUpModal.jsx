"use client";

import { useState, useEffect } from "react";
import { X } from "@phosphor-icons/react";
import "./PopUpModal.css";

const PopUpModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState(null); // success or error
  const [touched, setTouched] = useState({});

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
      });
      setStatus(null);
      setTouched({});
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const validate = () => {
    const errors = {};
    if (formData.firstName.length < 2) errors.firstName = "Too short";
    if (formData.lastName.length < 2) errors.lastName = "Too short";
    if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Invalid email";
    if (formData.message.length < 10) errors.message = "Message too short";
    return errors;
  };

  const errors = validate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.keys(errors).length > 0) {
      setTouched({
        firstName: true,
        lastName: true,
        email: true,
        message: true
      });
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/movdwdwj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal__close" onClick={onClose}>
          <X size={30} />
        </button>
        <form className="modal__form" onSubmit={handleSubmit} noValidate>
          <div className="modal__form-group">
            <input
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={touched.firstName && errors.firstName ? "error" : "success"}
              required
              minLength={2}
            />
            <input
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={touched.lastName && errors.lastName ? "error" : "success"}
              required
              minLength={2}
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={touched.email && errors.email ? "error" : "success"}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={touched.message && errors.message ? "error" : "success"}
            required
            minLength={10}
          />

          <button type="submit" className="submit-btn">Submit</button>

          {status === "success" && (
            <p className="success-message">Thank you! Your message was sent 🎉</p>
          )}
          {status === "error" && (
            <p className="error-message">Oops! Something went wrong 😞</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default PopUpModal;
