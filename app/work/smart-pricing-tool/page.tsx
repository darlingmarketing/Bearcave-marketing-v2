import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import PricingToolApp from "@/components/labs/PricingToolApp";

export const metadata: Metadata = {
    title: "Smart Pricing & Sales Tool | Jacob Darling Case Study",
    description:
        "How Jacob Darling built an interactive quote builder and real-time financing calculator for a medical devices brand — reducing sales friction and helping reps close larger deals faster.",
};

const CHALLENGES = [
    "Sales reps were manually emailing PDF quotes that required back-and-forth before a final price was agreed",
    "Prospects couldn't easily compare hardware bundles vs. training packages in the same view",
    "No integrated financing estimate — reps had to calculate it externally and re-send quotes",
    "The purchasing decision for a $2,995+ instrument set needed more than a static price list",
];

const SOLUTIONS = [
    "Built a live quote builder: prospects add, remove, and adjust quantities with a real-time subtotal",
    "Dynamic category filtering allows reps to focus conversations on hardware-only or training-only packages",
    "Financing calculation triggers automatically once the cart exceeds $1,000 — surfacing payment options in context",
    "Deployed as an embeddable page that reps share via link or present on a sales call",
];

const OUTCOMES = [
    { label: "Quote turnaround", before: "24–48 hrs (email PDF)", after: "Real-time, live on call" },
    { label: "Financing visibility", before: "Separate calculation", after: "Auto-calculates in-tool" },
    { label: "Cart complexity", before: "Single SKU quotes", after: "Multi-item bundle quotes" },
    { label: "Sales friction", before: "High (multiple touchpoints)", after: "Low (one session)" },
];

