"use client";

import Image from "next/image";
import Link from "next/link";
import { InstagramLogo, YoutubeLogo, FacebookLogo } from "@phosphor-icons/react";
import "./Footer.css";
import SectionHeader from "../sectionHeader/SectionHeader";

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: Add form submission logic (e.g., API call)
    console.log("Form submitted");
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
                    src="https://static.wixstatic.com/media/648eff_2a48666658494651927c956a82897723~mv2.png/v1/fill/w_759,h_353,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/648eff_2a48666658494651927c956a82897723~mv2.png"
                    alt="GodLight Nigeria Foundation Logo"
                    width={64}
                    height={64}
                  />
                  <span className="footer__brand">GodLight Nigeria Foundation</span>
                </Link>
              </div>

              <p className="footer__description">
              Illuminating hearts, uniting communities. Guided by divine Light, we empower Nigeria’s youth to discover purpose and radiate love through spirituality
               and science. Join us in shining God’s Light, fostering hope and transformation across the nation.
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
            <form className="footer__form" onSubmit={handleSubmit}>
              <h3 className="form__title">Contact Us</h3>
              <div className="footer__form-group">
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  aria-label="First Name"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  aria-label="Last Name"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                required
                aria-label="Email Address"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                required
                aria-label="Your Message"
              ></textarea>
              <button type="submit" aria-label="Submit Contact Form">
                Submit
              </button>
            </form>
          </div>

          {/* Bottom Row */}
          <div className="footer__bottom">
            <p>© {new Date().getFullYear()} GodLight Foundation. All rights reserved.</p>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;