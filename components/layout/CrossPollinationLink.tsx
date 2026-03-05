import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Pillar } from "@/types";

interface CrossPollinationLinkProps {
  targetPillar: Pillar;
  targetSlug?: string;
  externalUrl?: string;
  contextMessage?: string;
}

const PILLAR_CONFIG = {
  MARKETER: {
    color: "#FFA500",
    label: "The Marketer",
    context: "View the growth strategy behind this infrastructure.",
  },
  ARCHITECT: {
    color: "#00F2FF",
    label: "The Architect",
    context: "See the macro system design that enabled this.",
  },
  TECHNOLOGIST: {
    color: "#FF0055",
    label: "The Technologist",
    context: "Inspect the code and tech stack details.",
  },
  BUILDER: {
    color: "#00FF66",
    label: "The Builder",
    context: "Review the execution and deployment process.",
  },
};

export default function CrossPollinationLink({
  targetPillar,
  targetSlug,
  externalUrl,
  contextMessage,
}: CrossPollinationLinkProps) {
  const config = PILLAR_CONFIG[targetPillar];
  const message = contextMessage || config.context;
  const href = externalUrl || `/work/${targetSlug}`;

  const linkContent = (
    <>
      {/* Background glow injected from target color */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-10 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${config.color}33, transparent)`,
        }}
      />

      <div className="relative z-10 flex items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div
              className="h-[1px] w-6 transition-all duration-300 group-hover:w-10"
              style={{ backgroundColor: config.color }}
            />
            <span
              className="text-[10px] font-mono tracking-[0.2em] uppercase font-bold"
              style={{ color: config.color }}
            >
              {config.label}
            </span>
          </div>
          <p className="text-[#a0a0a0] text-sm group-hover:text-[#EDEDED] transition-colors">
            {message}
          </p>
        </div>

        <div
          className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full border border-[#333] bg-[#111] transition-all duration-300 group-hover:scale-110"
          style={{
            borderColor: `${config.color}40`,
            color: config.color,
          }}
        >
          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </div>
      </div>
    </>
  );

  if (externalUrl) {
    return (
      <a
        href={externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block w-full overflow-hidden rounded-xl border border-[#1f1f1f] bg-black p-6 transition-all hover:border-[#333] hover:bg-[#050505]"
      >
        {linkContent}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className="group relative block w-full overflow-hidden rounded-xl border border-[#1f1f1f] bg-black p-6 transition-all hover:border-[#333] hover:bg-[#050505]"
    >
      {linkContent}
    </Link>
  );
}
