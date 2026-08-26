import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import FacilitiesShowcase from '@/components/ui/FacilitiesShowcase';
import { 
    schoolInfo, 
    academicsDetailed, 
    corePillars, 
    leadershipMessages, 
    testimonials 
} from '@/lib/data';
import { 
    ArrowRight, 
    CheckCircle2, 
    GraduationCap, 
    HeartHandshake, 
    Users, 
    Lightbulb, 
    Globe, 
    Sparkles, 
    Star
} from 'lucide-react';

const pillarIcons: Record<string, React.ReactNode> = {
    "GraduationCap": <GraduationCap size={22} className="text-amber-500" />,
    "HeartHandshake": <HeartHandshake size={22} className="text-amber-500" />,
    "Users": <Users size={22} className="text-amber-500" />,
    "Lightbulb": <Lightbulb size={22} className="text-amber-500" />,
    "Globe": <Globe size={22} className="text-amber-500" />,
    "Sparkles": <Sparkles size={22} className="text-amber-500" />
};

export default function Home() {
    return (
        <div className="bg-slate-50">
            
            {/* 1. Flagship Hero Section */}
            <Hero 
                badge="Admissions Open 2025–26 • Montessori to Grade 10"
                title={<>A Legacy of Excellence. <br/><span className="text-amber-400">An Education for Life.</span></>}
                subtitle="Founded in 1982 in Basaveshwaranagar, Bengaluru, Max Muller Public School combines rigorous academics with character development to empower the next generation."
                image="/images/slider1.jpg"
                cta={{ text: "Apply for 2025-26", href: "/admissions" }}
                secondaryCta={{ text: "Explore Academics", href: "/academics" }}
            />

            {/* 2. Key Institutional Stats */}
            <section className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
                    {schoolInfo.stats.map((stat, i) => (
                        <div key={i} className={`text-center ${i > 0 ? 'pt-4 lg:pt-0' : ''}`}>
                            <div className="text-3xl sm:text-4xl font-serif font-bold text-brand-dark mb-0.5">{stat.value}</div>
                            <div className="text-[11px] font-bold uppercase tracking-widest text-amber-700">{stat.label}</div>
                            <div className="text-xs text-slate-500 mt-0.5 font-medium">{stat.sub}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Admissions Announcement Banner - 100% Full Image Visible */}
            <section className="pt-10 sm:pt-12 max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200/80">
                    <img 
                        src="/images/slider2.jpg" 
                        alt="Max Muller Public School Admissions Announcement - Open for Montessori, LKG, UKG, 1st to 10th Standard with Free Classes in Abacus, Vedic Maths, and Karate" 
                        className="w-full h-auto object-contain block" 
                    />
                </div>
            </section>

            {/* 3. Welcome & Heritage Narrative */}
            <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    {/* Left: Copy (7 cols) */}
                    <div className="lg:col-span-7 space-y-5">
                        <span className="text-[11px] font-bold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200/60 px-3 py-1 rounded-full inline-block">
                            Welcome to Max Muller Public School
                        </span>
                        
                        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-dark leading-tight">
                            Nurturing Curious Minds, Shaping Compassionate Citizens.
                        </h2>
                        
                        <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                            <p>
                                Founded in 1982, Max Muller Group of Institutions began as a visionary initiative to provide quality, value-based education in Bengaluru. From its inception, the school has remained dedicated to nurturing young minds through a balanced approach that combines academic rigor with ethics, discipline, and creativity.
                            </p>
                            <p>
                                Located in the peaceful, well-connected neighborhood of Basaveshwaranagar, our co-educational campus offers a safe, inclusive, and stimulating environment where every child receives individualized attention from passionate educators.
                            </p>
                        </div>

                        <div className="pt-2 flex flex-wrap items-center gap-5">
                            <Link 
                                href="/about" 
                                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-dark hover:bg-brand-navy text-white font-semibold text-xs uppercase tracking-widest rounded-xl transition-all shadow-xs group"
                            >
                                <span>Our Heritage</span>
                                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                            </Link>

                            <Link 
                                href="/admissions" 
                                className="inline-flex items-center gap-1.5 text-slate-700 hover:text-amber-600 font-semibold text-xs uppercase tracking-wider transition-colors"
                            >
                                <span>Admissions Guidelines →</span>
                            </Link>
                        </div>
                    </div>

                    {/* Right: Media Stack (5 cols) */}
                    <div className="lg:col-span-5 relative">
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-slate-200/80">
                            <img src="/images/1.jpg" alt="Max Muller Public School Students" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -bottom-5 -left-5 bg-brand-dark text-white p-5 rounded-2xl shadow-lg hidden sm:block max-w-xs border border-white/10">
                            <div className="text-xl font-serif font-bold text-amber-400 mb-0.5">40+ Years</div>
                            <div className="text-xs text-slate-300 font-medium">Of trusted educational service to families in Bengaluru.</div>
                        </div>
                    </div>

                </div>
            </section>

            {/* 4. Academic Pathways */}
            <section className="py-20 sm:py-24 bg-white border-y border-slate-200/70">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 space-y-12 sm:space-y-14">
                    
                    <div className="text-center max-w-2xl mx-auto space-y-3">
                        <span className="text-[11px] font-bold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200/60 px-3 py-1 rounded-full inline-block">
                            Curriculum & Stages
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-dark">
                            Holistic Academic Pathways
                        </h2>
                        <p className="text-slate-600 text-sm font-normal">
                            Designed to support each stage of child development from early sensorial exploration to board examination distinction.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {academicsDetailed.map((item, idx) => (
                            <div 
                                key={idx} 
                                className="bg-slate-50 hover:bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                            >
                                <div className="space-y-5">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-700 bg-white border border-slate-200 px-2.5 py-0.5 rounded-full">
                                            {item.badge}
                                        </span>
                                        <span className="text-xs font-semibold text-amber-700">{item.ageGroup}</span>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-serif font-bold text-brand-dark mb-2 group-hover:text-brand-blue transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                                            {item.description}
                                        </p>
                                    </div>

                                    <ul className="space-y-2 pt-2 border-t border-slate-200/60">
                                        {item.highlights.slice(0, 3).map((h, hIdx) => (
                                            <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                                                <CheckCircle2 size={14} className="text-amber-500 shrink-0 mt-0.5" />
                                                <span>{h}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-6">
                                    <Link 
                                        href={`/academics#${item.id}`}
                                        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-800 group-hover:text-amber-600 transition-colors"
                                    >
                                        <span>Learn Curriculum Details</span>
                                        <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* 5. Interactive Facilities Tour */}
            <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
                <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-14">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200/60 px-3 py-1 rounded-full inline-block">
                        Campus Infrastructure
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-dark">
                        Spaces Designed for Growth & Discovery
                    </h2>
                    <p className="text-slate-600 text-sm font-normal">
                        Explore our purpose-built campus in Basaveshwaranagar equipped with modern technology and athletic facilities.
                    </p>
                </div>

                <FacilitiesShowcase />
            </section>

            {/* 6. Core Pillars of Max Muller */}
            <section className="py-20 sm:py-24 bg-brand-dark text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 space-y-12 sm:space-y-14">
                    
                    <div className="text-center max-w-2xl mx-auto space-y-3">
                        <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full inline-block border border-amber-500/20">
                            Our Educational Philosophy
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                            The Six Pillars of Our Mission
                        </h2>
                        <p className="text-slate-300 text-sm font-normal">
                            Beyond textbooks and examinations, we are committed to building well-rounded individuals ready for the world.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {corePillars.map((pillar, idx) => (
                            <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-2xl p-7 border border-white/10 hover:border-amber-500/30 transition-all space-y-3">
                                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                                    {pillarIcons[pillar.icon]}
                                </div>
                                <h3 className="text-lg font-serif font-bold text-white">{pillar.title}</h3>
                                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">{pillar.desc}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* 7. Leadership Voice - Chairman */}
            <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 space-y-10 sm:space-y-12">
                <div className="text-center max-w-2xl mx-auto space-y-3">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200/60 px-3 py-1 rounded-full inline-block">
                        Leadership & Vision
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-dark">
                        Message from the Chairman
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto">
                    {leadershipMessages.map((leader, i) => (
                        <div key={i} className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-slate-200/80 flex flex-col md:flex-row items-center md:items-start gap-8 sm:gap-10">
                            <div className="shrink-0 text-center md:text-left space-y-3">
                                <img 
                                    src={leader.image} 
                                    alt={leader.name} 
                                    className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover shadow-xs border-2 border-amber-400 mx-auto md:mx-0" 
                                />
                                <div>
                                    <h3 className="text-lg font-serif font-bold text-brand-dark">{leader.name}</h3>
                                    <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">{leader.role}</span>
                                </div>
                            </div>

                            <div className="space-y-4 text-left">
                                <blockquote className="text-slate-700 font-serif italic text-lg sm:text-xl leading-relaxed border-l-2 border-amber-400 pl-4">
                                    "{leader.quote}"
                                </blockquote>

                                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                                    {leader.paragraphs[0]}
                                </p>

                                <div className="pt-2">
                                    <Link href="/leadership" className="text-xs font-semibold uppercase tracking-wider text-slate-800 hover:text-amber-600 transition-colors inline-flex items-center gap-1">
                                        Read Full Address <ArrowRight size={13} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            {/* 9. Parent Testimonials */}
            <section className="py-20 sm:py-24 bg-white border-y border-slate-200/70">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 space-y-12 sm:space-y-14">
                    
                    <div className="text-center max-w-2xl mx-auto space-y-3">
                        <span className="text-[11px] font-bold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200/60 px-3 py-1 rounded-full inline-block">
                            Parent Reflections
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-dark">
                            Trusted by Families for Over Four Decades
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map((t, idx) => (
                            <div key={idx} className="bg-slate-50 p-7 rounded-2xl border border-slate-200/80 shadow-xs space-y-5 flex flex-col justify-between">
                                <div className="space-y-3.5">
                                    <div className="flex gap-1 text-amber-400">
                                        {[...Array(t.stars)].map((_, s) => (
                                            <Star key={s} size={14} fill="currentColor" />
                                        ))}
                                    </div>
                                    <p className="text-slate-700 text-xs sm:text-sm font-normal leading-relaxed italic">
                                        "{t.quote}"
                                    </p>
                                </div>
                                <div className="border-t border-slate-200/60 pt-3">
                                    <div className="font-semibold text-xs sm:text-sm text-brand-dark">{t.author}</div>
                                    <div className="text-[11px] text-slate-500 font-medium">{t.relation}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* 10. Admissions Callout */}
            <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
                <div className="bg-brand-dark rounded-2xl p-8 sm:p-12 md:p-14 text-white text-center shadow-md relative overflow-hidden space-y-6 border border-white/10">
                    <div className="max-w-2xl mx-auto space-y-3">
                        <span className="text-[11px] font-bold uppercase tracking-widest text-amber-300 bg-amber-500/20 px-3.5 py-1 rounded-full inline-block border border-amber-500/30">
                            Academic Year 2025–26 Enrollment
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                            Begin Your Child's Journey at Max Muller
                        </h2>
                        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto font-normal">
                            Limited seats are available for Montessori, Primary, and High School classes to ensure healthy student-to-teacher attention.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-3.5 pt-2">
                        <Link 
                            href="/admissions" 
                            className="px-7 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-sm"
                        >
                            Apply for Admission Online
                        </Link>
                        <a 
                            href="tel:08023233455" 
                            className="px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-widest rounded-xl transition-all border border-white/20"
                        >
                            Call Admissions: 080 23233455
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
}
