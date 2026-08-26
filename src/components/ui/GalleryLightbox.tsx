"use client";

import { useState, useEffect } from 'react';
import { galleryImages, galleryCategories } from '@/lib/data';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function GalleryLightbox() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const filtered = selectedCategory === "All"
        ? galleryImages
        : galleryImages.filter(img => img.category === selectedCategory);

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
    };

    const closeLightbox = () => {
        setLightboxIndex(null);
    };

    const nextImage = () => {
        if (lightboxIndex !== null) {
            setLightboxIndex((lightboxIndex + 1) % filtered.length);
        }
    };

    const prevImage = () => {
        if (lightboxIndex !== null) {
            setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (lightboxIndex === null) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxIndex, filtered.length]);

    return (
        <div className="space-y-10">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
                {galleryCategories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => { setSelectedCategory(cat); setLightboxIndex(null); }}
                        className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                            selectedCategory === cat
                                ? 'bg-brand-navy text-white shadow-md'
                                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((img, idx) => (
                    <div
                        key={idx}
                        onClick={() => openLightbox(idx)}
                        className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 shadow-md cursor-pointer border border-slate-200/80"
                    >
                        <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-1">
                                {img.category}
                            </span>
                            <h4 className="text-base font-serif font-bold">{img.title}</h4>
                            <div className="absolute top-4 right-4 w-9 h-9 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                                <Maximize2 size={16} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Fullscreen Lightbox Modal */}
            {lightboxIndex !== null && (
                <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
                    <button
                        onClick={closeLightbox}
                        className="absolute top-6 right-6 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 cursor-pointer"
                        aria-label="Close Lightbox"
                    >
                        <X size={24} />
                    </button>

                    <button
                        onClick={prevImage}
                        className="absolute left-6 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 cursor-pointer hidden sm:flex items-center justify-center"
                        aria-label="Previous Image"
                    >
                        <ChevronLeft size={28} />
                    </button>

                    <div className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center">
                        <img
                            src={filtered[lightboxIndex].src}
                            alt={filtered[lightboxIndex].alt}
                            className="max-h-[70vh] w-auto object-contain rounded-2xl shadow-2xl"
                        />
                        <div className="mt-4 text-center text-white">
                            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full inline-block mb-1 border border-amber-500/30">
                                {filtered[lightboxIndex].category}
                            </span>
                            <h3 className="text-xl font-serif font-bold mt-1">{filtered[lightboxIndex].title}</h3>
                            <p className="text-xs text-slate-400 mt-0.5">{lightboxIndex + 1} of {filtered.length}</p>
                        </div>
                    </div>

                    <button
                        onClick={nextImage}
                        className="absolute right-6 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 cursor-pointer hidden sm:flex items-center justify-center"
                        aria-label="Next Image"
                    >
                        <ChevronRight size={28} />
                    </button>
                </div>
            )}
        </div>
    );
}
