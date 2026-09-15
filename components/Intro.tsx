"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Intro() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHide(true), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[999] flex items-center justify-center bg-black transition-opacity duration-700 ${
        hide ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <Image
        src="/logo108-red.png"
        alt="108 Art Collective"
        width={180}
        height={180}
        priority
        className="animate-pulse drop-shadow-[0_0_20px_rgba(170,0,0,0.45)]"
      />
    </div>
  );
}
