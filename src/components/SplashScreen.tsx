"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { WEDDING_DATA } from '../constants';
import { getAssetsToPreload, isAssetsCached, preloadAllAssets } from '../utils/assetPreloader';

interface SplashScreenProps {
    guestName?: string;
    onEnter: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ guestName = "Tamu Undangan", onEnter }) => {
    const { couple, hero } = WEDDING_DATA;
    const [isVisible, setIsVisible] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [loadingText, setLoadingText] = useState("Memuat...");
    const containerRef = useRef<HTMLDivElement>(null);

    // Preload assets on mount
    useEffect(() => {
        const loadAssets = async () => {
            // Check if already cached
            if (isAssetsCached()) {
                setLoadingText("Siap!");
                setLoadingProgress(100);
                setTimeout(() => {
                    setIsLoading(false);
                }, 500);
                return;
            }

            // Get all assets to preload
            const assets = getAssetsToPreload(WEDDING_DATA as Parameters<typeof getAssetsToPreload>[0]);

            setLoadingText("Mengunduh aset...");

            // Preload with progress
            await preloadAllAssets(assets, (loaded, total) => {
                const progress = Math.round((loaded / total) * 100);
                setLoadingProgress(progress);

                if (progress < 30) {
                    setLoadingText("Memuat gambar...");
                } else if (progress < 60) {
                    setLoadingText("Memuat video...");
                } else if (progress < 90) {
                    setLoadingText("Hampir selesai...");
                } else {
                    setLoadingText("Siap!");
                }
            });

            setTimeout(() => {
                setIsLoading(false);
            }, 500);
        };

        loadAssets();
    }, []);

    const handleEnter = () => {
        if (!containerRef.current || isLoading) return;

        // GSAP slide-up animation
        gsap.to(containerRef.current, {
            y: '-100%',
            duration: 0.8,
            ease: 'power3.inOut',
            onComplete: () => {
                setIsVisible(false);
                onEnter();
            }
        });
    };

    if (!isVisible) return null;

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-100 flex items-center justify-center"
        >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <Image
                    src={hero.backgroundImage}
                    alt="Wedding Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-lg mx-auto">

                {/* Decorative Top */}
                <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="h-px w-12 bg-linear-to-r from-transparent to-[#C5A059]/50"></div>
                    <span className="text-[#e9f5f5] text-xl">✦</span>
                    <div className="h-px w-12 bg-linear-to-l from-transparent to-[#C5A059]/50"></div>
                </div>

                {/* The Wedding Of */}
                <p className="text-white/60 text-sm tracking-[0.3em] uppercase mb-2">
                    The Wedding Of
                </p>

                {/* Couple Names - One Row */}
                <h1 className="flex items-center justify-center gap-3 mb-6">
                    <span id="hero-section" className="text-3xl md:text-4xl text-white">
                        {couple.bride.name}
                    </span>
                    <span className="font-pinyon text-3xl md:text-4xl text-[#e9f5f5]">&</span>
                    <span id="hero-section" className="text-3xl md:text-4xl text-white">
                        {couple.groom.name}
                    </span>
                </h1>

                {/* Couple Photo - Center */}
                <div className="relative w-52 h-64 md:w-56 md:h-72 mx-auto mb-6 overflow-hidden border-4 border-white/20 shadow-2xl">
                    <Image
                        src="https://picsum.photos/seed/couple-splash/400/400"
                        alt="Couple Photo"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent"></div>
                </div>

                {/* Divider */}
                <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="h-px w-16 bg-white/20"></div>
                    <span className="text-white/40 text-xs">KEPADA YTH</span>
                    <div className="h-px w-16 bg-white/20"></div>
                </div>

                {/* Guest Name */}
                <div className="mb-6">
                    <p className="text-white/50 text-xs tracking-widest uppercase mb-2">Bapak/Ibu/Saudara/i</p>
                    <h2 className="font-pinyon text-3xl md:text-4xl text-[#e9f5f5]">
                        {guestName}
                    </h2>
                </div>

                {/* Loading Progress or Enter Button */}
                {isLoading ? (
                    <div className="flex flex-col items-center gap-3">
                        {/* Progress Bar */}
                        <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-[#e9f5f5] rounded-full transition-all duration-300"
                                style={{ width: `${loadingProgress}%` }}
                            />
                        </div>
                        {/* Loading Text */}
                        <p className="text-white/60 text-xs tracking-widest uppercase">
                            {loadingText} {loadingProgress}%
                        </p>
                    </div>
                ) : (
                    <button
                        onClick={handleEnter}
                        className="group relative inline-flex items-center gap-3 bg-orange-300/10 hover:bg-white/20 border border-white/30 hover:border-orange-300/50 text-white px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-sm"
                    >
                        <span className="text-sm tracking-widest uppercase">Buka Undangan</span>
                        <svg
                            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                )}

                {/* Decorative Bottom */}
                <div className="flex items-center justify-center gap-3 mt-6">
                    <span className="w-1 h-1 rounded-full bg-[#C5A059]/50"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
                    <span className="w-1 h-1 rounded-full bg-[#C5A059]/50"></span>
                </div>
            </div>
        </div>
    );
};

export default SplashScreen;
