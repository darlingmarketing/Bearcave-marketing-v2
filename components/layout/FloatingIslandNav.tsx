"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const PILLARS = [
  { label: "Marketer", href: "/work/marketing-hub", color: "#FFA500" },
  { label: "Architect", href: "/work/architecture-hub", color: "#00F2FF" },
  { label: "Technologist", href: "/work/technology-hub", color: "#FF0055" },
  { label: "Builder", href: "/work/piko-studio", color: "#00FF66" },
];

export default function FloatingIslandNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

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
            className="font-serif font-black text-xl tracking-tighter text-[#EDEDED] hover:text-white transition-colors relative z-10 group"
          >
            BEARCAVE
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FFA500] transition-all duration-300 group-hover:w-full" />
          </Link>

          <div className="hidden md:flex items-center gap-1 relative z-10">
            {PILLARS.map(({ label, href, color }) => {
              const isActive = pathname === href;
              const isHovered = hoveredLink === href;

              return (
                <Link
                  key={href}
                  href={href}
                  onMouseEnter={() => setHoveredLink(href)}
                  onMouseLeave={() => setHoveredLink(null)}
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
      </motion.nav>
    </div>
  );
}
