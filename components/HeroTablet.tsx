{"use client";

import Image from "next/image";

export default function HeroTablet() {
  return (
    <Image
      src="/hero-108-tablet.png"
      alt="Tablet Hero"
      fill
      priority
      className="object-cover object-center"
    />
  );
}
"}
