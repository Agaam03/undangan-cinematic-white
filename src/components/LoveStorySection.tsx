"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WEDDING_DATA } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const LoveStorySection = () => {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".love-story-item", {
                scrollTrigger: {
                    trigger: ".love-story-item",
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.3,
                ease: "power3.out"
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className=" px-3 md:px-6 text-white ">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
                {/* Header */}
                <div className="flex items-center justify-center gap-6 mb-7 ">
                    {/* Left Line */}
                    <div className="h-px w-52 md:w-32 bg-white"></div>

                    {/* Title Text */}
                    <div className="text-center flex flex-col items-center justify-center">
                        <h2 className="leading-tight">
                            <span id="hero-section" className="text-4xl md:text-5xl text-white block">Our Love</span>
                            <span className="font-pinyon flex -mt-3 text-center items-center justify-center text-4xl md:text-6xl text-[#e9f5f5] tracking-wide">Story</span>
                        </h2>
                    </div>
                </div>

                <div className="space-y-12 w-full">
                    {WEDDING_DATA.loveStory.map((item, index) => (
                        <div key={index} className={`love-story-item flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}>
                            {/* Polaroid Image */}
                            <div className="relative group w-full max-w-[390px] md:w-[400px]">

                                <div className="bg-white shadow-xl  not-visited:group-hover:rotate-0 transition-transform duration-500 w-full relative">
                                    <div className="relative w-full aspect-video bg-gray-200 overflow-hidden rounded-sm border border-gray-100">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 400px"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 text-center md:text-left">
                                {/* Date with decorative line */}
                                <div className="flex items-center gap-4 mb-4 justify-center md:justify-start">

                                    <div className="h-px w-23 bg-[#e9f5f5]"></div>
                                    <span className="font-pinyon text-2xl text-[#e9f5f5]">
                                        {item.date}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 id="hero-section" className="text-2xl md:text-3xl text-white mb-4 tracking-wide">
                                    {item.title}
                                </h3>
                                {/* Description */}
                                <p className="text-white/70 leading-relaxed text-sm md:text-base text-justify">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LoveStorySection;
