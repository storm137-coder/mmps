"use client";

import { useState } from 'react';
import { MessageCircle, Phone, FileText, X, Send, CheckCircle2 } from 'lucide-react';
import { schoolInfo } from '@/lib/data';

export default function QuickContactBar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({ name: '', phone: '', grade: 'Montessori', message: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setIsModalOpen(false);
            setFormData({ name: '', phone: '', grade: 'Montessori', message: '' });
        }, 2000);
    };

    return (
        <>
            {/* Floating Action Widget */}
            <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
                
                {/* Expanded Action Menu */}
                {isMenuOpen && (
                    <div className="flex flex-col gap-2 mb-1 animate-in fade-in slide-in-from-bottom-2 duration-150">
                        <button
                            onClick={() => { setIsModalOpen(true); setIsMenuOpen(false); }}
                            className="flex items-center gap-2.5 bg-white text-slate-800 px-4 py-2.5 rounded-full shadow-lg border border-slate-200 text-xs font-semibold hover:bg-slate-50 transition-all cursor-pointer"
                        >
                            <FileText size={15} className="text-amber-600" />
                            <span>Quick Enquiry</span>
                        </button>

                        <a
                            href="tel:08023233455"
                            className="flex items-center gap-2.5 bg-white text-slate-800 px-4 py-2.5 rounded-full shadow-lg border border-slate-200 text-xs font-semibold hover:bg-slate-50 transition-all cursor-pointer"
                        >
                            <Phone size={15} className="text-brand-blue" />
                            <span>Call 080 23233455</span>
                        </a>

                        <a
                            href={`https://wa.me/91${schoolInfo.whatsapp}?text=Hello%20Max%20Muller%20Public%20School,%20I%20would%20like%20to%20enquire%20about%20admissions.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2.5 bg-emerald-600 text-white px-4 py-2.5 rounded-full shadow-lg text-xs font-semibold hover:bg-emerald-700 transition-all cursor-pointer"
                        >
                            <MessageCircle size={15} />
                            <span>WhatsApp Chat</span>
                        </a>
                    </div>
                )}

                {/* Primary Toggle Floating Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="flex items-center gap-2 bg-brand-dark hover:bg-brand-navy text-white px-4 py-3 rounded-full shadow-lg border border-white/10 transition-all hover:scale-105 cursor-pointer"
                    aria-label="Contact School"
                >
                    {isMenuOpen ? (
                        <X size={18} />
                    ) : (
                        <>
                            <MessageCircle size={18} className="text-emerald-400" />
                            <span className="text-xs font-semibold hidden sm:inline">Admissions Help</span>
                        </>
                    )}
                </button>
            </div>

            {/* Quick Enquiry Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-150">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
                        >
                            <X size={18} />
                        </button>

                        {submitted ? (
                            <div className="py-8 text-center space-y-2">
                                <CheckCircle2 size={44} className="text-emerald-500 mx-auto" />
                                <h3 className="text-xl font-serif font-bold text-brand-dark">Enquiry Received!</h3>
                                <p className="text-slate-500 text-xs">Our admissions desk will contact you shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-amber-700 block mb-1">Quick Callback</span>
                                    <h3 className="text-xl font-serif font-bold text-brand-dark">Admissions Enquiry 2025–26</h3>
                                </div>

                                <div className="space-y-3 pt-1">
                                    <div>
                                        <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1">Parent's Name *</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="Enter full name"
                                            className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-none focus:border-brand-blue"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1">Phone Number *</label>
                                        <input
                                            type="tel"
                                            required
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            placeholder="+91 98765 43210"
                                            className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-none focus:border-brand-blue"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1">Grade *</label>
                                        <select
                                            value={formData.grade}
                                            onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                                            className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-none focus:border-brand-blue cursor-pointer"
                                        >
                                            <option value="Montessori">Montessori / Pre-KG (Ages 2.5—4)</option>
                                            <option value="Kindergarten">LKG / UKG (Ages 4—5.5)</option>
                                            <option value="Primary">Primary (Grades 1 to 5)</option>
                                            <option value="Middle">Middle School (Grades 6 to 8)</option>
                                            <option value="High School">High School (Grades 9 & 10)</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="pt-2 flex items-center justify-between gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setIsModalOpen(false)}
                                        className="px-4 py-2 text-slate-500 hover:text-slate-800 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-1 px-5 py-2.5 bg-brand-dark hover:bg-brand-navy text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                                    >
                                        <Send size={13} /> Submit Callback
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
