"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Dark Luxury Rebrand",
    category: "Brand Identity",
    year: "2025",
    aspect: "landscape",
    color: "#0a0a0a",
    accent: "#00F2FF",
  },
  {
    id: 2,
    title: "Executive Campaign",
    category: "Campaign Direction",
    year: "2025",
    aspect: "portrait",
    color: "#050a0a",
    accent: "#00bcd4",
  },
  {
    id: 3,
    title: "Systems Interface",
    category: "UI Design",
    year: "2024",
    aspect: "landscape",
    color: "#040404",
    accent: "#00F2FF",
  },
  {
    id: 4,
    title: "Typographic Manifesto",
    category: "Print / Motion",
    year: "2024",
    aspect: "square",
    color: "#080808",
    accent: "#00bcd4",
  },
  {
    id: 5,
    title: "Digital Twilight",
    category: "Photography",
    year: "2025",
    aspect: "portrait",
    color: "#020606",
    accent: "#00F2FF",
  },
  {
    id: 6,
    title: "Authority Poster Series",
    category: "Visual Identity",
    year: "2025",
    aspect: "square",
    color: "#060606",
    accent: "#00bcd4",
  },
];

const aspectDimensions: Record<string, { w: string; h: string }> = {
  landscape: { w: "w-80 md:w-[480px]", h: "h-52 md:h-72" },
  portrait: { w: "w-52 md:w-72", h: "h-72 md:h-[440px]" },
  square: { w: "w-64 md:w-80", h: "h-64 md:h-80" },
};

/** Loupe radius in px */
const LOUPE_R = 80;

/**
 * Premium optical Loupe.
 * Uses `clip-path: circle()` to carve a circular viewport and
 * `backdrop-filter` to apply optical enhancement (brightness ·
 * contrast · saturation) to whatever is rendered beneath it.
 * A decorative ring with crosshair completes the instrument aesthetic.
 */
function Loupe({ x, y, visible }: { x: number; y: number; visible: boolean }) {
  return (
    <>
      {/* ── Optical lens: clip-path circle + backdrop enhancement ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 20,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.18s ease",
          clipPath: `circle(${LOUPE_R}px at ${x}px ${y}px)`,
          WebkitClipPath: `circle(${LOUPE_R}px at ${x}px ${y}px)`,
          backdropFilter: "brightness(1.28) contrast(1.18) saturate(1.4)",
          WebkitBackdropFilter:
            "brightness(1.28) contrast(1.18) saturate(1.4)",
        }}
      />

      {/* ── Loupe ring + crosshair instrument marks ── */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          zIndex: 21,
          left: x,
          top: y,
          width: LOUPE_R * 2,
          height: LOUPE_R * 2,
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.18s ease",
          border: "1px solid rgba(0, 242, 255, 0.5)",
          outline: "1px solid rgba(0,0,0,0.5)",
          boxShadow:
            "0 0 0 5px rgba(0, 242, 255, 0.04), " +
            "0 0 32px rgba(0, 242, 255, 0.14), " +
            "inset 0 0 28px rgba(0, 0, 0, 0.22)",
        }}
      >
        {/* Horizontal crosshair */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "10%",
            right: "10%",
            height: 1,
            background:
              "linear-gradient(90deg, transparent, rgba(0,242,255,0.45) 30%, rgba(0,242,255,0.45) 70%, transparent)",
            transform: "translateY(-50%)",
          }}
        />
        {/* Vertical crosshair */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "10%",
            bottom: "10%",
            width: 1,
            background:
              "linear-gradient(180deg, transparent, rgba(0,242,255,0.45) 30%, rgba(0,242,255,0.45) 70%, transparent)",
            transform: "translateX(-50%)",
          }}
        />
        {/* Centre dot */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 4,
            height: 4,
            borderRadius: "50%",
            background: "#00F2FF",
            boxShadow: "0 0 8px #00F2FF",
          }}
        />
        {/* Cardinal tick marks */}
        {[0, 90, 180, 270].map((deg) => (
          <div
            key={deg}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: 10,
              height: 1,
              background: "rgba(0, 242, 255, 0.55)",
              transformOrigin: "left center",
              transform: `translateY(-50%) rotate(${deg}deg) translateX(${LOUPE_R - 14}px)`,
            }}
          />
        ))}
      </div>
    </>
  );
}

export default function StudioPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

  // Loupe state — updated via rAF for 60 fps performance
  const [loupePos, setLoupePos] = useState({ x: -200, y: -200, visible: false });
  const rafId = useRef<number>(0);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const nx = e.clientX - rect.left;
      const ny = e.clientY - rect.top;
      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() =>
        setLoupePos({ x: nx, y: ny, visible: true })
      );
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    setLoupePos((p) => ({ ...p, visible: false }));
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="px-6 md:px-12 py-16 border-b border-[#1f1f1f]">
        <p className="text-[#00F2FF] text-xs tracking-[0.3em] uppercase mb-4">
          Studio
        </p>
        <h1 className="font-serif text-4xl md:text-6xl font-black">
          Visual Direction
          <br />
          &amp; Identity Work.
        </h1>
      </div>

      {/* Horizontal scroll section */}
      <div ref={containerRef} className="relative" style={{ height: "250vh" }}>
        <div
          className="sticky top-16 h-[calc(100vh-4rem)] overflow-hidden flex items-center relative"
          style={{ cursor: "none" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Gallery track */}
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex items-center gap-8 px-12 will-change-transform"
          >
            {GALLERY_ITEMS.map((item) => {
              const dims = aspectDimensions[item.aspect];
              return (
                <div
                  key={item.id}
                  className={`shrink-0 ${dims.w} ${dims.h} relative group`}
                >
                  <div
                    className="w-full h-full flex flex-col items-center justify-center border border-[#1f1f1f] relative overflow-hidden"
                    style={{ backgroundColor: item.color }}
                  >
                    {/* Grid overlay */}
                    <div
                      className="absolute inset-0 opacity-5"
                      style={{
                        backgroundImage: `linear-gradient(${item.accent} 1px, transparent 1px), linear-gradient(90deg, ${item.accent} 1px, transparent 1px)`,
                        backgroundSize: "40px 40px",
                      }}
                    />
                    {/* Accent diagonal */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(135deg, ${item.accent}08 0%, transparent 60%)`,
                      }}
                    />
                    {/* Number */}
                    <span
                      className="font-serif text-6xl md:text-8xl font-black opacity-10"
                      style={{ color: item.accent }}
                    >
                      {String(item.id).padStart(2, "0")}
                    </span>
                    {/* Hover reveal */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-start justify-end p-6">
                      <p
                        className="text-[10px] tracking-[0.3em] uppercase mb-2"
                        style={{ color: item.accent }}
                      >
                        {item.category} · {item.year}
                      </p>
                      <h3 className="font-serif text-lg font-bold">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Loupe — optical lens using clip-path + backdrop-filter */}
          <Loupe x={loupePos.x} y={loupePos.y} visible={loupePos.visible} />
        </div>
      </div>

      {/* Below scroll section */}
      <div className="px-6 md:px-12 py-16 border-t border-[#1f1f1f]">
        <p className="text-[#a0a0a0] text-sm max-w-xl">
          Creative direction, brand identity, and visual systems built for
          executive-level presence. Every frame intentional.
        </p>
      </div>
    </div>
  );
}
