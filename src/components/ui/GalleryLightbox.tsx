"use client";

import { useState, useEffect } from 'react';
import { galleryImages, galleryCategories } from '@/lib/data';
import { X, ChevronLeft, ChevronRight, Maximize2, Award } from 'lucide-react';

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
            {/* Category Filter Tabs */}
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
                        {cat === "Student Achievements" ? "🏆 Student Achievements" : cat}
                    </button>
                ))}
            </div>

            {/* Photo Grid - Clean, Unobstructed with Footer Captions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filtered.map((img, idx) => (
                    <div
                        key={idx}
                        onClick={() => openLightbox(idx)}
                        className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 border border-slate-200/80 cursor-pointer flex flex-col justify-between"
                    >
                        {/* Clean Image Container without text overlay */}
                        <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-contain sm:object-cover transition-transform duration-300 group-hover:scale-102"
                            />
                            <div className="absolute top-3 right-3 w-8 h-8 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                <Maximize2 size={14} />
                            </div>
                        </div>

                        {/* Accurate Footer Caption Below Image */}
                        <div className="p-4 sm:p-5 border-t border-slate-100 space-y-1.5 bg-white">
                            <div className="flex items-center gap-1.5">
                                <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full inline-block ${
                                    img.category === "Student Achievements" 
                                        ? "bg-amber-100 text-amber-800 border border-amber-200" 
                                        : "bg-slate-100 text-slate-700"
                                }`}>
                                    {img.category}
                                </span>
                            </div>
                            <h4 className="text-sm sm:text-base font-serif font-bold text-brand-dark line-clamp-2">
                                {img.title}
                            </h4>
                        </div>
                    </div>
                ))}
            </div>

            {/* Fullscreen Lightbox Modal */}
            {lightboxIndex !== null && (
                <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
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
                            className="max-h-[70vh] w-auto object-contain rounded-2xl shadow-2xl bg-slate-900/50"
                        />
                        <div className="mt-4 text-center text-white space-y-1">
                            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full inline-block border border-amber-500/30">
                                {filtered[lightboxIndex].category}
                            </span>
                            <h3 className="text-xl font-serif font-bold text-white">{filtered[lightboxIndex].title}</h3>
                            <p className="text-xs text-slate-400">{lightboxIndex + 1} of {filtered.length}</p>
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
