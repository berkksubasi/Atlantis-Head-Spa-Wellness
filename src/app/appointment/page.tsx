'use client';
import { useState } from 'react';
import SuccessModal from '../components/modal/SuccessModal';
import ErrorModal from '../components/modal/ErrorModal';

const AppointmentForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone, date, time }),
      });

      if (response.ok) {
        setIsSuccessModalOpen(true);
        setName('');
        setPhone('');
        setDate('');
        setTime('');
      } else {
        throw new Error('Randevu gönderimi başarısız oldu');
      }
    } catch (error) {
      setIsErrorModalOpen(true);
    }
  };

  return (
    <div className="py-16 px-4 md:px-8 w-full bg-cover bg-center flex flex-col items-center justify-center text-white"
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
            type="text"
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
            className="w-full p-2 border border-gray-300 rounded mt-2 text-gray-700"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Saat Seçin</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-2 text-gray-700"
            required
          />
        </div>

        <button type="submit" className="bg-green-900 hover:bg-green-700 text-white w-full p-3 rounded-lg">
          Randevu Oluştur
        </button>
      </form>

      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      />
      <ErrorModal
        isOpen={isErrorModalOpen}
        onClose={() => setIsErrorModalOpen(false)}
      />
    </div>
  );
};

export default AppointmentForm;
