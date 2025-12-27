import React from 'react';
import Image from 'next/image';
import { WEDDING_DATA } from '../constants';

const IntroSection = () => {
    const { couple, intro } = WEDDING_DATA;

    return (
        <main className="relative  py-6 px-4 flex flex-col items-center text-center  ">
            {/* Monogram */}
            <div className="mb-8">
                <div className="flex items-center justify-center gap-4 text-white">
                    <span className="font-lovers-quarrel text-7xl md:text-9xl">{couple.bride.name.charAt(0).toUpperCase()}</span>
                    <div className="flex flex-col items-center justify-center mx-2">
                        <div className="h-12 w-[1px] bg-white/40"></div>
                        <div className="w-2 h-2 rotate-45 border border-white/60 my-1"></div>
                        <div className="h-12 w-[1px] bg-white/40"></div>
                    </div>
                    <span className="font-lovers-quarrel text-7xl md:text-9xl">{couple.groom.name.charAt(0).toUpperCase()}</span>
                </div>
            </div>



            {/* Greeting */}
            <div className="max-w-2xl space-y-4">
                <p className="font-serif text-white text-2xl md:text-3xl mb-4" dir="rtl">{intro.greeting.arabic}</p>
                <p className="text-xs md:text-base  opacity-90 font-medium">
                    {intro.greeting.message}
                </p>
            </div>
        </main>
    );
};

export default IntroSection;
