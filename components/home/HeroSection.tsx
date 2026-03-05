import HeroCanvas from "@/app/components/HeroCanvas";

export default function HeroSection() {
  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center px-6 md:px-12 bg-black overflow-hidden border-b border-neutral-900">
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
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-black text-[#EDEDED] leading-[0.9] tracking-[-0.03em] animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Strategy <span className="text-[#333] italic font-light">&</span>{" "}
            Architecture.
            <br />
            Execution <span className="text-[#333] italic font-light">
              &
            </span>{" "}
            Code.
          </h1>

          <p
            className="text-lg md:text-xl text-[#a0a0a0] leading-relaxed max-w-2xl mt-4 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            I don't just plan campaigns; I build the infrastructure that scales
            them. A multi-disciplinary approach bridging growth marketing with
            relentless engineering execution.
          </p>

          <div
            className="mt-8 flex flex-wrap items-center gap-6 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#matrix"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#EDEDED] text-black text-sm font-bold tracking-[0.1em] uppercase hover:bg-[#FFA500] transition-colors duration-300"
            >
              Explore the Matrix
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 border border-[#333] text-[#EDEDED] text-sm font-bold tracking-[0.1em] uppercase hover:bg-[#111] hover:border-[#555] transition-all duration-300"
            >
              Start a Dialogue
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
