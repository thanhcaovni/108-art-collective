"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [heroSrc, setHeroSrc] = useState("/hero-108.jpg");

  useEffect(() => {
    const updateHero = () => {
      const isPortrait = window.matchMedia("(orientation: portrait)").matches;
      const width = window.innerWidth;

      if (isPortrait) {
        if (width < 768) {
          setHeroSrc("/hero-108-mobile.png");
        } else {
          setHeroSrc("/hero-108-tablet.png");
        }
      } else {
        setHeroSrc("/hero-108.jpg");
      }
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
    <section className="relative w-screen h-dvh overflow-hidden bg-black">
      <Image
        key={heroSrc}
        src={heroSrc}
        alt="108 Art Collective"
        fill
        priority
        quality={100}
        sizes="100vw"
        className="object-cover object-center select-none"
      />

      {/* Overlay nhẹ */}
      <div className="absolute inset-0 bg-black/5 pointer-events-none" />
    </section>
  );
}
