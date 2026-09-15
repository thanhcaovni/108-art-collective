"use client";

import { useEffect, useRef } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const startMusic = () => {
      if (!audioRef.current) return;

      audioRef.current.volume = 0.4;
      audioRef.current.play().catch(() => {});

      window.removeEventListener("pointerdown", startMusic);
    };

    window.addEventListener("pointerdown", startMusic, { once: true });

    return () => window.removeEventListener("pointerdown", startMusic);
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/music/bonbeuocthe.mp3"
      loop
      preload="auto"
    />
  );
}
