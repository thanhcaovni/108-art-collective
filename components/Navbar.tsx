"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      {/* Logo */}
      <Link href="/" className="navbar-logo">
        <span>108</span>
        <small>ART COLLECTIVE</small>
      </Link>

      {/* Menu */}
      <nav className="navbar-menu">
        <Link href="/artists">ARTISTS</Link>
        <Link href="/institute">INSTITUTE</Link>
        <Link href="/event">EVENT</Link>
        <Link href="/store">STORE</Link>
        <Link href="/journal">JOURNAL</Link>
      </nav>

      {/* Language */}
      <div className="navbar-right">
        <button className="lang active">VN</button>
        <span>/</span>
        <button className="lang">EN</button>
      </div>
    </header>
  );
}
