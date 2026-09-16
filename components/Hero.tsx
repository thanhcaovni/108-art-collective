"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import SmokeLayer from "./SmokeLayer";
import Navbar from "./Navbar";

export default function Hero() {
  const [src, setSrc] = useState("/hero-108.jpg");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(orientation: portrait)");

    const updateHero = () => {
      const portrait = media.matches;

      if (portrait) {
        setSrc(
          window.innerWidth < 768
            ? "/hero-108-mobile.png"
            : "/hero-108-tablet.png"
        );
      } else {
        setSrc("/hero-108.jpg");
      }
    };

    updateHero();

    media.addEventListener("change", updateHero);
    window.addEventListener("resize", updateHero);

    return () => {
      media.removeEventListener("change", updateHero);
      window.removeEventListener("resize", updateHero);
    };
  }, []);

  return (
    <section className="hero-screen">
      {/* Background Hero */}
      <div className={`hero-image-wrap ${loaded ? "loaded" : ""}`}>
        <Image
          key={src}
          src={src}
          alt="108 Art Collective"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="hero-image"
          onLoad={() => setLoaded(true)}
        />
      </div>

      {/* Smoke */}
      <SmokeLayer />

      {/* Top Navigation */}
      <Navbar />

      {/* Overlay */}
      <div className="hero-vignette" />
    </section>
  );
}
