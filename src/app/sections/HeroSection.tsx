'use client';
import React, { useState } from 'react';
import Modal from '../components/modal/Modal';
import WpIcon from '../../../public/images/WpIcon';
import PhoneIcon from '../../../public/images/PhoneIcon';
import CalendarIcon from '../../../public/images/CalendarIcon';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Scroll function to smoothly scroll to the #services section
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="w-full h-screen bg-cover bg-center flex flex-col items-center justify-center text-white px-4 md:px-8 relative"
      style={{ backgroundImage: 'url("/images/backgrounds/spa-background.png")', backgroundAttachment: 'fixed' }}
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-green-900 dark:text-black text-center">
        Atlantis Head Spa Wellness
      </h1>
      <p className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 text-red-900 text-center">
        Başınızı ve Ruhunuzu Dinlendirin
      </p>

      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        {/* Randevu Hattı Button */}
        <a
          href="tel:+905345531871"
          className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-6 md:px-8 lg:px-10 rounded flex items-center justify-between transition-transform transform hover:scale-105"
        >
          <div className='mr-2'>
            <PhoneIcon />
          </div>
          Telefon Randevu Hattı
        </a>

        {/* Whatsapp Randevu Hattı Button */}
        <a
          href="https://wa.me/905345531871"
          className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-6 md:px-8 lg:px-10 rounded flex items-center justify-between transition-transform transform hover:scale-105"
        >
          <div className='mr-2'>
            <WpIcon />
          </div>
          Whatsapp Randevu Hattı
        </a>

        {/* Online Randevu Button */}
        <button
          onClick={openModal}
          className="flex items-center justify-between bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-6 md:px-8 lg:px-10 rounded transition-transform transform hover:scale-105 text-center"
        >
          <div className='mr-2'>
            <CalendarIcon />
          </div>
          Online Randevu Sistemi
        </button>
      </div>

      {/* Animated Down Arrow */}
      <div className="absolute bottom-10 flex justify-center">
        <button onClick={scrollToServices} className="animate-bounce flex items-center justify-center h-12 w-12 rounded-full border-2 border-white text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default HeroSection;
