"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import LabsPreviewModal from "./LabsPreviewModal";
import ProtocolBuilderApp from "./ProtocolBuilderApp";
import PricingToolApp from "./PricingToolApp";
import LicenseExplorerApp from "./LicenseExplorerApp";

const labProjects = [
    {
        id: "protocol-builder",
        title: "Clinical Protocol Builder",
        description: "An intelligent, multi-step state machine for building customized clinical protocols dynamically based on anatomical regions and conditions.",
        color: "from-blue-500/10 to-cyan-500/10",
        border: "border-blue-500/20",
        hoverBorder: "hover:border-blue-500/50",
        component: ProtocolBuilderApp,
    },
    {
        id: "pricing-tool",
        title: "Smart Pricing & Sales Tool",
        description: "Interactive e-commerce tool with dynamic quote building, hardware filtering, and real-time financing calculations.",
        color: "from-emerald-500/10 to-teal-500/10",
        border: "border-emerald-500/20",
        hoverBorder: "hover:border-emerald-500/50",
        component: PricingToolApp,
    },
    {
        id: "license-explorer",
        title: "License Requirements Explorer",
        description: "A data-heavy comparative tool mapping out specific continuing education requirements by state and professional discipline.",
        color: "from-purple-500/10 to-pink-500/10",
        border: "border-purple-500/20",
        hoverBorder: "hover:border-purple-500/50",
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
                    <motion.div
                        key={project.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setActiveLab(project.id)}
                        className={`cursor-pointer flex flex-col p-8 rounded-[2rem] border bg-gradient-to-br bg-neutral-900/40 backdrop-blur-md transition-all duration-300 ${project.color} ${project.border} ${project.hoverBorder}`}
                    >
                        <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                        <p className="text-neutral-400 text-sm leading-relaxed flex-1">{project.description}</p>

                        <div className="mt-8 flex items-center text-sm font-semibold text-white/70 group-hover:text-white transition-colors">
                            <span className="bg-white/10 px-4 py-2 rounded-full inline-block">
                                Launch Preview
                            </span>
                        </div>
                    </motion.div>
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
