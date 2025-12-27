"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: window.innerWidth < 768 ? 0.4 : 1.8, // mobile vs desktop
            lerp: window.innerWidth < 768 ? 0.5 : 0.07,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            syncTouch: true,
            wheelMultiplier: window.innerWidth < 768 ? 1.0 : 0.6,
            gestureOrientation: "vertical",
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return null;
}
