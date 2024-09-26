'use client'
import { FC } from 'react';

const AboutUsSection: FC = () => {
  return (
    <section
      className="relative h-full w-screen py-12 px-6 md:px-20 bg-transparent"
      style={{ backgroundImage: 'url("/images/backgrounds/aboutus-background.png")', backgroundPosition: 'cover', backgroundSize: 'cover' }}
    >
      <div className="absolute inset-0 bg-black/20 opacity-10 z-0"></div>
      <div className="relative container mx-auto px-4 py-8 bg-transparent shadow-xl rounded-lg backdrop-blur-xl z-10">
        <h2 className="mt-24 text-4xl font-bold text-center text-green-900 mb-12">Hakkımızda</h2>
        <div className="flex flex-col md:flex-row gap-12">
          {/* Şirket/Hizmet Tanıtımı */}
          <div className="flex-1">
            <div className="bg-white/50 backdrop-blur-xl shadow-xl rounded-lg p-8 transition-transform transform hover:scale-105 hover:shadow-2xl hover:opacity-90 duration-300 ease-in-out">
              <h3 className="text-3xl font-semibold text-green-900 mb-6">Şirketimiz</h3>
              <p className="text-gray-800 mb-6">
                Şirketimiz, yüksek kaliteli hizmetler sunma konusundaki kararlılığıyla tanınır. Alanında uzman ekibimizle birlikte, müşteri memnuniyetini ön planda tutarak, sektörün en iyisi olmayı hedefliyoruz.
                <br /><br />
                Her proje ve hizmetimizde yenilikçi yaklaşımlar benimseyerek, müşterilerimizin ihtiyaçlarını en iyi şekilde karşılamayı amaçlıyoruz. Kaliteyi ve mükemmeliyeti her şeyin önünde tutuyoruz.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <p className="text-gray-700">Sektördeki en yüksek kalite standartlarına sahip olmak, öncelikli hedefimizdir.</p>
              </div>
            </div>
          </div>
          {/* Vizyon/Misyon */}
          <div className="flex-1">
            <div className="bg-white/50 backdrop-blur-xl shadow-xl rounded-lg p-8 transition-transform transform hover:scale-105 hover:shadow-2xl hover:opacity-90 duration-300 ease-in-out">
              <h3 className="text-3xl font-semibold text-green-900 mb-6">Vizyon & Misyon</h3>
              <p className="text-gray-800 mb-6">
                <strong className="text-green-800">Vizyon:</strong> Sektördeki en yenilikçi ve etkili çözümleri sunarak, yerel ölçekte tanınan bir lider olmak. Sürekli gelişim ve yenilikçilik anlayışımızla sektördeki standartları belirliyoruz.
                <br /><br />
                <strong className="text-green-800">Misyon:</strong> Müşterilerimize en yüksek kalitede hizmet sunmak, sürekli gelişimi desteklemek ve sektördeki standartları yükseltmektir. Her müşteriye özel, kişiselleştirilmiş çözümler sunarak, memnuniyetlerini en üst düzeye çıkarmayı hedefliyoruz.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <p className="text-gray-700">Misyon ve vizyonumuz doğrultusunda, sektördeki yenilikçi çözümleri ön planda tutuyoruz.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
