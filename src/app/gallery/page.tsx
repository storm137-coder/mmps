import PageHeader from '@/components/ui/PageHeader';
import GalleryLightbox from '@/components/ui/GalleryLightbox';

export default function GalleryPage() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <PageHeader 
                title="Photo Gallery"
                subtitle="A visual celebration of academic life, campus infrastructure, sports victories, and annual cultural events at Max Muller Public School."
            />

            <section className="py-20 max-w-7xl mx-auto px-6 md:px-12 pb-32">
                <GalleryLightbox />
            </section>
        </div>
    );
}
