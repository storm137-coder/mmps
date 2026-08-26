export default function PageHeader({ title, subtitle }: { title: string, subtitle?: string }) {
    return (
        <header className="py-14 sm:py-18 px-4 sm:px-6 md:px-12 bg-brand-dark text-white text-center border-b border-slate-800">
            <div className="max-w-3xl mx-auto space-y-3.5">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-white">{title}</h1>
                {subtitle && (
                    <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                )}
            </div>
        </header>
    );
}
