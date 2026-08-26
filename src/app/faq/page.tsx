"use client";

import { useState } from 'react';
import PageHeader from '@/components/ui/PageHeader';
import Link from 'next/link';
import { faqList, schoolInfo } from '@/lib/data';
import { ChevronDown, HelpCircle, Phone, MessageCircle, ArrowRight } from 'lucide-react';

export default function FAQPage() {
    const [openIdx, setOpenIdx] = useState<number | null>(0);
    const [selectedCat, setSelectedCat] = useState("All");

    const categories = ["All", "Admissions", "Academics", "Campus"];

    const filteredFAQs = selectedCat === "All"
        ? faqList
        : faqList.filter(item => item.category === selectedCat);

    return (
        <div className="bg-slate-50 min-h-screen">
            <PageHeader 
                title="Frequently Asked Questions"
                subtitle="Find answers to common questions about admissions criteria, curriculum, campus facilities, and school timings at Max Muller Public School."
            />

            <section className="py-20 max-w-5xl mx-auto px-6 md:px-12 space-y-12">
                {/* Filter Pills */}
                <div className="flex flex-wrap gap-2 justify-center">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => { setSelectedCat(cat); setOpenIdx(null); }}
                            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                                selectedCat === cat
                                    ? 'bg-brand-navy text-white shadow-md'
                                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Accordion List */}
                <div className="space-y-4">
                    {filteredFAQs.map((faq, idx) => {
                        const isOpen = openIdx === idx;
                        return (
                            <div 
                                key={idx}
                                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden transition-all duration-200"
                            >
                                <button
                                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                                    className="w-full p-6 text-left flex justify-between items-center gap-4 cursor-pointer"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-light text-brand-blue px-2.5 py-1 rounded-md shrink-0">
                                            {faq.category}
                                        </span>
                                        <h3 className="text-base sm:text-lg font-serif font-bold text-brand-dark">
                                            {faq.question}
                                        </h3>
                                    </div>
                                    <ChevronDown 
                                        size={20} 
                                        className={`text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-brand-navy' : ''}`} 
                                    />
                                </button>

                                {isOpen && (
                                    <div className="px-6 pb-6 pt-2 text-slate-600 text-sm font-medium leading-relaxed border-t border-slate-100 animate-in fade-in duration-150">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Still Have Questions Box */}
                <div className="bg-gradient-to-r from-brand-navy to-brand-dark rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl space-y-6">
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold">Have a Question Not Listed Here?</h3>
                    <p className="text-slate-300 text-sm max-w-xl mx-auto font-medium">
                        Our admissions office in Basaveshwaranagar is available to help clarify any aspect of your child's educational journey.
                    </p>
                    <div className="pt-2 flex flex-wrap justify-center gap-4">
                        <Link 
                            href="/contact" 
                            className="px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-md"
                        >
                            Send Us an Inquiry
                        </Link>
                        <a 
                            href="tel:08023233455" 
                            className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all border border-white/20"
                        >
                            Call 080 23233455
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
