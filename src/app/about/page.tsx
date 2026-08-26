import PageHeader from '@/components/ui/PageHeader';
import Link from 'next/link';
import { corePillars, schoolInfo } from '@/lib/data';
import { 
    GraduationCap, 
    HeartHandshake, 
    Users, 
    Lightbulb, 
    Globe, 
    Sparkles, 
    ShieldCheck, 
    CheckCircle2, 
    ArrowRight,
    Award,
    Compass
} from 'lucide-react';

const pillarIcons: Record<string, React.ReactNode> = {
    "GraduationCap": <GraduationCap size={24} className="text-amber-500" />,
    "HeartHandshake": <HeartHandshake size={24} className="text-amber-500" />,
    "Users": <Users size={24} className="text-amber-500" />,
    "Lightbulb": <Lightbulb size={24} className="text-amber-500" />,
    "Globe": <Globe size={24} className="text-amber-500" />,
    "Sparkles": <Sparkles size={24} className="text-amber-500" />
};

const milestones = [
    { year: "1982", title: "Inception & Foundation", desc: "Established as a visionary initiative in Basaveshwaranagar to provide accessible, value-grounded education." },
    { year: "1995", title: "Campus & Library Expansion", desc: "Inaugurated dedicated 150-seat resource library and expanded primary and middle school wings." },
    { year: "2005", title: "Science & Tech Infrastructure", desc: "Installed state-of-the-art 30+ PC broadband computer laboratory and advanced science apparatus." },
    { year: "2015", title: "Sports Complex & Studios", desc: "Constructed multi-sport arena covering basketball, gymnastics, martial arts, and creative arts studios." },
    { year: "2025", title: "Four Decades of Excellence", desc: "Over 40 years of nurturing leaders, consistently achieving high academic distinction and holistic alumni success." }
];

