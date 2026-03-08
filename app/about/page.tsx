import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | Jacob Darling — Darling Marketing & Technology",
    description:
        "Jacob Darling is the founder of Darling Marketing & Technology LLC. He combines marketing strategy with full-stack engineering to solve real problems for companies across multiple industries.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black px-6 md:px-12 pt-32 pb-24">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="mb-20">
                    <p className="text-[#FFA500] text-[10px] font-mono tracking-[0.3em] uppercase mb-4 flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-[#FFA500]" />
                        The Person Behind the Work
                    </p>
                    <h1 className="font-serif text-5xl md:text-7xl font-black text-[#EDEDED] tracking-[-0.03em] leading-[0.9] mb-8">
                        I&apos;m Jacob.
                        <br />
                        <span className="text-[#555] italic font-extralight">Nice to meet you.</span>
                    </h1>
                </div>

                {/* Bio Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
                    <div className="space-y-6">
                        <p className="text-[#a0a0a0] text-lg leading-relaxed font-light">
                            I&apos;m a marketing strategist and technologist who builds the things
                            most consultants just talk about. I don&apos;t hand you a deck and walk
                            away — I build the infrastructure, the tools, and the systems that
                            actually execute the strategy.
                        </p>
                        <p className="text-[#a0a0a0] text-lg leading-relaxed font-light">
                            My background spans growth marketing, full-stack development, systems
                            architecture, and product execution. I&apos;ve worked across healthcare
                            tech, e-commerce, SaaS, music and media, and professional education —
                            which means I bring cross-industry perspective that most specialists
                            simply don&apos;t have.
                        </p>
                        <p className="text-[#a0a0a0] text-lg leading-relaxed font-light">
                            I recently founded{" "}
                            <span className="text-[#EDEDED] font-medium">
                                Darling Marketing &amp; Technology LLC
                            </span>{" "}
                            to formalize what I&apos;ve been doing for years: helping companies
                            grow by solving the problems that sit at the intersection of strategy
                            and technology.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {/* Quick facts */}
                        <div className="border border-[#1a1a1a] rounded-2xl p-6 bg-[#050505]">
                            <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#FFA500] mb-6">
                                Quick Facts
                            </p>
                            <div className="space-y-4">
                                {[
                                    { label: "Company", value: "Darling Marketing & Technology LLC" },
                                    { label: "Role", value: "Founder & Lead Strategist" },
                                    { label: "Based", value: "United States" },
                                    { label: "Industries", value: "Healthcare, E-Commerce, SaaS, Music Tech, Professional Education" },
                                    { label: "Available for", value: "Projects · Consulting · Full-Time Roles" },
                                ].map(({ label, value }) => (
                                    <div key={label} className="flex flex-col gap-0.5">
                                        <span className="font-mono text-[8px] tracking-[0.2em] uppercase text-[#444]">
                                            {label}
                                        </span>
                                        <span className="text-sm text-[#EDEDED] font-light">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* What I do section */}
                <div className="mb-24">
                    <p className="text-[#666] text-[10px] font-mono tracking-[0.3em] uppercase mb-8">
                        What I Actually Do
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Marketing Strategy",
                                color: "#FFA500",
                                items: [
                                    "Growth marketing & acquisition",
                                    "SEO architecture & content strategy",
                                    "Funnel design & conversion optimization",
                                    "Data-driven campaign management",
                                    "Market positioning & messaging",
                                ],
                            },
                            {
                                title: "Technical Execution",
                                color: "#00F2FF",
                                items: [
                                    "Full-stack web development (Next.js, React)",
                                    "Custom tool & application development",
                                    "API integration & automation",
                                    "Performance optimization",
                                    "Cloud infrastructure & deployment",
                                ],
                            },
                            {
                                title: "Systems Thinking",
                                color: "#00FF66",
                                items: [
                                    "Product architecture & planning",
                                    "Marketing technology stack design",
                                    "Process automation & efficiency",
                                    "Data pipeline & analytics setup",
                                    "Cross-functional project leadership",
                                ],
                            },
                        ].map((pillar) => (
                            <div
                                key={pillar.title}
                                className="p-6 border border-[#1a1a1a] rounded-2xl bg-[#050505]"
                            >
                                <div className="flex items-center gap-2 mb-5">
                                    <div
                                        className="w-1.5 h-1.5 rounded-full"
                                        style={{ backgroundColor: pillar.color }}
                                    />
                                    <h2
                                        className="font-mono text-[10px] tracking-[0.2em] uppercase font-bold"
                                        style={{ color: pillar.color }}
                                    >
                                        {pillar.title}
                                    </h2>
                                </div>
                                <ul className="space-y-2">
                                    {pillar.items.map((item) => (
                                        <li
                                            key={item}
                                            className="text-sm text-[#888] font-light flex items-start gap-2"
                                        >
                                            <span className="text-[#333] mt-1">·</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="border-t border-[#111] pt-16">
                    <p className="text-[#888] text-lg font-light mb-8 max-w-xl">
                        If you&apos;re looking for someone who can think through the strategy{" "}
                        <em>and</em> build the solution — let&apos;s talk.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="/#contact"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-[#FFA500] text-black text-sm font-bold tracking-[0.1em] uppercase hover:bg-[#ffb733] transition-all duration-300"
                        >
                            Start a Conversation
                        </a>
                        <a
                            href="/work"
                            className="inline-flex items-center gap-3 px-8 py-4 border border-[#333] text-[#EDEDED] text-sm font-bold tracking-[0.1em] uppercase hover:bg-[#0a0a0a] hover:border-[#555] transition-all duration-300"
                        >
                            See My Work
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
