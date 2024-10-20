import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-800 p-8 rounded-lg max-w-md w-full">
        <p className="text-white text-lg mb-6">{content}</p>
        <button
          onClick={onClose}
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded transition-colors w-full"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Modal;