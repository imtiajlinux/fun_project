import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import HeroImage from '@/Components/HeroSection/HeroImage';
import AboutSection from '@/Components/AboutSection/AboutSection';
import FeaturedProducts from '@/Components/FeaturedProducts/FeaturedProducts';
import LatestNews from '@/Components/LetestNews/LatestNews';
import WhyChoose from '@/Components/WhyChoose/WhyChoose';

export default function Dashboard({carousels,latestNews}) {
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
        <HeroImage carousels={carousels}/>
        <AboutSection />
        <FeaturedProducts />
        <WhyChoose />
        <LatestNews latestNews={latestNews} />
       

            
        </AuthenticatedLayout>
    );
}
