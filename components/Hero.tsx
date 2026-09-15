"use client";

export default function Hero() {
  return (
    <section className="relative w-screen h-screen overflow-hidden bg-black">
      <picture>
        {/* Mobile portrait */}
        <source
          media="(max-width:767px) and (orientation:portrait)"
          srcSet="/hero-108-mobile.png"
        />

        {/* Tablet portrait */}
        <source
          media="(min-width:768px) and (orientation:portrait)"
          srcSet="/hero-108-tablet.png"
        />

        {/* Desktop + landscape */}
        <img
          src="/hero-108.jpg"
          alt="108 Art Collective"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </picture>

      <div className="absolute inset-0 bg-black/5 pointer-events-none" />
    </section>
  );
}
