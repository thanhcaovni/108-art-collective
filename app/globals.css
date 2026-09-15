@import url("https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:wght@300;400;500&display=swap");

/* =========================================================
   RESET
   ========================================================= */

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  width: 100%;
  height: 100%;
  background: #000;
  overflow: hidden;
}

body {
  width: 100%;
  min-height: 100dvh;
  background: #000;
  color: #fff;
  font-family: "Cormorant Garamond", serif;
  overflow-x: hidden;
  overflow-y: hidden;
}

main {
  width: 100vw;
  min-height: 100dvh;
  background: #000;
  overflow: hidden;
}

/* =========================================================
   HERO
   ========================================================= */

.hero-screen {
  position: relative;
  width: 100vw;
  height: 100dvh;
  overflow: hidden;
  background: #000;
}

.hero-image {
  object-fit: cover;
  object-position: center center;
  user-select: none;
  -webkit-user-drag: none;
}

/* Overlay tối nhẹ */

.hero-vignette {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  background: radial-gradient(
    circle at center,
    transparent 35%,
    rgba(0, 0, 0, 0.55) 100%
  );
}

/* =========================================================
   HEADER
   ========================================================= */

.hero-header {
  position: absolute;
  top: max(24px, env(safe-area-inset-top));
  left: max(24px, env(safe-area-inset-left));
  right: max(24px, env(safe-area-inset-right));
  z-index: 20;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.hero-brand {
  display: flex;
  align-items: center;
  gap: 14px;
}

.hero-brand span {
  font-family: "Cinzel", serif;
  font-size: 12px;
  letter-spacing: 0.35em;
  white-space: nowrap;
}

.hero-nav {
  display: flex;
  align-items: center;
  gap: 34px;

  font-family: "Cinzel", serif;
  font-size: 11px;
  letter-spacing: 0.28em;
}

.hero-nav a {
  color: #fff;
  opacity: 0.82;
  text-decoration: none;
  transition: opacity 0.25s ease;
}

.hero-nav a:hover {
  opacity: 1;
  color: #b31122;
}

.hero-lang {
  font-family: "Cinzel", serif;
  font-size: 11px;
  letter-spacing: 0.28em;
}

.hero-menu {
  display: none;

  width: 34px;
  height: 28px;

  background: transparent;
  border: 0;

  flex-direction: column;
  justify-content: space-between;
}

.hero-menu span {
  width: 100%;
  height: 2px;
  background: #fff;
}

/* =========================================================
   HERO COPY (Desktop only)
   ========================================================= */

.hero-copy {
  position: absolute;
  left: 50%;
  bottom: 18vh;
  transform: translateX(-50%);
  z-index: 20;
  text-align: center;
}

.hero-sub {
  margin-bottom: 18px;
  color: #b31122;

  font-family: "Cinzel", serif;
  font-size: 12px;
  letter-spacing: 0.5em;
}

.hero-copy h1 {
  font-family: "Cinzel", serif;
  font-size: 30px;
  letter-spacing: 0.4em;
}

.hero-desc {
  margin-top: 18px;
  font-size: 12px;
  letter-spacing: 0.35em;
}

/* =========================================================
   FOOTER (Desktop only)
   ========================================================= */

.hero-footer {
  position: absolute;
  left: max(24px, env(safe-area-inset-left));
  right: max(24px, env(safe-area-inset-right));
  bottom: max(24px, env(safe-area-inset-bottom));

  display: flex;
  align-items: center;
  gap: 18px;

  z-index: 20;

  font-family: "Cinzel", serif;
  font-size: 10px;
  letter-spacing: 0.3em;
}

.hero-line {
  flex: 1;
  height: 1px;
  background: rgba(255, 255, 255, 0.35);
}

/* =========================================================
   TABLET PORTRAIT
   ========================================================= */

@media screen and (orientation: portrait) and (min-width: 768px) {

  .hero-nav,
  .hero-lang {
    display: none;
  }

  .hero-menu {
    display: flex;
  }

  .hero-header {
    top: max(22px, env(safe-area-inset-top));
    left: max(24px, env(safe-area-inset-left));
    right: max(24px, env(safe-area-inset-right));
  }

  /* Poster tablet đã có text sẵn */

  .hero-copy,
  .hero-footer {
    display: none;
  }
}

/* =========================================================
   MOBILE PORTRAIT
   ========================================================= */

@media screen and (orientation: portrait) and (max-width: 767px) {

  .hero-nav,
  .hero-lang {
    display: none;
  }

  .hero-menu {
    display: flex;
  }

  .hero-header {
    top: max(16px, env(safe-area-inset-top));
    left: max(18px, env(safe-area-inset-left));
    right: max(18px, env(safe-area-inset-right));
  }

  .hero-brand {
    gap: 10px;
  }

  .hero-brand span {
    font-size: 10px;
    letter-spacing: 0.22em;
  }

  /* Poster mobile đã có text sẵn */

  .hero-copy,
  .hero-footer {
    display: none;
  }
}

/* =========================================================
   LANDSCAPE (Desktop + iPad ngang + Phone ngang)
   ========================================================= */

@media screen and (orientation: landscape) {

  .hero-menu {
    display: none;
  }

  .hero-nav {
    display: flex;
  }

  .hero-lang {
    display: block;
  }

  .hero-copy {
    display: block;
  }

  .hero-footer {
    display: flex;
  }
}

/* =========================================================
   SAFARI / IOS FIX
   ========================================================= */

img {
  display: block;
  max-width: none;
}

picture {
  display: block;
  width: 100%;
  height: 100%;
}
