import PageHeader from '@/components/ui/PageHeader';
import Link from 'next/link';
import { leadershipMessages } from '@/lib/data';
import { Quote, Sparkles, HeartHandshake, ShieldCheck, ArrowRight } from 'lucide-react';

export default function LeadershipPage() {
    const chairman = leadershipMessages[0];

    return (
        <div className="bg-slate-50 min-h-screen">
            <PageHeader 
                title="Message from the Chairman"
                subtitle="Guided by vision, integrity, and dedication to nurturing young minds and uplifting society since 1982."
            />

            {/* Chairman Address Section */}
            <section className="py-16 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 md:px-12">
                <div className="bg-white rounded-2xl p-8 sm:p-12 md:p-14 shadow-sm border border-slate-200/80 space-y-10">
                    
                    {/* Header with portrait and metadata */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 border-b border-slate-100 pb-8">
                        <div className="relative w-32 h-32 sm:w-36 sm:h-36 shrink-0 rounded-2xl overflow-hidden shadow-xs border-2 border-amber-400">
                            <img 
                                src={chairman.image} 
                                alt={chairman.name} 
                                className="w-full h-full object-cover" 
                            />
                        </div>

                        <div className="text-center sm:text-left space-y-1.5 pt-2">
                            <span className="text-[11px] font-bold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200/60 px-3 py-1 rounded-full inline-block">
                                Institutional Address
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-dark">{chairman.name}</h2>
                            <div className="text-xs font-semibold uppercase tracking-wider text-amber-700">{chairman.role}</div>
                            <div className="text-xs text-slate-500 font-medium">Max Muller Group of Institutions</div>
                        </div>
                    </div>

                    {/* Speech Content */}
                    <div className="space-y-6">
                        <blockquote className="text-lg sm:text-xl font-serif italic text-brand-navy leading-relaxed border-l-2 border-amber-400 pl-5 my-2">
                            "{chairman.quote}"
                        </blockquote>

                        <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                            {chairman.paragraphs.map((para, pIdx) => (
                                <p key={pIdx}>{para}</p>
                            ))}
                        </div>
                    </div>

                    <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                        <div className="text-xs text-slate-500 font-medium">
                            Basaveshwaranagar, Bengaluru • Founded 1982
                        </div>
                        <Link 
                            href="/admissions" 
                            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-800 hover:text-amber-600 transition-colors"
                        >
                            <span>Explore Admissions 2025–26</span>
                            <ArrowRight size={13} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Governance & Faculty Commitment */}
            <section className="py-16 sm:py-20 bg-white border-y border-slate-200/70">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-4">
                        <span className="text-[11px] font-bold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200/60 px-3 py-1 rounded-full inline-block">
                            Our Educators
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-dark">
                            A Faculty Deeply Invested in Every Child's Future
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed font-normal">
                            At the heart of Max Muller Public School is a committed team of educators who view teaching as a noble calling. Our faculty members are deeply invested in the personal growth, emotional well-being, and academic character of every student.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="p-5 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2">
                            <ShieldCheck className="text-amber-600" size={20} />
                            <h4 className="font-serif font-bold text-sm text-brand-dark">Qualified Mentors</h4>
                            <p className="text-xs text-slate-600 font-normal">Experienced educators trained in modern learner-centric pedagogy.</p>
                        </div>
                        <div className="p-5 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2">
                            <HeartHandshake className="text-amber-600" size={20} />
                            <h4 className="font-serif font-bold text-sm text-brand-dark">Parent Partnership</h4>
                            <p className="text-xs text-slate-600 font-normal">Regular parent-teacher dialogues to guide each child's trajectory.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
