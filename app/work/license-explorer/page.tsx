import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import LicenseExplorerApp from "@/components/labs/LicenseExplorerApp";

export const metadata: Metadata = {
    title: "License Requirements Explorer | Jacob Darling Case Study",
    description:
        "How Jacob Darling built a data-heavy comparative tool mapping continuing education requirements by state and professional discipline for a healthcare education company.",
};

const CHALLENGES = [
    "Continuing education requirements vary dramatically by state AND profession — PT, OT, AT, and DC all have different rules in every jurisdiction",
    "Practitioners were calling the company helpline or searching multiple state board websites just to understand their renewal requirements",
    "The company's course catalog had no way to show which courses satisfied requirements in a practitioner's specific state",
    "A single lookup tool would need to surface: CE hours, renewal cycle, board-specific regulations, and official state board links",
];

const SOLUTIONS = [
    "Designed a filterable explorer: select a state + professional discipline and instantly see CE hours, renewal cycle, and special regulations",
    "Built a dynamic data engine where every state/discipline combination renders from a structured data layer",
    "Surfaced board-specific regulatory notes (ethics requirements, approved sponsor rules, etc.) as contextual alerts",
    "Linked directly to official state board websites so practitioners can self-verify without another search",
];

const OUTCOMES = [
    { label: "Support calls for CE requirements", before: "High volume, repetitive", after: "Self-serve via tool" },
    { label: "Time for practitioner to get answer", before: "10–20 min (multi-site search)", after: "< 60 seconds" },
    { label: "States x Disciplines covered", before: "None (no digital tool)", after: "Matrix of states × 4 professions" },
    { label: "Drop-off on CE purchase decision", before: "High (friction to understand need)", after: "Reduced by clarity" },
];

const PROFESSIONS = ["Physical Therapy (PT)", "Occupational Therapy (OT)", "Athletic Training (AT)", "Chiropractic (DC)"];
const STATES_SAMPLE = ["California — 30 CE hrs / 2yr cycle", "New York — 36 CE hrs / 3yr cycle", "Texas — 30 CE hrs / 2yr cycle"];

