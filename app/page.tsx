{"use client";

import Intro from "@/components/Intro";
import Hero from "@/components/Hero";

export default function Page() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black">
      <Intro />
      <Hero />
    </main>
  );
}
"}
/* ===== DEVICE ORIENTATION SWITCH ===== */

.hero-desktop,
.hero-tablet,
.hero-mobile {
  position: absolute;
  inset: 0;
}

/* Mặc định desktop */
.hero-tablet,
.hero-mobile {
  display: none;
}

/* iPad dựng dọc */
@media screen and (orientation: portrait) and (min-width: 768px) {
  .hero-desktop {
    display: none;
  }

  .hero-tablet {
    display: block;
  }

  .hero-mobile {
    display: none;
  }
}

/* Điện thoại dựng dọc */
@media screen and (orientation: portrait) and (max-width: 767px) {
  .hero-desktop,
  .hero-tablet {
    display: none;
  }

  .hero-mobile {
    display: block;
  }
}

/* Landscape (desktop + iPad ngang) */
@media screen and (orientation: landscape) {
  .hero-desktop {
    display: block;
  }

  .hero-tablet,
  .hero-mobile {
    display: none;
  }
}
