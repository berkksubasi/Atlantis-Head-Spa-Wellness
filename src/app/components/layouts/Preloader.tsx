'use client';
import { useEffect, useState } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Preloader'ı 5 saniye sonra kapat
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    // Temizlik işlerini yap
    return () => clearTimeout(timer);
  }, []);

  return (
    loading && (
      <div className="preloader">
        <div className="message">
        Sevgili İrem AVGÜL, Yeni iş yerin sana bolluk bereket ve güzel gelişmeler getirsin.
        </div>
      </div>
    )
  );
};

export default Preloader;
