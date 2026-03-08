import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Work & Case Studies | Jacob Darling",
    description:
        "Real tools, real clients, real results. See how Jacob Darling has applied marketing strategy and technical execution across healthcare, e-commerce, and professional education.",
};

const CASE_STUDIES = [
    {
        title: "Clinical Protocol Builder",
        industry: "Healthcare Technology",
        industryColor: "#00F2FF",
        type: "Custom Web Application",
        teaser:
            "An IASTM medical devices brand needed to replace a PDF protocol library with something practitioners could navigate in under 30 seconds — without errors, without a mentor in the room.",
        problemSnippet: "Protocol selection errors. Manual PDFs. No digital system.",
        solutionSnippet: "A guided state-machine app: Region → Condition → Phase → Protocol.",
        href: "/work/clinical-protocol-builder",
        hasLiveDemo: true,
    },
    {
        title: "Smart Pricing & Sales Tool",
        industry: "E-Commerce / Hardware",
        industryColor: "#FFA500",
        type: "Interactive Sales Tool",
        teaser:
            "A $3,000 instrument set sale was taking 3 email chains to close. I built a live quote builder that produces a full proposal with financing estimates in a single sales call.",
        problemSnippet: "Manual PDF quotes. No integrated financing. High-friction close.",
        solutionSnippet: "Live quote builder + automatic financing calculation at threshold.",
        href: "/work/smart-pricing-tool",
        hasLiveDemo: true,
    },
    {
        title: "License Requirements Explorer",
        industry: "Professional Education",
        industryColor: "#00FF66",
        type: "Data Tool",
        teaser:
            "Healthcare practitioners needed to verify their CE requirements before buying a course. I built a filterable data tool that answers the question instantly — by state and profession.",
        problemSnippet: "Pre-purchase CE requirement confusion. High helpline volume. Lost sales.",
        solutionSnippet: "Filterable explorer: state × discipline → hours, cycle, board rules.",
        href: "/work/license-explorer",
        hasLiveDemo: true,
    },
];

