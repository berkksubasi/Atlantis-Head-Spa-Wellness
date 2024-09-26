'use client'
import ServicesSection from './sections/ServicesSection';
import HeroSection from './sections/HeroSection';
import AboutUsSection from './sections/AboutUsSection';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div id='home' className="w-full h-screen bg-cover bg-center flex flex-col items-center justify-center text-white px-4 md:px-8 relative"
        style={{ backgroundImage: 'url("/images/backgrounds/spa-background.png")', backgroundAttachment: 'fixed' }}
      >
        <HeroSection />
      </div>
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
