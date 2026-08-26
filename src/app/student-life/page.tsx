import PageHeader from '@/components/ui/PageHeader';
import Link from 'next/link';
import { 
    Palette, 
    Trophy, 
    Code, 
    Users, 
    Sparkles, 
    Heart, 
    ArrowRight,
    Music,
    Flame
} from 'lucide-react';

const activities = [
    {
        title: "Visual & Performing Arts",
        desc: "Dedicated studios for Vocal Music, Instrumental training, Classical/Contemporary Dance, Theatre, and Fine Arts foster creative confidence.",
        icon: <Palette className="text-amber-500" size={24} />,
        image: "/images/1.jpg",
        tags: ["Music Room", "Dance Studio", "Visual Arts", "Drama & Speech"]
    },
    {
        title: "Athletics & Martial Arts",
        desc: "Comprehensive coaching in Basketball, Cricket, Volleyball, Badminton, Gymnastics, and Taekwondo promotes agility, discipline, and stamina.",
        icon: <Trophy className="text-amber-500" size={24} />,
        image: "/images/5.jpg",
        tags: ["Basketball Court", "Taekwondo", "Cricket Nets", "Yoga & Aerobics"]
    },
    {
        title: "Science, Coding & Tech Clubs",
        desc: "Hands-on robotics, computer programming in our 30+ PC lab, and annual science exhibitions stimulate scientific curiosity.",
        icon: <Code className="text-amber-500" size={24} />,
        image: "/images/square2.jpg",
        tags: ["30+ PC Lab", "Coding Modules", "Science Fairs", "Digital Literacy"]
    },
    {
        title: "House System & Student Council",
        desc: "Democratic student elections, investiture ceremonies, and house competitions develop leadership, teamwork, and school spirit.",
        icon: <Users className="text-amber-500" size={24} />,
        image: "/images/6.jpg",
        tags: ["Student Council", "House Competitions", "Prefect System", "Investiture"]
    }
];

export default function StudentLifePage() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <PageHeader 
                title="Student Life & Co-Curriculars"
                subtitle="Beyond academics: vibrant arts, competitive athletics, leadership councils, and community engagement at Max Muller Public School."
            />

            {/* Activities Showcase */}
            <section className="py-20 max-w-7xl mx-auto px-6 md:px-12 space-y-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {activities.map((act, idx) => (
                        <div 
                            key={idx}
                            className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col justify-between hover:shadow-2xl transition-all group"
                        >
                            <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                                <img 
                                    src={act.image} 
                                    alt={act.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                                />
                                <div className="absolute top-4 left-4 p-3 bg-white/90 backdrop-blur-md rounded-2xl shadow-md">
                                    {act.icon}
                                </div>
                            </div>

                            <div className="p-8 space-y-4">
                                <h3 className="text-2xl font-serif font-bold text-brand-dark group-hover:text-brand-blue transition-colors">
                                    {act.title}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                                    {act.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                                    {act.tags.map((tag, tIdx) => (
                                        <span key={tIdx} className="text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Annual Traditions & Festivals */}
            <section className="py-24 bg-white border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
                    <div className="text-center max-w-2xl mx-auto space-y-3">
                        <span className="text-xs font-bold uppercase tracking-widest text-brand-gold bg-amber-500/10 px-3 py-1.5 rounded-full inline-block">
                            School Culture
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-dark">
                            Annual Celebrations & Traditions
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
                            <Sparkles className="text-amber-500" size={20} />
                            <h4 className="font-serif font-bold text-base text-brand-dark">Annual School Day</h4>
                            <p className="text-xs text-slate-600 font-medium">Grand cultural extravaganza showcasing dance, drama, and musical accomplishments.</p>
                        </div>

                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
                            <Trophy className="text-amber-500" size={20} />
                            <h4 className="font-serif font-bold text-base text-brand-dark">Annual Athletic Meet</h4>
                            <p className="text-xs text-slate-600 font-medium">Inter-house track and field competitions, march past, and sportsmanship awards.</p>
                        </div>

                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
                            <Heart className="text-amber-500" size={20} />
                            <h4 className="font-serif font-bold text-base text-brand-dark">National Days & Festivals</h4>
                            <p className="text-xs text-slate-600 font-medium">Independence Day, Republic Day, and Kannada Rajyotsava celebrated with patriotic fervour.</p>
                        </div>

                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
                            <Flame className="text-amber-500" size={20} />
                            <h4 className="font-serif font-bold text-base text-brand-dark">Science & Art Fests</h4>
                            <p className="text-xs text-slate-600 font-medium">Interactive exhibition where students demonstrate working science models and art projects.</p>
                        </div>
                    </div>

                    <div className="text-center pt-6">
                        <Link 
                            href="/gallery" 
                            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-navy hover:bg-brand-blue text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-md"
                        >
                            <span>View Photos in Gallery</span>
                            <ArrowRight size={14} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
