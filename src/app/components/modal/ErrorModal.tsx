'use client'
const ErrorModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 md:p-6 lg:p-8 rounded-lg shadow-lg max-w-sm md:max-w-md lg:max-w-lg w-full relative">
        <button
          className="absolute top-2 right-2 md:top-4 md:right-4 text-gray-500 hover:text-gray-700 text-xl"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        <div className="text-center">
          <div className="text-3xl md:text-4xl text-red-500 mb-4">&#10060;</div>
          <h2 className="text-lg md:text-xl text-red-900 font-bold mb-4">İşlem Başarısız</h2>
          <p className="text-sm md:text-base text-gray-700">
            İşleminiz şu anda gerçekleştirilemiyor. Lütfen daha sonra tekrar deneyin ya da iletişim sayfamızda bulunan telefon numarası üzerinden randevunuzu tamamlayın.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
