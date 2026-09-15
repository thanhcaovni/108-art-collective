"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-svh overflow-hidden bg-black">

      {/* ===== Desktop + iPad Landscape ===== */}
      <div className="absolute inset-0 block portrait:hidden">
        <Image
          src="/hero-108.jpg"
          alt="108 Art Collective Hero Landscape"
          fill
          priority
          quality={100}
          className="object-cover object-center"
        />
      </div>

      {/* ===== iPad Portrait ===== */}
      <div className="absolute inset-0 hidden md:block portrait:block xl:hidden">
        <Image
          src="/hero-108-tablet.png"
          alt="108 Art Collective Hero Tablet Portrait"
          fill
          priority
          quality={100}
          className="object-cover object-center"
        />
      </div>

      {/* ===== Mobile Portrait ===== */}
      <div className="absolute inset-0 block md:hidden portrait:block">
        <Image
          src="/hero-108-mobile.png"
          alt="108 Art Collective Hero Mobile Portrait"
          fill
          priority
          quality={100}
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
    </section>
  );
}
