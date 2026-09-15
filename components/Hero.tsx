"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [heroSrc, setHeroSrc] = useState("/hero-108.jpg");

  useEffect(() => {
    const updateHero = () => {
      const portrait = window.matchMedia("(orientation: portrait)").matches;
      const width = window.innerWidth;

      // Landscape (desktop + iPad ngang)
      if (!portrait) {
        setHeroSrc("/hero-108.jpg");
        return;
      }

      // Portrait tablet
      if (width >= 768) {
        setHeroSrc("/hero-108-tablet.png");
        return;
      }

      // Portrait mobile
      setHeroSrc("/hero-108-mobile.png");
    };

    updateHero();

    window.addEventListener("resize", updateHero);
    window.addEventListener("orientationchange", updateHero);

    return () => {
      window.removeEventListener("resize", updateHero);
      window.removeEventListener("orientationchange", updateHero);
    };
  }, []);

  return (
    <section className="hero-screen">
      <Image
        key={heroSrc}
        src={heroSrc}
        alt="108 Art Collective"
        fill
        priority
        sizes="100vw"
        className="hero-image"
      />

      <div className="hero-vignette" />

      {/* Header */}
      <header className="hero-header">
        <div className="hero-brand">
          <Image
            src="/logo108-red.png"
            alt="108"
            width={42}
            height={42}
            priority
          />
          <span>108 ART COLLECTIVE</span>
        </div>

        <nav className="hero-nav">
          <a>ARTISTS</a>
          <a>INSTITUTE</a>
          <a>EVENTS</a>
          <a>STORE</a>
          <a>JOURNAL</a>
          <a>CONTACT</a>
        </nav>

        <div className="hero-lang">VN / EN</div>
      </header>

      {/* Tablet + Mobile Hamburger */}
      <button className="hero-hamburger">
        <span />
        <span />
        <span />
      </button>

      {/* Center Copy */}
      <div className="hero-copy">
        <p className="hero-sub">FROM NOTHING TO INFINITE</p>

        <h1>108 ART COLLECTIVE</h1>

        <p className="hero-desc">ART · PEOPLE · CULTURE</p>
      </div>

      {/* Footer */}
      <footer className="hero-footer">
        <span>HOẠ HỘI 108</span>

        <span className="hero-line" />

        <span>EST. 2026 — SAIGON</span>
      </footer>
    </section>
  );
}