export default function LicenseExplorerPage() {
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
                        <span className="px-3 py-1 bg-[#0a0a0a] border border-[#00FF66]/30 rounded-full font-mono text-[8px] tracking-[0.2em] uppercase text-[#00FF66]">
                            Professional Education
                        </span>
                        <span className="px-3 py-1 bg-[#0a0a0a] border border-[#1a1a1a] rounded-full font-mono text-[8px] tracking-[0.2em] uppercase text-[#555]">
                            Data Tool
                        </span>
                        <span className="px-3 py-1 bg-[#0a0a0a] border border-[#1a1a1a] rounded-full font-mono text-[8px] tracking-[0.2em] uppercase text-[#555]">
                            Healthcare Licensing
                        </span>
                    </div>

                    <h1 className="font-serif text-5xl md:text-6xl font-black text-[#EDEDED] tracking-[-0.03em] leading-[0.9] mb-6">
                        License Requirements
                        <br />
                        <span className="text-[#00FF66]">Explorer</span>
                    </h1>

                    <p className="text-xl text-[#888] font-light leading-relaxed max-w-2xl">
                        Healthcare practitioners in 4 different professional disciplines need to know their
                        continuing education requirements before they&apos;ll buy a course. This tool makes
                        the answer instant — by state, by profession, with all the board-specific fine print included.
                    </p>
                </div>

                {/* Project at a glance */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
                    {[
                        { label: "Industry", value: "Professional Education / Healthcare" },
                        { label: "Company Type", value: "CE Provider / Medical Training" },
                        { label: "My Role", value: "Product Design + Full-Stack Dev" },
                        { label: "Data scope", value: "4 Professions × Multiple States" },
                    ].map(({ label, value }) => (
                        <div key={label} className="p-5 border border-[#1a1a1a] rounded-xl bg-[#050505]">
                            <p className="font-mono text-[8px] tracking-[0.2em] uppercase text-[#444] mb-2">{label}</p>
                            <p className="text-sm text-[#EDEDED] font-light">{value}</p>
                        </div>
                    ))}
                </div>

                {/* Professions covered */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {PROFESSIONS.map((p) => (
                        <div key={p} className="flex items-center gap-2 p-4 border border-[#1a1a1a] rounded-xl bg-[#050505]">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#00FF66] flex-shrink-0" />
                            <span className="text-xs text-[#777] font-light">{p}</span>
                        </div>
                    ))}
                </div>

                {/* The Problem */}
                <div className="mb-16">
                    <p className="text-[#00FF66] text-[10px] font-mono tracking-[0.3em] uppercase mb-4 flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-[#00FF66]/40" />
                        The Problem
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#EDEDED] mb-6">
                        &ldquo;Do I even need this course?&rdquo; was killing conversions.
                    </h2>
                    <p className="text-[#888] text-base leading-relaxed max-w-2xl font-light mb-8">
                        The client sold continuing education courses to licensed healthcare professionals —
                        physical therapists, occupational therapists, athletic trainers, and chiropractors.
                        The problem: every state has different CE hour requirements, different renewal cycles,
                        and different board-specific rules. Before a practitioner could decide whether to
                        buy a course, they needed to know whether it counted toward their renewal. That
                        question was answered by calling a helpline or searching five different state board sites.
                        Many just didn&apos;t bother, and the sale was lost.
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
                    <p className="text-[#00FF66] text-[10px] font-mono tracking-[0.3em] uppercase mb-4 flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-[#00FF66]/40" />
                        The Solution
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#EDEDED] mb-6">
                        Answer the question before they have to ask it.
                    </h2>
                    <p className="text-[#888] text-base leading-relaxed max-w-2xl font-light mb-8">
                        I built a filterable data explorer: a practitioner selects their state and their
                        profession, and the tool instantly surfaces exactly what they need to know —
                        hours required, renewal cycle, state-specific regulations, and a direct link to
                        their licensing board. The tool removes the hesitation from the buying process
                        by answering the pre-purchase question with zero friction.
                    </p>
                    <ul className="space-y-3 max-w-2xl">
                        {SOLUTIONS.map((s) => (
                            <li key={s} className="flex items-start gap-3 text-sm text-[#777] font-light">
                                <span className="text-[#00FF66] mt-0.5 flex-shrink-0 font-bold">+</span>
                                {s}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Sample data callout */}
                <div className="mb-16 p-6 border border-[#00FF66]/10 rounded-2xl bg-[#00FF66]/[0.02]">
                    <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#00FF66]/60 mb-4">Sample data: PT license in 3 states</p>
                    <div className="space-y-2">
                        {STATES_SAMPLE.map((s) => (
                            <div key={s} className="flex items-center gap-2 text-sm text-[#666] font-light">
                                <span className="text-[#00FF66]/40">·</span> {s}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Results */}
                <div className="mb-20">
                    <p className="text-[#00FF66] text-[10px] font-mono tracking-[0.3em] uppercase mb-4 flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-[#00FF66]/40" />
                        Results
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#EDEDED] mb-8">
                        Before &amp; After
                    </h2>
                    <div className="border border-[#1a1a1a] rounded-2xl overflow-hidden">
                        <div className="grid grid-cols-3 bg-[#070707] border-b border-[#1a1a1a]">
                            <div className="p-4 font-mono text-[9px] tracking-[0.2em] uppercase text-[#444]">Metric</div>
                            <div className="p-4 font-mono text-[9px] tracking-[0.2em] uppercase text-[#FF0055]/70 border-l border-[#1a1a1a]">Before</div>
                            <div className="p-4 font-mono text-[9px] tracking-[0.2em] uppercase text-[#00FF66]/70 border-l border-[#1a1a1a]">After</div>
                        </div>
                        {OUTCOMES.map(({ label, before, after }) => (
                            <div key={label} className="grid grid-cols-3 border-b border-[#111] last:border-b-0">
                                <div className="p-4 text-sm text-[#888] font-light">{label}</div>
                                <div className="p-4 text-sm text-[#FF0055]/80 font-light border-l border-[#111]">{before}</div>
                                <div className="p-4 text-sm text-[#00FF66]/80 font-light border-l border-[#111]">{after}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Live Demo */}
                <div className="mb-24">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <p className="text-[#00FF66] text-[10px] font-mono tracking-[0.3em] uppercase mb-2 flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-[#00FF66]/40" />
                                Try It Live
                            </p>
                            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#EDEDED]">
                                Pick your state. Pick your profession.
                            </h2>
                        </div>
                        <ArrowUpRight className="text-[#333]" size={32} />
                    </div>
                    <p className="text-[#666] text-sm font-light mb-8 max-w-xl">
                        Try switching between California / New York / Texas and different professional
                        disciplines. Watch the CE hours, cycle length, and regulatory notes update instantly.
                    </p>
                    <div className="rounded-2xl overflow-hidden border border-[#1a1a1a]" style={{ height: "580px" }}>
                        <LicenseExplorerApp />
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
                            href="/work/clinical-protocol-builder"
                            className="inline-flex items-center gap-3 px-6 py-3 border border-[#1a1a1a] text-[#888] text-xs font-mono tracking-[0.1em] uppercase hover:text-white hover:border-[#333] transition-all"
                        >
                            See: Protocol Builder
                            <ArrowUpRight size={14} />
                        </Link>
                    </div>
                </div>

            </div>
        </main>
    );
}
