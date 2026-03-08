import HeroSection from "@/components/home/HeroSection";
import RoleHighlights from "@/components/home/RoleHighlights";
import DisciplinaryMatrix from "@/components/home/DisciplinaryMatrix";
import LabsTriggerGrid from "@/components/labs/LabsTriggerGrid";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black selection:bg-[#FFA500] selection:text-black">
      {/* Global Navigation is expected to be handled in layout.tsx */}

      {/* ── IMMERSIVE PROLOGUE (Hero) ─────────────────────────────────── */}
      <HeroSection />

      {/* ── ROLE HIGHLIGHTS (The 3-Pillar Beast) ────────────────────────── */}
      <RoleHighlights />

      {/* ── CORE CAPABILITIES (Bento Matrix) ────────────────────────────── */}
      <DisciplinaryMatrix />

      {/* ── INTERACTIVE LABS ────────────────────────────────────────────── */}
      <section id="labs" className="relative w-full py-24 sm:py-32 px-4 sm:px-8 lg:px-16 mx-auto max-w-7xl z-10 border-t border-neutral-900">
        <LabsTriggerGrid />
      </section>
    </main>
  );
}
