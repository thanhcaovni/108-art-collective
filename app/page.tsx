import Image from "next/image";

export default function Page() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black">
      <Image
        src="/hero-108.jpg"
        alt="108 Art Collective"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/25" />

      <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-3">
          <Image
            src="/seal-108.png"
            alt="108 Seal"
            width={42}
            height={42}
          />
          <span className="tracking-[0.35em] text-white text-xs">
            ART COLLECTIVE
          </span>
        </div>

        <nav className="hidden md:flex gap-8 text-white/80 text-xs tracking-[0.25em]">
          <span>ARTISTS</span>
          <span>INSTITUTE</span>
          <span>EVENTS</span>
          <span>STORE</span>
          <span>JOURNAL</span>
          <span>CONTACT</span>
        </nav>

        <span className="text-white/70 text-xs">VN | EN</span>
      </header>
    </main>
  );
}
