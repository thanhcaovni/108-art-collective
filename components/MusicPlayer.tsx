"use client";

import { useEffect, useRef } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = true;
    audio.volume = 0.35;
    audio.preload = "auto";

    const startMusic = () => {
      audio.play().catch(() => {});
      cleanup();
    };

    const cleanup = () => {
      window.removeEventListener("pointerdown", startMusic);
      window.removeEventListener("touchstart", startMusic);
      window.removeEventListener("scroll", startMusic);
    };

    window.addEventListener("pointerdown", startMusic, { once: true });
    window.addEventListener("touchstart", startMusic, { once: true });
    window.addEventListener("scroll", startMusic, { once: true });

    return cleanup;
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/music/bonbeuocthe.mp3"
      playsInline
      preload="auto"
      style={{ display: "none" }}
    />
  );
}
