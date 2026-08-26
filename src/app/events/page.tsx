import PageHeader from '@/components/ui/PageHeader';
import Link from 'next/link';
import { upcomingEvents } from '@/lib/data';
import { Calendar, Clock, MapPin, ArrowRight, Bell } from 'lucide-react';

export default function EventsPage() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <PageHeader 
                title="Events & Academic Calendar"
                subtitle="Stay up to date with admissions open days, orientations, cultural celebrations, and academic milestones at Max Muller Public School."
            />

            {/* Upcoming Events */}
            <section className="py-20 max-w-7xl mx-auto px-6 md:px-12 space-y-12">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-6">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-brand-gold bg-amber-500/10 px-3 py-1 rounded-full inline-block mb-1">
                            Current Notices
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-dark">
                            Upcoming School Events & Orientations
                        </h2>
                    </div>
                </div>

                <div className="space-y-6">
                    {upcomingEvents.map((evt, idx) => (
                        <div 
                            key={idx}
                            className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 grid md:grid-cols-12 gap-8 items-center hover:shadow-2xl transition-all"
                        >
                            {/* Date Box (2 cols) */}
                            <div className="md:col-span-3 lg:col-span-2 bg-brand-navy text-white rounded-2xl p-6 text-center space-y-1 shadow-md">
                                <div className="text-3xl sm:text-4xl font-serif font-bold text-amber-400">{evt.day}</div>
                                <div className="text-xs font-bold uppercase tracking-widest text-slate-300">{evt.date}</div>
                            </div>

                            {/* Details (8 cols) */}
                            <div className="md:col-span-6 lg:col-span-7 space-y-3">
                                <span className="text-[11px] font-bold uppercase tracking-wider bg-brand-light text-brand-blue px-3 py-1 rounded-full">
                                    {evt.category}
                                </span>
                                <h3 className="text-xl sm:text-2xl font-serif font-bold text-brand-dark">{evt.title}</h3>
                                <p className="text-slate-600 text-sm font-medium leading-relaxed">{evt.description}</p>
                                
                                <div className="flex flex-wrap gap-4 text-xs font-medium text-slate-500 pt-2">
                                    <span className="flex items-center gap-1.5"><Clock size={14} className="text-amber-500" /> {evt.time}</span>
                                    <span className="flex items-center gap-1.5"><MapPin size={14} className="text-amber-500" /> {evt.location}</span>
                                </div>
                            </div>

                            {/* Action (3 cols) */}
                            <div className="md:col-span-3 text-left md:text-right">
                                <Link 
                                    href="/admissions" 
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand-navy hover:bg-brand-blue text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-md"
                                >
                                    <span>Register / RSVP</span>
                                    <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Academic Calendar Guidelines */}
            <section className="py-24 bg-white border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
                    <div className="text-center max-w-2xl mx-auto space-y-3">
                        <span className="text-xs font-bold uppercase tracking-widest text-brand-gold bg-amber-500/10 px-3 py-1.5 rounded-full inline-block">
                            Academic Terms
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-dark">
                            Academic Year 2025-26 Overview
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 space-y-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-amber-500">Term 1 (June – September)</span>
                            <h4 className="text-xl font-serif font-bold text-brand-dark">Foundational Term</h4>
                            <p className="text-slate-600 text-xs leading-relaxed font-medium">
                                Commencement of academic sessions, baseline assessments, investiture ceremonies, and student council elections.
                            </p>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 space-y-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-amber-500">Term 2 (October – December)</span>
                            <h4 className="text-xl font-serif font-bold text-brand-dark">Festivals & Co-Scholastic</h4>
                            <p className="text-slate-600 text-xs leading-relaxed font-medium">
                                Midterm examinations, Kannada Rajyotsava celebrations, Annual Sports Day meet, and science fests.
                            </p>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 space-y-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-amber-500">Term 3 (January – April)</span>
                            <h4 className="text-xl font-serif font-bold text-brand-dark">Evaluations & Board Prep</h4>
                            <p className="text-slate-600 text-xs leading-relaxed font-medium">
                                Annual School Day, preparatory tests for Class X SSLC candidates, final annual examinations, and result declarations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
