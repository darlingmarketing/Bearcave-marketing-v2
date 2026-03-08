"use client";

import React from "react";
import TiltWrapper from "@/components/shared/TiltWrapper";

const ROLES = [
    {
        id: "marketer",
        number: "01",
        title: "The Strategist",
        tagline: "I figure out what will actually grow your business.",
        color: "#FFA500",
        description:
            "Data-driven marketing strategy grounded in how real customers behave. I build acquisition systems, optimize funnels, and design campaigns that produce measurable revenue — not just impressions.",
        skills: ["Growth Marketing", "SEO Architecture", "Funnel Optimization", "Paid Acquisition", "Market Positioning"],
    },
    {
        id: "technologist",
        number: "02",
        title: "The Builder",
        tagline: "I build the tool when the tool doesn't exist yet.",
        color: "#00F2FF",
        description:
            "Full-stack development with a bias toward shipping. Custom tools, interactive applications, and web infrastructure that actually work — not just look good in a mockup.",
        skills: ["Next.js / React", "TypeScript", "API Development", "Cloud Infrastructure", "Web Audio & 3D"],
    },
    {
        id: "architect",
        number: "03",
        title: "The Systems Thinker",
        tagline: "I design the system before touching the keyboard.",
        color: "#00FF66",
        description:
            "Before writing a line of code or launching a campaign, I map out the full system: the data flows, the user journeys, the technical architecture, the edge cases. This is why things I build actually scale.",
        skills: ["System Design", "MarTech Stack Architecture", "Data Pipelines", "Process Automation", "Product Planning"],
    },
];

export default function RoleHighlights() {
    return (
        <section className="py-24 px-6 md:px-12 bg-black border-b border-[#111]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div>
                        <p className="text-[#666] text-[10px] font-mono tracking-[0.4em] uppercase mb-4">
                            How I Work
                        </p>
                        <h2 className="font-serif text-4xl md:text-5xl font-black text-[#EDEDED] tracking-[-0.02em] leading-[0.9]">
                            Strategy, Execution,
                            <br />
                            <span className="text-[#555] italic font-extralight">and the system behind both.</span>
                        </h2>
                    </div>
                    <p className="text-[#666] text-sm max-w-sm leading-relaxed font-light">
                        Most people can do one of these well. The ability to do all three — and
                        know which one a situation calls for — is the actual differentiator.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {ROLES.map((role) => (
                        <TiltWrapper key={role.id} intensity={12} className="h-full">
                            <div className="group flex flex-col h-full p-8 md:p-10 rounded-2xl border border-[#1a1a1a] bg-[#050505] hover:border-[#333] transition-all duration-500 glass-panel">
                                {/* Number + color accent */}
                                <div className="flex items-center justify-between mb-6">
                                    <span
                                        className="font-mono text-[9px] tracking-[0.3em] uppercase"
                                        style={{ color: role.color }}
                                    >
                                        {role.number}
                                    </span>
                                    <div
                                        className="w-1.5 h-1.5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
                                        style={{ backgroundColor: role.color, boxShadow: `0 0 8px ${role.color}66` }}
                                    />
                                </div>

                                <h3 className="font-serif text-2xl font-bold text-[#EDEDED] mb-2">
                                    {role.title}
                                </h3>
                                <p
                                    className="text-sm font-light italic mb-5 leading-relaxed"
                                    style={{ color: role.color }}
                                >
                                    &ldquo;{role.tagline}&rdquo;
                                </p>

                                <p className="text-[#777] text-sm leading-relaxed mb-8 flex-1 font-light">
                                    {role.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {role.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-2.5 py-1 bg-[#0a0a0a] border border-[#1f1f1f] rounded text-[8px] font-mono text-[#555] uppercase tracking-wider group-hover:text-[#888] group-hover:border-[#2a2a2a] transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </TiltWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
