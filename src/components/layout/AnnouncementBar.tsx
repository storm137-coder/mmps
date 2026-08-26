"use client";

import Link from 'next/link';
import { Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { schoolInfo } from '@/lib/data';

export default function AnnouncementBar() {
    return (
        <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 sm:px-6 md:px-12 border-b border-white/10 relative z-50">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
                
                {/* Left: Admissions Ticker / Highlight */}
                <div className="flex items-center gap-2.5 text-center sm:text-left">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-400/15 text-amber-300 border border-amber-400/25 shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                        Admissions 2025–26
                    </span>
                    <span className="text-slate-300 text-[11px] sm:text-xs">
                        Montessori through Grade 10.{" "}
                        <Link href="/admissions" className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-2 ml-1 inline-flex items-center gap-0.5">
                            Apply Online <ArrowRight size={11} />
                        </Link>
                    </span>
                </div>

                {/* Right: Direct Contacts */}
                <div className="hidden md:flex items-center gap-6 text-[11px] font-medium text-slate-400">
                    <div className="flex items-center gap-1.5">
                        <Phone size={12} className="text-amber-400" />
                        <a href="tel:08023233455" className="hover:text-white transition-colors">080 23233455</a>
                        <span className="text-slate-600">/</span>
                        <a href="tel:8951774344" className="hover:text-white transition-colors">8951774344</a>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <Mail size={12} className="text-amber-400" />
                        <a href={`mailto:${schoolInfo.email}`} className="hover:text-white transition-colors">{schoolInfo.email}</a>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <Clock size={12} className="text-amber-400" />
                        <span>9:00 AM – 4:00 PM</span>
                    </div>
                </div>

            </div>
        </div>
    );
}
