import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { PortfolioDataStore } from "@/types";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import CrossPollinationLink from "@/components/layout/CrossPollinationLink";
import HorizontalSlider from "@/components/project/HorizontalSlider";

// Mock DB - This would typically be fetched from a CMS
const portfolioDB: PortfolioDataStore = {
  "marketing-hub": {
    id: "1",
    slug: "marketing-hub",
    title: "The Acquisition Engine",
    client: "Venture-Backed SaaS",
    primaryPillar: "MARKETER",
    heroImagePrompt:
      "Cinematic, dark-mode 3D rendering of interconnected glowing nodes merging marketing analytics charts with raw glowing code syntax. Ultra-professional agency style.",
    bentoSummary: "Scaling acquisition channels through algorithmic attribution and serverless automation.",
    sections: {
      theChallenge: {
        headline: "The Strategy",
        strategyNarrative:
          "Targeting a 40% reduction in CAC, we bypassed traditional ad-platform limitations by building a custom first-party data capture layer. This allowed for real-time audience refinement based on high-intent signals rather than broad demographic patterns.",
        metrics: [
          { label: "CAC Efficiency", value: "42%" },
          { label: "LTV Projection", value: "+180%" },
        ],
        visualPrompt:
          "A sleek, dark mode data dashboard glowing with orange metrics mapping customer journey funnels against a futuristic grid.",
      },
      theBlueprint: {
        headline: "Systems Design",
        architectureNarrative:
          "The architecture centers on a bi-directional data bridge between the CRM and the Edge. By processing attribution at the literal edge of the network, we eliminated tracking latency and ensured 100% data integrity across the stack.",
        systemDiagramPrompt:
          "A minimal, illuminated architectural node map showing data flowing seamlessly from a central CRM cluster out to edge marketing platforms. Cyan accents.",
      },
      theExecution: {
        headline: "Deployment",
        deploymentNarrative:
          "Implementation involved orchestrating complex serverless pipelines that normalized disparate lead sources into a single, actionable truth. We treated the marketing funnel as a piece of high-availability software.",
        challengesOvercome: [
          "Eliminating attribution blind spots",
          "Hardening data pipelines against traffic spikes",
        ],
        galleryPrompts: [
          "A dramatic over-the-shoulder shot of complex data pipelines being deployed. High tech.",
          "Abstract macro shot of fiber optic cables glowing green to signify successful deployment.",
        ],
      },
      theStack: {
        headline: "Infrastructure",
        infrastructureNarrative:
          "Built on an immutable serverless foundation, the engine leverages global edge functions to ensure zero-latency tracking and instant scalability during aggressive scale-up phases.",
        technologies: [
          "Next.js",
          "Vercel Edge",
          "Snowflake / dbt",
          "Segment Protocol",
        ],
        codeSnippetPrompt:
          "Cinematic close-up of a dark IDE theme showing elegant TypeScript code for a serverless data synchronization function.",
      },
    },
    relatedLinks: {
      technologistSlug: "technology-hub",
      architectSlug: "architecture-hub",
    },
  },
  "architecture-hub": {
    id: "3",
    slug: "architecture-hub",
    title: "Macro-System Architecture",
    client: "Enterprise Logistics",
    primaryPillar: "ARCHITECT",
    heroImagePrompt: "Cinematic architecture diagram of a global shipping network, glowing orange and cyan on a black grid.",
    bentoSummary: "Blueprinting high-availability distributed systems for global scale.",
    sections: {
      theChallenge: {
        headline: "The Objective",
        strategyNarrative: "The mission was to design a multi-region failover cluster that could handle 100k concurrent requests/sec with zero loss of state consistency. We approached this as an exercise in macro-level foresight.",
        metrics: [{ label: "Throughput", value: "100k/s" }, { label: "Failover Time", value: "<2s" }],
        visualPrompt: "Abstract 3D architectural nodes."
      },
      theBlueprint: {
        headline: "The Blueprint",
        architectureNarrative: "We architected a globally distributed mesh using Event-Driven Design and eventual consistency models that prioritized availability without sacrificing long-term data integrity.",
        systemDiagramPrompt: "Network diagram."
      },
      theExecution: {
        headline: "Execution",
        deploymentNarrative: "The rollout used a 'Blue-Green' deployment strategy at the infrastructure level, allowing us to swap the entire global routing table with zero downtime for end-users.",
        challengesOvercome: ["Global state synchronization", "Cross-region latency mitigation"],
        galleryPrompts: ["Deployment 1", "Deployment 2"]
      },
      theStack: {
        headline: "Infrastructure",
        infrastructureNarrative: "Infrastructure as Code (IaC) defines the entire environment, ensuring deterministic deployments across AWS, Vercel, and Cloudflare.",
        technologies: ["Terraform", "AWS Lambda", "Redis Global", "Edge Mesh"],
        codeSnippetPrompt: "Infrastructure as code."
      }
    },
    relatedLinks: { marketerSlug: "marketing-hub", technologistSlug: "technology-hub" }
  },
  "technology-hub": {
    id: "4",
    slug: "technology-hub",
    title: "The Technologist's Core",
    client: "AI Search Labs",
    primaryPillar: "TECHNOLOGIST",
    heroImagePrompt: "Glowing neural network brain structure, high-tech obsidian style.",
    bentoSummary: "Bending modern web technologies to solve intractable data processing challenges.",
    sections: {
      theChallenge: {
        headline: "The Engineering Gap",
        strategyNarrative: "Legacy search engines were failing on semantic relevance. We needed to implement a vector-based retrieval system that processed massive datasets in the browser with <50ms latency.",
        metrics: [{ label: "Relevance", value: "+94%" }, { label: "Latency", value: "32ms" }],
        visualPrompt: "Search vectors."
      },
      theBlueprint: {
        headline: "Neural Blueprint",
        architectureNarrative: "The design leverages Pinecone vector databases and custom OpenAI embedding models, orchestrated via a high-performance Rust-based middleware layer for maximum efficiency.",
        systemDiagramPrompt: "Vector diagram."
      },
      theExecution: {
        headline: "Deployment",
        deploymentNarrative: "Live deployment targeted a serverless-first approach, utilizing WebWorkers to handle data heavy-lifting without blocking the main UI thread, ensuring a 'Liquid' user experience.",
        challengesOvercome: ["Client-side embedding optimization", "Vector cache management"],
        galleryPrompts: ["Tech 1", "Tech 2"]
      },
      theStack: {
        headline: "The Tech Stack",
        infrastructureNarrative: "The bleeding edge of performance: Rust for core processing, Next.js for the interface, and Pinecone for semantic memory.",
        technologies: ["Rust / WASM", "Next.js 15", "Pinecone", "WebWorkers"],
        codeSnippetPrompt: "Rust processing logic."
      }
    },
    relatedLinks: { builderSlug: "piko-studio", architectSlug: "architecture-hub" }
  },
  "piko-studio": {
    id: "2",
    slug: "piko-studio",
    title: "Piko: The Digital Deck",
    client: "Piko FG (Independent)",
    primaryPillar: "BUILDER",
    heroImagePrompt:
      "A cinematic top-down view of a sleek, futuristic DJ mixer bathed in neon magenta and cyan lighting, set against a dark grid professional agency style.",
    bentoSummary: "Engineered a low-latency, transient audio workstation optimized for browser-based performance.",
    sections: {
      theChallenge: {
        headline: "The Objective",
        strategyNarrative:
          "The mission was to transcend the static 'artist portfolio' model. We built a high-fidelity, dual-deck digital audio workstation (DAW) that could function as a professional-grade interaction point for fans and creators alike.",
        metrics: [
          { label: "Audio Latency", value: "<10ms" },
          { label: "Execution Speed", value: "60fps" },
        ],
        visualPrompt:
          "A dark, intense performance stage view looking out over a massive crowd. Glowing purple and magenta.",
      },
      theBlueprint: {
        headline: "Audio Architecture",
        architectureNarrative:
          "We bypassed traditional state-heavy rendering in favor of a transient, frame-buffered Web Audio API architecture. By using Tone.js as the synthesis engine and wavesurfer.js for precise spectral visualization, we achieved sub-10ms synchronization between UI and audio.",
        systemDiagramPrompt:
          "A minimal, illuminated architectural node map showing dual Web Audio source nodes routing through EQ and crossfader chains into a master compression bus.",
      },
      theExecution: {
        headline: "The Studio Experience",
        deploymentNarrative:
          "Relentless focus on UX resulted in an interface that mirrors professional hardware. We implemented equal-power crossfading trajectories and custom playback scheduling to ensure a drop-free experience under heavy computational load.",
        challengesOvercome: [
          "Eliminating audio stuttering on mobile",
          "Synchronizing multi-track waveforms in a reactive UI",
        ],
        galleryPrompts: [
          "A dramatic close up of fingers manipulating a glowing digital crossfader.",
          "Abstract macro shot of audio waveform data glowing green and cyan.",
        ],
      },
      theStack: {
        headline: "The Tech Core",
        infrastructureNarrative:
          "A statically optimized Next.js application distributed via global edge nodes. Zero client-side hydration lag was the priority, ensuring the mixer is 'performance-ready' in under 800ms.",
        technologies: [
          "Tone.js / WebAudio",
          "Next.js 14",
          "Zustand State Mesh",
          "Framer Motion",
        ],
        codeSnippetPrompt:
          "Cinematic close-up of a dark IDE theme showing elegant TypeScript code for a Web Audio API scheduling loop.",
      },
    },
    relatedLinks: {
      technologistSlug: "technology-hub",
      architectSlug: "architecture-hub",
      builderExternalUrl: "https://piko-artist-website.vercel.app/",
    },
  },
  "strum-ai": {
    id: "5",
    slug: "strum-ai",
    title: "STRUM AI: Neural Picking",
    client: "AI Product Suite",
    primaryPillar: "BUILDER",
    heroImagePrompt:
      "A high-tech digital guitar pick glowing with neural network pathways, floating in a dark glassmorphic laboratory environment. OKLCH blue and teal accents.",
    bentoSummary: "Automated transcription via an ensemble of spectral analysis and neural inference models.",
    sections: {
      theChallenge: {
        headline: "The Transcription Problem",
        strategyNarrative:
          "Manual transcription is the primary bottleneck for musical education. Our strategy was to automate chord detection through high-fidelity spectral analysis, achieving >90% accuracy across acoustic and electric instrumentation.",
        metrics: [
          { label: "Model Accuracy", value: "92%" },
          { label: "Inference Time", value: "300ms" },
        ],
        visualPrompt:
          "A sleek, dark dashboard showing multiple AI models voting on chord segments on a high-resolution audio timeline.",
      },
      theBlueprint: {
        headline: "Neural Architecture",
        architectureNarrative:
          "The system utilizes a weighted ensemble of HPCP (Harmonic Pitch Class Profile) and spectral centroid models. This multi-layered approach ensures detection stability even in complex, multi-timbral polyphonic recordings.",
        systemDiagramPrompt:
          "A cinematic diagram of audio data flowing through a neural 'sorting hat' into specialized detection nodes. Glowing cyan pathways.",
      },
      theExecution: {
        headline: "The Laboratory",
        deploymentNarrative:
          "We engineered the 'Laboratory' as a glassmorphic command center. Real-time feedback loops and 'Liquid Glow' visualizers provide the user with localized computational confidence intervals during the detection process.",
        challengesOvercome: [
          "Browser-side FFT performance optimization",
          "Asynchronous model execution via WebWorkers",
        ],
        galleryPrompts: [
          "A macro shot of a digital waveform being dissected by glowing neural filaments.",
          "Cinematic view of the 'Neural Pick' logo glowing on a dark glass interface.",
        ],
      },
      theStack: {
        headline: "The AI Core",
        infrastructureNarrative:
          "Powered by Essentia.js and React 19, the environment is entirely client-side. This ensures maximum data privacy and eliminates the latency overhead of server-based GPU inference.",
        technologies: [
          "Essentia.js / WebWASM",
          "React 19 / T4",
          "Lucide / Framer",
          "WebWorkers",
        ],
        codeSnippetPrompt:
          "Close-up of elegant TypeScript code implementing the weighted ensemble voting logic for chord segments.",
      },
    },
    relatedLinks: {
      technologistSlug: "technology-hub",
      architectSlug: "architecture-hub",
      builderExternalUrl: "https://strum-ai.vercel.app/",
    },
  },
};

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const study = portfolioDB[resolvedParams.slug];

  if (!study) {
    // In actual dev, we would let next.js dynamic routing handle this, but for now we fallback
    return (
      <div className="min-h-screen pt-32 px-6 flex items-center justify-center text-center">
        <h1 className="text-4xl text-[#EDEDED] font-serif">
          Project data currently compiling.
        </h1>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-black">
      {/* Dynamic Hero Section */}
      <header className="relative min-h-[70vh] flex flex-col justify-end pb-24 px-6 md:px-12 border-b border-[#1f1f1f]">
        <div className="absolute inset-0 z-0">
          {/* Nano Banana Image Injection */}
          <div className="absolute inset-0 bg-black/60 z-10" />
          <ImagePlaceholder className="w-full h-full object-cover opacity-50 transition-opacity duration-1000" />
        </div>

        <div className="relative z-10 max-w-4xl animate-fade-in-up">
          <Link
            href="/#matrix"
            className="inline-flex items-center gap-2 text-[#a0a0a0] hover:text-[#FFA500] transition-colors font-mono text-xs uppercase tracking-widest mb-8"
          >
            <ArrowLeft size={16} /> Return to Hub
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-[#111] border border-[#333] rounded-full text-[10px] uppercase tracking-widest font-mono text-[#00F2FF]">
              {study.primaryPillar}
            </span>
            {study.client && (
              <span className="text-sm font-mono tracking-wider text-[#666]">
                Client: {study.client}
              </span>
            )}
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-black tracking-tighter text-[#EDEDED] leading-none">
            {study.title}
          </h1>
        </div>
      </header>

      {/* Main Content & Architecture Hub Matrix Sidebar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* The 4-Part Strict Template */}
        <div className="lg:w-2/3 flex flex-col gap-24">
          {/* Section 1: The Challenge (Marketer) */}
          <section>
            <h2 className="text-xs font-mono tracking-[0.2em] text-[#FFA500] uppercase mb-6 flex items-center gap-4">
              <div className="w-8 h-[1px] bg-[#FFA500]" />
              {study.sections.theChallenge.headline}
            </h2>
            <p className="text-[#a0a0a0] text-lg leading-relaxed mb-12">
              {study.sections.theChallenge.strategyNarrative}
            </p>

            {study.sections.theChallenge.metrics && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {study.sections.theChallenge.metrics.map((m, i) => (
                  <div
                    key={i}
                    className="p-6 bg-[#050505] border border-[#1f1f1f] rounded-xl flex flex-col gap-2"
                  >
                    <span className="text-[#FFA500] font-mono text-3xl font-bold">
                      {m.value}
                    </span>
                    <span className="text-xs font-mono tracking-widest uppercase text-[#666]">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            <div className="aspect-[21/9] w-full bg-[#111] border border-[#222] rounded-2xl overflow-hidden relative">
              <ImagePlaceholder className="w-full h-full object-cover" />
            </div>
          </section>

          {/* Section 2: The Blueprint (Architect) */}
          <section>
            <h2 className="text-xs font-mono tracking-[0.2em] text-[#00F2FF] uppercase mb-6 flex items-center gap-4">
              <div className="w-8 h-[1px] bg-[#00F2FF]" />
              {study.sections.theBlueprint.headline}
            </h2>
            <p className="text-[#a0a0a0] text-lg leading-relaxed mb-12">
              {study.sections.theBlueprint.architectureNarrative}
            </p>
            <div className="aspect-video w-full bg-[#111] border border-[#222] rounded-2xl overflow-hidden relative">
              <ImagePlaceholder className="w-full h-full object-cover" />
            </div>
          </section>

          {/* Section 3: The Execution (Builder) */}
          <section>
            <h2 className="text-xs font-mono tracking-[0.2em] text-[#00FF66] uppercase mb-6 flex items-center gap-4">
              <div className="w-8 h-[1px] bg-[#00FF66]" />
              {study.sections.theExecution.headline}
            </h2>
            <p className="text-[#a0a0a0] text-lg leading-relaxed mb-8">
              {study.sections.theExecution.deploymentNarrative}
            </p>
            <div className="mb-12">
              <h3 className="text-sm font-bold text-[#EDEDED] mb-3">
                Core Constraints Overcome:
              </h3>
              <ul className="list-disc list-inside text-[#888] space-y-2">
                {study.sections.theExecution.challengesOvercome.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>

            <div className="-mx-6 md:-mx-12 xl:-mx-0">
              <HorizontalSlider prompts={study.sections.theExecution.galleryPrompts} />
            </div>
          </section>

          {/* Section 4: The Stack (Technologist) */}
          <section>
            <h2 className="text-xs font-mono tracking-[0.2em] text-[#FF0055] uppercase mb-6 flex items-center gap-4">
              <div className="w-8 h-[1px] bg-[#FF0055]" />
              {study.sections.theStack.headline}
            </h2>
            <p className="text-[#a0a0a0] text-lg leading-relaxed mb-8">
              {study.sections.theStack.infrastructureNarrative}
            </p>
            <div className="flex flex-wrap gap-3 mb-12">
              {study.sections.theStack.technologies.map((t, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-[#111] border border-[#222] rounded-md font-mono text-xs text-[#a0a0a0]"
                >
                  {t}
                </span>
              ))}
            </div>
            {study.sections.theStack.codeSnippetPrompt && (
              <div className="aspect-video w-full bg-[#050505] border border-[#1f1f1f] rounded-2xl overflow-hidden relative">
                <ImagePlaceholder className="w-full h-full object-cover" />
              </div>
            )}
          </section>
        </div>

        {/* The Dynamic Hub-and-Spoke Sidebar */}
        <aside className="lg:w-1/3">
          <div className="sticky top-32 space-y-8">
            <div>
              <h3 className="font-serif text-2xl text-[#EDEDED] mb-2 tracking-tight">
                Macro View Context
              </h3>
              <p className="text-[#888] text-sm leading-relaxed mb-6">
                This project does not exist in a vacuum. Explore the related
                architectural decisions and code implementations that made this
                strategy possible.
              </p>
            </div>

            <div className="space-y-4">
              {study.relatedLinks.architectSlug && (
                <CrossPollinationLink
                  targetPillar="ARCHITECT"
                  targetSlug={study.relatedLinks.architectSlug}
                />
              )}
              {study.relatedLinks.technologistSlug && (
                <CrossPollinationLink
                  targetPillar="TECHNOLOGIST"
                  targetSlug={study.relatedLinks.technologistSlug}
                />
              )}
              {study.relatedLinks.builderSlug && (
                <CrossPollinationLink
                  targetPillar="BUILDER"
                  targetSlug={study.relatedLinks.builderSlug}
                />
              )}
              {study.relatedLinks.builderExternalUrl && (
                <CrossPollinationLink
                  targetPillar="BUILDER"
                  externalUrl={study.relatedLinks.builderExternalUrl}
                />
              )}
              {study.relatedLinks.marketerSlug && (
                <CrossPollinationLink
                  targetPillar="MARKETER"
                  targetSlug={study.relatedLinks.marketerSlug}
                />
              )}
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
