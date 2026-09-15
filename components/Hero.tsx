"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [heroSrc, setHeroSrc] = useState("/hero-108.jpg");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const updateHero = () => {
      const portrait = window.matchMedia("(orientation: portrait)").matches;
      const mobile = window.innerWidth < 768;

      if (portrait && mobile) {
        setHeroSrc("/hero-108-mobile.png");
      } else if (portrait) {
        setHeroSrc("/hero-108-tablet.png");
      } else {
        setHeroSrc("/hero-108.jpg");
      }

      setMounted(true);
    };

    updateHero();

    window.addEventListener("resize", updateHero);
    window.addEventListener("orientationchange", updateHero);

    return () => {
      window.removeEventListener("resize", updateHero);
      window.removeEventListener("orientationchange", updateHero);
    };
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative w-screen h-screen overflow-hidden bg-black">
      <Image
        src={heroSrc}
        alt="108 Art Collective"
        fill
        priority
        quality={100}
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/5 pointer-events-none" />
    </section>
  );
}
