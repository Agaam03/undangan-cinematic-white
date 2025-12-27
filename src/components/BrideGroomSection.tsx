"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Instagram } from 'lucide-react';
import { WEDDING_DATA } from '../constants';

const BrideGroomSection = () => {
    const { couple } = WEDDING_DATA;
    const [brideIndex, setBrideIndex] = useState(0);
    const [groomIndex, setGroomIndex] = useState(0);
    const [brideDirection, setBrideDirection] = useState<'left' | 'right'>('right');
    const [groomDirection, setGroomDirection] = useState<'left' | 'right'>('left');

    // Auto slide for bride photos
    useEffect(() => {
        const interval = setInterval(() => {
            setBrideDirection('right');
            setBrideIndex((prev) => (prev + 1) % couple.bride.photos.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [couple.bride.photos.length]);

    // Auto slide for groom photos (offset timing)
    useEffect(() => {
        const interval = setInterval(() => {
            setGroomDirection('left');
            setGroomIndex((prev) => (prev + 1) % couple.groom.photos.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [couple.groom.photos.length]);

    return (
        <main className="flex mx-2 rounded-sm bg-[#e9f5f5] text-black flex-row justify-center w-full max-w-4xl backdrop-blur-sm">
            {/* Vertical Text Sidebar */}
            <div className="flex w-20 md:w-20 items-center justify-center shrink-0">
                <h2 className="font-playfair whitespace-nowrap text-black text-[32px] md:text-4xl origin-center transform -rotate-90 opacity-80">
                    Bride & Groom
                </h2>
            </div>

            {/* Cards Container */}
            <div className="relative flex flex-col flex-1">

                {/* Bride Card */}
                <div className="relative w-full rounded-tr-sm overflow-hidden shadow-2xl group" style={{ aspectRatio: '2/3' }}>
                    {/* Sliding Images Container */}
                    <div className="absolute inset-0 w-full h-full">
                        {couple.bride.photos.map((photo, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === brideIndex
                                    ? 'opacity-100 translate-x-0'
                                    : index < brideIndex
                                        ? 'opacity-0 -translate-x-full'
                                        : 'opacity-0 translate-x-full'
                                    }`}
                            >
                                <Image
                                    src={photo}
                                    alt={`${couple.bride.fullName} ${index + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Inset Border Frame */}
                    <div className="absolute inset-2 md:inset-4 border border-white/60 rounded-xl z-10 pointer-events-none"></div>

                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent z-10"></div>

                    <div className="absolute bottom-4 left-0 w-full px-4 md:px-10 text-center text-white z-20">
                        <div className="bg-blue-200/15 p-2 rounded-2xl border border-white/20 shadow-lg">
                            <h3 id='hero-section' className="font-playfair text-2xl md:text-xl mb-1">{couple.bride.fullName}</h3>
                            <p className="text-xs md:text-sm opacity-90 font-sans tracking-wide">{couple.bride.childOrder}</p>
                            <p className="text-sm md:text-base font-semibold mb-2">{couple.bride.parents}</p>
                            <a href={`https://instagram.com/${couple.bride.instagram}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-200/15 hover:bg-blue-200/30 text-[#e9f5f5] px-4 py-1 rounded-md text-sm font-medium transition-colors shadow-lg">
                                <Instagram size={16} />
                                @{couple.bride.instagram}
                            </a>
                        </div>
                    </div>
                </div>

                {/* Groom Card */}
                <div className="relative w-full rounded-br-sm overflow-hidden shadow-2xl group" style={{ aspectRatio: '2/3' }}>
                    {/* Sliding Images Container */}
                    <div className="absolute inset-0 w-full h-full">
                        {couple.groom.photos.map((photo, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === groomIndex
                                    ? 'opacity-100 translate-x-0'
                                    : index < groomIndex
                                        ? 'opacity-0 translate-x-full'
                                        : 'opacity-0 -translate-x-full'
                                    }`}
                            >
                                <Image
                                    src={photo}
                                    alt={`${couple.groom.fullName} ${index + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Inset Border Frame */}
                    <div className="absolute inset-2 md:inset-4 border border-white/60 rounded-xl z-10 pointer-events-none"></div>

                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent z-10"></div>


                    <div className="absolute bottom-4 left-0 w-full px-4 md:px-10 text-center text-white z-20">
                        <div className="bg-blue-200/15 p-2 rounded-2xl border border-white/20 shadow-lg">
                            <h3 id='hero-section' className="font-playfair text-2xl md:text-xl mb-1">{couple.groom.fullName}</h3>
                            <p className="text-xs md:text-sm opacity-90 font-sans tracking-wide">{couple.groom.childOrder}</p>
                            <p className="text-sm md:text-base font-semibold mb-2">{couple.groom.parents}</p>
                            <a href={`https://instagram.com/${couple.groom.instagram}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-200/15 hover:bg-blue-200/30 text-[#e9f5f5] px-4 py-1 rounded-md text-sm font-medium transition-colors shadow-lg">
                                <Instagram size={16} />
                                @{couple.groom.instagram}
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
};

export default BrideGroomSection;
