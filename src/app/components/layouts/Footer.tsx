import { FC } from 'react';
import Link from 'next/link';

const Footer: FC = () => {
  return (
    <footer className="bg-green-900 text-gray-600 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo ve Açıklama */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h1 className="text-lg font-semibold text-gray-100">Atlantis Head Spa Wellness</h1>
            <p className="text-sm text-gray-200 mt-2">
              Yüksek kaliteli hizmetler ve müşteri memnuniyeti odaklı yaklaşımımızla tanınıyoruz.
            </p>
          </div>
          {/* Navigasyon Links */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mt-4 md:mt-0">
            <Link href="/" className="text-gray-100 hover:text-gray-300 transition">Ana Sayfa</Link>
            <Link href="#services" className="text-gray-100 hover:text-gray-300 transition">Hizmetlerimiz</Link>
            <Link href="#about" className="text-gray-100 hover:text-gray-300 transition">Kurumsal</Link>
            <Link href="/appointment" className="text-gray-100 hover:text-gray-300 transition">Randevu Al</Link>
            <Link href="/contact" className="text-gray-100 hover:text-gray-300 transition">İletişim</Link>
          </div>
        </div>
        <div className="text-center mt-4 text-sm text-gray-100">
          &copy; {new Date().getFullYear()} Atlantis Head Spa Wellness. Tüm Hakları Saklıdır.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
