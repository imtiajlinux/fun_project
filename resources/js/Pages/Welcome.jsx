import { Head, Link } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import HeroImage from '@/Components/HeroSection/HeroImage';
import AboutSection from '@/Components/AboutSection/AboutSection';
import FeaturedProducts from '@/Components/FeaturedProducts/FeaturedProducts';
import LatestNews from '@/Components/LetestNews/LatestNews';
import WhyChoose from '@/Components/WhyChoose/WhyChoose';




export default function Welcome({ carousels ,latestNews, auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <GuestLayout>
            <Head title="Welcome" />
            <div>
                <HeroImage
                carousels={carousels}
                 />
                <AboutSection />
                <FeaturedProducts />
                <LatestNews
                latestNews={latestNews}
                />
                <WhyChoose />
                
            </div>
            
            </GuestLayout>
        </>
    );
}
