{"use client";

import Image from \"next/image\";
import { useEffect, useState } from \"react\";

export default function Hero() {
  const [isPortrait, setIsPortrait] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const update = () => {
      const portrait = window.matchMedia(\"(orientation: portrait)\").matches;
      setIsPortrait(portrait);

      // iPad/tablet: cạnh nhỏ >=768 và <=1366
      const shortest = Math.min(window.innerWidth, window.innerHeight);
      setIsTablet(shortest >= 768 && shortest <= 1366);
    };

    update();
    window.addEventListener(\"resize\", update);
    return () => window.removeEventListener(\"resize\", update);
  }, []);

  const heroSrc = !isPortrait
    ? \"/hero-108.jpg\"                  // Desktop + iPad ngang
    : isTablet
    ? \"/hero-108-tablet.png\"           // iPad dựng dọc
    : \"/hero-108-mobile.png\";          // iPhone dựng dọc

  return (
    <section className=\"relative h-screen w-screen overflow-hidden bg-black\">
      <Image
        src={heroSrc}
        alt=\"108 Art Collective\"
        fill
        priority
        sizes=\"100vw\"
        className=\"object-cover object-center\"
      />
    </section>
  );
}
"}
