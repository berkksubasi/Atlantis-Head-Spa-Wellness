import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="w-full h-screen bg-cover bg-center flex flex-col items-center justify-center text-white px-4 md:px-8"
      style={{ backgroundImage: 'url("/images/backgrounds/spa-background.png")', backgroundAttachment: 'fixed' }}
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-green-900 dark:text-black text-center">
        Atlantis Head Spa Wellness
      </h1>
      <p className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 text-red-900 text-center">
        Başınızı ve ruhunuzu dinlendirin
      </p>
      <Link
        className="bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-6 md:px-8 lg:px-10 rounded transition-transform transform hover:scale-105"
        href="/appointment"
      >
        Randevu Al
      </Link>
    </section>
  );
};

export default HeroSection;
