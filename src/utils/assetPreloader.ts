"use client";

// Utility for preloading and caching assets
// Uses browser Cache API for storing assets locally

const CACHE_NAME = 'wedding-assets-v1';
const CACHE_TIMESTAMP_KEY = 'wedding-assets-cached-at';

// All assets to preload
export const getAssetsToPreload = (weddingData: {
    video: string;
    gallery: { src: string }[];
    hero: { backgroundImage: string };
    loveStory: { image: string }[];
    music: { url: string };
    couple: {
        bride: { photos: string[] };
        groom: { photos: string[] };
    };
}) => {
    const assets: string[] = [];

    // Video
    if (weddingData.video) {
        assets.push(weddingData.video);
    }

    // Music
    if (weddingData.music?.url) {
        assets.push(weddingData.music.url);
    }

    // Hero background
    if (weddingData.hero?.backgroundImage) {
        assets.push(weddingData.hero.backgroundImage);
    }

    // Gallery images
    if (weddingData.gallery) {
        weddingData.gallery.forEach(item => {
            if (item.src) assets.push(item.src);
        });
    }

    // Love story images
    if (weddingData.loveStory) {
        weddingData.loveStory.forEach(item => {
            if (item.image) assets.push(item.image);
        });
    }

    // Couple photos
    if (weddingData.couple?.bride?.photos) {
        assets.push(...weddingData.couple.bride.photos);
    }
    if (weddingData.couple?.groom?.photos) {
        assets.push(...weddingData.couple.groom.photos);
    }

    return assets;
};

// Check if assets are already cached
export const isAssetsCached = (): boolean => {
    if (typeof window === 'undefined') return false;

    const cachedTimestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);
    if (!cachedTimestamp) return false;

    // Check if cache is less than 24 hours old
    const cachedAt = parseInt(cachedTimestamp, 10);
    const now = Date.now();
    const ONE_DAY = 24 * 60 * 60 * 1000;

    return (now - cachedAt) < ONE_DAY;
};

// Mark assets as cached
export const markAssetsCached = (): void => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now().toString());
};

// Preload a single asset
const preloadAsset = (url: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        // Determine asset type
        const isVideo = /\.(mp4|webm|ogg)(\?|$)/i.test(url);
        const isAudio = /\.(mp3|wav|ogg|m4a)(\?|$)/i.test(url);

        if (isVideo) {
            const video = document.createElement('video');
            video.preload = 'auto';
            video.oncanplaythrough = () => resolve();
            video.onerror = () => resolve(); // Don't fail on error
            video.src = url;
        } else if (isAudio) {
            const audio = new Audio();
            audio.preload = 'auto';
            audio.oncanplaythrough = () => resolve();
            audio.onerror = () => resolve();
            audio.src = url;
        } else {
            // Assume image
            const img = new Image();
            img.onload = () => resolve();
            img.onerror = () => resolve();
            img.src = url;
        }
    });
};

// Preload all assets with progress callback
export const preloadAllAssets = async (
    assets: string[],
    onProgress?: (loaded: number, total: number) => void
): Promise<void> => {
    const total = assets.length;
    let loaded = 0;

    // Report initial progress
    if (onProgress) onProgress(0, total);

    // Load assets in batches to avoid overwhelming the browser
    const batchSize = 3;

    for (let i = 0; i < assets.length; i += batchSize) {
        const batch = assets.slice(i, i + batchSize);

        await Promise.all(
            batch.map(async (url) => {
                await preloadAsset(url);
                loaded++;
                if (onProgress) onProgress(loaded, total);
            })
        );
    }

    // Mark as cached
    markAssetsCached();
};

export default {
    getAssetsToPreload,
    isAssetsCached,
    markAssetsCached,
    preloadAllAssets,
};
