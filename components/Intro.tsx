{"use client";

import Image from \"next/image\";
import { useEffect, useState } from \"react\";

export default function Intro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3800);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <section className=\"fixed inset-0 z-[9999] flex items-center justify-center bg-black intro-screen\">
      <div className=\"intro-smoke\" />

      <Image
        src=\"/seal-108.png\"
        alt=\"108 Seal\"
        width={170}
        height={170}
        priority
        className=\"intro-seal\"
      />

      <div className=\"intro-text\">
        <p className=\"intro-cn\">天地人</p>

        <h1>108 ART COLLECTIVE</h1>

        <p className=\"intro-tagline\">
          FROM NOTHING TO INFINITE
        </p>

        <span>ART · PEOPLE · CULTURE</span>
      </div>
    </section>
  );
}
"}
