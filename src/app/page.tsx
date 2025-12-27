"use client";

import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMediaQuery } from 'react-responsive';
import HeroSection from '@/components/HeroSection';
import IntroSection from '@/components/IntroSection';
import BrideGroomSection from '@/components/BrideGroomSection';
import LoveStorySection from '@/components/LoveStorySection';
import ArRumSection from '@/components/ArRumSection';
import ScheduleSection from '@/components/ScheduleSection';
import CountdownSection from '@/components/CountdownSection';
import GiftSection from '@/components/GiftSection';
import GallerySection from '@/components/GallerySection';
import RsvpSection from '@/components/RsvpSection';
import FooterSection from '@/components/FooterSection';
import SplashScreen from '@/components/SplashScreen';
import MusicPlayer, { MusicPlayerRef } from '@/components/MusicPlayer';
import SmoothScroll from '@/components/SmoothScroll';
import { WEDDING_DATA } from '@/constants';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [guestName, setGuestName] = useState("Tamu Undangan");
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const musicPlayerRef = useRef<MusicPlayerRef>(null);

  useEffect(() => {
    // Get guest name from URL parameter
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const name = urlParams.get('to') || urlParams.get('nama') || urlParams.get('guest');
      if (name) {
        setGuestName(decodeURIComponent(name));
      }
    }
  }, []);

  useEffect(() => {
    // Skip GSAP animations on mobile or when splash is showing
    if (typeof window === 'undefined' || showSplash) return;

    const ctx = gsap.context(() => {
      // Animate blur overlay as user scrolls
      gsap.to(".blur-overlay", {
        scrollTrigger: {
          trigger: ".content-wrapper",
          start: "top bottom",
          end: "top 20%",
          scrub: true,
        },
        backdropFilter: "blur(20px)",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
      });

      // Fade out hero content as user scrolls (desktop only)
      if (isDesktop) {
        gsap.to(".hero-content", {
          scrollTrigger: {
            trigger: ".content-wrapper",
            start: "top bottom",
            end: "top center",
            scrub: true,
          },
          opacity: 0,
          scale: 0.95,
          y: -30,
        });
      }

      // Fade-in animations for sections
      const sections = document.querySelectorAll('.fade-section');
      sections.forEach((section) => {
        gsap.fromTo(section,
          {
            opacity: 0,
            y: 30
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              end: 'top 60%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, [showSplash, isDesktop]);

  const handleEnterSite = () => {
    setShowSplash(false);
    // Start playing music when user enters
    setTimeout(() => {
      musicPlayerRef.current?.play();
    }, 100);
  };

  return (
    <>
      {/* Splash Screen */}
      {showSplash && (
        <SplashScreen guestName={guestName} onEnter={handleEnterSite} />
      )}

      {/* Main Content */}
      <div className={`relative w-full min-h-screen font-sans text-white overflow-x-hidden ${showSplash ? 'hidden' : ''}`}>
        {/* Smooth Scroll Provider */}
        {!showSplash && <SmoothScroll />}

        {/* Fixed Video Background */}
        <div className="fixed inset-0 z-0">
          <video
            className="w-full h-full object-cover"
            src={WEDDING_DATA.video}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Hero Section - Fixed at top */}
        <div className="fixed top-0 left-0 right-0 z-10 h-screen w-full">
          <HeroSection />
        </div>

        {/* Spacer for hero height */}
        <div className="h-screen w-full"></div>

        {/* Blur Overlay - Animated with GSAP */}
        <div className="blur-overlay fixed inset-0 z-15 pointer-events-none" style={{ backdropFilter: 'blur(0px)', backgroundColor: 'rgba(0, 0, 0, 0)' }}></div>

        {/* Content Container - Scrolls over hero */}
        <div className="content-wrapper relative z-20 flex flex-col items-center w-full">
          <div className="fade-section w-full">
            <IntroSection />
          </div>
          <div className='fade-section flex flex-row justify-center w-full items-center'>
            <BrideGroomSection />
          </div>
          <div className="fade-section w-full">
            <ArRumSection />
          </div>
          <div className="fade-section w-full">
            <ScheduleSection />
          </div>
          <div className="fade-section w-full">
            <CountdownSection />
          </div>
          <div className="fade-section w-full">
            <GiftSection />
          </div>
          <div className="fade-section w-full">
            <GallerySection />
          </div>
          <div className="fade-section w-full">
            <LoveStorySection />
          </div>
          <div className="fade-section w-full">
            <RsvpSection />
          </div>
          <div className="fade-section w-full">
            <FooterSection />
          </div>
        </div>

        {/* Music Player - Fixed bottom right */}
        <MusicPlayer ref={musicPlayerRef} musicUrl={WEDDING_DATA.music.url} />
      </div>
    </>
  )
}

export default Home;
