import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';
import { schoolInfo, navigation } from '@/lib/data';

export default function Footer() {
    return (
        <footer className="bg-brand-dark text-white border-t border-slate-800 pt-20 pb-12 mt-auto">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                
                {/* Main 4-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-slate-800">
                    
                    {/* Col 1: School Identity & Mission (5 cols) */}
                    <div className="md:col-span-12 lg:col-span-5 space-y-6">
                        <Link href="/" className="inline-block bg-white p-2.5 rounded-2xl shadow-lg">
                            <img src="/images/Logo.png" alt="Max Muller Public School" className="h-12 object-contain" />
                        </Link>
                        
                        <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                            Established in {schoolInfo.established}, Max Muller Group of Institutions is a premier co-educational institution in Bengaluru dedicated to academic excellence, value-based character formation, and holistic student growth.
                        </p>

                        <div className="flex items-center gap-3 pt-2">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-800 text-amber-300 rounded-full text-xs font-semibold border border-slate-700">
                                <ShieldCheck size={14} className="text-amber-400" /> Recognized Institution
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs font-semibold border border-slate-700">
                                40+ Years of Legacy
                            </span>
                        </div>
                    </div>

                    {/* Col 2: Academic Links (2 cols) */}
                    <div className="md:col-span-4 lg:col-span-2">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-6">Academics</h4>
                        <ul className="space-y-3 text-sm text-slate-300 font-medium">
                            <li><Link href="/academics#montessori" className="hover:text-amber-400 transition-colors">Montessori & Pre-K</Link></li>
                            <li><Link href="/academics#primary" className="hover:text-amber-400 transition-colors">Primary (Grades 1-5)</Link></li>
                            <li><Link href="/academics#secondary" className="hover:text-amber-400 transition-colors">Middle & High (6-10)</Link></li>
                            <li><Link href="/campus" className="hover:text-amber-400 transition-colors">Labs & Library</Link></li>
                            <li><Link href="/student-life" className="hover:text-amber-400 transition-colors">Co-Curriculars</Link></li>
                        </ul>
                    </div>

                    {/* Col 3: Admissions & Quick Links (2 cols) */}
                    <div className="md:col-span-4 lg:col-span-2">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-6">Admissions</h4>
                        <ul className="space-y-3 text-sm text-slate-300 font-medium">
                            <li><Link href="/admissions" className="hover:text-amber-400 transition-colors flex items-center gap-1">Admissions 2025-26 <ArrowUpRight size={12} className="text-amber-400" /></Link></li>
                            <li><Link href="/admissions#process" className="hover:text-amber-400 transition-colors">Process & Checklist</Link></li>
                            <li><Link href="/leadership" className="hover:text-amber-400 transition-colors">Leadership</Link></li>
                            <li><Link href="/gallery" className="hover:text-amber-400 transition-colors">Photo Gallery</Link></li>
                            <li><Link href="/faq" className="hover:text-amber-400 transition-colors">Parent FAQs</Link></li>
                        </ul>
                    </div>

                    {/* Col 4: Campus & Direct Contact (3 cols) */}
                    <div className="md:col-span-4 lg:col-span-3 space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-6">Contact Us</h4>
                        
                        <div className="space-y-3 text-sm text-slate-300">
                            <div className="flex items-start gap-2.5">
                                <MapPin size={16} className="text-amber-400 shrink-0 mt-0.5" />
                                <p className="leading-snug text-xs text-slate-300">{schoolInfo.location}</p>
                            </div>

                            <div className="flex items-center gap-2.5">
                                <Phone size={16} className="text-amber-400 shrink-0" />
                                <div className="text-xs">
                                    <a href="tel:08023233455" className="hover:text-white transition-colors">080 23233455</a> / <a href="tel:8951774344" className="hover:text-white transition-colors">8951774344</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-2.5">
                                <Mail size={16} className="text-amber-400 shrink-0" />
                                <a href={`mailto:${schoolInfo.email}`} className="text-xs hover:text-white transition-colors">{schoolInfo.email}</a>
                            </div>

                            <div className="flex items-center gap-2.5 text-xs text-slate-400">
                                <Clock size={16} className="text-amber-400 shrink-0" />
                                <span>Mon—Sat: 9:00 AM – 4:00 PM</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
                    <p>&copy; {new Date().getFullYear()} {schoolInfo.name}. All Rights Reserved.</p>
                    <p className="flex items-center gap-1 text-slate-400">
                        Nurturing generations in Bengaluru with <Heart size={12} className="text-rose-500 fill-rose-500" /> since 1982.
                    </p>
                </div>

            </div>
        </footer>
    );
}
