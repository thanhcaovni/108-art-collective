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
    </main>
  );
}
