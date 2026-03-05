"use client";

import React from "react";
import { BarChart3, Binary, Layout } from "lucide-react";

const ROLES = [
    {
        id: "marketer",
        title: "The Marketer",
        icon: <BarChart3 className="text-[#FFA500]" size={32} />,
        color: "#FFA500",
        description: "Data-driven acquisition and conversion strategies. Using performance marketing as a feedback loop for product development.",
        skills: ["Growth Hacking", "SEO Architecture", "Funnel Optimization", "Market Analysis"]
    },
    {
        id: "technologist",
        title: "The Technologist",
        icon: <Binary className="text-[#FF0055]" size={32} />,
        color: "#FF0055",
        description: "Full-stack engineering with a focus on high-performance web applications and real-time audio/visual processing.",
        skills: ["Next.js / React", "Web Audio API", "Edge Infrastructure", "Neural Networks"]
    },
    {
        id: "architect",
        title: "The Dev Architect",
        icon: <Layout className="text-[#00F2FF]" size={32} />,
        color: "#00F2FF",
        description: "Designing scalable, distributed systems. Blueprinting the technical foundation before code is even written.",
        skills: ["System Design", "Cloud Infrastructure", "Database Modeling", "CI/CD Pipelines"]
    }
];

export default function RoleHighlights() {
    return (
        <section className="py-24 px-6 md:px-12 bg-black border-b border-[#111]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center text-center mb-20">
                    <p className="text-[#666] text-[10px] font-mono tracking-[0.4em] uppercase mb-4">
                        The Multi-Hyphenate Advantage
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl font-black text-[#EDEDED] tracking-tighter">
                        Three Pillars. <span className="text-[#333]">One Vision.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {ROLES.map((role) => (
                        <div key={role.id} className="group flex flex-col items-center text-center">
                            <div className="mb-6 p-6 rounded-2xl bg-[#050505] border border-[#1a1a1a] transition-all duration-500 group-hover:scale-110 group-hover:border-[#333] glass-panel relative">
                                {role.icon}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent to-black opacity-0 group-hover:opacity-10 transition-opacity" />
                            </div>

                            <h3 className="font-serif text-2xl font-bold text-[#EDEDED] mb-3">
                                {role.title}
                            </h3>

                            <p className="text-[#888] text-sm leading-relaxed mb-6 max-w-xs font-light">
                                {role.description}
                            </p>

                            <div className="flex flex-wrap justify-center gap-2">
                                {role.skills.map((skill) => (
                                    <span key={skill} className="px-3 py-1 bg-[#111] border border-[#222] rounded text-[9px] font-mono text-[#666] uppercase tracking-wider group-hover:text-[#a0a0a0] transition-colors">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
