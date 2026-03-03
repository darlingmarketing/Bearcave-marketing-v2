export type ProcessStep = {
  step: string;
  label: string;
  description: string;
  duration: string;
  output: string;
  status: "complete" | "active" | "pending";
};

export type CaseStudy = {
  id: string;
  title: string;
  client: string;
  year: string;
  duration: string;
  tags: string[];
  headline: string;
  challenge: string;
  approach: string;
  outcome: string;
  metrics: { label: string; value: string }[];
  deliverables: string[];
  process: ProcessStep[];
  url: string;
};

export const getCaseStudy = (id: string): CaseStudy => ({
  id,
  title: `Case Study: ${id.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}`,
  client: "Confidential Client",
  year: "2025",
  duration: "6 months",
  tags: ["Strategy", "Systems", "Growth"],
  headline: "Revenue velocity increased 3.4× in 90 days.",
  challenge:
    "The client faced stagnant revenue growth despite high traffic volumes. Legacy systems created friction at every conversion touchpoint, eroding potential at scale.",
  approach:
    "We architected a systems-first strategy: auditing the full funnel, identifying the three highest-leverage intervention points, and deploying precision tooling to eliminate friction programmatically.",
  outcome:
    "Revenue velocity increased 3.4× within 90 days. CAC dropped 41%. The new system now operates with zero ongoing manual intervention.",
  metrics: [
    { label: "Revenue Lift", value: "+340%" },
    { label: "CAC Reduction", value: "−41%" },
    { label: "Time to Value", value: "90 days" },
  ],
  deliverables: [
    "Full-funnel systems audit",
    "Conversion architecture redesign",
    "Automation stack deployment",
    "Executive reporting dashboard",
  ],
  process: [
    {
      step: "01",
      label: "Diagnostic",
      description:
        "Full-funnel telemetry audit across 14 touchpoints. Identified three critical failure nodes responsible for 73% of total drop-off. Quantified opportunity cost at $2.4M ARR.",
      duration: "Weeks 1–2",
      output: "Funnel audit report · Failure node map · Prioritised intervention backlog",
      status: "complete",
    },
    {
      step: "02",
      label: "Architecture",
      description:
        "Designed a zero-friction conversion architecture. Eliminated 9 manual steps. Deployed structured automation with rollback safety gates and failure-domain isolation.",
      duration: "Weeks 3–6",
      output: "System design doc · Automation blueprints · Staging environment",
      status: "complete",
    },
    {
      step: "03",
      label: "Deployment",
      description:
        "Phased rollout with A/B validation gates. Each phase required a minimum 15% lift signal before advancing. Zero downtime achieved across all cutover windows.",
      duration: "Weeks 7–10",
      output: "Live system · A/B test results · Rollback runbook",
      status: "complete",
    },
    {
      step: "04",
      label: "Optimisation",
      description:
        "Continuous telemetry monitoring with automated anomaly detection. Human review triggered within 90 seconds of deviation. Iterative micro-experiments running every sprint.",
      duration: "Weeks 11–24",
      output: "Telemetry dashboard · Anomaly runbook · Ongoing experiment log",
      status: "active",
    },
  ],
  url: "#",
});
