"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Pillar } from "@/types";
import TiltWrapper from "@/components/shared/TiltWrapper";

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
      title: "The Strategist",
      subtitle: "Growth & Revenue",
      description:
        "Building acquisition systems that turn traffic into revenue. Data-driven campaigns, SEO architecture, funnel design, and conversion optimization that produces results you can measure.",
      link: "/work",
      color: "#FFA500",
    },
    {
      id: "ARCHITECT",
      title: "The Planner",
      subtitle: "Systems & Scalability",
      description:
        "Designing the full system before the first line of code. Technical architecture, MarTech stack design, and macro-level planning that prevents expensive rebuilds six months later.",
      link: "/work",
      color: "#00F2FF",
    },
    {
      id: "TECHNOLOGIST",
      title: "The Developer",
      subtitle: "Code & Delivery",
      description:
        "Full-stack engineering that actually ships. Custom tools, web applications, and infrastructure built with modern stacks — from Next.js to cloud infrastructure to real-time data systems.",
      link: "/work",
      color: "#FF0055",
    },
    {
      id: "BUILDER",
      title: "The Executor",
      subtitle: "From Blueprint to Live",
      description:
        "Getting it done. I take a project from idea to deployed product, managing the full lifecycle — strategy, design, build, launch, and iteration. No handoff chaos.",
      link: "/work",
      color: "#00FF66",
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
              What I Do
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black text-[#EDEDED] tracking-[-0.02em]">
              Four Ways
              <br />
              I Add Value
            </h2>
          </div>
          <p className="text-[#888] text-sm md:text-base max-w-md leading-relaxed font-light">
            Hover any area to explore. Each represents a different way I work with
            clients — and I can do all four on the same engagement.
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
                        See My Work
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
