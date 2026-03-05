"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Home, LayoutGrid, FileText, MessageSquare, X, Menu } from "lucide-react";

const NAV_ITEMS = [
    { label: "Home", href: "/", icon: Home },
    { label: "Work", href: "/#matrix", icon: LayoutGrid },
    { label: "Resume", href: "/resume", icon: FileText },
    { label: "Contact", href: "/#contact", icon: MessageSquare },
];

export default function AppMobileNav() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[110] md:hidden">
            {/* --- BOTTOM BAR --- */}
            <div className="relative z-20 px-6 pb-6 pt-4 bg-black/80 backdrop-blur-2xl border-t border-white/5 safe-area-bottom">
                <div className="flex items-center justify-between max-w-md mx-auto">
                    {NAV_ITEMS.map((item) => {
                        const isActive = pathname === item.href || (item.href.startsWith("/#") && pathname === "/");
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="flex flex-col items-center gap-1 group"
                            >
                                <div className={`
                  p-2 rounded-xl transition-all duration-300
                  ${isActive ? "bg-white/10 text-white" : "text-neutral-500 group-active:scale-90"}
                `}>
                                    <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                                </div>
                                <span className={`text-[8px] font-mono uppercase tracking-widest transition-colors ${isActive ? "text-white" : "text-neutral-600"}`}>
                                    {item.label}
                                </span>

                                {isActive && (
                                    <motion.div
                                        layoutId="mobile_active_dot"
                                        className="w-1 h-1 rounded-full bg-white shadow-[0_0_8px_white]"
                                    />
                                )}
                            </Link>
                        );
                    })}

                    {/* Command Center Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex flex-col items-center gap-1 group"
                    >
                        <div className={`
              p-2 rounded-xl transition-all duration-300 bg-gradient-to-br from-amber-500 to-rose-500 text-black
              ${isOpen ? "rotate-90 scale-110" : "group-active:scale-95"}
            `}>
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </div>
                        <span className="text-[8px] font-mono uppercase tracking-widest text-neutral-400">Hub</span>
                    </button>
                </div>
            </div>

            {/* --- COMMAND CENTER OVERLAY --- */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-md z-10"
                        />
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed bottom-0 left-0 right-0 z-20 bg-[#050505] border-t border-white/10 rounded-t-[32px] p-8 pb-32 max-h-[80vh] overflow-y-auto"
                        >
                            <div className="w-12 h-1.5 bg-neutral-800 rounded-full mx-auto mb-8" />

                            <div className="grid grid-cols-1 gap-6">
                                <div>
                                    <h4 className="text-[10px] font-mono text-neutral-500 uppercase tracking-[0.3em] mb-4">Core Disciplines</h4>
                                    <div className="grid grid-cols-2 gap-3">
                                        <Link href="/work/marketing-hub" onClick={() => setIsOpen(false)} className="p-4 rounded-2xl bg-white/5 border border-white/5 active:bg-white/10 transition-colors">
                                            <span className="text-amber-500 text-[10px] font-mono block mb-1">01</span>
                                            <span className="text-white font-serif font-bold text-sm">Marketer</span>
                                        </Link>
                                        <Link href="/work/architecture-hub" onClick={() => setIsOpen(false)} className="p-4 rounded-2xl bg-white/5 border border-white/5 active:bg-white/10 transition-colors">
                                            <span className="text-cyan-400 text-[10px] font-mono block mb-1">02</span>
                                            <span className="text-white font-serif font-bold text-sm">Architect</span>
                                        </Link>
                                        <Link href="/work/technology-hub" onClick={() => setIsOpen(false)} className="p-4 rounded-2xl bg-white/5 border border-white/5 active:bg-white/10 transition-colors">
                                            <span className="text-rose-500 text-[10px] font-mono block mb-1">03</span>
                                            <span className="text-white font-serif font-bold text-sm">Technologist</span>
                                        </Link>
                                        <Link href="/work/strum-ai" onClick={() => setIsOpen(false)} className="p-4 rounded-2xl bg-white/5 border border-white/5 active:bg-white/10 transition-colors">
                                            <span className="text-emerald-400 text-[10px] font-mono block mb-1">04</span>
                                            <span className="text-white font-serif font-bold text-sm">Builder</span>
                                        </Link>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <h4 className="text-[10px] font-mono text-neutral-500 uppercase tracking-[0.3em] mb-4">Ecosystem</h4>
                                    <div className="space-y-2">
                                        <Link href="/work/strum-ai" onClick={() => setIsOpen(false)} className="flex items-center justify-between p-4 rounded-2xl bg-[#080808] border border-white/5">
                                            <span className="text-white font-bold text-xs uppercase tracking-wider">STRUM AI</span>
                                            <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 text-[8px] font-mono">Live</span>
                                        </Link>
                                        <Link href="/work/piko-studio" onClick={() => setIsOpen(false)} className="flex items-center justify-between p-4 rounded-2xl bg-[#080808] border border-white/5">
                                            <span className="text-white font-bold text-xs uppercase tracking-wider">Piko Studio</span>
                                            <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-500 text-[8px] font-mono">Archive</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
