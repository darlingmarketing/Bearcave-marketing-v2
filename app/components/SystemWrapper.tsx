"use client";

import React, { useState } from "react";
import "../globals.css";
import BottomNav from "./BottomNav";
import LenisProvider from "./LenisProvider";
import SystemHUD from "./SystemHUD";
import FloatingIslandNav from "@/components/layout/FloatingIslandNav";
import AppMobileNav from "@/components/layout/AppMobileNav";
import PortfolioBrain from "@/components/shared/PortfolioBrain";
import SystemBoot from "./SystemBoot";
import { AnimatePresence, motion } from "framer-motion";

export default function SystemWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const [booted, setBooted] = useState(false);

    return (
        <AnimatePresence mode="wait">
            {!booted ? (
                <SystemBoot key="boot" onComplete={() => setBooted(true)} />
            ) : (
                <motion.div
                    key="main-ui"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <LenisProvider>
                        <div className="hidden md:block">
                            <FloatingIslandNav />
                        </div>
                        <main className="pt-0 md:pt-16 pb-20 md:pb-0">{children}</main>
                        <AppMobileNav />
                        <SystemHUD />
                        <PortfolioBrain />
                    </LenisProvider>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
