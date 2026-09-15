"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">

      {/* Desktop + Landscape */}
      <Image
        src="/hero-108.jpg"
        alt="108 Hero"
        fill
        priority
        quality={100}
        sizes="100vw"
        className="hidden portrait:hidden md:block object-cover object-center"
      />

      {/* Tablet Portrait */}
      <Image
        src="/hero-108-tablet.png"
        alt="108 Hero Tablet"
        fill
        priority
        quality={100}
        sizes="100vw"
        className="hidden md:portrait:block xl:hidden object-cover object-center"
      />

      {/* Mobile Portrait */}
      <Image
        src="/hero-108-mobile.png"
        alt="108 Hero Mobile"
        fill
        priority
        quality={100}
        sizes="100vw"
        className="block md:hidden object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
    </section>
  );
}
