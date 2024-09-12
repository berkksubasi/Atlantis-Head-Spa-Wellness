'use client';
import { useState } from 'react';

const AppointmentForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, phone, date, time });
    // Randevu bilgilerini backend'e göndermek için gerekli işlemler
  };

  return (
    <div className="w-full h-screen bg-cover bg-center flex flex-col items-center justify-center text-white px-4 md:px-8"
      style={{ backgroundImage: 'url("/images/backgrounds/spa-background.png")' }}>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl text-green-900 font-bold mb-6 text-center">Randevu Al</h2>

        <div className="mb-4">
          <label className="block text-gray-700">Adınız</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-2"
            placeholder='Ad Soyad Girin'
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Telefon Numaranız</label>
          <input
            type="email"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-2"
            placeholder='Telefon Numarası Girin'
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Tarih Seçin</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-2"
            placeholder='Randevu Tarihi Seçin'
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Saat Seçin</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-2"
            placeholder='Randevu Saati Seçin'
            required
          />
        </div>

        <button type="submit" className="bg-green-900 hover:bg-green-700 text-white w-full p-3 rounded-lg">
          Randevu Oluştur
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
