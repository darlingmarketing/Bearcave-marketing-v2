"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import BearCaveLogo from "../shared/BearCaveLogo";

const NAV_LINKS = [
  { label: "Work", href: "/work" },
  { label: "Labs", href: "/#labs" },
  { label: "About", href: "/about" },
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
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-xl px-4 pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.2 }}
        className={`
          pointer-events-auto mx-auto w-full rounded-full border border-[#1f1f1f] bg-black/70 backdrop-blur-xl
          transition-all duration-500 ease-out shadow-2xl
          ${scrolled ? "py-3 px-6" : "py-4 px-8"}
        `}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-10 transition-transform duration-300 hover:scale-[1.02]"
          >
            <BearCaveLogo />
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-1 relative z-10">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive =
                href.startsWith("/") && !href.startsWith("/#")
                  ? pathname === href || pathname.startsWith(href + "/")
                  : false;
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
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute inset-0 rounded-full bg-white/5"
                      />
                    )}
                  </AnimatePresence>

                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="nav_active"
                      className="absolute inset-0 rounded-full border border-[#FFA500]/20 bg-[#FFA500]/5"
                    />
                  )}

                  <span
                    className={`relative z-10 font-mono text-[10px] tracking-[0.15em] uppercase transition-colors duration-300
                      ${isActive ? "font-bold text-[#FFA500]" : isHovered ? "text-[#EDEDED]" : "text-[#888]"}
                    `}
                  >
                    {label}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <a
            href="/#contact"
            className="pointer-events-auto relative z-10 hidden md:block px-5 py-2 bg-[#FFA500] rounded-full text-[10px] font-mono font-bold tracking-[0.1em] uppercase text-black hover:bg-[#ffb733] transition-all duration-200"
          >
            Let&apos;s Talk
          </a>

          {/* Mobile Menu hint */}
          <button className="md:hidden p-2 text-[#a0a0a0] hover:text-white">
            <svg
              width="20"
              height="20"
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
