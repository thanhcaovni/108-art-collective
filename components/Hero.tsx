"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-screen h-dvh overflow-hidden bg-black">
      {/* Desktop + Landscape */}
      <div className="hero-desktop absolute inset-0">
        <Image
          src="/hero-108.jpg"
          alt="108 Art Collective"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Tablet Portrait */}
      <div className="hero-tablet absolute inset-0">
        <Image
          src="/hero-108-tablet.png"
          alt="108 Art Collective"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Mobile Portrait */}
      <div className="hero-mobile absolute inset-0">
        <Image
          src="/hero-108-mobile.png"
          alt="108 Art Collective"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
    </section>
  );
}
