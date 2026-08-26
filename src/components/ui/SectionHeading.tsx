export default function SectionHeading({ 
    title, 
    subtitle, 
    centered = false 
}: { 
    title: string, 
    subtitle?: string, 
    centered?: boolean 
}) {
    return (
        <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
            {subtitle && (
                <span className="block text-gold-600 font-bold tracking-widest uppercase text-sm mb-3">
                    {subtitle}
                </span>
            )}
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-navy-900 mb-6">
                {title}
            </h2>
            <div className={`w-16 h-1 bg-gold-500 rounded-full ${centered ? 'mx-auto' : ''}`}></div>
        </div>
    );
}
