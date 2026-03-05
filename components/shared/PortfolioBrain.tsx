"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Cpu } from "lucide-react";

interface Message {
    role: "user" | "system";
    content: string;
}

export default function PortfolioBrain() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            role: "system",
            content: "BEARCAVE OS [Version 10.0.22000.778]\n(c) Bearcave Marketing. All rights reserved.\n\nQuerying primary methodology index... Ready. Ask me anything about Jacob's strategies, case studies, or tech stacks.",
        },
    ]);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        // Add user message
        const userMsg = input.trim();
        setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
        setInput("");

        // Simulate RAG / MCP Server delay
        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                {
                    role: "system",
                    content: "[MCP QUERY INITIATED] Searching vector space...\n\nBased on the \"Acquisition Engine Scaling\" case study and the underlying architectural principles, Jacob favors building centralized data layers (like Snowflake + dbt) that sync offline CRM conversions directly back into the ad platform's optimization algorithms, allowing them to train on actual closed-won revenue rather than surface-level MQLs.",
                },
            ]);
        }, 1500);
    };

    return (
        <>
            {/* The Floating Orb / Trigger */}
            <div className="fixed bottom-4 left-4 z-50">
                <button
                    onClick={() => setIsOpen(true)}
                    className={`
            group flex h-14 w-14 items-center justify-center rounded-full bg-black border border-[#1f1f1f]
            transition-all duration-500 hover:scale-110 hover:border-[#FFA500] 
            ${isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"}
          `}
                >
                    {/* Ambient Glow */}
                    <div className="absolute inset-0 rounded-full animate-pulse bg-gradient-to-tr from-[#FFA500]/20 to-[#00F2FF]/20 blur-md pointer-events-none group-hover:blur-lg transition-all duration-500" />

                    <Cpu className="relative z-10 text-[#a0a0a0] group-hover:text-[#EDEDED] transition-colors" size={24} />
                </button>
            </div>

            {/* The Expanded Chat Interface */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed bottom-4 left-4 md:left-6 z-50 w-[calc(100vw-2rem)] md:w-[450px] overflow-hidden rounded-xl border border-[#333] bg-black/90 backdrop-blur-2xl shadow-2xl flex flex-col h-[500px]"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-[#1f1f1f] bg-[#050505] p-4">
                            <div className="flex items-center gap-3">
                                <div className="relative flex h-8 w-8 items-center justify-center rounded-md border border-[#333] bg-[#111]">
                                    <div className="absolute inset-0 bg-[#FFA500]/10" />
                                    <Cpu size={16} className="text-[#FFA500]" />
                                </div>
                                <div>
                                    <h3 className="text-xs font-bold uppercase tracking-widest text-[#EDEDED] font-mono">Portfolio Brain</h3>
                                    <p className="text-[9px] uppercase tracking-widest text-[#a0a0a0] font-mono flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66] animate-pulse" />
                                        MCP Socket Connected
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="rounded-md p-2 text-[#a0a0a0] hover:bg-[#111] hover:text-white transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-6 font-mono text-sm scrollbar-hide">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}>
                                    <div className={`
                    max-w-[85%] rounded-lg px-4 py-3 whitespace-pre-wrap
                    ${msg.role === "user"
                                            ? "bg-[#111] border border-[#333] text-[#EDEDED]"
                                            : "bg-transparent text-[#a0a0a0] border-l-2 border-[#FFA500] pl-4 italic"}
                  `}>
                                        {msg.content}
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="border-t border-[#1f1f1f] bg-[#050505] p-4">
                            <form onSubmit={handleSubmit} className="relative flex items-center">
                                <span className="absolute left-4 text-[#00F2FF] font-mono font-bold">{">"}</span>
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Query knowledge base..."
                                    className="w-full bg-transparent border border-[#333] rounded-sm py-3 pl-8 pr-12 text-sm text-[#EDEDED] placeholder-[#666] focus:outline-none focus:border-[#FFA500] font-mono transition-colors"
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim()}
                                    className="absolute right-2 p-2 text-[#a0a0a0] hover:text-[#FFA500] disabled:opacity-50 disabled:hover:text-[#a0a0a0] transition-colors"
                                >
                                    <Send size={16} />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
