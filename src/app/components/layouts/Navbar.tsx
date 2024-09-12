'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-green-900 dark:text-white">
          Atlantis Head Spa Wellness
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-green-900 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400 transition">Ana Sayfa</Link>
          <Link href="#services" className="text-green-900 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400 transition">Hizmetlerimiz</Link>
          <Link href="#about" className="text-green-900 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400 transition">Kurumsal</Link>
          <Link href="/appointment" className="text-green-900 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400 transition">Randevu Al</Link>
          <Link href="/contact" className="text-green-900 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400 transition">İletişim</Link>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white dark:bg-gray-900`}>
        <Link href="/" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition">Ana Sayfa</Link>
        <Link href="#services" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition">Hizmetlerimiz</Link>
        <Link href="#about" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition">Kurumsal</Link>
        <Link href="/appointment" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition">Randevu Al</Link>
        <Link href="/contact" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition">İletişim</Link>
      </div>
    </nav>
  );
};

export default Navbar;
