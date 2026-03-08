import { ArrowRight } from "lucide-react";
import HeroCanvas from "@/app/components/HeroCanvas";

export default function HeroSection() {
  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center px-6 md:px-12 bg-black overflow-hidden border-b border-neutral-900 liquid-glow">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 z-0">
          <HeroCanvas />
        </div>
        {/* Vignetting */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80 z-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-40 z-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col gap-6 max-w-4xl">

          {/* Identity badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111] border border-[#222] rounded-full w-fit mb-2 animate-fade-in-up">
            <div className="w-1.5 h-1.5 rounded-full bg-[#FFA500] animate-pulse" />
            <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-[#666]">
              Darling Marketing &amp; Technology LLC
            </span>
          </div>

          {/* Eyebrow */}
          <div
            className="flex items-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="h-[1px] w-12 bg-[#FFA500]" />
            <span className="text-[#FFA500] text-[10px] font-mono tracking-[0.3em] uppercase">
              Marketing Strategy · Systems Architecture · Full-Stack Engineering
            </span>
          </div>

          {/* Main headline */}
          <h1
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-black text-[#EDEDED] leading-[0.88] tracking-[-0.03em] animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            I&apos;m Jacob Darling.
            <br />
            <span className="text-[#FFA500]">I solve problems</span>
            <br />
            <span className="text-[#555] italic font-extralight">
              companies don&apos;t know how to code yet.
            </span>
          </h1>

          {/* Sub-headline */}
          <p
            className="text-lg md:text-xl text-[#a0a0a0] leading-relaxed max-w-2xl mt-2 animate-fade-in-up font-light"
            style={{ animationDelay: "0.3s" }}
          >
            Founder of Darling Marketing &amp; Technology. I combine{" "}
            <span className="text-[#EDEDED]">growth marketing strategy</span> with{" "}
            <span className="text-[#EDEDED]">hands-on technical execution</span> —
            building the campaigns, tools, and infrastructure that drive measurable
            results across healthcare, e-commerce, SaaS, and beyond.
          </p>

          {/* CTA row */}
          <div
            className="mt-8 flex flex-wrap items-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#labs"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#FFA500] text-black text-sm font-bold tracking-[0.1em] uppercase hover:bg-[#ffb733] transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-3">
                See My Work
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 border border-[#333] text-[#EDEDED] text-sm font-bold tracking-[0.1em] uppercase hover:bg-[#0a0a0a] hover:border-[#555] transition-all duration-300"
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* Quick-proof strip */}
          <div
            className="mt-8 flex flex-wrap items-center gap-6 animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            {[
              "Healthcare Tech",
              "E-Commerce",
              "SaaS",
              "Music & Media",
              "Professional Education",
            ].map((industry) => (
              <span
                key={industry}
                className="text-[9px] font-mono tracking-[0.2em] uppercase text-[#444] border-b border-[#1f1f1f] pb-0.5"
              >
                {industry}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
