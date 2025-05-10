"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { useModal } from "../appWrapper/AppWrapper";// ✅ Make sure this path is correct
import "./Header.css";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Learn", href: "/learn" },
  { name: "News-Stories", href: "/news-stories" },
];

export default function Header() {
  const { openModal } = useModal(); // ✅ This is what you were missing
  const pathname = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileNavOpen(false);
  };

  return (
    <header className="header__wrapper">
      <Link href="/" className="header__logo" aria-label="Go to homepage">
        <Image
          src="/godlight.logo.avif"
          alt="GodLight Nigeria Foundation Logo"
          width={64}
          height={64}
          sizes="(max-width: 480px) 48px, (max-width: 768px) 56px, 64px"
          className="header__logo-image"
        />
        <span className="header__brand">
          GodLight <span className="brand__mobile">Empowerment Foundation</span>
        </span>
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
            <button className="contact__us__btn" onClick={openModal}>
              Contact Us
            </button>
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
