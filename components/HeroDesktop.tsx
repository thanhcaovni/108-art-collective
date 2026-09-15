{"use client";

import Image from "next/image";

export default function HeroDesktop() {
  return (
    <Image
      src="/hero-108.jpg"
      alt="Desktop Hero"
      fill
      priority
      className="object-cover object-center"
    />
  );
}
"}
