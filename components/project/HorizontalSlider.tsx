"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import DigitalLoupe from "@/app/components/DigitalLoupe";

interface HorizontalSliderProps {
    prompts: string[];
}

export default function HorizontalSlider({ prompts }: HorizontalSliderProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const scrollWrapperRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [showLoupe, setShowLoupe] = useState(false);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const section = sectionRef.current;
        const scrollWrapper = scrollWrapperRef.current;

        if (!section || !scrollWrapper) return;

        // Calculate how far to translate to the left
        const getScrollAmount = () => {
            let wrapperWidth = scrollWrapper.scrollWidth;
            return -(wrapperWidth - window.innerWidth + window.innerWidth * 0.1); // Add a little buffer
        };

        const tween = gsap.to(scrollWrapper, {
            x: getScrollAmount,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top 20%",
                end: () => `+=${getScrollAmount() * -1}`,
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true,
            },
        });

        return () => {
            tween.kill();
            ScrollTrigger.getAll().forEach(t => {
                if (t.trigger === section) t.kill();
            });
        };
    }, [prompts]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <div
            ref={sectionRef}
            className="relative w-full overflow-hidden bg-black py-12"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setShowLoupe(true)}
            onMouseLeave={() => setShowLoupe(false)}
        >
            {/* Decorative text above slider */}
            <div className="absolute top-0 left-0 px-6 md:px-12 w-full flex justify-between items-center z-10">
                <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#a0a0a0]">
                    Execution Reel
                </span>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00FF66] animate-pulse shadow-[0_0_8px_#00FF66]"></span>
                    <span className="text-[10px] font-mono tracking-widest text-[#00FF66] uppercase">Actively Scrolling</span>
                </div>
            </div>

            <div
                ref={scrollWrapperRef}
                className="flex gap-8 w-fit px-6 md:px-12 mt-12"
            >
                {prompts.map((prompt, i) => (
                    <div
                        key={i}
                        className="w-[85vw] md:w-[60vw] lg:w-[45vw] aspect-[16/10] shrink-0 border border-[#1f1f1f] rounded-2xl overflow-hidden bg-[#050505] relative group"
                    >
                        <ImagePlaceholder className="w-full h-full" />

                        {/* Overlay description */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <p className="text-xs font-mono text-[#a0a0a0] max-w-sm truncate whitespace-normal line-clamp-2">
                                {prompt}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Digital Loupe Optical Layer */}
            <DigitalLoupe
                cursorX={mousePos.x}
                cursorY={mousePos.y}
                visible={showLoupe}
                radius={120}
            >
                {/* Duplicate content for optical zoom - GSAP x transform is handled by the ref's current style on the source */}
                <div
                    style={{
                        transform: scrollWrapperRef.current?.style.transform,
                        display: 'flex',
                        gap: '2rem', // 8 * 4px = 32px (gap-8)
                        width: 'fit-content',
                        paddingLeft: '3rem', // md:px-12
                        paddingRight: '3rem',
                        marginTop: '3rem'
                    }}
                >
                    {prompts.map((prompt, i) => (
                        <div
                            key={i}
                            className="w-[85vw] md:w-[60vw] lg:w-[45vw] aspect-[16/10] shrink-0 border border-[#1f1f1f] rounded-2xl overflow-hidden bg-[#050505] relative"
                        >
                            <ImagePlaceholder className="w-full h-full" />
                        </div>
                    ))}
                </div>
            </DigitalLoupe>
        </div>
    );
}
