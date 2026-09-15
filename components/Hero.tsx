"use client";

import HeroDesktop from "./HeroDesktop";
import HeroTablet from "./HeroTablet";
import HeroMobile from "./HeroMobile";

export default function Hero() {
  return (
    <>
      <div className="hero-desktop">
        <HeroDesktop />
      </div>

      <div className="hero-tablet">
        <HeroTablet />
      </div>

      <div className="hero-mobile">
        <HeroMobile />
      </div>
    </>
  );
}
