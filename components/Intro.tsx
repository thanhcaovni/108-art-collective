"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Intro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black transition-opacity duration-700">
      <div className="flex flex-col items-center gap-6 animate-pulse">
        <Image
          src="/logo108-red.png"
          alt="108 Logo"
          width={140}
          height={140}
          priority
        />

        <p className="tracking-[0.45em] text-sm text-neutral-300 text-center">
          FROM NOTHING TO INFINITE
        </p>
      </div>
    </div>
  );
}
