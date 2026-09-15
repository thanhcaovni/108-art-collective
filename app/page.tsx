import Image from "next/image";

export default function Page() {
  return (
    <main className="bg-black overflow-hidden">

      {/* ================= DESKTOP / LANDSCAPE ================= */}
      <section className="hidden xl:block relative h-screen w-screen">
        <Image
          src="/hero-108.jpg"
          alt="108 Art Collective"
          fill
          priority
          className="object-cover object-center"
        />
      </section>

      {/* ================= TABLET PORTRAIT ================= */}
      <section className="hidden md:block xl:hidden relative w-screen h-screen">
        <Image
          src="/hero-108-tablet.png"
          alt="108 Tablet Portrait"
          fill
          priority
          className="object-cover object-center"
        />
      </section>

      {/* ================= MOBILE PORTRAIT ================= */}
      <section className="block md:hidden relative w-screen h-screen">
        <Image
          src="/hero-108-mobile.png"
          alt="108 Mobile Portrait"
          fill
          priority
          className="object-cover object-center"
        />
      </section>

    </main>
  );
}
