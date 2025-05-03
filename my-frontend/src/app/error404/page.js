"use client";

import Link from "next/link";

export default function Custom404() {
  return (
    <div className="custom-404">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link href="/" className="custom-404__link" aria-label="Go back to homepage">
        Go back Home
      </Link>
    </div>
  );
}