"use client";

import { useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = async () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.volume = 0.45;
      await audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/bonbeuocthe.mp3"
        loop
        preload="auto"
      />

      <button className="archive-radio" onClick={toggle}>
        <span className="radio-title">108 ARCHIVE RADIO</span>
        <span className="radio-track">Bốn Bể Ước Thề</span>
        <span className="radio-button">{playing ? "❚❚" : "▶"}</span>
      </button>
    </>
  );
}
