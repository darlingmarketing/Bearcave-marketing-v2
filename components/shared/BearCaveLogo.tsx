"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BearCaveLogo({ className = "" }: { className?: string }) {
    return (
        <div className={`relative flex items-center gap-2 group ${className}`}>
            <motion.svg
                width="32"
                height="32"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-10"
            >
                {/* Background Hex / Cave Shape */}
                <motion.path
                    d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z"
                    stroke="url(#logo_gradient)"
                    strokeWidth="4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />

                {/* Abstract 'B' and 'C' Node connections */}
                <motion.circle cx="30" cy="35" r="4" fill="#FFA500" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                <motion.circle cx="70" cy="35" r="4" fill="#00F2FF" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
                <motion.circle cx="50" cy="65" r="6" fill="#FF0055" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }} />

                <motion.path
                    d="M30 35 L50 65 L70 35"
                    stroke="#444"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                />

                <defs>
                    <linearGradient id="logo_gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFA500" />
                        <stop offset="50%" stopColor="#FF0055" />
                        <stop offset="100%" stopColor="#00F2FF" />
                    </linearGradient>
                </defs>
            </motion.svg>

            <div className="flex flex-col -gap-1">
                <span className="font-serif font-black text-xl tracking-tighter text-[#EDEDED] leading-none">
                    BEARCAVE
                </span>
                <span className="font-mono text-[7px] tracking-[0.4em] uppercase text-[#666] leading-none mt-1 group-hover:text-amber-500/50 transition-colors">
                    Systems Architect
                </span>
            </div>

            {/* Underglow */}
            <div className="absolute inset-0 bg-white/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </div>
    );
}
