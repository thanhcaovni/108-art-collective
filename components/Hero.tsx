"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isPortrait, setIsPortrait] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateLayout = () => {
      const portrait = window.matchMedia("(orientation: portrait)").matches;

      setIsPortrait(portrait);
      setIsMobile(window.innerWidth < 768);
    };

    updateLayout();

    window.addEventListener("resize", updateLayout);
    window.addEventListener("orientationchange", updateLayout);

    return () => {
      window.removeEventListener("resize", updateLayout);
      window.removeEventListener("orientationchange", updateLayout);
    };
  }, []);

  let heroImage = "/hero-108.jpg"; // mặc định landscape

  if (isPortrait) {
    heroImage = isMobile
      ? "/hero-108-mobile.png"
      : "/hero-108-tablet.png";
  }

  return (
    <section className="relative h-svh w-full overflow-hidden bg-black">
      <Image
        src={heroImage}
        alt="108 Art Collective Hero"
        fill
        priority
        quality={100}
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
    </section>
  );
}
