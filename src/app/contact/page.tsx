// pages/contact.tsx

import Head from 'next/head';
import { FC } from 'react';

const ContactPage: FC = () => {
    return (
        <div className="w-full h-screen bg-cover bg-center flex flex-col items-center justify-center text-white px-4 md:px-8"
            style={{ backgroundImage: 'url("/images/backgrounds/spa-background.png")' }}
        >
            <div className="flex-1 items-center justify-center mt-20 container mx-auto px-4 py-12">
                <div className="bg-white/30 backdrop-blur-sm shadow-xl rounded-lg p-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-8">İletişim</h1>
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex-1 backdrop-blur-lg bg-transparent p-6 rounded-xl shadow-xl ">
                            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Harita</h2>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.4358433990847!2d29.307779876477838!3d40.92811412435641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cada11a79ab9ab%3A0xac0c473e5dd7651f!2sWorld%20Atlantis%20AVM!5e0!3m2!1str!2str!4v1726148565735!5m2!1str!2str"
                                className="w-full h-80 rounded-lg shadow-md"
                                allowFullScreen
                                loading="lazy"
                            ></iframe>

                            <h2 className=" mt-12 text-2xl font-semibold text-gray-700 mb-4">İletişim Bilgileri</h2>
                            <p className="mb-4 text-gray-900 text-md font-semibold"><strong className="font-semibold">Adres:</strong>Yenişehir Mah. Osmanlı Bulvarı Atlantis AVM No: 6 İç Kapı No: 90 Kat:1 Pendik/İSTANBUL</p>
                            <p className="mb-4 text-gray-900 text-md font-semibold"><strong className="font-semibold">Telefon:</strong> <a href="tel:+905345531871" className="text-blue-500 hover:underline">+90 534 553 1871</a></p>
                            <p><strong className="text-gray-900 text-md font-semibold">E-posta:</strong> <a href="mailto:info@atlantismassage.com" className="text-blue-500 hover:underline">info@atlantismassage.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
