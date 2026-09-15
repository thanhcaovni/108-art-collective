"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [src, setSrc] = useState("/hero-108.jpg");

  useEffect(() => {
    const updateHero = () => {
      const portrait = window.matchMedia("(orientation: portrait)").matches;
      const mobile = window.innerWidth < 768;

      if (portrait && mobile) {
        setSrc("/hero-108-mobile.png");
      } else if (portrait) {
        setSrc("/hero-108-tablet.png");
      } else {
        setSrc("/hero-108.jpg");
      }
    };

    updateHero();

    window.addEventListener("resize", updateHero);
    window.addEventListener("orientationchange", updateHero);

    return () => {
      window.removeEventListener("resize", updateHero);
      window.removeEventListener("orientationchange", updateHero);
    };
  }, []);

  return (
    <section className="fixed inset-0 bg-black overflow-hidden">
      <Image
        key={src}
        src={src}
        alt="108 Art Collective"
        fill
        priority
        quality={100}
        sizes="100vw"
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
    </section>
  );
}
/* =========================================================
   108 ARCHIVE RADIO
   ========================================================= */

.archive-radio {
  position: fixed;
  left: max(18px, env(safe-area-inset-left));
  bottom: max(18px, env(safe-area-inset-bottom));
  z-index: 999;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;

  padding: 12px 16px;
  border: 1px solid rgba(179,17,34,.35);
  border-radius: 14px;

  background: rgba(0,0,0,.55);
  backdrop-filter: blur(12px);

  color: white;
}

.radio-title {
  font-family: "Cinzel", serif;
  font-size: 9px;
  letter-spacing: .35em;
  color: #b31122;
}

.radio-track {
  font-family: "Cormorant Garamond", serif;
  font-size: 16px;
}

.radio-button {
  font-size: 18px;
  color: #b31122;
}

@media (max-width:768px){
  .archive-radio{
    left:12px;
    right:12px;
    bottom:max(12px, env(safe-area-inset-bottom));
  }
}
