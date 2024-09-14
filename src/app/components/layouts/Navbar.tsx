'use client';
import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Modal from '../modal/Modal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full top-0 left-0 z-50">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-green-900 dark:text-white">
            Atlantis Head Spa Wellness
          </Link>

          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-green-900 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400 transition-all duration-300 ease-in-out transform hover:scale-105">
              Ana Sayfa
            </Link>
            <ScrollLink
              to="services"
              smooth={true}
              duration={500}
              className="cursor-pointer text-green-900 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Hizmetlerimiz
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer text-green-900 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Kurumsal
            </ScrollLink>
            <button
              onClick={openModal}
              className="text-green-900 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Randevu Al
            </button>
            <Link href="/contact" className="text-green-900 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400 transition-all duration-300 ease-in-out transform hover:scale-105">
              İletişim
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? (
                <XMarkIcon className="h-6 w-6 text-gray-700 dark:text-gray-300 transition-transform duration-300 ease-in-out transform hover:scale-110" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-gray-700 dark:text-gray-300 transition-transform duration-300 ease-in-out transform hover:scale-110" />
              )}
            </button>
          </div>
        </div>

        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white dark:bg-gray-900`}>
          <Link
            href="/"
            className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 ease-in-out transform hover:scale-105"
            onClick={closeMenu}
          >
            Ana Sayfa
          </Link>
          <ScrollLink
            to="services"
            smooth={true}
            duration={500}
            className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 ease-in-out transform hover:scale-105"
            onClick={closeMenu}
          >
            Hizmetlerimiz
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 ease-in-out transform hover:scale-105"
            onClick={closeMenu}
          >
            Kurumsal
          </ScrollLink>
          <button
            onClick={() => {
              closeMenu();
              openModal();
            }}
            className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Randevu Al
          </button>
          <Link
            href="/contact"
            className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 ease-in-out transform hover:scale-105"
            onClick={closeMenu}
          >
            İletişim
          </Link>
        </div>
      </nav>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Navbar;
