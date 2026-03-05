import HeroSection from "@/components/home/HeroSection";
import DisciplinaryMatrix from "@/components/home/DisciplinaryMatrix";
import LabsTriggerGrid from "@/components/labs/LabsTriggerGrid";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black selection:bg-[#FFA500] selection:text-black">
      {/* Global Navigation is expected to be handled in layout.tsx */}

      {/* ── IMMERSIVE PROLOGUE (Hero) ─────────────────────────────────── */}
      <HeroSection />

      {/* ── CORE CAPABILITIES (Bento Matrix) ────────────────────────────── */}
      <DisciplinaryMatrix />

      {/* ── INTERACTIVE LABS ────────────────────────────────────────────── */}
      <section className="relative w-full py-24 sm:py-32 px-4 sm:px-8 lg:px-16 mx-auto max-w-7xl z-10 border-t border-neutral-900">
        <LabsTriggerGrid />
      </section>
    </main>
  );
}
