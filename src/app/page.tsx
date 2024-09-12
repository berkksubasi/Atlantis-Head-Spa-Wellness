import Link from 'next/link';
import ServicesSection from './sections/ServicesSection';
import HeroSection from './sections/HeroSection';
import AboutUsSection from './sections/AboutUsSection';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Hero Section */}
      <HeroSection />
      {/* Services Section */}
      <div id='services'>
        <ServicesSection />
      </div>
      {/* About Us Section */}
      <div id='about'>
        <AboutUsSection />
      </div>
    </div>
  );
};

export default HomePage;