export default function AboutPage() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <PageHeader 
                title="Our Heritage & Philosophy"
                subtitle="Rooted in strong values, delivering academic excellence and holistic character formation in Bengaluru since 1982."
            />

            {/* 1. History & Legacy */}
            <section className="py-20 max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    <div className="lg:col-span-6 space-y-6">
                        <span className="text-xs font-bold uppercase tracking-widest text-brand-gold bg-amber-500/10 px-3 py-1.5 rounded-full inline-block">
                            Our Story Since 1982
                        </span>
                        
                        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-dark leading-tight">
                            More Than Four Decades of Nurturing Young Minds
                        </h2>

                        <div className="space-y-4 text-slate-600 text-base leading-relaxed font-medium">
                            <p>
                                Founded in the year 1982, Max Muller Group of Institutions began as a visionary initiative to provide quality education in the vibrant city of Bengaluru. From its inception, the institution has remained dedicated to nurturing young minds through a balanced approach that combines academic excellence with character development.
                            </p>
                            <p>
                                Located in the serene and well-connected locality of Basaveshwaranagar, the school is a co-educational institution welcoming both boys and girls into a safe, inclusive, and stimulating learning environment.
                            </p>
                            <p>
                                Over the decades, Max Muller Group of Institutions has grown steadily, adapting to the evolving needs of education while staying rooted in its core values. The school offers a comprehensive curriculum that integrates academic subjects with co-curricular and extracurricular activities in sports, arts, science, and technology.
                            </p>
                        </div>

                        <div className="pt-2 flex items-center gap-4">
                            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3">
                                <Award className="text-amber-500" size={24} />
                                <div>
                                    <div className="text-sm font-bold text-brand-dark">40+ Years</div>
                                    <div className="text-xs text-slate-500">Established 1982</div>
                                </div>
                            </div>
                            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3">
                                <ShieldCheck className="text-brand-blue" size={24} />
                                <div>
                                    <div className="text-sm font-bold text-brand-dark">Co-Educational</div>
                                    <div className="text-xs text-slate-500">Pre-K to Grade 10</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 space-y-6">
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-slate-200/80">
                            <img 
                                src="/images/4.jpg" 
                                alt="Max Muller Public School Campus" 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                    </div>

                </div>

                {/* Full Banner Display - Uncropped & 100% Visible */}
                <div className="mt-12 bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200/80">
                    <img 
                        src="/images/Max-muller-Public-School-Banner-4.jpg" 
                        alt="Max Muller Public School Banner" 
                        className="w-full h-auto object-contain block" 
                    />
                </div>
            </section>

            {/* 2. Vision & Mission Section */}
            <section className="py-24 bg-white border-y border-slate-100" id="vision-mission">
                <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
                    
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Vision Card */}
                        <div className="bg-brand-dark text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-800 space-y-6 flex flex-col justify-between">
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400/20 text-amber-300 rounded-full text-xs font-bold uppercase tracking-wider">
                                    <Compass size={14} /> Institutional Vision
                                </div>
                                <h3 className="text-3xl font-serif font-bold text-white">Our Vision</h3>
                                <p className="text-slate-300 text-base leading-relaxed font-medium">
                                    At Max Muller Group of Institutions, we aspire to be a leading educational institution that shapes the minds and hearts of future generations.
                                </p>
                                <ul className="space-y-3.5 border-t border-slate-800 pt-6">
                                    <li className="flex items-start gap-3 text-sm text-slate-200">
                                        <CheckCircle2 size={16} className="text-amber-400 shrink-0 mt-0.5" />
                                        <span>Inspire excellence by nurturing a lifelong love for learning and discovery.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-slate-200">
                                        <CheckCircle2 size={16} className="text-amber-400 shrink-0 mt-0.5" />
                                        <span>Empower individuals to reach their full potential academically, morally, socially, and emotionally.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-slate-200">
                                        <CheckCircle2 size={16} className="text-amber-400 shrink-0 mt-0.5" />
                                        <span>Cultivate global citizens who are rooted in Indian values and culture.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-slate-200">
                                        <CheckCircle2 size={16} className="text-amber-400 shrink-0 mt-0.5" />
                                        <span>Foster a community of care and respect where diversity is celebrated.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Mission Summary */}
                        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm space-y-6 flex flex-col justify-between">
                            <div className="space-y-6">
                                <span className="text-xs font-bold uppercase tracking-widest text-brand-gold bg-amber-500/10 px-3 py-1.5 rounded-full inline-block">
                                    Guiding Purpose
                                </span>
                                <h3 className="text-3xl font-serif font-bold text-brand-dark">Our Mission</h3>
                                <p className="text-slate-700 text-base leading-relaxed font-medium">
                                    Our mission is to provide an educational experience that goes beyond textbooks and classrooms—one that develops well-rounded individuals equipped with the knowledge, skills, and values necessary to succeed in life and contribute positively to society.
                                </p>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Guided by our founders’ vision and strengthened by our community’s trust, we are committed to continuous innovation in education, embracing digital learning tools, and maintaining a low student-to-teacher ratio for individualized mentoring.
                                </p>
                            </div>
                            <div className="pt-4">
                                <Link 
                                    href="/leadership" 
                                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-navy hover:text-brand-gold transition-colors"
                                >
                                    <span>Read the Chairman's Address</span>
                                    <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* 6 Pillars Breakdown */}
                    <div className="space-y-8 pt-8">
                        <div className="text-center max-w-2xl mx-auto space-y-3">
                            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-dark">
                                The Six Commitments of Our Mission
                            </h3>
                            <p className="text-slate-500 text-sm font-medium">
                                The foundational tenets that drive our daily academic and developmental curriculum.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {corePillars.map((pillar, idx) => (
                                <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200/70 space-y-3 hover:bg-white hover:shadow-md transition-all">
                                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                                        {pillarIcons[pillar.icon]}
                                    </div>
                                    <h4 className="text-lg font-serif font-bold text-brand-dark">{pillar.title}</h4>
                                    <p className="text-slate-600 text-xs leading-relaxed font-medium">{pillar.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* 3. Timeline / Milestones */}
            <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 space-y-16">
                <div className="text-center max-w-2xl mx-auto space-y-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-gold bg-amber-500/10 px-3 py-1.5 rounded-full inline-block">
                        Chronicle of Growth
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-dark">
                        Key Milestones in Our Journey
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                    {milestones.map((m, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 relative flex flex-col justify-between">
                            <div className="space-y-2">
                                <span className="text-2xl font-serif font-bold text-amber-500 block">{m.year}</span>
                                <h4 className="text-sm font-bold text-brand-dark">{m.title}</h4>
                                <p className="text-xs text-slate-500 leading-relaxed font-medium">{m.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. Bottom CTA */}
            <section className="pb-24 max-w-7xl mx-auto px-6 md:px-12">
                <div className="bg-brand-navy rounded-3xl p-10 md:p-14 text-white text-center shadow-xl space-y-6">
                    <h3 className="text-3xl font-serif font-bold">Experience the Max Muller Difference</h3>
                    <p className="text-slate-300 text-sm max-w-xl mx-auto">
                        We welcome you to visit our Basaveshwaranagar campus, meet our educators, and explore our learning environments.
                    </p>
                    <div className="pt-2 flex flex-wrap justify-center gap-4">
                        <Link href="/admissions" className="px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-md">
                            Apply for Admission
                        </Link>
                        <Link href="/contact" className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all border border-white/20">
                            Schedule Campus Tour
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
