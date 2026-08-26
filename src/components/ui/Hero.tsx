"use client";

import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
    title: React.ReactNode;
    subtitle: string;
    image: string;
    badge?: string;
    cta?: { text: string, href: string };
    secondaryCta?: { text: string, href: string };
}

export default function Hero({ title, subtitle, image, badge, cta, secondaryCta }: HeroProps) {
    return (
        <section className="relative w-full min-h-[520px] lg:min-h-[600px] flex items-center overflow-hidden">
            {/* Background Image & Editorial Overlay */}
            <div className="absolute inset-0 z-0">
                <img src={image} className="w-full h-full object-cover object-center" alt="Max Muller Public School" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/30"></div>
                <div className="absolute inset-0 bg-slate-950/20"></div>
            </div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full py-16 sm:py-20">
                <div className="max-w-3xl space-y-5">
                    
                    {/* Clean Academic Badge */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-amber-300 text-[11px] font-semibold uppercase tracking-widest">
                        <Sparkles size={13} className="text-amber-400" />
                        <span>{badge || "Established 1982 • Basaveshwaranagar, Bengaluru"}</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white font-bold leading-[1.15] tracking-tight">
                        {title}
                    </h1>

                    {/* Subtitle */}
                    <p className="text-sm sm:text-base md:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl">
                        {subtitle}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
                        {cta && (
                            <Link 
                                href={cta.href} 
                                className="px-7 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
                            >
                                <span>{cta.text}</span>
                                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                        )}
                        {secondaryCta && (
                            <Link 
                                href={secondaryCta.href} 
                                className="px-7 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white font-semibold text-xs uppercase tracking-widest rounded-xl transition-all flex items-center justify-center text-center"
                            >
                                {secondaryCta.text}
                            </Link>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}
