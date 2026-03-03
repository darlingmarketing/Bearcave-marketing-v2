export type NodeType = "source" | "process" | "store" | "output";

export type DiagramNode = {
  id: string;
  label: string;
  sublabel: string;
  type: NodeType;
  /** SVG viewBox coordinates (viewBox="0 0 480 240") */
  x: number;
  y: number;
};

export type DiagramEdge = {
  from: string;
  to: string;
  /** Optional label shown at midpoint */
  label?: string;
  /** Rendering style: solid (default) or dashed */
  style?: "solid" | "dashed";
};

export type Tool = {
  id: string;
  name: string;
  version: string;
  status: string;
  category: string;
  tags: string[];
  summary: string;
  specs: { label: string; value: string }[];
  dependencies: { name: string; version: string; purpose: string }[];
  architecture: string[];
  knownLimitations: string[];
  /** Structured node + edge graph for the SVG Blueprint diagram */
  nodes: DiagramNode[];
  edges: DiagramEdge[];
  sandboxUrl: string | null;
};

export const getTool = (id: string): Tool => ({
  id,
  name: id.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
  version: "v2.1.0",
  status: "Production",
  category: "Systems / Automation",
  tags: ["TypeScript", "Next.js", "AI"],
  summary:
    "A clinical-grade automation engine designed to eliminate operational friction at scale. Built for systems architects who refuse to tolerate manual toil.",
  specs: [
    { label: "Language", value: "TypeScript 5.x" },
    { label: "Runtime", value: "Node.js 20 LTS" },
    { label: "Framework", value: "Next.js App Router" },
    { label: "Database", value: "PostgreSQL via Prisma" },
    { label: "AI Layer", value: "OpenAI GPT-4o" },
    { label: "Deployment", value: "Vercel Edge" },
    { label: "Test Coverage", value: "94%" },
    { label: "Bundle Size", value: "48 kB (gzipped)" },
  ],
  dependencies: [
    { name: "framer-motion", version: "^12.0.0", purpose: "Animation layer" },
    { name: "lenis", version: "^1.3.18", purpose: "Smooth scroll engine" },
    { name: "zod", version: "^3.22.0", purpose: "Schema validation" },
    { name: "prisma", version: "^5.0.0", purpose: "ORM / data layer" },
  ],
  architecture: [
    "Server components for all critical render paths (LCP < 2.5s).",
    "Edge middleware handles auth and rate-limiting at 0ms cold start.",
    "Structured concurrency pattern isolates failure domains.",
    "Optimistic UI updates via React Server Actions with rollback.",
  ],
  knownLimitations: [
    "Requires Node.js 20+ due to native Fetch API usage.",
    "WebSocket support pending in v2.2.0.",
  ],
  nodes: [
    { id: "client",   label: "Client",          sublabel: "Browser / SDK",       type: "source",  x: 60,  y: 60  },
    { id: "edge",     label: "Edge Middleware",  sublabel: "Auth · Rate Limit",   type: "process", x: 200, y: 60  },
    { id: "server",   label: "Server Action",    sublabel: "Next.js RSC",         type: "process", x: 340, y: 60  },
    { id: "ai",       label: "AI Layer",         sublabel: "GPT-4o · Structured", type: "process", x: 420, y: 160 },
    { id: "db",       label: "PostgreSQL",       sublabel: "Prisma ORM",          type: "store",   x: 200, y: 160 },
    { id: "response", label: "Optimistic UI",    sublabel: "React Server Actions",type: "output",  x: 60,  y: 160 },
  ],
  edges: [
    { from: "client",   to: "edge",     label: "HTTPS",     style: "solid"  },
    { from: "edge",     to: "server",   label: "Verified",  style: "solid"  },
    { from: "server",   to: "ai",       label: "Prompt",    style: "dashed" },
    { from: "server",   to: "db",       label: "Query",     style: "solid"  },
    { from: "ai",       to: "response", label: "Inference", style: "dashed" },
    { from: "db",       to: "response", label: "Data",      style: "solid"  },
  ],
  sandboxUrl: null,
});
