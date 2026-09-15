"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-screen h-screen overflow-hidden bg-black">

      {/* Desktop */}
      <div className="hidden xl:block absolute inset-0">
        <Image src="/hero-108.jpg" fill priority alt="108" className="object-cover" />
      </div>

      {/* Tablet Portrait */}
      <div className="hidden md:block xl:hidden absolute inset-0">
        <Image src="/hero-108-tablet.png" fill priority alt="108" className="object-cover" />
      </div>

      {/* Mobile */}
      <div className="block md:hidden absolute inset-0">
        <Image src="/hero-108-mobile.png" fill priority alt="108" className="object-cover" />
      </div>

    </section>
  );
}
