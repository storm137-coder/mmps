import PageHeader from '@/components/ui/PageHeader';
import Link from 'next/link';
import { facilitiesList, schoolInfo } from '@/lib/data';
import { 
    CheckCircle2, 
    ShieldCheck, 
    Sparkles, 
    ArrowRight, 
    Eye, 
    Droplets, 
    Flame, 
    HeartHandshake 
} from 'lucide-react';

const safetyFeatures = [
    {
        title: "Campus-Wide CCTV Surveillance",
        desc: "High-definition security cameras monitor all corridors, entry/exit gates, and common gathering areas.",
        icon: <Eye className="text-amber-500" size={20} />
    },
    {
        title: "RO Purified Drinking Water",
        desc: "Multi-stage RO filtration plants installed on every floor with regular lab testing for student health.",
        icon: <Droplets className="text-amber-500" size={20} />
    },
    {
        title: "Certified Fire & Safety Standards",
        desc: "Equipped with state-approved fire extinguishers, alarm systems, and scheduled emergency evacuation drills.",
        icon: <Flame className="text-amber-500" size={20} />
    },
    {
        title: "Dedicated First-Aid & Care",
        desc: "Trained staff and on-campus medical first-aid room with swift emergency response protocols.",
        icon: <HeartHandshake className="text-amber-500" size={20} />
    }
];

export default function CampusPage() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <PageHeader 
                title="Campus & Learning Infrastructure"
                subtitle="A purpose-built, secure, and stimulating educational environment located in Basaveshwaranagar, Bengaluru."
            />

            {/* 1. Facilities Grid Deep Dive */}
            <section className="py-20 max-w-7xl mx-auto px-6 md:px-12 space-y-16">
                {facilitiesList.map((facility, idx) => (
                    <div 
                        key={idx}
                        id={facility.id}
                        className={`bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-100 grid lg:grid-cols-12 gap-10 items-center scroll-mt-36`}
                    >
                        {/* Image Column */}
                        <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md group border-4 border-slate-50">
                                <img 
                                    src={facility.image} 
                                    alt={facility.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                                />
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className={`lg:col-span-6 space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold bg-amber-500/10 px-3 py-1.5 rounded-full inline-block">
                                Infrastructure Spotlight
                            </span>
                            
                            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-dark">
                                {facility.title}
                            </h3>

                            <p className="text-slate-600 text-base leading-relaxed font-medium">
                                {facility.description}
                            </p>

                            <div className="border-t border-slate-100 pt-6 space-y-3">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Specifications & Highlights</h4>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {facility.features.map((feat, fIdx) => (
                                        <div key={fIdx} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                                            <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                                            <span>{feat}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* 2. Safety, Hygiene & Well-Being */}
            <section className="py-24 bg-white border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
                    <div className="text-center max-w-2xl mx-auto space-y-4">
                        <span className="text-xs font-bold uppercase tracking-widest text-brand-gold bg-amber-500/10 px-3 py-1.5 rounded-full inline-block">
                            Student Safety & Hygiene
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-dark">
                            A Secure, Caring Learning Environment
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {safetyFeatures.map((s, idx) => (
                            <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 space-y-4 hover:shadow-md transition-all">
                                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center border border-slate-200">
                                    {s.icon}
                                </div>
                                <h4 className="text-base font-serif font-bold text-brand-dark">{s.title}</h4>
                                <p className="text-slate-600 text-xs leading-relaxed font-medium">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Schedule Campus Visit */}
            <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
                <div className="bg-gradient-to-br from-brand-navy to-brand-dark rounded-3xl p-10 md:p-14 text-white text-center shadow-xl space-y-6">
                    <h3 className="text-3xl font-serif font-bold">Experience Our Campus in Person</h3>
                    <p className="text-slate-300 text-sm max-w-xl mx-auto">
                        Parents are warmly invited to tour our classrooms, laboratories, and athletic facilities in Basaveshwaranagar on any working day.
                    </p>
                    <div className="pt-2 flex flex-wrap justify-center gap-4">
                        <Link href="/admissions" className="px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-md">
                            Admissions 2025-26
                        </Link>
                        <Link href="/contact" className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all border border-white/20">
                            Location & Contact Desk
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
