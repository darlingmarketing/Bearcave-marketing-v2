"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import LabsPreviewModal from "./LabsPreviewModal";
import ProtocolBuilderApp from "./ProtocolBuilderApp";
import PricingToolApp from "./PricingToolApp";
import LicenseExplorerApp from "./LicenseExplorerApp";

const labProjects = [
    {
        id: "protocol-builder",
        title: "Clinical Protocol Builder",
        industry: "Healthcare Technology",
        description: "An intelligent, multi-step state machine for building customized clinical protocols dynamically based on anatomical regions and conditions.",
        color: "from-blue-500/10 to-cyan-500/10",
        border: "border-blue-500/20",
        hoverBorder: "hover:border-blue-500/50",
        accentColor: "#00F2FF",
        caseStudyHref: "/work/clinical-protocol-builder",
        component: ProtocolBuilderApp,
    },
    {
        id: "pricing-tool",
        title: "Smart Pricing & Sales Tool",
        industry: "E-Commerce / Hardware",
        description: "Interactive quote builder with dynamic hardware filtering and real-time financing calculations.",
        color: "from-emerald-500/10 to-teal-500/10",
        border: "border-emerald-500/20",
        hoverBorder: "hover:border-emerald-500/50",
        accentColor: "#FFA500",
        caseStudyHref: "/work/smart-pricing-tool",
        component: PricingToolApp,
    },
    {
        id: "license-explorer",
        title: "License Requirements Explorer",
        industry: "Professional Education",
        description: "A data-heavy comparative tool mapping out specific continuing education requirements by state and professional discipline.",
        color: "from-purple-500/10 to-pink-500/10",
        border: "border-purple-500/20",
        hoverBorder: "hover:border-purple-500/50",
        accentColor: "#00FF66",
        caseStudyHref: "/work/license-explorer",
        component: LicenseExplorerApp,
    }
];

export default function LabsTriggerGrid() {
    const [activeLab, setActiveLab] = useState<string | null>(null);

    const activeProject = labProjects.find((p) => p.id === activeLab);
    const ActiveComponent = activeProject?.component;

    return (
        <div className="w-full">
            <div className="flex flex-col mb-12">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
                    Interactive Labs
                </h2>
                <p className="text-xl text-neutral-400 max-w-2xl">
                    Live previews of custom-built tools, calculators, and applications engineered for previous clients and projects.
                    Experience the functionality directly without leaving the page.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {labProjects.map((project) => (
                    <div key={project.id} className="flex flex-col">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setActiveLab(project.id)}
                            className={`cursor-pointer flex flex-col p-8 rounded-t-[2rem] border-t border-l border-r bg-gradient-to-br bg-neutral-900/40 backdrop-blur-md transition-all duration-300 ${project.color} ${project.border} ${project.hoverBorder} flex-1`}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <span className="font-mono text-[8px] tracking-[0.2em] uppercase" style={{ color: project.accentColor }}>
                                    {project.industry}
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed flex-1">{project.description}</p>

                            <div className="mt-8 flex items-center text-sm font-semibold text-white/70 transition-colors">
                                <span className="bg-white/10 px-4 py-2 rounded-full inline-block hover:bg-white/20 transition-colors">
                                    Launch Preview
                                </span>
                            </div>
                        </motion.div>
                        <Link
                            href={project.caseStudyHref}
                            className="flex items-center justify-between px-8 py-4 border border-t-0 border-neutral-800/60 rounded-b-[2rem] bg-neutral-950/80 text-xs font-mono tracking-[0.15em] uppercase text-neutral-500 hover:text-white hover:border-neutral-600 transition-all"
                        >
                            Read Case Study
                            <ArrowUpRight size={14} />
                        </Link>
                    </div>
                ))}
            </div>

            <LabsPreviewModal
                isOpen={!!activeLab}
                onClose={() => setActiveLab(null)}
                title={activeProject?.title || "Interactive Lab Preview"}
            >
                {ActiveComponent && <ActiveComponent />}
            </LabsPreviewModal>
        </div>
    );
}
