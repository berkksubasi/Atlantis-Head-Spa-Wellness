import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const services = [
  {
    id: 1,
    title: 'Head Massage',
    description: 'Baş ağrılarınızı hafifletmek ve rahatlamanızı sağlamak için...',
    image: '/images/services/service1.png',
  },
  {
    id: 2,
    title: 'Bali Massage',
    description: "Bali masajı, Endonezya'nın egzotik adası Bali'den gelen geleneksel bir rahatlama yöntemidir. Bu masaj türü...",
    image: '/images/services/service2.png',
  },
  {
    id: 3,
    title: 'Thai Massage',
    description: "Thai masajı, kökeni yüzyıllar öncesine dayanan, geleneksel bir Asya rahatlama tekniğidir. Tayland'ın zengin kültürel...",
    image: '/images/services/service3.png',
  },
  {
    id: 4,
    title: 'Deep Massage',
    description: "Deep masaj, derin dokulara yönelik uygulanan bir masaj türüdür ve kas gerginliklerini ve ağrılarını hafifletmek için...",
    image: '/images/services/service4.png',
  },
  {
    id: 5,
    title: 'Hot Oil Massage',
    description: "Hot oil massage, sıcak yağ kullanılarak yapılan bir masaj türüdür ve vücudu rahatlatmak, kas...",
    image: '/images/services/service5.png',
  },
  {
    id: 6,
    title: 'Medical Massage',
    description: "Medical massage, sağlık ve iyileşme amaçlı uygulanan profesyonel bir masaj terapisidir. Bu masaj türü, fiziksel rahatsızlıkları azaltma...",
    image: '/images/services/service6.png',
  },
  {
    id: 7,
    title: 'Sultan Massage',
    description: "Sultan masajı, zarif bir rahatlama ve lüks deneyimi sunan özel bir masaj türüdür. Bu masaj, vücudu ve...",
    image: '/images/services/service7.png',
  },
];

const ServicesSection = () => {
  // Karakter sınırlandırma fonksiyonu
  const limitText = (text: string, limit: number) => {
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  };

  return (
    <section
      className="relative h-full rounded-lg py-16 px-4 md:px-8 lg:px-20 text-white"
      style={{
        backgroundImage: 'url("/images/backgrounds/abstract-pattern.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="bg-transparent shadow-lg items-center mt-16 justify-center">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Hizmetlerimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 backdrop-blur-lg">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`bg-gradient-to-r from-brown-300 via-brown-400 to-brown-500 rounded-lg shadow-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105 ${index === services.length - 1 ? 'lg:col-span-3' : ''
                }`}
            >
              <Image
                src={service.image}
                alt={service.title}
                width={160}
                height={160}
                className="rounded-full mb-4 shadow-md object-cover"
              />
              <h3 className="text-2xl font-bold text-brown-100 mb-2">{service.title}</h3>
              <p className="text-center text-brown-200 mb-4 font-semibold">
                {limitText(service.description, 60)} {/* Açıklamayı sınırlandır */}
              </p>
              <Link href={`/services/${service.id}`}>
                <button className="bg-white/20 hover:bg-green-900/40 mt-auto px-6 py-2 bg-brown-600 text-white font-semibold rounded hover:bg-brown-700 transition duration-200">
                  Devamını Oku
                </button>
              </Link>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;