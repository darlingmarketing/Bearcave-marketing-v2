import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import ProtocolBuilderApp from "@/components/labs/ProtocolBuilderApp";

export const metadata: Metadata = {
    title: "Clinical Protocol Builder | Jacob Darling Case Study",
    description:
        "How Jacob Darling built an intelligent multi-step clinical protocol generator for a medical devices company — replacing a manual, PDF-based process with a dynamic, real-time web tool.",
};

const CHALLENGES = [
    "Clinicians were manually selecting from a library of 20+ static PDF protocol documents",
    "The wrong protocol for a given condition or treatment phase was a common error",
    "The company had no digital system — everything was printed and handed to practitioners",
    "New practitioners couldn't easily navigate the protocol library without experienced guidance",
];

const SOLUTIONS = [
    "Designed a multi-step state machine (Region → Condition → Phase → Protocol) that eliminates ambiguity",
    "Built a dynamic React application that guides clinicians through selections with animated transitions",
    "Integrated pathology logic that surfaces only relevant conditions for each anatomical region",
    "Deployed as an embeddable web tool that works on tablets used chairside during treatment",
];

const OUTCOMES = [
    { label: "Protocol errors", before: "Frequent", after: "Eliminated by design" },
    { label: "Time to find correct protocol", before: "3–5 min (manual)", after: "< 30 seconds" },
    { label: "Practitioner onboarding", before: "Requires mentor", after: "Self-guided" },
    { label: "Regions covered", before: "PDF library", after: "7 anatomical regions, live" },
];

