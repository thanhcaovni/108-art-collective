{"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [heroSrc, setHeroSrc] = useState("/hero-108.jpg");

  useEffect(() => {
    const updateHero = () => {
      const portrait = window.matchMedia("(orientation: portrait)").matches;
      const width = window.innerWidth;

      if (!portrait) {
        setHeroSrc("/hero-108.jpg");
      } else if (width >= 768) {
        setHeroSrc("/hero-108-tablet.png");
      } else {
        setHeroSrc("/hero-108-mobile.png");
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
    <section className="relative h-screen w-screen overflow-hidden bg-black">
      <Image
        key={heroSrc}
        src={heroSrc}
        alt="108 Art Collective"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
    </section>
  );
}
"}
