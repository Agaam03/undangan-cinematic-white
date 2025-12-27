'use client';
import React from 'react';

const ArRumSection = () => {
    return (
        <section className="relative text-white py-5 px-6 flex flex-col items-center text-center overflow-hidden ">

            {/* Decorative Corner Ornaments */}
            <div className="absolute top-8 left-8 opacity-30">
                <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0C0 55.228 44.772 100 100 100" stroke="url(#gold-gradient)" strokeWidth="1" />
                    <path d="M0 20C0 64.183 35.817 100 80 100" stroke="url(#gold-gradient)" strokeWidth="1" />
                    <path d="M0 40C0 73.137 26.863 100 60 100" stroke="url(#gold-gradient)" strokeWidth="1" />
                    <defs>
                        <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#e9f5f5" />
                            <stop offset="50%" stopColor="#e9f5f5" />
                            <stop offset="100%" stopColor="#e9f5f5" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="absolute top-8 right-8 opacity-30 rotate-90">
                <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0C0 55.228 44.772 100 100 100" stroke="url(#gold-gradient2)" strokeWidth="1" />
                    <path d="M0 20C0 64.183 35.817 100 80 100" stroke="url(#gold-gradient2)" strokeWidth="1" />
                    <path d="M0 40C0 73.137 26.863 100 60 100" stroke="url(#gold-gradient2)" strokeWidth="1" />
                    <defs>
                        <linearGradient id="gold-gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#e9f5f5" />
                            <stop offset="50%" stopColor="#e9f5f5" />
                            <stop offset="100%" stopColor="#e9f5f5" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="absolute bottom-8 left-8 opacity-30 -rotate-90">
                <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0C0 55.228 44.772 100 100 100" stroke="url(#gold-gradient3)" strokeWidth="1" />
                    <path d="M0 20C0 64.183 35.817 100 80 100" stroke="url(#gold-gradient3)" strokeWidth="1" />
                    <path d="M0 40C0 73.137 26.863 100 60 100" stroke="url(#gold-gradient3)" strokeWidth="1" />
                    <defs>
                        <linearGradient id="gold-gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#e9f5f5" />
                            <stop offset="50%" stopColor="#e9f5f5" />
                            <stop offset="100%" stopColor="#e9f5f5" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="absolute bottom-8 right-8 opacity-30 rotate-180">
                <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0C0 55.228 44.772 100 100 100" stroke="url(#gold-gradient4)" strokeWidth="1" />
                    <path d="M0 20C0 64.183 35.817 100 80 100" stroke="url(#gold-gradient4)" strokeWidth="1" />
                    <path d="M0 40C0 73.137 26.863 100 60 100" stroke="url(#gold-gradient4)" strokeWidth="1" />
                    <defs>
                        <linearGradient id="gold-gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#e9f5f5" />
                            <stop offset="50%" stopColor="#e9f5f5" />
                            <stop offset="100%" stopColor="#e9f5f5" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Main Content Card */}
            <div className="relative z-10 max-w-3xl mx-auto">

                {/* Top Decorative Line */}
                <div className="flex items-center justify-center gap-4 mb-10">
                    <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-[#e9f5f5] to-[#e9f5f5]"></div>
                    <div className="relative">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-spin-slow">
                            <circle cx="25" cy="25" r="20" stroke="url(#circle-gradient)" strokeWidth="0.5" strokeDasharray="4 4" />
                            <defs>
                                <linearGradient id="circle-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#e9f5f5" />
                                    <stop offset="100%" stopColor="#e9f5f5" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-[#e9f5f5] text-2xl">✦</span>
                        </div>
                    </div>
                    <div className="h-[1px] w-16 bg-gradient-to-l from-transparent via-[#e9f5f5] to-[#e9f5f5]"></div>
                </div>

                {/* Quote Card with Glassmorphism */}
                <div className="relative bg-white/5 border border-white/10 rounded-sm p-3 md:p-12 shadow-2xl">

                    {/* Bismillah */}
                    <p className="text-white text-2xl md:text-3xl font-arabic mb-4 opacity-90">
                        بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
                    </p>

                    {/* Opening Quote Mark */}
                    <div className="absolute top-4 left-4 text-white/30 text-6xl font-serif leading-none">
                        "
                    </div>

                    {/* Verse Text */}
                    <p className="text-xs md:text-lg font-light md:leading-loose tracking-wide text-white/90  px-4 md:px-8">
                        Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
                    </p>

                    {/* Closing Quote Mark */}
                    <div className="absolute bottom-4 right-4 text-white/30 text-6xl font-serif leading-none rotate-180">
                        "
                    </div>
                </div>

                {/* Bottom Decorative Divider */}
                <div className="flex items-center justify-center gap-6 mt-10 mb-6">
                    <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-[#e9f5f5]/50"></div>
                    <div className="flex gap-2">
                        <span className="w-1.5 h-1.5 bg-[#e9f5f5] rounded-full"></span>
                        <span className="w-1.5 h-1.5 bg-[#e9f5f5] rounded-full"></span>
                        <span className="w-1.5 h-1.5 bg-[#e9f5f5] rounded-full"></span>
                    </div>
                    <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-[#e9f5f5]/50"></div>
                </div>

                {/* Surah Reference */}
                <div className="relative inline-block">
                    <div className="border border-white/10 p-px rounded-full">
                        <div className="px-8 py-2 rounded-full">
                            <h3 className="font-playfair text-sm md:text-xl font-medium tracking-widest text-white">
                                QS. Ar-Rum : 21
                            </h3>
                        </div>
                    </div>
                </div>

            </div>

            {/* Custom CSS for animations */}
            <style jsx>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 20s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default ArRumSection;
