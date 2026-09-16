"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import SmokeLayer from "./SmokeLayer";

export default function Hero() {
  const [src, setSrc] = useState("/hero-108.jpg");
  const [mounted, setMounted] = useState(false);

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

      // Fix Safari/iPhone lần render đầu bị zoom
      requestAnimationFrame(() => setMounted(true));
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
      <div className={`hero-image-wrap ${mounted ? "loaded" : ""}`}>
        <Image
          key={src}
          src={src}
          alt="108 Art Collective"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="hero-image"
        />
      </div>

      {/* Khói luôn nằm trên ảnh */}
      <SmokeLayer />

      {/* Overlay luôn nằm trên khói */}
      <div className="hero-vignette" />
    </section>
  );
}
