"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cpu, ExternalLink } from "lucide-react";

const QUICK_FACTS = [
    {
        category: "Who",
        items: [
            "Jacob Darling — founder of Darling Marketing & Technology LLC",
            "Marketing strategist + full-stack developer",
            "Available for projects, consulting, and FTE roles",
        ],
    },
    {
        category: "Industries",
        items: [
            "Healthcare Technology",
            "E-Commerce & Hardware",
            "SaaS & Software",
            "Music & Media",
            "Professional Education & Licensing",
        ],
    },
    {
        category: "What I Build",
        items: [
            "Growth marketing systems & campaigns",
            "Custom web tools & applications",
            "Marketing technology stacks",
            "SEO architecture & content engines",
            "Pricing tools, protocol builders, data explorers",
        ],
    },
    {
        category: "Tech Stack",
        items: [
            "Next.js, React, TypeScript",
            "Node.js, REST & GraphQL APIs",
            "Cloud infrastructure (AWS, Vercel, GCP)",
            "Analytics, CRM, ad platform integrations",
            "Web Audio API, Three.js",
        ],
    },
];

export default function PortfolioBrain() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState(QUICK_FACTS[0].category);

    const active = QUICK_FACTS.find((f) => f.category === activeCategory)!;

    return (
        <>
            {/* Floating Trigger */}
            <div className="fixed bottom-4 left-4 z-50">
                <button
                    onClick={() => setIsOpen(true)}
                    className={`
            group flex h-12 w-12 items-center justify-center rounded-full bg-black border border-[#1f1f1f]
            transition-all duration-500 hover:scale-110 hover:border-[#FFA500]
            ${isOpen ? "scale-0 opacity-0 pointer-events-none" : "scale-100 opacity-100"}
          `}
                    aria-label="Quick facts about Jacob"
                >
                    <div className="absolute inset-0 rounded-full animate-pulse bg-gradient-to-tr from-[#FFA500]/10 to-[#FFA500]/5 blur-md pointer-events-none" />
                    <Cpu className="relative z-10 text-[#555] group-hover:text-[#FFA500] transition-colors" size={20} />
                </button>
            </div>

            {/* Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 16, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 16, scale: 0.97 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="fixed bottom-4 left-4 md:left-6 z-50 w-[calc(100vw-2rem)] md:w-[400px] overflow-hidden rounded-xl border border-[#222] bg-black/95 backdrop-blur-2xl shadow-2xl"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-[#1a1a1a] bg-[#050505] px-4 py-3">
                            <div className="flex items-center gap-3">
                                <div className="relative flex h-7 w-7 items-center justify-center rounded border border-[#222] bg-[#111]">
                                    <Cpu size={14} className="text-[#FFA500]" />
                                </div>
                                <div>
                                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#EDEDED] font-mono">
                                        Quick Facts
                                    </h3>
                                    <p className="text-[8px] uppercase tracking-widest text-[#444] font-mono">
                                        Jacob Darling · Darling Marketing & Technology
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="rounded p-1.5 text-[#555] hover:bg-[#111] hover:text-white transition-colors"
                                aria-label="Close"
                            >
                                <X size={14} />
                            </button>
                        </div>

                        {/* Category tabs */}
                        <div className="flex border-b border-[#111] bg-[#050505]">
                            {QUICK_FACTS.map((f) => (
                                <button
                                    key={f.category}
                                    onClick={() => setActiveCategory(f.category)}
                                    className={`flex-1 py-2.5 text-[8px] font-mono tracking-[0.15em] uppercase transition-colors border-b-2 ${activeCategory === f.category
                                            ? "text-[#FFA500] border-[#FFA500]"
                                            : "text-[#444] border-transparent hover:text-[#888]"
                                        }`}
                                >
                                    {f.category}
                                </button>
                            ))}
                        </div>

                        {/* Content */}
                        <div className="p-5">
                            <ul className="space-y-2.5">
                                {active.items.map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <span className="text-[#FFA500] mt-0.5 flex-shrink-0">·</span>
                                        <span className="text-sm text-[#888] font-light leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Footer CTA */}
                        <div className="border-t border-[#111] bg-[#050505] px-5 py-3 flex items-center justify-between">
                            <span className="text-[8px] font-mono tracking-[0.2em] uppercase text-[#333]">
                                Want the full picture?
                            </span>
                            <div className="flex items-center gap-3">
                                <a
                                    href="/about"
                                    className="flex items-center gap-1 text-[9px] font-mono tracking-[0.15em] uppercase text-[#666] hover:text-[#FFA500] transition-colors"
                                >
                                    About <ExternalLink size={10} />
                                </a>
                                <a
                                    href="/work"
                                    className="flex items-center gap-1 text-[9px] font-mono tracking-[0.15em] uppercase text-[#666] hover:text-[#FFA500] transition-colors"
                                >
                                    Work <ExternalLink size={10} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
