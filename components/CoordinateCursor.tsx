"use client";

import { useEffect, useState } from "react";

export default function CoordinateCursor() {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    setEnabled(isFinePointer && !reducedMotion);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const handleMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [enabled]);

  if (!enabled || !pos) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-50 hidden font-mono text-[10px] text-stamp/70 md:block"
      style={{ left: pos.x + 14, top: pos.y + 14 }}
    >
      X{String(pos.x).padStart(4, "0")} Y{String(pos.y).padStart(4, "0")}
    </div>
  );
}
