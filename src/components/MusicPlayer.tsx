"use client";

import React, { useState, useRef, useEffect, useImperativeHandle, forwardRef } from 'react';
import { Music, Music2 } from 'lucide-react';

export interface MusicPlayerRef {
    play: () => void;
    pause: () => void;
    toggle: () => void;
}

interface MusicPlayerProps {
    musicUrl: string;
    autoPlay?: boolean;
}

const MusicPlayer = forwardRef<MusicPlayerRef, MusicPlayerProps>(({ musicUrl, autoPlay = false }, ref) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    // Expose play/pause methods to parent component
    useImperativeHandle(ref, () => ({
        play: () => {
            const audio = audioRef.current;
            if (audio) {
                audio.play().then(() => {
                    setIsPlaying(true);
                }).catch((err) => {
                    console.log('Playback failed:', err);
                });
            }
        },
        pause: () => {
            const audio = audioRef.current;
            if (audio) {
                audio.pause();
                setIsPlaying(false);
            }
        },
        toggle: () => {
            togglePlay();
        }
    }));

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handleCanPlay = () => {
            setIsLoaded(true);
            if (autoPlay) {
                audio.play().then(() => {
                    setIsPlaying(true);
                }).catch(() => {
                    setIsPlaying(false);
                });
            }
        };

        audio.addEventListener('canplaythrough', handleCanPlay);
        return () => audio.removeEventListener('canplaythrough', handleCanPlay);
    }, [autoPlay]);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
        } else {
            audio.play().then(() => {
                setIsPlaying(true);
            }).catch((err) => {
                console.log('Playback failed:', err);
            });
        }
    };

    return (
        <>
            {/* Hidden Audio Element */}
            <audio
                ref={audioRef}
                src={musicUrl}
                loop
                preload="auto"
            />

            {/* Music Player Button */}
            <button
                onClick={togglePlay}
                className={`
                    fixed bottom-6 right-6 z-50
                    w-10 h-10 rounded-full
                    flex items-center justify-center
                    bg-black/40 backdrop-blur-md
                    border border-white/20 hover:border-[#e9f5f5]/50
                    shadow-lg shadow-black/20
                    transition-all duration-300
                    hover:scale-105 active:scale-95
                    group
                `}
                aria-label={isPlaying ? 'Pause Music' : 'Play Music'}
            >
                {/* Animated rings when playing */}
                {isPlaying && (
                    <>
                        <span className="absolute inset-0 rounded-full border border-[#e9f5f5]/30 animate-ping" style={{ animationDuration: '2s' }} />
                        <span className="absolute inset-1 rounded-full border border-[#e9f5f5]/20 animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
                    </>
                )}

                {/* Icon */}
                <div className={`relative transition-transform duration-300 ${isPlaying ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>
                    {isPlaying ? (
                        <Music className="w-4 h-4" />
                    ) : (
                        <Music2 className="w-4 h-4" />
                    )}
                </div>

                {/* Music bars animation */}
                {isPlaying && (
                    <div className="absolute -top-1 -right-1 flex gap-0.5">
                        <span className="w-1 h-3 bg-[#e9f5f5] rounded-full animate-bounce" style={{ animationDelay: '0ms', animationDuration: '0.6s' }} />
                        <span className="w-1 h-2 bg-[#e9f5f5] rounded-full animate-bounce" style={{ animationDelay: '150ms', animationDuration: '0.6s' }} />
                        <span className="w-1 h-4 bg-[#e9f5f5] rounded-full animate-bounce" style={{ animationDelay: '300ms', animationDuration: '0.6s' }} />
                    </div>
                )}
            </button>
        </>
    );
});

MusicPlayer.displayName = 'MusicPlayer';

export default MusicPlayer;
