import { ArrowRight, Terminal } from "lucide-react";
import HeroCanvas from "@/app/components/HeroCanvas";

export default function HeroSection() {
  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center px-6 md:px-12 bg-black overflow-hidden border-b border-neutral-900 liquid-glow">
      {/* Background Atmosphere - UPGRADED TO 2026 ELITE 3D SCENE */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 z-0">
          <HeroCanvas />
        </div>

        {/* Subtle vignetting */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80 z-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-40 z-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col gap-6 max-w-4xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111] border border-[#222] rounded-full w-fit mb-4 animate-fade-in-up">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00F2FF] animate-pulse" />
            <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-[#666]">
              Neural Grid Status: <span className="text-[#00F2FF]">Optimized</span>
            </span>
          </div>

          <div
            className="flex items-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="h-[1px] w-12 bg-[#FFA500]" />
            <span className="text-[#FFA500] text-[10px] font-mono tracking-[0.3em] uppercase">
              The Convergence of Disciplines
            </span>
          </div>

          <h1
            className="font-serif text-5xl md:text-7xl lg:text-9xl font-black text-[#EDEDED] leading-[0.85] tracking-[-0.04em] animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Strategy <span className="text-[#333] italic font-extralight text-gradient-cyan">/</span> Architecture.
            <br />
            Execution <span className="text-[#333] italic font-extralight text-gradient-cyan">&</span> Code.
          </h1>

          <p
            className="text-lg md:text-xl text-[#a0a0a0] leading-relaxed max-w-2xl mt-4 animate-fade-in-up font-light"
            style={{ animationDelay: "0.3s" }}
          >
            I don't just plan campaigns; I build the infrastructure that scales
            them. A multi-disciplinary approach bridging <span className="text-[#EDEDED]">growth marketing</span> with
            <span className="text-[#EDEDED]"> relentless engineering execution</span>.
          </p>

          <div
            className="mt-8 flex flex-wrap items-center gap-6 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#matrix"
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-[#EDEDED] text-black text-sm font-bold tracking-[0.1em] uppercase hover:bg-[#FFA500] transition-all duration-500 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                Explore the Matrix
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-10 py-5 border border-[#1f1f1f] text-[#EDEDED] text-sm font-bold tracking-[0.1em] uppercase hover:bg-[#050505] hover:border-[#333] transition-all duration-300 backdrop-blur-sm"
            >
              <Terminal size={16} className="text-[#00F2FF]" />
              Start a Dialogue
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
