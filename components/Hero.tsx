"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [hero, setHero] = useState("/hero-108.jpg");

  useEffect(() => {
    const updateHero = () => {
      const portrait = window.matchMedia("(orientation: portrait)").matches;
      const mobile = window.innerWidth < 768;

      if (portrait && mobile) {
        setHero("/hero-108-mobile.png");
      } else if (portrait) {
        setHero("/hero-108-tablet.png");
      } else {
        setHero("/hero-108.jpg");
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
    <section className="relative w-full h-screen overflow-hidden bg-black">
      <Image
        src={hero}
        alt="108 Art Collective Hero"
        fill
        priority
        quality={100}
        sizes="100vw"
        className="object-contain md:object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
    </section>
  );
}
