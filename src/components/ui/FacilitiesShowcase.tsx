"use client";

import { useState } from 'react';
import { facilitiesList } from '@/lib/data';
import { CheckCircle2, Monitor, BookOpen, School, Palette, Trophy } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
    "classrooms": <School size={16} />,
    "computer-lab": <Monitor size={16} />,
    "library": <BookOpen size={16} />,
    "studios": <Palette size={16} />,
    "sports": <Trophy size={16} />
};

export default function FacilitiesShowcase() {
    const [activeTab, setActiveTab] = useState(facilitiesList[0].id);
    const activeFacility = facilitiesList.find(f => f.id === activeTab) || facilitiesList[0];

    return (
        <div className="space-y-8">
            {/* Tabs List */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-xl md:rounded-full border border-slate-200 max-w-3xl mx-auto justify-center">
                {facilitiesList.map((facility) => {
                    const isActive = activeTab === facility.id;
                    return (
                        <button
                            key={facility.id}
                            onClick={() => setActiveTab(facility.id)}
                            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-150 cursor-pointer ${
                                isActive 
                                    ? 'bg-brand-dark text-white shadow-xs' 
                                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                            }`}
                        >
                            {iconMap[facility.id]}
                            <span>{facility.title.split(' ')[0]} {facility.title.split(' ')[1] || ''}</span>
                        </button>
                    );
                })}
            </div>

            {/* Active Tab Showcase Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm border border-slate-200/80 grid lg:grid-cols-12 gap-8 items-center">
                
                {/* Image Side (6 cols) */}
                <div className="lg:col-span-6 relative aspect-[4/3] rounded-xl overflow-hidden shadow-xs border border-slate-200 group">
                    <img
                        src={activeFacility.image}
                        alt={activeFacility.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-500 text-slate-950 px-2.5 py-0.5 rounded-full inline-block mb-1">
                            Campus Infrastructure
                        </span>
                        <h4 className="text-lg font-serif font-bold">{activeFacility.title}</h4>
                    </div>
                </div>

                {/* Text & Features Side (6 cols) */}
                <div className="lg:col-span-6 space-y-5">
                    <div>
                        <span className="text-[11px] font-bold uppercase tracking-widest text-amber-700 block mb-1">Facility Overview</span>
                        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-dark">
                            {activeFacility.title}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed mt-2.5 font-normal">
                            {activeFacility.description}
                        </p>
                    </div>

                    <div className="border-t border-slate-100 pt-4">
                        <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">Key Features</h4>
                        <div className="grid sm:grid-cols-2 gap-2.5">
                            {activeFacility.features.map((feat, idx) => (
                                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                                    <CheckCircle2 size={14} className="text-amber-500 shrink-0 mt-0.5" />
                                    <span>{feat}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
