{"use client";

import Image from "next/image";

const menu = [
  "Artists",
  "Institute",
  "Events",
  "Store",
  "Journal",
  "Contact",
];

export default function HomePage() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black text-white">

      {/* Background Hero */}
      <Image
        src="/hero-108.jpg"
        alt="108 Art Collective Hero"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_30%,rgba(0,0,0,0.82)_95%)]" />

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-10 py-8">

        <div className="flex items-center gap-4">
          <Image
            src="/seal-108.png"
            alt="Seal"
            width={42}
            height={42}
          />

          <div>
            <p className="text-[11px] tracking-[0.45em] uppercase text-neutral-200">
              ART COLLECTIVE
            </p>

            <p className="mt-1 text-[9px] tracking-[0.35em] uppercase text-neutral-500">
              SINCE 2016
            </p>
          </div>
        </div>

        <nav className="hidden lg:flex gap-10 text-[11px] uppercase tracking-[0.28em] text-neutral-300">
          {menu.map((item) => (
            <a
              key={item}
              href="#"
              className="transition hover:text-[#981515]"
            >
              {item}
            </a>
          ))}
        </nav>

        <p className="text-[11px] tracking-[0.3em] text-neutral-400">
          VN / EN
        </p>

      </header>

      {/* Left Vertical */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 rotate-180 [writing-mode:vertical-rl] tracking-[0.45em] text-neutral-300 text-[10px]">
        從 無 到 無 限
      </div>

      {/* Right Vertical */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] tracking-[0.35em] text-neutral-500 text-[10px]">
        ART · PEOPLE · CULTURE · BEYOND
      </div>

      {/* Center Text */}
      <section className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">

        <p className="mb-6 text-[12px] uppercase tracking-[0.7em] text-neutral-300">
          108 ART COLLECTIVE
        </p>

        <h1
          className="font-serif font-semibold leading-none text-[#F3ECE3]"
          style={{
            fontSize: "17vw",
            letterSpacing: "-0.05em",
            textShadow: "0 0 30px rgba(255,255,255,.08)"
          }}
        >
          108
        </h1>

        <h2 className="mt-8 text-[#981515] text-[14px] uppercase tracking-[0.55em] font-light">
          FROM NOTHING TO INFINITE
        </h2>

      </section>

      {/* Bottom Left */}
      <div className="absolute bottom-10 left-10 text-[11px] tracking-[0.28em] uppercase leading-6 text-neutral-300">
        <p>A CREATIVE ORDER</p>
        <p>ROOTED IN TRADITION</p>
        <p>BUILT FOR WHAT'S NEXT</p>
      </div>

      {/* Bottom Right */}
      <div className="absolute bottom-10 right-10 flex items-center gap-4 uppercase tracking-[0.35em] text-[11px] text-neutral-200">
        <div className="h-px w-16 bg-[#981515]" />
        SINCE 2016
      </div>

    </main>
  );
}"} 
