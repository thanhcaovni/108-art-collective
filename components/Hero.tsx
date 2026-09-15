"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-svh w-full overflow-hidden bg-black">

      {/* ========================= */}
      {/* HERO BACKGROUND IMAGES    */}
      {/* ========================= */}

      {/* Desktop / Landscape */}
      <div className="absolute inset-0 hidden xl:block">
        <Image
          src="/hero-108.jpg"
          alt="108 Art Collective Hero Desktop"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Tablet Portrait */}
      <div className="absolute inset-0 hidden md:block xl:hidden portrait:block landscape:hidden">
        <Image
          src="/hero-108-tablet.png"
          alt="108 Art Collective Hero Tablet"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Mobile Portrait */}
      <div className="absolute inset-0 block md:hidden portrait:block landscape:hidden">
        <Image
          src="/hero-108-mobile.png"
          alt="108 Art Collective Hero Mobile"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

{/* ===== Overlay tối nhẹ để đồng bộ toàn bộ hero ===== */}

      <div className="absolute inset-0 bg-black/10 pointer-events-none" />

    </section>
  );
