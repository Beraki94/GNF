"use client";

import Image from "next/image";
import Link from "next/link"; // <-- Added this
import { InstagramLogo, YoutubeLogo, FacebookLogo } from "@phosphor-icons/react";
import "./Footer.css";
import SectionHeader from "../sectionHeader/SectionHeader";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-wrapper-inner">
        <SectionHeader
          title="Stay Connected"
          subtitle="Reach out to us anytime"
          align="center"
        />

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
                  <span>GodLight Nigeria Foundation</span>
                </Link>
              </div>

              <p className="footer__description">
                GodLight Foundation is committed to transforming lives through faith, hope, and love.
                GodLight Foundation is committed to transforming lives through faith, hope, and love.
                GodLight Foundation is committed to transforming lives through faith, hope, and love.
              </p>

              <div className="footer__socials">
                <a href="https://instagram.com/godlight" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <InstagramLogo size={32} />
                </a>
                <a href="https://youtube.com/godlight" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <YoutubeLogo size={32} />
                </a>
                <a href="https://facebook.com/godlight" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FacebookLogo size={32} />
                </a>
              </div>
            </div>

            {/* Right Section - Contact Form */}
            <form className="footer__form">
              <h3 className="form__title">Contact Us</h3>
              <div className="footer__form-group">
                <input type="text" placeholder="First Name" required />
                <input type="text" placeholder="Last Name" required />
              </div>
              <input type="email" placeholder="Email Address" required />
              <textarea placeholder="Your Message" rows="4" required></textarea>
              <button type="submit" aria-label="Submit Contact Form">Submit</button>
            </form>
          </div>

          {/* Bottom Row */}
          <div className="footer__bottom">
            <p>© {new Date().getFullYear()} GodLight Foundation. All rights reserved.</p>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
