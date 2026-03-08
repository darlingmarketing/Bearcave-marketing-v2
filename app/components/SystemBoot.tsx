"use client";

import { useEffect, useState, useRef } from "react";

const BOOT_LINES = [
  "LOADING DARLING MARKETING & TECHNOLOGY...",
  "MOUNTING PROOF REGISTRY...",
  "CONNECTING TO CASE STUDIES...",
  "SYSTEM READY.",
];

export default function SystemBoot({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [lineIdx, setLineIdx] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [showSkip, setShowSkip] = useState(false);
  const doneRef = useRef(false);

  const finish = () => {
    if (doneRef.current) return;
    doneRef.current = true;
    setExiting(true);
    setTimeout(onComplete, 500);
  };

  // Show skip button after 0.5s
  useEffect(() => {
    const t = setTimeout(() => setShowSkip(true), 500);
    return () => clearTimeout(t);
  }, []);

  // Progress — total ~1.4s
  useEffect(() => {
    const duration = 1400;
    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setProgress(pct);
      const lineTarget = Math.floor((pct / 100) * (BOOT_LINES.length - 1));
      setLineIdx(lineTarget);
      if (pct < 100) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(finish, 300);
      }
    };
    requestAnimationFrame(tick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
      style={{
        opacity: exiting ? 0 : 1,
        transition: "opacity 0.5s ease-in-out",
        pointerEvents: exiting ? "none" : "all",
      }}
    >
      {/* Corner accents */}
      <div className="absolute top-6 left-6 w-10 h-10 border-t border-l border-[#00F2FF]/30" />
      <div className="absolute top-6 right-6 w-10 h-10 border-t border-r border-[#00F2FF]/30" />
      <div className="absolute bottom-6 left-6 w-10 h-10 border-b border-l border-[#00F2FF]/30" />
      <div className="absolute bottom-6 right-6 w-10 h-10 border-b border-r border-[#00F2FF]/30" />

      {/* Center content */}
      <div className="flex flex-col items-center gap-8 w-full max-w-xs px-8">
        {/* Logo mark */}
        <div className="flex flex-col items-center gap-1 text-center">
          <span
            className="font-serif text-3xl font-black tracking-[0.12em] uppercase"
            style={{ color: "#FFA500", textShadow: "0 0 30px #FFA50066" }}
          >
            Jacob Darling
          </span>
          <span className="font-mono text-[9px] tracking-[0.35em] text-[#444] uppercase">
            Darling Marketing &amp; Technology
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full flex flex-col gap-2">
          <div className="w-full h-px bg-[#111] relative overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 transition-none"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(to right, #FFA50044, #FFA500)",
                boxShadow: "0 0 10px #FFA500",
              }}
            />
          </div>
          <div className="flex justify-between items-center">
            <span className="font-mono text-[9px] text-[#333] tracking-[0.2em] uppercase">
              Loading
            </span>
            <span
              className="font-mono text-[9px] tracking-[0.2em] tabular-nums"
              style={{ color: "#FFA500" }}
            >
              {String(progress).padStart(3, "0")}%
            </span>
          </div>
        </div>

        {/* Boot log */}
        <div className="w-full flex flex-col gap-1.5">
          {BOOT_LINES.map((line, i) => (
            <div
              key={line}
              className="font-mono text-[9px] tracking-[0.12em] flex items-center gap-2 transition-all duration-200"
              style={{
                color: i <= lineIdx ? "#FFA500" : "#1f1f1f",
                opacity: i <= lineIdx ? 1 : 0.3,
              }}
            >
              <span style={{ color: i < lineIdx ? "#FFA500" : i === lineIdx ? "#FFA500" : "#1f1f1f" }}>
                {i < lineIdx ? "▸" : i === lineIdx ? "▶" : "·"}
              </span>
              {line}
            </div>
          ))}
        </div>
      </div>

      {/* Skip button */}
      <button
        onClick={finish}
        className="absolute bottom-8 right-8 font-mono text-[9px] tracking-[0.2em] uppercase text-[#333] hover:text-[#666] transition-colors"
        style={{ opacity: showSkip ? 1 : 0, transition: "opacity 0.4s ease" }}
      >
        Skip →
      </button>
    </div>
  );
}
