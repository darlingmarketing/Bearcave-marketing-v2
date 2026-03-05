"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Activity, Bone, UserPlus } from "lucide-react";

type Step = "region" | "pathology" | "phase" | "summary";

interface ProtocolState {
    region: string | null;
    pathology: string | null;
    phase: string | null;
}

const REGIONS = [
    { id: "ankle", label: "Ankle", icon: Bone },
    { id: "knee", label: "Knee", icon: Bone },
    { id: "hip", label: "Hip", icon: Bone },
    { id: "shoulder", label: "Shoulder", icon: UserPlus },
    { id: "elbow", label: "Elbow", icon: Bone },
    { id: "cervical", label: "Cervical", icon: Activity },
    { id: "lumbar", label: "Lumbar", icon: Activity },
];

const PATHOLOGIES: Record<string, string[]> = {
    ankle: ["Achilles Tendinopathy", "Ankle Sprain", "Plantar Fasciitis"],
    knee: ["Patellar Tendinopathy", "IT Band Syndrome", "Meniscal Tear"],
    hip: ["Hip Flexor Strain", "Piriformis Syndrome", "Trochanteric Bursitis"],
    shoulder: ["Rotator Cuff Tendinopathy", "Adhesive Capsulitis", "Biceps Tendinopathy"],
    elbow: ["Lateral Epicondylalgia", "Medial Epicondylalgia", "Olecranon Bursitis"],
    cervical: ["Cervical Strain/Sprain", "Cervicogenic Headache", "Facet Syndrome"],
    lumbar: ["Lumbar Strain/Sprain", "SI Joint Dysfunction", "Degenerative Disc Disease"],
};

const PHASES = [
    { id: "acute", label: "Acute Phase", desc: "Pain modulation & swelling reduction" },
    { id: "subacute", label: "Sub-Acute Phase", desc: "Restoring ROM & early loading" },
    { id: "remodeling", label: "Remodeling Phase", desc: "Progressive strengthening & functional return" },
];

