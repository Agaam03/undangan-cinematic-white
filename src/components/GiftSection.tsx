"use client";

import React, { useState, useEffect, useRef } from "react";
import { Gift, Copy, Check, CreditCard, MapPin } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WEDDING_DATA } from "../constants";

export const GiftSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<"bank" | "address" | null>(null);
    const [copiedIndex, setCopiedIndex] = useState<string | null>(null);
    const containerRef = useRef<HTMLElement>(null);
    const { gift } = WEDDING_DATA;

    const handleCopy = (text: string, id: string) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(id);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.from(".gift-card", {
                scrollTrigger: {
                    trigger: ".gift-card",
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-6 px-4 relative">
            <div className="max-w-4xl mx-auto relative z-10 ">
                {/* Header */}
                <div className="flex items-center justify-center gap-6 mb-7 ">
                    {/* Left Line */}
                    <div className="h-px w-52 md:w-32 bg-white"></div>

                    {/* Title Text */}
                    <div className="text-center flex flex-col items-center justify-center">
                        <h2 className="leading-tight">
                            <span id="hero-section" className="text-4xl md:text-5xl text-white block">Wedding</span>
                            <span className="font-pinyon flex -mt-3 text-center items-center justify-center text-4xl md:text-6xl text-[#e9f5f5] tracking-wide">Gift</span>
                        </h2>
                    </div>
                </div>

                {/* Description */}
                <p className="text-center text-white/70 text-sm md:text-base leading-relaxed max-w-xl  mb-12 mx-2">
                    {gift.description}
                </p>

                {/* Main Card Container */}
                <div className="gift-card border border-white/10 p-5 md:p-12 relative text-center rounded-sm mx-2">
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
                        <button
                            onClick={() => setActiveTab(activeTab === "bank" ? null : "bank")}
                            className={`px-8 py-3 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.2em] border transition-all duration-300 rounded-sm ${activeTab === "bank"
                                ? "bg-white text-black border-white"
                                : "bg-transparent text-white border-white/20 hover:border-white hover:text-white"
                                }`}
                        >
                            <CreditCard className="w-4 h-4" />
                            Digital Transfer
                        </button>
                        <button
                            onClick={() =>
                                setActiveTab(activeTab === "address" ? null : "address")
                            }
                            className={`px-8 py-3 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.2em] border transition-all duration-300 rounded-sm ${activeTab === "address"
                                ? "bg-white text-black border-white"
                                : "bg-transparent text-white border-white/20 hover:border-white hover:text-white"
                                }`}
                        >
                            <MapPin className="w-4 h-4" />
                            Send Gift
                        </button>
                    </div>

                    {/* Content Area - Bank Transfer */}
                    {activeTab === "bank" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            {gift.accounts.map((account, index) => (
                                <div
                                    key={index}
                                    className="bg-white/5 p-6 border border-white/10 shadow-sm text-left group hover:border-white/30 transition-colors rounded-lg"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-xs font-bold uppercase tracking-widest text-gray-300">
                                            {account.bankName}
                                        </span>
                                        <div className="h-8 w-auto bg-white/10 p-1 rounded">
                                            <img
                                                src={account.logoUrl}
                                                alt={account.bankName}
                                                className="h-full object-contain"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between mb-1">
                                        <p className="font-mono text-xl text-white font-bold tracking-wider">
                                            {account.accountNumber}
                                        </p>
                                        <button
                                            onClick={() =>
                                                handleCopy(
                                                    account.accountNumber.replace(/\s/g, ""),
                                                    `acc${index}`
                                                )
                                            }
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            {copiedIndex === `acc${index}` ? (
                                                <Check className="w-4 h-4" />
                                            ) : (
                                                <Copy className="w-4 h-4" />
                                            )}
                                        </button>
                                    </div>
                                    <p className="text-sm font-serif italic text-gray-400">
                                        a/n {account.holderName}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Content Area - Address */}
                    {activeTab === "address" && (
                        <div className="bg-white/5 p-8 border border-white/10 shadow-sm text-left animate-in fade-in slide-in-from-bottom-4 duration-500 rounded-lg">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                <div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-gray-300 block mb-2">
                                        Delivery Address
                                    </span>
                                    <p className="font-serif-elegant text-lg text-white leading-snug">
                                        {gift.address.street},<br />
                                        {gift.address.city}
                                    </p>
                                    <p className="text-sm text-gray-400 mt-2 font-sans">
                                        Receiver: {gift.address.receiver}
                                    </p>
                                </div>
                                <button
                                    onClick={() =>
                                        handleCopy(
                                            `${gift.address.street}, ${gift.address.city}`,
                                            "addr"
                                        )
                                    }
                                    className="flex items-center gap-2 px-4 py-2 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors rounded-sm border border-white"
                                >
                                    {copiedIndex === "addr" ? (
                                        <Check className="w-3 h-3" />
                                    ) : (
                                        <Copy className="w-3 h-3" />
                                    )}
                                    <span>Copy Address</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default GiftSection;
