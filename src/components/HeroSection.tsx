"use client";

import React, { useEffect, useState } from 'react';
import { WEDDING_DATA } from '../constants';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
    const { couple, weddingDateDisplay, hero } = WEDDING_DATA;
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animation after mount
        setTimeout(() => setIsVisible(true), 300);
    }, []);

    return (
        <main className="relative h-screen w-full flex items-center justify-center overflow-hidden">


            {/* Vignette Effect */}
            <div className="absolute inset-0 z-10" style={{
                background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)'
            }}></div>

            {/* Content */}
            <div className="hero-content relative z-20 flex flex-col items-center justify-center text-center px-6 mb-16">
                {/* Decorative Line Top */}
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 md:w-24 h-px bg-white/50"></div>
                    <div className="w-2 h-2 bg-white/80 rotate-45"></div>
                    <div className="w-16 md:w-24 h-px bg-white/50"></div>
                </div>

                {/* Pre-title */}
                <p className="text-sm md:text-base tracking-[0.4em] uppercase text-white/90 font-light mb-4 drop-shadow-lg">
                    {hero.title}
                </p>

                {/* Main Title */}
                <h1 id="hero-section" className="text-6xl md:text-8xl lg:text-9xl drop-shadow-2xl mb-4 leading-tight">
                    <span className="block">{couple.bride.name}</span>
                    <span className="text-3xl md:text-4xl lg:text-5xl font-light text-white/80 my-2 block">&</span>
                    <span className="block">{couple.groom.name}</span>
                </h1>

                {/* Decorative Diamond */}
                <div className="flex items-center gap-3 my-6">
                    <div className="w-12 md:w-20 h-px bg-white/60"></div>
                    <div className="w-3 h-3 border border-white/80 rotate-45"></div>
                    <div className="w-12 md:w-20 h-px bg-white/60"></div>
                </div>

                {/* Date */}
                <div className="flex flex-col items-center gap-2">
                    <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-white/70 font-light">
                        Save The Date
                    </p>
                    <p className="font-playfair text-2xl md:text-3xl tracking-[0.2em] drop-shadow-lg text-white">
                        {weddingDateDisplay}
                    </p>
                </div>

                {/* Decorative Line Bottom */}
                <div className="flex items-center gap-4 mt-8">
                    <div className="w-8 md:w-12 h-px bg-white/40"></div>
                    <div className="w-1.5 h-1.5 bg-white/60 rotate-45"></div>
                    <div className="w-8 md:w-12 h-px bg-white/40"></div>
                </div>
            </div>


            {/* Corner Decorations */}
            <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-white/20 z-20"></div>
            <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-white/20 z-20"></div>
            <div className="absolute bottom-22 left-8 w-16 h-16 border-l-2 border-b-2 border-white/20 z-20"></div>
            <div className="absolute bottom-22 right-8 w-16 h-16 border-r-2 border-b-2 border-white/20 z-20"></div>
        </main>
    );
};

export default HeroSection;
