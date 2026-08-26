"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import SearchModal from "../ui/SearchModal";
import { navigation } from '@/lib/data';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsOpen(false);
        if (isOpen) document.body.style.overflow = 'auto';
    }, [pathname]);

    return (
        <nav className="relative w-full bg-white/95 backdrop-blur-md border-b border-slate-200/70 shadow-xs transition-all">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center py-3.5">
                
                {/* School Brand Logo */}
                <Link href="/" className="flex items-center shrink-0">
                    <img 
                        src="/images/Logo.png" 
                        alt="Max Muller Public School" 
                        className="h-10 sm:h-12 md:h-13 object-contain" 
                    />
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                    {navigation.slice(0, 6).map((item) => {
                        const hasChildren = 'children' in item && item.children && item.children.length > 0;
                        const isActive = pathname === item.href || (hasChildren && item.children?.some(c => pathname === c.href));

                        if (hasChildren) {
                            return (
                                <div 
                                    key={item.name} 
                                    className="relative group py-2"
                                >
                                    <Link
                                        href={item.href}
                                        className={`text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-1 hover:text-amber-600 ${isActive ? 'text-brand-blue font-bold' : 'text-slate-700'}`}
                                    >
                                        {item.name}
                                        <ChevronDown size={13} className="text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
                                    </Link>

                                    {/* Dropdown Menu */}
                                    <div className="absolute top-full left-0 mt-1 w-60 bg-white border border-slate-100 shadow-xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col overflow-hidden z-50 p-2">
                                        {item.children?.map((child) => (
                                            <Link
                                                key={child.name}
                                                href={child.href}
                                                className={`px-4 py-2.5 text-xs font-medium uppercase tracking-wider rounded-xl transition-all ${pathname === child.href ? 'bg-brand-light text-brand-blue font-bold' : 'text-slate-600 hover:bg-slate-50 hover:text-brand-blue'}`}
                                            >
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            );
                        }

                        return (
                            <Link 
                                key={item.name} 
                                href={item.href}
                                className={`text-xs font-semibold uppercase tracking-wider transition-colors hover:text-amber-600 ${pathname === item.href ? 'text-brand-blue font-bold' : 'text-slate-700'}`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}

                    {/* More Dropdown for remaining links */}
                    <div className="relative group py-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 cursor-pointer hover:text-amber-600 transition-colors flex items-center gap-1">
                            More <ChevronDown size={13} className="text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
                        </span>
                        <div className="absolute top-full right-0 mt-1 w-52 bg-white border border-slate-100 shadow-xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col overflow-hidden z-50 p-2">
                            {navigation.slice(6).map(item => (
                                <Link 
                                    key={item.name} 
                                    href={item.href}
                                    className={`px-4 py-2.5 text-xs font-medium uppercase tracking-wider rounded-xl transition-all ${pathname === item.href ? 'bg-brand-light text-brand-blue font-bold' : 'text-slate-600 hover:bg-slate-50 hover:text-brand-blue'}`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Action Bar: Search & Apply Button */}
                    <div className="border-l border-slate-200 pl-5 flex items-center space-x-3">
                        <SearchModal />
                        <Link 
                            href="/admissions"
                            className="px-5 py-2.5 bg-brand-dark hover:bg-brand-navy text-white text-xs font-semibold uppercase tracking-widest rounded-xl transition-all shadow-xs hover:shadow-md"
                        >
                            Apply Now
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Trigger & Search */}
                <div className="flex items-center gap-2 lg:hidden">
                    <SearchModal />
                    <button 
                        onClick={() => {
                            setIsOpen(!isOpen);
                            document.body.style.overflow = !isOpen ? 'hidden' : 'auto';
                        }}
                        className="text-slate-800 bg-slate-100 p-2 rounded-xl"
                        aria-label="Toggle navigation menu"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            {isOpen && (
                <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl">
                    <div className="flex flex-col px-6 py-6 space-y-4 max-h-[75vh] overflow-y-auto">
                        {navigation.map((item) => (
                            <div key={item.name} className="border-b border-slate-100 pb-3">
                                <Link 
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-base font-semibold ${pathname === item.href ? 'text-brand-blue' : 'text-slate-800'}`}
                                >
                                    {item.name}
                                </Link>
                                {'children' in item && item.children && (
                                    <div className="pl-4 mt-2 space-y-2 border-l-2 border-slate-100">
                                        {item.children.map(child => (
                                            <Link
                                                key={child.name}
                                                href={child.href}
                                                onClick={() => setIsOpen(false)}
                                                className="block text-xs text-slate-500 hover:text-brand-blue font-medium py-1"
                                            >
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        <div className="pt-2 space-y-2.5">
                            <Link 
                                href="/admissions" 
                                onClick={() => setIsOpen(false)}
                                className="block w-full py-3 bg-brand-dark text-white text-center font-semibold text-xs uppercase tracking-wider rounded-xl shadow-xs"
                            >
                                Apply for Admission 2025-26
                            </Link>
                            <a 
                                href="tel:08023233455"
                                className="block w-full py-2.5 bg-slate-100 text-slate-800 text-center font-medium text-xs rounded-xl"
                            >
                                Call School: 080 23233455
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
