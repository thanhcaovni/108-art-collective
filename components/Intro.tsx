"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Intro() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHide(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  if (hide) return null;

  return (
    <section className="intro-screen">
      <div className="intro-smoke" />

      <Image
        src="/seal-108.png"
        alt="108 Seal"
        width={160}
        height={160}
        priority
        className="seal"
      />

      <p className="intro-cn">天地人</p>

      <h1 className="intro-title">108 ART COLLECTIVE</h1>

      <p className="intro-tagline">FROM NOTHING TO INFINITE</p>
    </section>
  );
}
"}
