"use client";

import Image from "next/image";
import Link from "next/link";
import {
  InstagramLogo,
  YoutubeLogo,
  FacebookLogo
} from "@phosphor-icons/react";
import "./Footer.css";
import SectionHeader from "../sectionHeader/SectionHeader";
import { useState } from "react";

const Footer = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState(null); // success | error
  const [touched, setTouched] = useState({});

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
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: ""
        });
        setTouched({});
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <footer className="footer-wrapper">
      <div className="footer-wrapper-inner">
        <div className="footer__heading">
          <SectionHeader
            title="Stay Connected"
            subtitle="Reach out to us anytime"
            align="center"
          />
        </div>

        <div className="footer">
          <div className="footer__main">
            {/* Left Section */}
            <div className="footer__left">
              <div className="footer__logo">
                <Link href="/" className="footer__logo-link">
                  <Image
                    src="/godlight.logo.avif"
                    alt="GodLight Nigeria Foundation Logo"
                    width={64}
                    height={64}
                  />
                  <span className="footer__brand">
                    GodLight Empowerment Foundation
                  </span>
                </Link>
              </div>

              <p className="footer__description">
                Illuminating hearts, uniting communities. Guided by divine Light, we empower Nigeria’s youth to discover purpose and radiate love through spirituality
                and science. Join us in shining God’s Light, fostering hope and transformation across the nation.
              </p>

              <div className="footer__socials">
                <Link
                  href="https://instagram.com/godlight"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <InstagramLogo size={40} />
                </Link>
                <Link
                  href="https://youtube.com/@godlightnigeriafoundation?si=_rvN2pXmMrJR9if1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <YoutubeLogo size={40} />
                </Link>
                <Link
                  href="https://www.facebook.com/groups/1178925947001919/?ref=share&mibextid=NSMWBT"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FacebookLogo size={40} />
                </Link>
              </div>
            </div>

            {/* Right Section - Contact Form */}
            <form className="footer__form" onSubmit={handleSubmit} noValidate>
              <h3 className="form__title">Contact Us</h3>
              <div className="footer__form-group">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    touched.firstName && errors.firstName
                      ? "error"
                      : "success"
                  }
                  required
                  aria-label="First Name"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    touched.lastName && errors.lastName ? "error" : "success"
                  }
                  required
                  aria-label="Last Name"
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
                aria-label="Email Address"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  touched.message && errors.message ? "error" : "success"
                }
                required
                aria-label="Your Message"
              ></textarea>
              <button type="submit" aria-label="Submit Contact Form">
                Submit
              </button>

              {status === "success" && (
                <p className="success-message">
                  Thank you! Your message was sent 🎉
                </p>
              )}
              {status === "error" && (
                <p className="error-message">
                  Oops! Something went wrong 😞
                </p>
              )}
            </form>
          </div>

          {/* Bottom Row */}
          <div className="footer__bottom">
            <p>
              © {new Date().getFullYear()} GodLight Foundation. All rights
              reserved.
            </p>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
