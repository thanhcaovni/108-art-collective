"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import SmokeLayer from "./SmokeLayer";

export default function Hero() {
  const [src, setSrc] = useState("/hero-108.jpg");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const updateHero = () => {
      const portrait = window.matchMedia("(orientation: portrait)").matches;
      const mobile = window.innerWidth < 768;

      if (portrait && mobile) {
        setSrc("/hero-108-mobile.png");
      } else if (portrait) {
        setSrc("/hero-108-tablet.png");
      } else {
        setSrc("/hero-108.jpg");
      }

      requestAnimationFrame(() => setReady(true));
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
      <div className={`hero-image-wrap ${ready ? "loaded" : ""}`}>
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

      <SmokeLayer />

      <div className="hero-vignette" />
    </section>
  );
}
