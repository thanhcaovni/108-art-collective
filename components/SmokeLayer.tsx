"use client";

export default function SmokeLayer() {
  return (
    <div className="smoke-layer" aria-hidden="true">

      {/* Khói lớn */}
      <span className="smoke smoke-1" />
      <span className="smoke smoke-2" />
      <span className="smoke smoke-3" />
      <span className="smoke smoke-4" />

      {/* Khói thấp sát chân màn hình */}
      <span className="smoke smoke-ground smoke-ground-1" />
      <span className="smoke smoke-ground smoke-ground-2" />

      {/* Tro đỏ */}
      {Array.from({ length: 14 }).map((_, i) => (
        <span key={i} className={`ember ember-${i + 1}`} />
      ))}
    </div>
  );
}
