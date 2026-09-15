"use client";

import HeroDesktop from "./HeroDesktop";
import HeroTablet from "./HeroTablet";
import HeroMobile from "./HeroMobile";

export default function Hero() {
  return (
    <>
      {/* Desktop từ 1280px trở lên */}
      <div className="hidden xl:block">
        <HeroDesktop />
      </div>

      {/* Tablet từ 768 đến 1279px */}
      <div className="hidden md:block xl:hidden">
        <HeroTablet />
      </div>

      {/* Mobile dưới 768px */}
      <div className="block md:hidden">
        <HeroMobile />
      </div>
    </>
  );
}
