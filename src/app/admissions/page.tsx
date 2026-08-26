"use client";

import { useState } from 'react';
import PageHeader from '@/components/ui/PageHeader';
import { admissionProcess, requiredDocuments, schoolInfo } from '@/lib/data';
import { 
    FileText, 
    CheckCircle2, 
    Clock, 
    MapPin, 
    Phone, 
    Mail, 
    Send, 
    AlertCircle, 
    HelpCircle,
    Download
} from 'lucide-react';

export default function AdmissionsPage() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        parentName: '',
        childName: '',
        dob: '',
        email: '',
        phone: '',
        grade: 'Montessori 1',
        previousSchool: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            <PageHeader 
                title="Admissions 2025-26"
                subtitle="Join our community of learners. Registration for admission for the Academic Year 2025-26 is currently open for Montessori through Grade 10."
            />

            {/* 1. Important Parent Notice Banner */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 -mt-6">
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-amber-700 font-bold text-sm uppercase tracking-wider">
                            <AlertCircle size={18} /> Important Admission Advisory
                        </div>
                        <p className="text-slate-700 text-sm font-medium leading-relaxed max-w-3xl">
                            To ensure an effective teaching-learning environment, we maintain limited class strength. Considering the high demand and limited number of seats available, admissions are processed on a first-come, first-served basis following registration submission and interaction.
                        </p>
                    </div>
                    <a
                        href="#form"
                        className="px-6 py-3 bg-brand-navy hover:bg-brand-blue text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-md shrink-0"
                    >
                        Fill Admission Form ↓
                    </a>
                </div>
            </section>


            {/* 3. 4-Step Process & Registration Workflow */}
            <section className="py-20 bg-white border-y border-slate-100" id="process">
                <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
                    
                    <div className="text-center max-w-2xl mx-auto space-y-4">
                        <span className="text-xs font-bold uppercase tracking-widest text-brand-gold bg-amber-500/10 px-3 py-1.5 rounded-full inline-block">
                            Admission Roadmap
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-dark">
                            Step-by-Step Registration Process
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {admissionProcess.map((step, idx) => (
                            <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 space-y-4 relative flex flex-col justify-between hover:shadow-lg transition-all">
                                <div className="space-y-4">
                                    <div className="w-12 h-12 rounded-2xl bg-brand-navy text-amber-400 font-serif font-bold text-xl flex items-center justify-center shadow-md">
                                        {step.step}
                                    </div>
                                    <h3 className="text-lg font-serif font-bold text-brand-dark">{step.title}</h3>
                                    <p className="text-slate-600 text-xs leading-relaxed font-medium">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* 4. Required Documents Checklist */}
            <section className="py-20 max-w-7xl mx-auto px-6 md:px-12" id="documents">
                <div className="bg-brand-dark text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-800 grid lg:grid-cols-12 gap-10 items-center">
                    
                    <div className="lg:col-span-5 space-y-6">
                        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 inline-block">
                            Documentation Checklist
                        </span>
                        <h3 className="text-3xl font-serif font-bold text-white leading-tight">
                            Documents Required for Registration
                        </h3>
                        <p className="text-slate-300 text-sm leading-relaxed font-medium">
                            Please ensure the following documents are submitted along with the printout of the registration form in the school drop-box during working hours (9:00 AM – 4:00 PM).
                        </p>
                        <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-xs text-amber-300 space-y-1">
                            <div className="font-bold uppercase tracking-wider">Submission Hours</div>
                            <div className="text-slate-300">Mon—Sat: 9:00 AM to 4:00 PM (Closed on Sundays & National Holidays)</div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10">
                        <ul className="space-y-3.5">
                            {requiredDocuments.map((doc, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                                    <CheckCircle2 size={16} className="text-amber-400 shrink-0 mt-0.5" />
                                    <span>{doc}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </section>

            {/* 5. Online Admission Inquiry Form */}
            <section className="py-20 max-w-5xl mx-auto px-6 md:px-12" id="form">
                <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-100">
                    {submitted ? (
                        <div className="text-center py-16 space-y-4">
                            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle2 size={40} />
                            </div>
                            <h3 className="text-3xl font-serif font-bold text-brand-dark">Admissions Application Received!</h3>
                            <p className="text-slate-600 text-sm max-w-lg mx-auto font-medium leading-relaxed">
                                Thank you for submitting an inquiry for <strong>{formData.childName || "your child"}</strong>. Our admissions coordinator will review your details and contact you at <strong>{formData.phone}</strong> for the next steps.
                            </p>
                            <div className="pt-6">
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="px-8 py-3 bg-brand-navy text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-brand-blue transition-colors cursor-pointer"
                                >
                                    Submit Another Application
                                </button>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div>
                                <span className="text-xs font-bold uppercase tracking-widest text-brand-gold bg-amber-500/10 px-3 py-1.5 rounded-full inline-block mb-3">
                                    Online Application Portal
                                </span>
                                <h3 className="text-3xl font-serif font-bold text-brand-dark">
                                    Student Admission Inquiry 2025-26
                                </h3>
                                <p className="text-slate-500 text-sm mt-2">
                                    Complete the form below to initiate your child's registration process.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-700 mb-2">
                                        Parent / Guardian Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.parentName}
                                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                                        placeholder="Full name of parent"
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-700 mb-2">
                                        Student's Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.childName}
                                        onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                                        placeholder="Full name of child"
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-700 mb-2">
                                        Child's Date of Birth *
                                    </label>
                                    <input
                                        type="date"
                                        required
                                        value={formData.dob}
                                        onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-700 mb-2">
                                        Applying for Grade *
                                    </label>
                                    <select
                                        required
                                        value={formData.grade}
                                        onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue cursor-pointer"
                                    >
                                        <option value="Montessori 1">Montessori 1 (Pre-KG)</option>
                                        <option value="Montessori 2">Montessori 2 (LKG)</option>
                                        <option value="Montessori 3">Montessori 3 (UKG)</option>
                                        <option value="Grade 1">Grade 1 (Primary)</option>
                                        <option value="Grade 2">Grade 2</option>
                                        <option value="Grade 3">Grade 3</option>
                                        <option value="Grade 4">Grade 4</option>
                                        <option value="Grade 5">Grade 5</option>
                                        <option value="Grade 6">Grade 6 (Middle School)</option>
                                        <option value="Grade 7">Grade 7</option>
                                        <option value="Grade 8">Grade 8</option>
                                        <option value="Grade 9">Grade 9 (High School)</option>
                                        <option value="Grade 10">Grade 10</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-700 mb-2">
                                        Contact Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        placeholder="+91 98765 43210"
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="parent@email.com"
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-slate-700 mb-2">
                                    Previous School Attended (If applicable)
                                </label>
                                <input
                                    type="text"
                                    value={formData.previousSchool}
                                    onChange={(e) => setFormData({ ...formData, previousSchool: e.target.value })}
                                    placeholder="Name of previous school and city"
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-slate-700 mb-2">
                                    Additional Inquiries / Notes
                                </label>
                                <textarea
                                    rows={3}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    placeholder="Any specific questions regarding admissions, transport, or curriculum..."
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-brand-navy hover:bg-brand-blue text-white font-bold text-sm uppercase tracking-widest rounded-2xl transition-all shadow-xl hover:shadow-brand-navy/25 flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <Send size={16} /> Submit Admission Inquiry
                            </button>
                        </form>
                    )}
                </div>
            </section>
        </div>
    );
}