export default function ClinicalProtocolBuilderPage() {
    return (
        <main className="min-h-screen bg-black px-6 md:px-12 pt-28 pb-24">
            <div className="max-w-6xl mx-auto">

                {/* Breadcrumb */}
                <Link
                    href="/work"
                    className="inline-flex items-center gap-2 text-[#555] hover:text-[#888] transition-colors font-mono text-[10px] tracking-[0.2em] uppercase mb-12"
                >
                    <ArrowLeft size={12} />
                    Back to Work
                </Link>

                {/* Header */}
                <div className="mb-16 max-w-4xl">
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                        <span className="px-3 py-1 bg-[#0a0a0a] border border-[#00F2FF]/30 rounded-full font-mono text-[8px] tracking-[0.2em] uppercase text-[#00F2FF]">
                            Healthcare Technology
                        </span>
                        <span className="px-3 py-1 bg-[#0a0a0a] border border-[#1a1a1a] rounded-full font-mono text-[8px] tracking-[0.2em] uppercase text-[#555]">
                            Custom Web Application
                        </span>
                        <span className="px-3 py-1 bg-[#0a0a0a] border border-[#1a1a1a] rounded-full font-mono text-[8px] tracking-[0.2em] uppercase text-[#555]">
                            UX / Product Design
                        </span>
                    </div>

                    <h1 className="font-serif text-5xl md:text-6xl font-black text-[#EDEDED] tracking-[-0.03em] leading-[0.9] mb-6">
                        Clinical Protocol
                        <br />
                        <span className="text-[#00F2FF]">Builder</span>
                    </h1>

                    <p className="text-xl text-[#888] font-light leading-relaxed max-w-2xl">
                        A medical devices company needed to replace a sprawling PDF protocol
                        library with something a practitioner could navigate in seconds — without
                        errors and without needing a mentor in the room.
                    </p>
                </div>

                {/* Project at a glance */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
                    {[
                        { label: "Industry", value: "Medical Devices / Rehab" },
                        { label: "Company Type", value: "B2B Healthcare Brand" },
                        { label: "My Role", value: "Product Design + Full-Stack Dev" },
                        { label: "Delivery", value: "Embedded Web Application" },
                    ].map(({ label, value }) => (
                        <div key={label} className="p-5 border border-[#1a1a1a] rounded-xl bg-[#050505]">
                            <p className="font-mono text-[8px] tracking-[0.2em] uppercase text-[#444] mb-2">{label}</p>
                            <p className="text-sm text-[#EDEDED] font-light">{value}</p>
                        </div>
                    ))}
                </div>

                {/* The Problem */}
                <div className="mb-16">
                    <p className="text-[#00F2FF] text-[10px] font-mono tracking-[0.3em] uppercase mb-4 flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-[#00F2FF]/40" />
                        The Problem
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#EDEDED] mb-6">
                        A PDF library isn&apos;t a system.
                    </h2>
                    <p className="text-[#888] text-base leading-relaxed max-w-2xl font-light mb-8">
                        The client — an IASTM (instrument-assisted soft tissue mobilization) medical devices brand
                        — had built a comprehensive clinical protocol library over years of research. The problem was
                        delivery: practitioners received a packet of PDFs and were expected to find the right
                        protocol for each patient by searching manually. Errors happened. Time was wasted.
                        New practitioners needed hand-holding.
                    </p>
                    <ul className="space-y-3 max-w-2xl">
                        {CHALLENGES.map((c) => (
                            <li key={c} className="flex items-start gap-3 text-sm text-[#777] font-light">
                                <span className="text-[#FF0055] mt-0.5 flex-shrink-0 font-bold">—</span>
                                {c}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* The Solution */}
                <div className="mb-16">
                    <p className="text-[#00F2FF] text-[10px] font-mono tracking-[0.3em] uppercase mb-4 flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-[#00F2FF]/40" />
                        The Solution
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#EDEDED] mb-6">
                        A guided state machine that makes the right answer obvious.
                    </h2>
                    <p className="text-[#888] text-base leading-relaxed max-w-2xl font-light mb-8">
                        I designed and built a multi-step application that walks clinicians through a branching
                        decision tree: anatomical region → specific condition → treatment phase → tailored protocol.
                        Each selection narrows the next options. The wrong answer becomes impossible to pick,
                        not just discouraged.
                    </p>
                    <ul className="space-y-3 max-w-2xl">
                        {SOLUTIONS.map((s) => (
                            <li key={s} className="flex items-start gap-3 text-sm text-[#777] font-light">
                                <span className="text-[#00F2FF] mt-0.5 flex-shrink-0 font-bold">+</span>
                                {s}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Results */}
                <div className="mb-20">
                    <p className="text-[#00F2FF] text-[10px] font-mono tracking-[0.3em] uppercase mb-4 flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-[#00F2FF]/40" />
                        Results
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#EDEDED] mb-8">
                        Before &amp; After
                    </h2>
                    <div className="border border-[#1a1a1a] rounded-2xl overflow-hidden">
                        <div className="grid grid-cols-3 bg-[#070707] border-b border-[#1a1a1a]">
                            <div className="p-4 font-mono text-[9px] tracking-[0.2em] uppercase text-[#444]">Metric</div>
                            <div className="p-4 font-mono text-[9px] tracking-[0.2em] uppercase text-[#FF0055]/70 border-l border-[#1a1a1a]">Before</div>
                            <div className="p-4 font-mono text-[9px] tracking-[0.2em] uppercase text-[#00F2FF]/70 border-l border-[#1a1a1a]">After</div>
                        </div>
                        {OUTCOMES.map(({ label, before, after }) => (
                            <div key={label} className="grid grid-cols-3 border-b border-[#111] last:border-b-0">
                                <div className="p-4 text-sm text-[#888] font-light">{label}</div>
                                <div className="p-4 text-sm text-[#FF0055]/80 font-light border-l border-[#111]">{before}</div>
                                <div className="p-4 text-sm text-[#00F2FF]/80 font-light border-l border-[#111]">{after}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Live Tool Demo */}
                <div className="mb-24">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <p className="text-[#00F2FF] text-[10px] font-mono tracking-[0.3em] uppercase mb-2 flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-[#00F2FF]/40" />
                                Try It Live
                            </p>
                            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#EDEDED]">
                                This is the actual tool. Right here.
                            </h2>
                        </div>
                        <ArrowUpRight className="text-[#333]" size={32} />
                    </div>
                    <p className="text-[#666] text-sm font-light mb-8 max-w-xl">
                        Not a screenshot. Not a mockup. Select a region, pick a condition, choose a treatment phase,
                        and see the protocol generated instantly.
                    </p>
                    <div className="rounded-2xl overflow-hidden border border-[#1a1a1a]" style={{ height: "600px" }}>
                        <ProtocolBuilderApp />
                    </div>
                </div>

                {/* Navigation */}
                <div className="border-t border-[#111] pt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <Link
                        href="/work"
                        className="inline-flex items-center gap-2 text-[#555] hover:text-[#888] transition-colors font-mono text-[10px] tracking-[0.2em] uppercase"
                    >
                        <ArrowLeft size={12} />
                        All Work
                    </Link>
                    <div className="flex flex-wrap gap-4">
                        <Link
                            href="/work/smart-pricing-tool"
                            className="inline-flex items-center gap-3 px-6 py-3 border border-[#1a1a1a] text-[#888] text-xs font-mono tracking-[0.1em] uppercase hover:text-white hover:border-[#333] transition-all"
                        >
                            Next: Smart Pricing Tool
                            <ArrowUpRight size={14} />
                        </Link>
                    </div>
                </div>

            </div>
        </main>
    );
}