export default function SmartPricingToolPage() {
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
                        <span className="px-3 py-1 bg-[#0a0a0a] border border-[#FFA500]/30 rounded-full font-mono text-[8px] tracking-[0.2em] uppercase text-[#FFA500]">
                            E-Commerce / Hardware
                        </span>
                        <span className="px-3 py-1 bg-[#0a0a0a] border border-[#1a1a1a] rounded-full font-mono text-[8px] tracking-[0.2em] uppercase text-[#555]">
                            Sales Tool
                        </span>
                        <span className="px-3 py-1 bg-[#0a0a0a] border border-[#1a1a1a] rounded-full font-mono text-[8px] tracking-[0.2em] uppercase text-[#555]">
                            B2B Commerce
                        </span>
                    </div>

                    <h1 className="font-serif text-5xl md:text-6xl font-black text-[#EDEDED] tracking-[-0.03em] leading-[0.9] mb-6">
                        Smart Pricing
                        <br />
                        <span className="text-[#FFA500]">&amp; Sales Tool</span>
                    </h1>

                    <p className="text-xl text-[#888] font-light leading-relaxed max-w-2xl">
                        A medical devices brand selling professional instrument sets and certification
                        courses needed to close larger deals, faster — without a dedicated e-commerce platform.
                    </p>
                </div>

                {/* Project at a glance */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
                    {[
                        { label: "Industry", value: "Medical Devices / IASTM" },
                        { label: "Company Type", value: "B2B Healthcare Brand" },
                        { label: "My Role", value: "Product Design + Full-Stack Dev" },
                        { label: "Delivery", value: "Embeddable Sales Tool" },
                    ].map(({ label, value }) => (
                        <div key={label} className="p-5 border border-[#1a1a1a] rounded-xl bg-[#050505]">
                            <p className="font-mono text-[8px] tracking-[0.2em] uppercase text-[#444] mb-2">{label}</p>
                            <p className="text-sm text-[#EDEDED] font-light">{value}</p>
                        </div>
                    ))}
                </div>

                {/* The Problem */}
                <div className="mb-16">
                    <p className="text-[#FFA500] text-[10px] font-mono tracking-[0.3em] uppercase mb-4 flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-[#FFA500]/40" />
                        The Problem
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#EDEDED] mb-6">
                        A $3,000 sale shouldn&apos;t require three email chains.
                    </h2>
                    <p className="text-[#888] text-base leading-relaxed max-w-2xl font-light mb-8">
                        The client sold professional-grade IASTM instrument sets — $1,500–$3,000 instrument kits —
                        alongside certification training and ongoing supply accessories. The problem: their entire
                        sales process relied on a static price sheet PDF and manual back-and-forth to produce a
                        final quote. Every customization required a re-send. Financing conversations happened
                        informally, in a separate email.
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
                    <p className="text-[#FFA500] text-[10px] font-mono tracking-[0.3em] uppercase mb-4 flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-[#FFA500]/40" />
                        The Solution
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#EDEDED] mb-6">
                        A live quote builder with embedded financing logic.
                    </h2>
                    <p className="text-[#888] text-base leading-relaxed max-w-2xl font-light mb-8">
                        I built an interactive product catalog and quote builder. Reps can walk prospects
                        through the catalog live on a screen-share, add items to a quote in real-time, and
                        see financing estimates trigger automatically when the cart exceeds the threshold —
                        all in one session, with no follow-up needed just to produce a number.
                    </p>
                    <ul className="space-y-3 max-w-2xl">
                        {SOLUTIONS.map((s) => (
                            <li key={s} className="flex items-start gap-3 text-sm text-[#777] font-light">
                                <span className="text-[#FFA500] mt-0.5 flex-shrink-0 font-bold">+</span>
                                {s}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Results */}
                <div className="mb-20">
                    <p className="text-[#FFA500] text-[10px] font-mono tracking-[0.3em] uppercase mb-4 flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-[#FFA500]/40" />
                        Results
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#EDEDED] mb-8">
                        Before &amp; After
                    </h2>
                    <div className="border border-[#1a1a1a] rounded-2xl overflow-hidden">
                        <div className="grid grid-cols-3 bg-[#070707] border-b border-[#1a1a1a]">
                            <div className="p-4 font-mono text-[9px] tracking-[0.2em] uppercase text-[#444]">Metric</div>
                            <div className="p-4 font-mono text-[9px] tracking-[0.2em] uppercase text-[#FF0055]/70 border-l border-[#1a1a1a]">Before</div>
                            <div className="p-4 font-mono text-[9px] tracking-[0.2em] uppercase text-[#FFA500]/70 border-l border-[#1a1a1a]">After</div>
                        </div>
                        {OUTCOMES.map(({ label, before, after }) => (
                            <div key={label} className="grid grid-cols-3 border-b border-[#111] last:border-b-0">
                                <div className="p-4 text-sm text-[#888] font-light">{label}</div>
                                <div className="p-4 text-sm text-[#FF0055]/80 font-light border-l border-[#111]">{before}</div>
                                <div className="p-4 text-sm text-[#FFA500]/80 font-light border-l border-[#111]">{after}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Live Demo */}
                <div className="mb-24">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <p className="text-[#FFA500] text-[10px] font-mono tracking-[0.3em] uppercase mb-2 flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-[#FFA500]/40" />
                                Try It Live
                            </p>
                            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#EDEDED]">
                                Add items to your quote. Watch financing appear.
                            </h2>
                        </div>
                        <ArrowUpRight className="text-[#333]" size={32} />
                    </div>
                    <p className="text-[#666] text-sm font-light mb-8 max-w-xl">
                        Add the Professional Six-Piece Set + training to your quote and watch the 36-month
                        financing estimate surface automatically. This is the real tool.
                    </p>
                    <div className="rounded-2xl overflow-hidden border border-[#1a1a1a]" style={{ height: "560px" }}>
                        <PricingToolApp />
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
                            href="/work/license-explorer"
                            className="inline-flex items-center gap-3 px-6 py-3 border border-[#1a1a1a] text-[#888] text-xs font-mono tracking-[0.1em] uppercase hover:text-white hover:border-[#333] transition-all"
                        >
                            Next: License Explorer
                            <ArrowUpRight size={14} />
                        </Link>
                    </div>
                </div>

            </div>
        </main>
    );
}
