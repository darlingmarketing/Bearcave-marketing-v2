"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import BearCaveLogo from "../shared/BearCaveLogo";

const PILLAR_DETAILS = {
  MARKETER: {
    title: "The Acquisition Engine",
    description: "Algorithmic attribution and high-scale lead generation.",
    projects: ["Venture-Backed SaaS", "Performance Hub"],
    color: "#FFA500"
  },
  ARCHITECT: {
    title: "Macro-System Design",
    description: "High-availability distributed systems and cloud foresight.",
    projects: ["Enterprise Logistics", "Core Infrastructure"],
    color: "#00F2FF"
  },
  TECHNOLOGIST: {
    title: "Engineering Execution",
    description: "Low-latency Web Audio API and real-time processing.",
    projects: ["Digital Audio Workstation", "Performance Lab"],
    color: "#FF0055"
  },
  BUILDER: {
    title: "Product Deployment",
    description: "Shipping high-fidelity products from blueprint to reality.",
    projects: ["STRUM AI", "Piko Studio"],
    color: "#00FF66"
  }
};

const PILLARS = [
  { label: "Marketer", href: "/work/marketing-hub", color: "#FFA500", id: "MARKETER" },
  { label: "Architect", href: "/work/architecture-hub", color: "#00F2FF", id: "ARCHITECT" },
  { label: "Technologist", href: "/work/technology-hub", color: "#FF0055", id: "TECHNOLOGIST" },
  { label: "Builder", href: "/work/strum-ai", color: "#00FF66", id: "BUILDER" },
];

export default function FloatingIslandNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [megaMenuId, setMegaMenuId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-2xl px-4 pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`
          pointer-events-auto mx-auto w-full rounded-full border border-[#1f1f1f] bg-black/60 backdrop-blur-xl
          transition-all duration-500 ease-out shadow-2xl overflow-hidden
          ${scrolled ? "py-3 px-6" : "py-4 px-8"}
        `}
      >
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="relative z-10 transition-transform duration-300 hover:scale-[1.02]"
          >
            <BearCaveLogo />
          </Link>

          <div className="hidden md:flex items-center gap-1 relative z-10">
            {PILLARS.map(({ label, href, color }) => {
              const isActive = pathname === href;
              const isHovered = hoveredLink === href;

              return (
                <Link
                  key={href}
                  href={href}
                  onMouseEnter={() => {
                    setHoveredLink(href);
                    setMegaMenuId(PILLARS.find(p => p.href === href)?.id || null);
                  }}
                  onMouseLeave={() => {
                    setHoveredLink(null);
                    // We'll keep the mega menu open if the mouse enters the menu itself
                  }}
                  className="relative px-4 py-2"
                >
                  {/* Hover background */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        layoutId="nav_hover"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute inset-0 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Active background */}
                  {isActive && (
                    <motion.div
                      layoutId="nav_active"
                      className="absolute inset-0 rounded-full border border-white/10"
                      style={{ backgroundColor: `${color}15` }}
                    />
                  )}

                  <span
                    className={`relative z-10 font-mono text-[10px] tracking-[0.15em] uppercase transition-colors duration-300
                      ${isActive ? "font-bold" : "font-medium"}
                    `}
                    style={{
                      color: isActive ? color : isHovered ? "#EDEDED" : "#888",
                    }}
                  >
                    {label}
                  </span>

                  {/* Active Indicator Dot */}
                  {isActive && (
                    <motion.div
                      layoutId="nav_dot"
                      className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full shadow-[0_0_8px_currentColor]"
                      style={{ backgroundColor: color }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <a
            href="/#contact"
            className="pointer-events-auto relative z-10 hidden md:block px-4 py-2 border border-[#333] rounded-full text-[10px] font-mono tracking-[0.1em] uppercase text-[#a0a0a0] hover:text-white hover:border-[#666] transition-all"
          >
            Contact
          </a>

          {/* Mobile Menu Toggle (Simplified for now) */}
          <button className="md:hidden p-2 text-[#a0a0a0] hover:text-white">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* --- DESKTOP MEGA MENU --- */}
        <AnimatePresence>
          {megaMenuId && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              onMouseEnter={() => setMegaMenuId(megaMenuId)}
              onMouseLeave={() => setMegaMenuId(null)}
              className="hidden md:block pt-6 pb-8 border-t border-white/5"
            >
              <div className="grid grid-cols-4 gap-6">
                {PILLARS.map((p) => {
                  const detail = PILLAR_DETAILS[p.id as keyof typeof PILLAR_DETAILS];
                  const isActive = megaMenuId === p.id;

                  return (
                    <Link
                      key={p.id}
                      href={p.href}
                      className={`
                        p-4 rounded-xl transition-all duration-500
                        ${isActive ? "bg-white/5 border border-white/10" : "opacity-40 hover:opacity-100 grayscale hover:grayscale-0"}
                      `}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: p.color }} />
                        <span className="font-mono text-[9px] uppercase tracking-widest" style={{ color: p.color }}>{p.label}</span>
                      </div>
                      <h4 className="font-serif text-lg font-bold text-white mb-2 leading-tight">
                        {detail.title}
                      </h4>
                      <p className="text-[10px] text-neutral-400 leading-relaxed mb-4 font-light">
                        {detail.description}
                      </p>

                      <div className="space-y-1">
                        {detail.projects.map(proj => (
                          <div key={proj} className="flex items-center gap-2 text-[8px] font-mono text-neutral-500">
                            <div className="w-1 h-[1px] bg-neutral-800" />
                            {proj}
                          </div>
                        ))}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
