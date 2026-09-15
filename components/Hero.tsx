"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [src, setSrc] = useState("/hero-108.jpg");

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
    <section className="fixed inset-0 bg-black overflow-hidden">
      <Image
        key={src}
        src={src}
        alt="108 Art Collective"
        fill
        priority
        quality={100}
        sizes="100vw"
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
    </section>
  );
}
