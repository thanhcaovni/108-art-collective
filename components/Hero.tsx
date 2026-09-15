import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-screen">

      {/* DESKTOP / LANDSCAPE */}
      <div className="hero-desktop">
        <Image
          src="/hero-108.jpg"
          alt="108 Art Collective"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
      </div>

      {/* TABLET PORTRAIT */}
      <div className="hero-tablet">
        <Image
          src="/hero-108-tablet.png"
          alt="108 Tablet"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
      </div>

      {/* MOBILE PORTRAIT */}
      <div className="hero-mobile">
        <Image
          src="/hero-108-mobile.png"
          alt="108 Mobile"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
      </div>

      {/* Overlay */}
      <div className="hero-vignette" />

      {/* Header */}
      <header className="hero-header">
        <div className="hero-brand">
          <Image
            src="/logo108-red.png"
            alt="108 Logo"
            width={42}
            height={42}
            priority
          />

          <span>108 ART COLLECTIVE</span>
        </div>

        <nav className="hero-nav">
          <a>ARTISTS</a>
          <a>INSTITUTE</a>
          <a>EVENTS</a>
          <a>STORE</a>
          <a>JOURNAL</a>
          <a>CONTACT</a>
        </nav>

        <div className="hero-lang">VN / EN</div>

        <button className="hero-menu">
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* Copy */}
      <div className="hero-copy">
        <p className="hero-sub">FROM NOTHING TO INFINITE</p>

        <h1>108 ART COLLECTIVE</h1>

        <p className="hero-desc">ART · PEOPLE · CULTURE</p>
      </div>

      {/* Footer */}
      <footer className="hero-footer">
        <span>HOẠ HỘI 108</span>

        <div className="hero-line" />

        <span>EST. 2026 — SAIGON</span>
      </footer>
    </section>
  );
}
