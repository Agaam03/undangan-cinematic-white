import React from 'react';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { WEDDING_DATA } from '../constants';

const ScheduleSection = () => {
    const { events } = WEDDING_DATA;

    return (
        <section className=" relative py-10 px-4 flex flex-col items-center gap-5 w-full ">

            {/* Header */}
            <div className="flex items-center justify-center gap-6 mx-5">
                {/* Left Line */}
                <div className="h-px w-50  md:w-32 bg-white"></div>

                {/* Title Text */}
                <div className="text-center flex flex-col items-center justify-center">
                    <h2 className="leading-tight">
                        <span id="hero-section" className="text-4xl md:text-5xl text-white block">Wedding</span>
                        <span className="font-pinyon flex -mt-3 text-center items-center justify-center text-4xl md:text-6xl text-[#e9f5f5] tracking-wide">Event</span>
                    </h2>
                </div>
            </div>

            {events.map((event, index) => {
                const isEven = index % 2 === 1;
                const photoSeed = `event${event.id}`;

                return (
                    <div
                        key={event.id}
                        className={`flex ${isEven ? 'flex-row-reverse' : 'flex-row'} w-full max-w-5xl h-[550px] md:h-[600px] shadow-2xl rounded-sm overflow-hidden`}
                    >
                        {/* Sidebar with rotated title */}
                        <div className="w-[18%] md:w-[15%] bg-[#e9f5f5] text-black flex items-center justify-center relative shrink-0">
                            <h3 id="hero-section" className="text-black text-2xl md:text-4xl tracking-widest whitespace-nowrap -rotate-90 origin-center">
                                {event.title}
                            </h3>
                        </div>

                        {/* Image Section */}
                        <div className="flex-1 relative">
                            <Image
                                src={`https://picsum.photos/seed/${photoSeed}/800/1200`}
                                alt={event.title}
                                fill
                                className="object-cover"
                            />

                            {/* Bottom Overlay Card - matching reference design */}
                            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 bg-black/50 text-white p-4 md:p-6 rounded-sm border border-white/20">

                                {/* Date Row */}
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex flex-col items-center leading-none pr-4 border-r border-white/50">
                                        <span id="hero-section" className="text-5xl md:text-6xl">
                                            {event.date.split(',')[0].split(' ')[1] || '31'}
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-0.5">
                                        <span id="hero-section" className="text-sm font-semibold uppercase tracking-wider">
                                            {event.date.split(',')[0].split(' ')[0]}
                                        </span>
                                        <span id="hero-section" className="text-xs">Desember</span>
                                        <span id="hero-section" className="text-xs">2026</span>
                                    </div>
                                </div>

                                {/* Time & Location */}
                                <div className="space-y-1 mb-4">
                                    <p className="font-bold text-xs">{event.time}</p>
                                    <p className="font-bold uppercase text-xs">{event.location}</p>
                                    <p className="text-xs opacity-80">{event.address}</p>
                                </div>

                                {/* Google Maps Button */}
                                <a
                                    href={event.mapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2.5 rounded-sm text-xs font-medium transition-colors w-full justify-center"
                                >
                                    <MapPin size={16} />
                                    Google Maps
                                </a>
                            </div>
                        </div>
                    </div>
                );
            })}

        </section>
    );
};

export default ScheduleSection;
