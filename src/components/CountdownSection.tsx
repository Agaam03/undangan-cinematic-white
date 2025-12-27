"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Calendar } from 'lucide-react';
import { WEDDING_DATA } from '../constants';

const CountdownSection = () => {
    const { weddingDate, hero } = WEDDING_DATA;
    const targetDate = weddingDate.getTime();

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(interval);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <section className="relative w-full py-6 px-4 flex items-center justify-center ">

            {/* Main Content */}
            <div className="text-white text-center max-w-4xl w-full">

                {/* Top Decorative Element */}
                <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="h-px w-10 bg-linear-to-r from-transparent to-[#e9f5f5]"></div>
                    <span className="text-[#e9f5f5] text-xl">✦</span>
                    <div className="h-px w-10 bg-linear-to-l from-transparent to-[#e9f5f5]"></div>
                </div>

                {/* Title */}
                <h2 className="font-playfair text-2xl md:text-4xl mb-2 tracking-wide text-white/90">
                    Save The Date
                </h2>

                {/* Subtitle */}
                <p className="text-white/60 text-xs md:text-sm tracking-widest uppercase mb-10">
                    Counting down to our special day
                </p>

                {/* Countdown Numbers */}
                <div className="grid grid-cols-4 gap-4 md:gap-8 mb-10">

                    {/* Days */}
                    <div className="flex flex-col items-center">
                        <div className="relative">
                            <span className="font-playfair text-4xl md:text-6xl font-light tabular-nums bg-linear-to-b from-white to-white/60 bg-clip-text text-transparent">
                                {String(timeLeft.days).padStart(2, '0')}
                            </span>
                        </div>
                        <div className="mt-2 flex flex-col items-center">
                            <div className="w-6 h-px bg-[#e9f5f5]/50 mb-2"></div>
                            <span className="text-xs md:text-sm font-light tracking-[0.3em] uppercase text-white/70">Days</span>
                        </div>
                    </div>

                    {/* Hours */}
                    <div className="flex flex-col items-center">
                        <div className="relative">
                            <span className="font-playfair text-4xl md:text-6xl font-light tabular-nums bg-linear-to-b from-white to-white/60 bg-clip-text text-transparent">
                                {String(timeLeft.hours).padStart(2, '0')}
                            </span>
                        </div>
                        <div className="mt-2 flex flex-col items-center">
                            <div className="w-6 h-px bg-[#e9f5f5]/50 mb-2"></div>
                            <span className="text-xs md:text-sm font-light tracking-[0.3em] uppercase text-white/70">Hours</span>
                        </div>
                    </div>

                    {/* Minutes */}
                    <div className="flex flex-col items-center">
                        <div className="relative">
                            <span className="font-playfair text-4xl md:text-6xl font-light tabular-nums bg-linear-to-b from-white to-white/60 bg-clip-text text-transparent">
                                {String(timeLeft.minutes).padStart(2, '0')}
                            </span>
                        </div>
                        <div className="mt-2 flex flex-col items-center">
                            <div className="w-6 h-px bg-[#e9f5f5]/50 mb-2"></div>
                            <span className="text-xs md:text-sm font-light tracking-[0.3em] uppercase text-white/70">Minutes</span>
                        </div>
                    </div>

                    {/* Seconds */}
                    <div className="flex flex-col items-center">
                        <div className="relative">
                            <span className="font-playfair text-4xl md:text-6xl font-light tabular-nums bg-linear-to-b from-white to-white/60 bg-clip-text text-transparent animate-pulse">
                                {String(timeLeft.seconds).padStart(2, '0')}
                            </span>
                        </div>
                        <div className="mt-2 flex flex-col items-center">
                            <div className="w-6 h-px bg-[#e9f5f5]/50 mb-2"></div>
                            <span className="text-xs md:text-sm font-light tracking-[0.3em] uppercase text-white/70">Seconds</span>
                        </div>
                    </div>

                </div>

                {/* Wedding Date Display */}
                <div className="mb-6">
                    <p className="font-playfair text-lg md:text-xl text-white tracking-wide">
                        31 Desember 2026
                    </p>
                </div>

                {/* Bottom Decorative Element */}
                <div className="flex items-center justify-center gap-3 mt-8">
                    <span className="w-1 h-1 rounded-full bg-[#e9f5f5]/50"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e9f5f5]"></span>
                    <span className="w-1 h-1 rounded-full bg-[#e9f5f5]/50"></span>
                </div>

            </div>
        </section>
    );
};

export default CountdownSection;