export default function ProtocolBuilderApp() {
    const [currentStep, setCurrentStep] = useState<Step>("region");
    const [state, setState] = useState<ProtocolState>({
        region: null,
        pathology: null,
        phase: null,
    });

    const goNext = (step: Step) => setCurrentStep(step);
    const goBack = (step: Step) => setCurrentStep(step);

    const reset = () => {
        setState({ region: null, pathology: null, phase: null });
        setCurrentStep("region");
    };

    const currentPathologies = state.region ? PATHOLOGIES[state.region] || [] : [];

    return (
        <div className="flex flex-col h-full bg-neutral-950 text-white font-sans max-w-4xl mx-auto rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl">
            {/* App Header */}
            <div className="flex items-center justify-between p-6 border-b border-neutral-800 bg-neutral-900/50">
                <div>
                    <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Intelligent Protocol Builder
                    </h2>
                    <p className="text-sm text-neutral-400 mt-1">Generate customized clinical pathways dynamically.</p>
                </div>
                <div className="flex items-center space-x-2 text-sm text-neutral-500 font-medium">
                    <span className={currentStep === "region" ? "text-blue-400" : ""}>Region</span>
                    <span>→</span>
                    <span className={currentStep === "pathology" ? "text-blue-400" : ""}>Condition</span>
                    <span>→</span>
                    <span className={currentStep === "phase" ? "text-blue-400" : ""}>Phase</span>
                    <span>→</span>
                    <span className={currentStep === "summary" ? "text-green-400" : ""}>Protocol</span>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 p-6 sm:p-10 overflow-y-auto relative min-h-[400px]">
                <AnimatePresence mode="wait">
                    {/* STEP 1: REGION */}
                    {currentStep === "region" && (
                        <motion.div
                            key="region"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="flex flex-col h-full"
                        >
                            <h3 className="text-2xl font-semibold mb-6">Select Anatomical Region</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                {REGIONS.map((region) => (
                                    <button
                                        key={region.id}
                                        onClick={() => {
                                            setState({ ...state, region: region.id, pathology: null });
                                            goNext("pathology");
                                        }}
                                        className={`flex flex-col items-center justify-center p-6 rounded-2xl border transition-all duration-200 ${state.region === region.id
                                                ? "bg-blue-500/10 border-blue-500 text-blue-400"
                                                : "bg-neutral-900/40 border-neutral-800 text-neutral-300 hover:border-neutral-600 hover:bg-neutral-800/50"
                                            }`}
                                    >
                                        <region.icon className="w-8 h-8 mb-3" />
                                        <span className="font-medium">{region.label}</span>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 2: PATHOLOGY */}
                    {currentStep === "pathology" && (
                        <motion.div
                            key="pathology"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="flex flex-col h-full"
                        >
                            <h3 className="text-2xl font-semibold mb-6">Select Condition</h3>
                            <div className="flex flex-col space-y-3 max-w-xl">
                                {currentPathologies.map((pathology) => (
                                    <button
                                        key={pathology}
                                        onClick={() => {
                                            setState({ ...state, pathology });
                                            goNext("phase");
                                        }}
                                        className={`flex items-center p-4 rounded-xl border transition-all duration-200 text-left ${state.pathology === pathology
                                                ? "bg-blue-500/10 border-blue-500 text-blue-400"
                                                : "bg-neutral-900/40 border-neutral-800 text-neutral-300 hover:border-neutral-600 hover:bg-neutral-800/50"
                                            }`}
                                    >
                                        <CheckCircle2 className={`w-5 h-5 mr-4 ${state.pathology === pathology ? "text-blue-500" : "text-neutral-600"}`} />
                                        <span className="font-medium text-lg">{pathology}</span>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 3: PHASE */}
                    {currentStep === "phase" && (
                        <motion.div
                            key="phase"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="flex flex-col h-full"
                        >
                            <h3 className="text-2xl font-semibold mb-6">Select Treatment Phase</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
                                {PHASES.map((phase) => (
                                    <button
                                        key={phase.id}
                                        onClick={() => {
                                            setState({ ...state, phase: phase.id });
                                            goNext("summary");
                                        }}
                                        className={`flex flex-col p-6 rounded-2xl border transition-all duration-200 text-left ${state.phase === phase.id
                                                ? "bg-blue-500/10 border-blue-500"
                                                : "bg-neutral-900/40 border-neutral-800 hover:border-neutral-600 hover:bg-neutral-800/50"
                                            }`}
                                    >
                                        <span className="font-bold text-lg text-white mb-2">{phase.label}</span>
                                        <span className="text-neutral-400 text-sm">{phase.desc}</span>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 4: SUMMARY */}
                    {currentStep === "summary" && (
                        <motion.div
                            key="summary"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="flex flex-col h-full"
                        >
                            <div className="bg-gradient-to-b from-blue-500/20 to-transparent border border-blue-500/30 rounded-2xl p-8 text-center max-w-2xl mx-auto">
                                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Activity className="w-8 h-8 text-blue-400" />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-2">Protocol Generated</h3>
                                <p className="text-neutral-400 mb-8">Your clinical pathway is successfully compiled.</p>

                                <div className="bg-neutral-900/80 rounded-xl p-6 text-left border border-neutral-800 backdrop-blur-sm">
                                    <div className="grid grid-cols-2 gap-y-4">
                                        <div className="text-neutral-500 text-sm">Region</div>
                                        <div className="text-white font-medium capitalize">{state.region}</div>

                                        <div className="text-neutral-500 text-sm">Condition</div>
                                        <div className="text-white font-medium">{state.pathology}</div>

                                        <div className="text-neutral-500 text-sm">Treatment Phase</div>
                                        <div className="text-white font-medium capitalize">{PHASES.find((p) => p.id === state.phase)?.label}</div>
                                    </div>
                                </div>

                                <button
                                    onClick={reset}
                                    className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-colors"
                                >
                                    Start New Protocol
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Footer Navigation */}
            <div className="p-4 sm:px-6 border-t border-neutral-800 bg-neutral-900/30 flex justify-between items-center">
                {currentStep !== "region" && currentStep !== "summary" ? (
                    <button
                        onClick={() => goBack(currentStep === "pathology" ? "region" : "pathology")}
                        className="flex items-center px-4 py-2 text-neutral-400 hover:text-white transition-colors text-sm font-medium"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back
                    </button>
                ) : (
                    <div></div> // Spacer
                )}
            </div>
        </div>
    );
}
