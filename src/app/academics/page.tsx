import PageHeader from '@/components/ui/PageHeader';
import Link from 'next/link';
import { academicsDetailed } from '@/lib/data';
import { 
    CheckCircle2, 
    BookOpen, 
    Sparkles, 
    GraduationCap, 
    ArrowRight, 
    Atom, 
    Code, 
    Award, 
    Users,
    Lightbulb
} from 'lucide-react';

const methodology = [
    {
        title: "Individualized Attention",
        desc: "Strictly limited classroom sizes allow teachers to understand each learner's unique strengths, pacing, and cognitive learning style.",
        icon: <Users className="text-amber-500" size={24} />
    },
    {
        title: "Concept-First Pedagogical Approach",
        desc: "Rather than rote memorization, subjects are taught through hands-on experimentation, interactive inquiry, and real-world context.",
        icon: <Atom className="text-amber-500" size={24} />
    },
    {
        title: "Integrated Co-Scholastic Curriculum",
        desc: "Arts, physical education, music, and digital literacy are woven seamlessly into academic schedules for holistic brain development.",
        icon: <Sparkles className="text-amber-500" size={24} />
    },
    {
        title: "Ethical & Values-Based Education",
        desc: "Character development, empathy, integrity, and discipline are practiced daily through assembly programs, social projects, and mentorship.",
        icon: <Award className="text-amber-500" size={24} />
    }
];

export default function AcademicsPage() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <PageHeader 
                title="Academic Excellence & Curriculum"
                subtitle="A rigorous, comprehensive, and balanced educational framework designed to foster intellectual curiosity, analytical thinking, and lifelong learning."
            />

            {/* 1. Overview Philosophy */}
            <section className="py-20 max-w-7xl mx-auto px-6 md:px-12">
                <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-100 grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-8 space-y-4">
                        <span className="text-xs font-bold uppercase tracking-widest text-brand-gold bg-amber-500/10 px-3 py-1.5 rounded-full inline-block">
                            Educational Methodology
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-dark">
                            Beyond Textbooks: Preparing Students for Life
                        </h2>
                        <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                            At Max Muller Public School, our academic philosophy is rooted in nurturing intrinsic curiosity. We believe education must equip students with the critical reasoning, digital literacy, and compassionate mindset required to thrive in the 21st century.
                        </p>
                    </div>
                    <div className="lg:col-span-4 bg-brand-light p-6 rounded-2xl border border-blue-100 text-center space-y-3">
                        <div className="text-3xl font-serif font-bold text-brand-blue">Pre-K — Grade 10</div>
                        <p className="text-xs text-slate-600 font-medium">Continuous educational continuum recognized by the Karnataka State Education Department.</p>
                        <Link href="/admissions" className="inline-block px-5 py-2.5 bg-brand-navy hover:bg-brand-blue text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm">
                            Enroll for 2025-26
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. Detailed Academic Stages */}
            <section className="py-12 max-w-7xl mx-auto px-6 md:px-12 space-y-16">
                {academicsDetailed.map((stage, idx) => (
                    <div 
                        key={idx} 
                        id={stage.id} 
                        className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-100 scroll-mt-36 grid lg:grid-cols-12 gap-10 items-start"
                    >
                        {/* Left Info Column (5 cols) */}
                        <div className="lg:col-span-5 space-y-6">
                            <div className="flex items-center gap-3">
                                <span className="text-xs font-bold uppercase tracking-widest bg-amber-500/10 text-brand-gold px-3 py-1 rounded-full border border-amber-500/20">
                                    {stage.badge}
                                </span>
                                <span className="text-xs font-bold text-slate-500">{stage.ageGroup}</span>
                            </div>

                            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-dark">
                                {stage.title}
                            </h3>

                            <p className="text-slate-600 text-base leading-relaxed font-medium">
                                {stage.description}
                            </p>

                            <div className="pt-2">
                                <Link 
                                    href="/admissions" 
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand-navy hover:bg-brand-blue text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-md"
                                >
                                    <span>Admissions for this Stage</span>
                                    <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>

                        {/* Right Highlights Column (7 cols) */}
                        <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200/80 space-y-6">
                            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
                                Key Curriculum Focus Areas & Highlights
                            </h4>

                            <ul className="space-y-4">
                                {stage.highlights.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                                        <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </section>

            {/* 3. Core Teaching Methodology */}
            <section className="py-24 bg-white border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
                    <div className="text-center max-w-2xl mx-auto space-y-4">
                        <span className="text-xs font-bold uppercase tracking-widest text-brand-gold bg-amber-500/10 px-3 py-1.5 rounded-full inline-block">
                            Pedagogical Excellence
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-dark">
                            How We Teach at Max Muller
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {methodology.map((m, idx) => (
                            <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 space-y-4 hover:shadow-lg transition-all">
                                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center border border-slate-200">
                                    {m.icon}
                                </div>
                                <h3 className="text-lg font-serif font-bold text-brand-dark">{m.title}</h3>
                                <p className="text-slate-600 text-xs leading-relaxed font-medium">{m.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Bottom CTA */}
            <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
                <div className="bg-gradient-to-br from-brand-dark to-brand-navy rounded-3xl p-10 md:p-14 text-white text-center shadow-xl space-y-6">
                    <h3 className="text-3xl font-serif font-bold">Have Questions About our Academic Program?</h3>
                    <p className="text-slate-300 text-sm max-w-xl mx-auto">
                        Speak directly with our academic coordinators to understand curriculum pacing, language choices, and assessment models.
                    </p>
                    <div className="pt-2 flex flex-wrap justify-center gap-4">
                        <Link href="/admissions" className="px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-md">
                            Admissions Portal
                        </Link>
                        <a href="tel:08023233455" className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all border border-white/20">
                            Call 080 23233455
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
