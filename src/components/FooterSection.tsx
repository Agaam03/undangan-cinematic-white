"use client";

import React from 'react';
import { Heart } from 'lucide-react';
import { WEDDING_DATA } from '../constants';

const FooterSection = () => {
    const { couple, footer } = WEDDING_DATA;

    return (
        <footer className="py-16 px-6 text-center relative overflow-hidden">
            {/* Top decorative line */}
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#C5A059] to-transparent opacity-30"></div>

            <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center justify-center">

                {/* Decorative element */}
                <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="h-px w-12 bg-linear-to-r from-transparent to-[#C5A059]/50"></div>
                    <span className="text-[#e9f5f5] text-xl">✦</span>
                    <div className="h-px w-12 bg-linear-to-l from-transparent to-[#C5A059]/50"></div>
                </div>

                {/* Couple Names */}
                <h2 className="leading-tight mb-8">
                    <span id="hero-section" className="text-4xl md:text-5xl text-white block mb-2">{couple.bride.name}</span>
                    <span className="font-pinyon text-3xl md:text-4xl text-[#e9f5f5]">&</span>
                    <span id="hero-section" className="text-4xl md:text-5xl text-white block mt-2">{couple.groom.name}</span>
                </h2>

                {/* Quote */}
                <div className="max-w-lg mb-10">
                    <p className="text-white/60 italic text-sm md:text-base leading-relaxed mb-2">
                        &quot;{footer.quote}&quot;
                    </p>
                    <span className="text-xs text-white/70">— {footer.quoteSource}</span>
                </div>

                {/* Thank You */}
                <div className="flex items-center gap-3 text-white/50 text-sm tracking-widest uppercase mb-10">
                    <span>Thank You</span>
                    <Heart size={14} className="text-white fill-[#e48545] animate-pulse" />
                    <span>For Your Prayers</span>
                </div>

                {/* Copyright */}
                <div className="text-xs text-white/30 tracking-wider border-t border-white/10 pt-6 w-full">
                    <p>&copy; {new Date().getFullYear()} The Wedding of {couple.bride.name} & {couple.groom.name}</p>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