export default function WorkPage() {
    return (
        <main className="min-h-screen bg-black px-6 md:px-12 pt-32 pb-24">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="mb-20 max-w-4xl">
                    <p className="text-[#FFA500] text-[10px] font-mono tracking-[0.3em] uppercase mb-4 flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-[#FFA500]" />
                        Proof of Work
                    </p>
                    <h1 className="font-serif text-5xl md:text-7xl font-black text-[#EDEDED] tracking-[-0.03em] leading-[0.9] mb-6">
                        What I&apos;ve Built.
                        <br />
                        <span className="text-[#555] italic font-extralight">What it solved.</span>
                    </h1>
                    <p className="text-[#888] text-lg max-w-xl leading-relaxed font-light">
                        These aren&apos;t mockups. Each of these is a real tool built for a real client —
                        with a live interactive demo embedded in every case study.
                    </p>
                </div>

                {/* Industries strip */}
                <div className="flex flex-wrap gap-x-8 gap-y-3 mb-20 pb-20 border-b border-[#0f0f0f]">
                    {[
                        { label: "Healthcare Technology", color: "#00F2FF" },
                        { label: "Medical Devices / IASTM", color: "#00F2FF" },
                        { label: "E-Commerce / Hardware", color: "#FFA500" },
                        { label: "Professional Education", color: "#00FF66" },
                        { label: "SaaS & Software", color: "#888" },
                        { label: "Music & Media", color: "#888" },
                    ].map(({ label, color }) => (
                        <div key={label} className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full" style={{ backgroundColor: color, opacity: color === "#888" ? 0.3 : 0.7 }} />
                            <span className="font-mono text-[9px] tracking-[0.2em] uppercase" style={{ color: color === "#888" ? "#444" : "#666" }}>
                                {label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Case Studies */}
                <div className="space-y-6">
                    {CASE_STUDIES.map((cs, i) => (
                        <Link
                            key={cs.href}
                            href={cs.href}
                            className="group block"
                        >
                            <div className="relative p-8 md:p-12 border border-[#1a1a1a] rounded-2xl bg-[#030303] hover:border-[#2a2a2a] hover:bg-[#050505] transition-all duration-500">

                                {/* Number */}
                                <span
                                    className="absolute top-8 right-8 md:top-12 md:right-12 font-mono text-[80px] leading-none font-black opacity-[0.04] select-none"
                                    style={{ color: cs.industryColor }}
                                >
                                    0{i + 1}
                                </span>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
                                    {/* Left */}
                                    <div>
                                        <div className="flex flex-wrap items-center gap-3 mb-5">
                                            <span
                                                className="font-mono text-[9px] tracking-[0.2em] uppercase"
                                                style={{ color: cs.industryColor }}
                                            >
                                                {cs.industry}
                                            </span>
                                            <span className="h-[1px] w-4 bg-[#222]" />
                                            <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#444]">
                                                {cs.type}
                                            </span>
                                            {cs.hasLiveDemo && (
                                                <>
                                                    <span className="h-[1px] w-4 bg-[#222]" />
                                                    <span className="flex items-center gap-1.5 font-mono text-[9px] tracking-[0.2em] uppercase text-[#444]">
                                                        <span className="w-1 h-1 rounded-full bg-[#00FF66] animate-pulse" />
                                                        Live Demo
                                                    </span>
                                                </>
                                            )}
                                        </div>

                                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#EDEDED] mb-4 group-hover:text-white transition-colors leading-tight">
                                            {cs.title}
                                        </h2>

                                        <p className="text-[#666] text-base leading-relaxed font-light">
                                            {cs.teaser}
                                        </p>
                                    </div>

                                    {/* Right */}
                                    <div className="space-y-4">
                                        <div className="p-5 border border-[#111] rounded-xl bg-black">
                                            <p className="font-mono text-[8px] tracking-[0.2em] uppercase text-[#FF0055]/60 mb-2">The problem</p>
                                            <p className="text-sm text-[#666] font-light">{cs.problemSnippet}</p>
                                        </div>
                                        <div className="p-5 border border-[#111] rounded-xl bg-black">
                                            <p className="font-mono text-[8px] tracking-[0.2em] uppercase mb-2" style={{ color: `${cs.industryColor}60` }}>
                                                The solution
                                            </p>
                                            <p className="text-sm text-[#666] font-light">{cs.solutionSnippet}</p>
                                        </div>

                                        <div className="flex items-center gap-3 pt-2">
                                            <span
                                                className="font-mono text-[10px] tracking-[0.2em] uppercase transition-colors group-hover:text-white text-[#555]"
                                            >
                                                Read case study
                                            </span>
                                            <ArrowUpRight
                                                size={16}
                                                className="transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#555] group-hover:text-white"
                                                style={{ color: undefined }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* More Work Coming */}
                <div className="mt-12 p-8 border border-dashed border-[#1a1a1a] rounded-2xl text-center">
                    <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#333] mb-3">More case studies being added</p>
                    <p className="text-[#555] text-sm font-light">
                        SaaS growth marketing, music tech, and additional healthcare projects coming soon.
                    </p>
                </div>

                {/* CTA bar */}
                <div className="mt-16 pt-16 border-t border-[#111] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div>
                        <p className="text-[#888] text-base font-light mb-1">Want to see something specific?</p>
                        <p className="text-[#444] text-sm font-light">I can walk you through any of these on a call.</p>
                    </div>
                    <a
                        href="/#contact"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-[#FFA500] text-black text-sm font-bold tracking-[0.1em] uppercase hover:bg-[#ffb733] transition-all duration-300 flex-shrink-0"
                    >
                        Let&apos;s Talk
                    </a>
                </div>

            </div>
        </main>
    );
}
