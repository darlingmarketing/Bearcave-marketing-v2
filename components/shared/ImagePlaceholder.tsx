import React from 'react';

interface ImagePlaceholderProps {
    className?: string;
}

export function ImagePlaceholder({ className = '' }: ImagePlaceholderProps) {
    return (
        <div className={`bg-[#0a0a0a] border border-[#1f1f1f] flex flex-col items-center justify-center relative overflow-hidden rounded-xl group ${className}`}>
            {/* Subtle grid pattern for aesthetic */}
            <div
                className="absolute inset-0 opacity-10 transition-opacity duration-500 group-hover:opacity-20"
                style={{
                    backgroundImage: 'radial-gradient(#444 1px, transparent 1px)',
                    backgroundSize: '16px 16px',
                }}
            />

            {/* Ambient glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFA500]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Central icon/badge */}
            <div className="relative flex flex-col items-center gap-3 text-[#333] group-hover:text-[#FFA500]/60 transition-colors duration-500 z-10 px-4 text-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                </svg>
                <div className="flex flex-col gap-1 text-center">
                    <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#fff]/20 group-hover:text-[#FFA500]/60">Nano Banana Integration</span>
                    <span className="font-serif text-xs italic text-[#fff]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">Awaiting Visual Prompt Generation</span>
                </div>
            </div>
        </div>
    );
}
