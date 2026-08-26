"use client";

import { useState, useEffect } from 'react';
import { Search, X, ArrowRight, BookOpen, GraduationCap, MapPin, Phone, HelpCircle, Sparkles } from 'lucide-react';
import Link from 'next/link';

const searchableIndex = [
    { title: "Admissions 2025-26 Overview", desc: "Montessori through Grade 10 registration guidelines and dates.", href: "/admissions", category: "Admissions" },
    { title: "Required Admission Documents", desc: "Checklist of birth certificates, TC, marks card, and photos.", href: "/admissions#documents", category: "Admissions" },
    { title: "Montessori & Pre-KG Program", desc: "Sensorial learning, practical life activities, and phonics.", href: "/academics#montessori", category: "Academics" },
    { title: "Primary School (Grades 1 to 5)", desc: "Concept-driven foundational education and STEM.", href: "/academics#primary", category: "Academics" },
    { title: "Middle & High School (Grades 6 to 10)", desc: "SSLC Board preparation, science labs, and analytics.", href: "/academics#secondary", category: "Academics" },
    { title: "Smart Classrooms", desc: "Spacious, well-ventilated, digitally equipped learning spaces.", href: "/campus", category: "Facilities" },
    { title: "High-Tech Computer Lab", desc: "30+ modern PCs with dedicated broadband internet.", href: "/campus", category: "Facilities" },
    { title: "Resource Library (150+ Capacity)", desc: "Thousands of books, journals, periodicals, and study zones.", href: "/campus", category: "Facilities" },
    { title: "Sports & Athletics Arena", desc: "Basketball, Volleyball, Badminton, Cricket, Taekwondo & Yoga.", href: "/campus", category: "Facilities" },
    { title: "Chairman's Message - Hemalatha J", desc: "Vision and philosophy from the school Chairman since 1982.", href: "/leadership", category: "Leadership" },
    { title: "Campus Location & Directions", desc: "No. 158, 8th Main, BEML Layout, Basaveshwaranagar, Bengaluru.", href: "/contact", category: "Contact" },
    { title: "School Timings & Office Hours", desc: "Administrative office open 9:00 AM to 4:00 PM Mon-Sat.", href: "/contact", category: "Contact" },
    { title: "Frequently Asked Questions (FAQ)", desc: "Parent queries regarding age, fees, boards, and transport.", href: "/faq", category: "FAQ" },
    { title: "Photo Gallery", desc: "Visual tour of campus life, annual day celebrations, and sports.", href: "/gallery", category: "Media" }
];

export default function SearchModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");

    const results = query.trim() === ""
        ? searchableIndex.slice(0, 6)
        : searchableIndex.filter(item => 
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.desc.toLowerCase().includes(query.toLowerCase()) ||
            item.category.toLowerCase().includes(query.toLowerCase())
        );

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen(prev => !prev);
            }
            if (e.key === 'Escape' && isOpen) {
                setIsOpen(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    return (
        <>
            <button 
                onClick={() => setIsOpen(true)}
                className="text-slate-600 hover:text-brand-navy hover:bg-slate-100 transition-colors p-2 rounded-xl flex items-center gap-1.5 cursor-pointer"
                aria-label="Search website (Cmd+K)"
                title="Search (Ctrl + K)"
            >
                <Search size={18} />
                <span className="text-[10px] font-bold text-slate-400 border border-slate-200 rounded px-1.5 py-0.5 hidden xl:inline">⌘K</span>
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
                    <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
                        
                        {/* Search Input Bar */}
                        <div className="p-5 md:p-6 border-b border-slate-100 flex items-center gap-4 bg-slate-50/50">
                            <Search className="text-brand-gold shrink-0" size={22} />
                            <input 
                                autoFocus
                                type="text" 
                                placeholder="Search courses, admissions, facilities, contacts..."
                                className="w-full text-base md:text-lg outline-none text-brand-dark placeholder:text-slate-400 bg-transparent font-medium"
                                value={query}
                                onChange={e => setQuery(e.target.value)}
                            />
                            <button 
                                onClick={() => setIsOpen(false)} 
                                className="text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-200/60 transition-colors cursor-pointer"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        
                        {/* Results List */}
                        <div className="p-4 md:p-6 max-h-[60vh] overflow-y-auto space-y-2">
                            <div className="flex justify-between items-center px-2 mb-2">
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                                    {query ? `Search Results (${results.length})` : "Popular Quick Links"}
                                </span>
                                <span className="text-[10px] text-slate-400">Press ESC to close</span>
                            </div>

                            {results.length > 0 ? (
                                results.map((item, idx) => (
                                    <Link 
                                        key={idx} 
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="group flex items-start justify-between p-3.5 rounded-2xl border border-transparent hover:border-slate-200 hover:bg-slate-50 transition-all"
                                    >
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2">
                                                <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-light text-brand-blue px-2 py-0.5 rounded-md">
                                                    {item.category}
                                                </span>
                                                <h4 className="text-sm font-bold text-slate-800 group-hover:text-brand-blue transition-colors">
                                                    {item.title}
                                                </h4>
                                            </div>
                                            <p className="text-xs text-slate-500 line-clamp-1">{item.desc}</p>
                                        </div>
                                        <ArrowRight size={16} className="text-slate-300 group-hover:text-brand-blue group-hover:translate-x-1 transition-all shrink-0 mt-2" />
                                    </Link>
                                ))
                            ) : (
                                <div className="text-center py-12 text-slate-500">
                                    <p className="text-sm font-semibold">No results found for "{query}"</p>
                                    <p className="text-xs text-slate-400 mt-1">Try searching for "Montessori", "Admissions", "Library", or "Contact".</p>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            )}
        </>
    );
}
