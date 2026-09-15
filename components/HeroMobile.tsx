{"use client";

import Image from "next/image";

export default function HeroMobile() {
  return (
    <Image
      src="/hero-108-mobile.png"
      alt="Mobile Hero"
      fill
      priority
      className="object-cover object-center"
    />
  );
}
"}
