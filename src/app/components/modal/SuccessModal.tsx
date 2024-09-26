'use client'
const SuccessModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
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
          <div className="text-3xl md:text-4xl lg:text-5xl text-green-500 mb-4">&#10003;</div>
          <h2 className="text-lg md:text-xl lg:text-2xl text-green-900 font-bold mb-4">Başarıyla Gönderildi</h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-700">
            Randevu talebiniz başarıyla iletildi. En kısa sürede onay için yetkilimiz tarafından aranacaksınız.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
