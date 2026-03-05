"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, MapPin, ExternalLink, ShieldAlert } from "lucide-react";

interface LicenseData {
    state: string;
    professions: {
        [key: string]: {
            hoursRequired: number;
            cycleLength: string;
            boardUrl: string;
            notes?: string;
        }
    }
}

const PROFESSIONS = [
    { id: "pt", label: "Physical Therapy (PT)" },
    { id: "ot", label: "Occupational Therapy (OT)" },
    { id: "at", label: "Athletic Training (AT)" },
    { id: "dc", label: "Chiropractic (DC)" },
];

const MOCK_DATA: Record<string, LicenseData> = {
    "california": {
        state: "California",
        professions: {
            "pt": { hoursRequired: 30, cycleLength: "2 Years", boardUrl: "https://www.ptbc.ca.gov/", notes: "Requires 2 hours in ethics/laws/regs plus 4 hours in life support." },
            "ot": { hoursRequired: 24, cycleLength: "2 Years", boardUrl: "https://www.bot.ca.gov/", notes: "Professional Development Units (PDUs) required." },
            "at": { hoursRequired: 50, cycleLength: "2 Years", boardUrl: "https://bocatc.org/", notes: "Follows strictly BOC national requirements." },
            "dc": { hoursRequired: 24, cycleLength: "1 Year", boardUrl: "https://www.chiro.ca.gov/", notes: "Requires minimum 2 hours ethics/law." },
        }
    },
    "new_york": {
        state: "New York",
        professions: {
            "pt": { hoursRequired: 36, cycleLength: "3 Years", boardUrl: "https://www.op.nysed.gov/prof/pt/", notes: "Must be from a state-approved sponsor." },
            "ot": { hoursRequired: 36, cycleLength: "3 Years", boardUrl: "https://www.op.nysed.gov/prof/ot/", notes: "Max 24 hours of self-study." },
            "at": { hoursRequired: 50, cycleLength: "2 Years", boardUrl: "https://bocatc.org/", notes: "NY state licensure does not mandate specific hours, but BOC certification maintenance does." },
            "dc": { hoursRequired: 36, cycleLength: "3 Years", boardUrl: "https://www.op.nysed.gov/prof/chiro/", notes: "" },
        }
    },
    "texas": {
        state: "Texas",
        professions: {
            "pt": { hoursRequired: 30, cycleLength: "2 Years", boardUrl: "https://www.ptot.texas.gov/", notes: "Requires TX jurisprudence assessment." },
            "ot": { hoursRequired: 24, cycleLength: "2 Years", boardUrl: "https://www.ptot.texas.gov/", notes: "Requires TX jurisprudence assessment." },
            "at": { hoursRequired: 40, cycleLength: "2 Years", boardUrl: "https://www.tdlr.texas.gov/", notes: "Must include 2 hours of concussion management." },
            "dc": { hoursRequired: 16, cycleLength: "1 Year", boardUrl: "https://www.tbce.state.tx.us/", notes: "Specific hour minimums for specific topics per board rule." },
        }
    }
};

export default function LicenseExplorerApp() {
    const [selectedState, setSelectedState] = useState<string>("california");
    const [selectedProf, setSelectedProf] = useState<string>("pt");

    const stateData = MOCK_DATA[selectedState];
    const profData = stateData?.professions[selectedProf];

    return (
        <div className="flex flex-col h-full bg-neutral-950 text-white rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl">

            {/* Header */}
            <div className="p-6 md:p-8 border-b border-neutral-800 bg-gradient-to-r from-purple-900/20 to-pink-900/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative z-10">
                    License Requirements Explorer
                </h2>
                <p className="text-neutral-400 mt-2 max-w-2xl relative z-10">
                    A dynamic comparative engine mapping continuing education requirements across state lines and disciplines.
                </p>
            </div>

            <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
                {/* Navigation Sidebar */}
                <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-neutral-800 bg-neutral-900/40 p-4 md:p-6 overflow-y-auto">
                    <div className="mb-6 z-10">
                        <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2 block">
                            Filter by State
                        </label>
                        <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400" />
                            <select
                                value={selectedState}
                                onChange={(e) => setSelectedState(e.target.value)}
                                className="w-full bg-neutral-950 border border-neutral-800 text-white text-sm rounded-lg p-2 pl-9 focus:ring-1 focus:ring-purple-500 appearance-none"
                            >
                                <option value="california">California</option>
                                <option value="new_york">New York</option>
                                <option value="texas">Texas</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2 block">
                            Professional Discipline
                        </label>
                        <div className="flex flex-col gap-2">
                            {PROFESSIONS.map((prof) => (
                                <button
                                    key={prof.id}
                                    onClick={() => setSelectedProf(prof.id)}
                                    className={`text-left text-sm p-3 rounded-lg border transition-all ${selectedProf === prof.id
                                            ? "bg-purple-500/10 border-purple-500/50 text-purple-300"
                                            : "bg-transparent border-transparent text-neutral-400 hover:bg-neutral-800/50"
                                        }`}
                                >
                                    {prof.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Dynamic Content Area */}
                <div className="flex-1 p-6 md:p-10 overflow-y-auto bg-neutral-950">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`${selectedState}-${selectedProf}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="max-w-3xl"
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <FileText className="w-8 h-8 text-neutral-600" />
                                <h3 className="text-2xl font-semibold">
                                    {stateData.state} · <span className="text-purple-400">{PROFESSIONS.find(p => p.id === selectedProf)?.label}</span>
                                </h3>
                            </div>

                            {profData ? (
                                <>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                                        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                                            <span className="text-4xl font-bold font-mono text-white mb-1">{profData.hoursRequired}</span>
                                            <span className="text-sm font-medium text-neutral-400 uppercase tracking-wide">CE Hours Required</span>
                                        </div>

                                        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                                            <span className="text-2xl font-bold text-white mb-2">{profData.cycleLength}</span>
                                            <span className="text-sm font-medium text-neutral-400 uppercase tracking-wide">Renewal Cycle</span>
                                        </div>
                                    </div>

                                    {profData.notes && (
                                        <div className="bg-blue-900/10 border border-blue-900/30 rounded-xl p-5 mb-8 flex items-start gap-4">
                                            <ShieldAlert className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                                            <div>
                                                <h4 className="text-sm font-semibold text-blue-300 mb-1">State Specific Regulations</h4>
                                                <p className="text-sm text-neutral-300 leading-relaxed">{profData.notes}</p>
                                            </div>
                                        </div>
                                    )}

                                    <a
                                        href={profData.boardUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-medium rounded-lg transition-colors border border-neutral-700 hover:border-neutral-500"
                                    >
                                        View Official Board Website <ExternalLink className="w-4 h-4" />
                                    </a>
                                </>
                            ) : (
                                <div className="text-neutral-500 italic">No data available for this selection.</div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
