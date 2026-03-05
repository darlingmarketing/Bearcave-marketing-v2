"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Pillar } from "@/types";
import TiltWrapper from "@/components/shared/TiltWrapper";

// We map our 4 pillars to display data
const PILLARS: {
  id: Pillar;
  title: string;
  subtitle: string;
  description: string;
  link: string;
  color: string;
}[] = [
    {
      id: "MARKETER",
      title: "The Marketer",
      subtitle: "Strategy & Growth",
      description:
        "Data-driven campaigns, SEO architecture, and audience engagement models that convert attention into sustainable revenue.",
      link: "/work/marketing-hub", // Flat structure mock link
      color: "#FFA500", // Orange
    },
    {
      id: "ARCHITECT",
      title: "The Architect",
      subtitle: "Systems & Foresight",
      description:
        "Holistic system design and macro-level planning. Building scalable foundations before a single line of code is written.",
      link: "/work/architecture-hub",
      color: "#00F2FF", // Cyan
    },
    {
      id: "TECHNOLOGIST",
      title: "The Technologist",
      subtitle: "Code & Infrastructure",
      description:
        "Full-stack engineering, cloud infrastructure, and modern tech stacks that power high-performance web applications.",
      link: "/work/technology-hub",
      color: "#FF0055", // Pink/Red
    },
    {
      id: "BUILDER",
      title: "The Builder",
      subtitle: "Execution & Deployment",
      description:
        "Getting hands dirty. Relentless execution, shipping products, and turning blueprints into tangible realities.",
      link: "/work/strum-ai",
      color: "#00FF66", // Green
    },
  ];

export default function DisciplinaryMatrix() {
  const [hoveredPillar, setHoveredPillar] = useState<Pillar | null>(null);

  return (
    <section
      id="matrix"
      className="py-24 md:py-32 px-6 md:px-12 bg-black border-b border-[#111]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="text-[#a0a0a0] text-[10px] font-mono tracking-[0.3em] uppercase mb-4 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#333]" />
              Operational Capabilities
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black text-[#EDEDED] tracking-[-0.02em]">
              The Disciplinary
              <br />
              Matrix
            </h2>
          </div>
          <p className="text-[#888] text-sm md:text-base max-w-md leading-relaxed">
            Hover to isolate operational frameworks. Select a discipline to dive
            into flat-architecture case studies.
          </p>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {PILLARS.map((pillar) => {
            const isHovered = hoveredPillar === pillar.id;
            const isOtherHovered =
              hoveredPillar !== null && hoveredPillar !== pillar.id;

            return (
              <TiltWrapper
                key={pillar.id}
                intensity={10}
                className={`flex flex-col h-full`}
              >
                <div
                  onMouseEnter={() => setHoveredPillar(pillar.id)}
                  onMouseLeave={() => setHoveredPillar(null)}
                  className={`
                    relative group overflow-hidden rounded-2xl p-8 md:p-12 h-full
                    transition-all duration-700 ease-out cursor-pointer min-h-[340px] md:min-h-[420px] flex flex-col justify-between
                    ${isOtherHovered ? "opacity-20 grayscale-[80%] scale-[0.98] blur-[1px]" : "opacity-100 scale-100 shadow-2xl"}
                    ${isHovered ? "border-[#333] shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] z-20" : "hover:border-[#222] z-10"}
                    glass-panel
                  `}
                >
                  {/* Accent glow on hover */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-1000 pointer-events-none`}
                    style={{
                      background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${pillar.color}33, transparent 40%)`,
                    }}
                  />

                  {/* Decorative Pattern */}
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                    <div className="font-mono text-[80px] leading-none font-black select-none tracking-tighter" style={{ color: pillar.color }}>
                      0{PILLARS.indexOf(pillar) + 1}
                    </div>
                  </div>

                  {/* Header */}
                  <div className="relative z-10 transition-transform duration-500 group-hover:translate-x-2">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: pillar.color }} />
                      <span
                        className="font-mono text-[10px] tracking-[0.2em] uppercase transition-colors duration-500"
                        style={{ color: isHovered ? pillar.color : "#666" }}
                      >
                        {pillar.subtitle}
                      </span>
                    </div>
                    <h3 className="font-serif text-3xl md:text-5xl font-bold text-[#EDEDED] mt-1 tracking-[-0.02em]">
                      {pillar.title}
                    </h3>
                  </div>

                  {/* Hover Reveal Content */}
                  <div className="relative z-10 transition-all duration-700 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 mt-8">
                    <p className="text-[#a0a0a0] text-base leading-relaxed max-w-sm mb-10 font-light">
                      {pillar.description}
                    </p>

                    <Link
                      href={pillar.link}
                      className="inline-flex items-center gap-4 text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#EDEDED] group-hover:text-white transition-all group/link"
                    >
                      <span className="relative">
                        View Protocol
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover/link:w-full" />
                      </span>
                      <ArrowUpRight
                        size={18}
                        className="transition-transform duration-500 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                        style={{ color: pillar.color }}
                      />
                    </Link>
                  </div>

                  {/* Default icon/indicator when not hovered */}
                  <div className="absolute bottom-12 right-12 text-[#111] group-hover:opacity-0 transition-all duration-500 group-hover:scale-150 transform">
                    <ArrowUpRight size={64} strokeWidth={0.5} />
                  </div>
                </div>
              </TiltWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
