'use client';
import React, { useState } from 'react';
import Modal from '../components/modal/Modal';

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
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
        Başınızı ve ruhunuzu dinlendirin
      </p>

      {/* Randevu Al Button with animation */}
      <button
              onClick={openModal}
              className="bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-6 md:px-8 lg:px-10 rounded transition-transform transform hover:scale-105 animate-bounce-once"
            >
              Randevu Al
            </button>


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
