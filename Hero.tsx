{"use client";

import HeroDesktop from "./HeroDesktop";
import HeroTablet from "./HeroTablet";
import HeroMobile from "./HeroMobile";

export default function Hero() {
  return (
    <>
      <div className="hidden lg:block">
        <HeroDesktop />
      </div>

      <div className="hidden md:block lg:hidden">
        <HeroTablet />
      </div>

      <div className="block md:hidden">
        <HeroMobile />
      </div>
    </>
  );
}
"}
