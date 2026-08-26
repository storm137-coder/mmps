"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        quote: "Max Muller Public School has been instrumental in shaping my child's confidence. The balance of academics and character building is truly exceptional.",
        author: "Priya Sharma",
        role: "Parent of Grade 5 Student"
    },
    {
        quote: "The teachers here don't just teach; they inspire. We've seen a remarkable improvement in our son's analytical thinking and public speaking.",
        author: "Rahul Verma",
        role: "Parent of Grade 8 Student"
    },
    {
        quote: "A safe, nurturing environment with state-of-the-art facilities. It's exactly what we wanted for our daughter's early education.",
        author: "Ananya Desai",
        role: "Parent of Montessori Student"
    }
];

export default function TestimonialCarousel() {
    const [index, setIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isHovered) return;
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [isHovered]);

    const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
    const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="py-32 border-t border-border bg-white">
            <div className="max-w-4xl mx-auto px-6 text-center">
                
                <div 
                    className="relative min-h-[200px]"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6 }}
                            className="absolute inset-0 flex flex-col items-center justify-center"
                        >
                            <p className="text-2xl md:text-4xl font-serif leading-relaxed mb-10 text-navy max-w-3xl">
                                "{testimonials[index].quote}"
                            </p>
                            <div>
                                <h4 className="font-semibold tracking-widest uppercase text-navy text-xs mb-1">{testimonials[index].author}</h4>
                                <p className="text-gray-500 text-[10px] uppercase tracking-widest">{testimonials[index].role}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex items-center justify-center gap-8 mt-16">
                    <button onClick={prev} className="p-2 text-gray-400 hover:text-navy transition-colors">
                        <ChevronLeft size={24} strokeWidth={1} />
                    </button>
                    <div className="flex gap-3">
                        {testimonials.map((_, i) => (
                            <button 
                                key={i} 
                                onClick={() => setIndex(i)}
                                className={`h-1 transition-all ${i === index ? 'bg-navy w-8' : 'bg-gray-200 w-4 hover:bg-gray-300'}`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                    <button onClick={next} className="p-2 text-gray-400 hover:text-navy transition-colors">
                        <ChevronRight size={24} strokeWidth={1} />
                    </button>
                </div>
            </div>
        </section>
    );
}
