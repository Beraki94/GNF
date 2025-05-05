"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { List, X } from "@phosphor-icons/react";
import PopUpModal from "../contactModal/PopUpModal";
import "./Header.css";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Learn", href: "/learn" },
  { name: "News-Stories", href: "/news-stories" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileNavOpen(false);
  };

  return (
    <header className="header__wrapper">
      <Link href="/" className="header__logo" aria-label="Go to homepage">
          <Image
            src="https://static.wixstatic.com/media/648eff_2a48666658494651927c956a82897723~mv2.png/v1/fill/w_759,h_353,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/648eff_2a48666658494651927c956a82897723~mv2.png"
            alt="GodLight Nigeria Foundation Logo"
            width={64}
            height={64}
            sizes="(max-width: 480px) 48px, (max-width: 768px) 56px, 64px"
            className="header__logo-image"
          />
          <span className="header__brand">GodLight <span className="brand__mobile">Nigeria Foundation</span></span>
        </Link>
        
      <div className="header">
        <nav
          className={`header__nav ${mobileNavOpen ? "header__nav--open" : ""}`}
          role="navigation"
          aria-label="Main navigation"
        >
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              onClick={handleLinkClick}
              className={`header__nav-link ${
                pathname === link.href ? "header__nav-link--active" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="header__nav-modal" onClick={handleLinkClick}>
            <PopUpModal />
          </div>
        </nav>
      </div>
      <button
          className="header__toggle"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileNavOpen}
        >
          {mobileNavOpen ? <X size={40} /> : <List size={40} />}
        </button>
    </header>
  );
}