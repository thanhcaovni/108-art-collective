"use client";

export default function Hero() {
  return (
    <section className="relative w-full h-svh overflow-hidden bg-black">
      <picture>
        {/* Mobile Portrait */}
        <source
          media="(max-width: 767px) and (orientation: portrait)"
          srcSet="/hero-108-mobile.png"
        />

        {/* Tablet Portrait */}
        <source
          media="(min-width: 768px) and (orientation: portrait)"
          srcSet="/hero-108-tablet.png"
        />

        {/* Landscape (desktop + tablet ngang + phone ngang) */}
        <img
          src="/hero-108.jpg"
          alt="108 Art Collective Hero"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </picture>

      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
    </section>
  );
}
