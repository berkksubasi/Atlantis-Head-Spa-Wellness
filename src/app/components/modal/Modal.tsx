
'use client'
import AppointmentForm from '@/app/appointment/page';

const Modal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full h-auto max-h-[80vh] relative overflow-auto">
        <button
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700 text-lg sm:text-xl"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        <AppointmentForm />
      </div>
    </div>
  );
};

export default Modal;
