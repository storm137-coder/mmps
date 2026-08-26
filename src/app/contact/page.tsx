"use client";

import { useState } from 'react';
import PageHeader from '@/components/ui/PageHeader';
import { schoolInfo } from '@/lib/data';
import { 
    Phone, 
    Mail, 
    MapPin, 
    Clock, 
    Send, 
    CheckCircle2, 
    MessageCircle,
    Navigation,
    Calendar
} from 'lucide-react';

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            <PageHeader 
                title="Contact & Campus Location"
                subtitle="We welcome parents, prospective families, and alumni to connect with our administrative team in Basaveshwaranagar, Bengaluru."
            />

            {/* 1. Contact Cards Grid */}
            <section className="py-20 max-w-7xl mx-auto px-6 md:px-12 space-y-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    
                    {/* Address */}
                    <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md space-y-4">
                        <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-600">
                            <MapPin size={24} />
                        </div>
                        <h3 className="font-serif font-bold text-lg text-brand-dark">Campus Address</h3>
                        <p className="text-xs text-slate-600 leading-relaxed font-medium">
                            {schoolInfo.location}
                        </p>
                    </div>

                    {/* Phone */}
                    <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md space-y-4">
                        <div className="w-12 h-12 rounded-2xl bg-brand-light flex items-center justify-center text-brand-blue">
                            <Phone size={24} />
                        </div>
                        <h3 className="font-serif font-bold text-lg text-brand-dark">Phone Lines</h3>
                        <div className="text-xs text-slate-600 space-y-1 font-medium">
                            <div><a href="tel:08023233455" className="hover:text-brand-blue">080 23233455</a></div>
                            <div><a href="tel:8951774344" className="hover:text-brand-blue">8951774344</a></div>
                        </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md space-y-4">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                            <MessageCircle size={24} />
                        </div>
                        <h3 className="font-serif font-bold text-lg text-brand-dark">WhatsApp Help</h3>
                        <p className="text-xs text-slate-600 font-medium">
                            <a 
                                href={schoolInfo.whatsappUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-emerald-600 hover:text-emerald-700 font-bold underline"
                            >
                                Chat: +91 {schoolInfo.whatsapp} →
                            </a>
                        </p>
                    </div>

                    {/* Hours */}
                    <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md space-y-4">
                        <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-600">
                            <Clock size={24} />
                        </div>
                        <h3 className="font-serif font-bold text-lg text-brand-dark">Office Hours</h3>
                        <div className="text-xs text-slate-600 space-y-1 font-medium">
                            <p>Mon—Sat: 9:00 AM – 4:00 PM</p>
                            <p className="text-slate-400">Closed Sundays & Holidays</p>
                        </div>
                    </div>

                </div>

                {/* 2. Contact Form & Google Map Embed */}
                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    
                    {/* Left: Contact Form (6 cols) */}
                    <div className="lg:col-span-6 bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-slate-100">
                        {submitted ? (
                            <div className="text-center py-16 space-y-4">
                                <div className="w-18 h-18 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle2 size={36} />
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-brand-dark">Message Sent Successfully!</h3>
                                <p className="text-slate-600 text-sm max-w-md mx-auto font-medium">
                                    Thank you, <strong>{formData.name}</strong>. Our school office will respond to your query shortly.
                                </p>
                                <div className="pt-4">
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="px-6 py-2.5 bg-brand-navy text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-brand-blue transition-colors cursor-pointer"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-brand-gold bg-amber-500/10 px-3 py-1.5 rounded-full inline-block mb-2">
                                        Inquiry Form
                                    </span>
                                    <h3 className="text-2xl font-serif font-bold text-brand-dark">Send Us a Direct Message</h3>
                                    <p className="text-slate-500 text-xs mt-1">We respond to all parent and community queries within one working day.</p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Full Name *</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="Your name"
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Phone Number *</label>
                                        <input
                                            type="tel"
                                            required
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            placeholder="+91 98765 43210"
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Email Address *</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="your.email@example.com"
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Subject / Department *</label>
                                    <select
                                        required
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue cursor-pointer"
                                    >
                                        <option value="" disabled>Select Subject...</option>
                                        <option value="Admissions Inquiry">Admissions Inquiry 2025-26</option>
                                        <option value="Curriculum & Academics">Curriculum & Academics</option>
                                        <option value="Schedule Campus Tour">Schedule Campus Tour</option>
                                        <option value="General Query">General Administrative Query</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Your Message *</label>
                                    <textarea
                                        rows={4}
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        placeholder="How can we assist you today?"
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 bg-brand-navy hover:bg-brand-blue text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <Send size={14} /> Send Message to School Office
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Right: Map & Location Directions (6 cols) */}
                    <div className="lg:col-span-6 space-y-6">
                        <div className="bg-brand-dark text-white rounded-3xl p-8 shadow-xl border border-slate-800 space-y-4">
                            <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-widest">
                                <Navigation size={16} /> Campus Location
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-white">How to Reach Us</h3>
                            <p className="text-slate-300 text-sm font-medium leading-relaxed">
                                Max Muller Public School is situated on 8th Main in BEML Layout, Basaveshwaranagar, easily accessible via major transit routes from Rajajinagar, Vijayanagar, and West Bengaluru.
                            </p>
                            <div className="pt-2">
                                <a 
                                    href="https://maps.google.com/?q=Max+Muller+Public+School+Basaveshwaranagar+Bangalore" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-md"
                                >
                                    <span>Get Driving Directions on Google Maps</span>
                                    <Navigation size={14} />
                                </a>
                            </div>
                        </div>

                        {/* Interactive Map Embed Frame */}
                        <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-200">
                            <iframe 
                                title="Max Muller Public School Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.697864478146!2d77.5312!3d12.9882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d8438bfbc83%3A0x6b63d76269df6d79!2sBasaveshwar%20Nagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen={true} 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
