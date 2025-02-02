// src/Components/PinModal.tsx
import React from 'react';

interface PinModalProps {
  pin: {
    id: string; // Simplified pin ID
    imageUrl: string; // Simplified image URL
    title: string;
    description: string;
  };
  onClose: () => void;
}

const PinModal: React.FC<PinModalProps> = ({ pin, onClose }) => {
  const handleDownload = async () => {
    try {
      // Fetch the image as a blob
      const response = await fetch(pin.imageUrl);
      const blob = await response.blob();
      // Create a URL for the blob
      const blobUrl = URL.createObjectURL(blob);
      // Create a link element
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = `pin-${pin.id}.png`; // Use backticks for template literal
      document.body.appendChild(link);

      // Trigger the download
      link.click();

      // Remove the link from the document
      document.body.removeChild(link);

      // Revoke the blob URL to free up memory
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{pin.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            &times;
          </button>
        </div>

        {/* Modal Content */}
        <img
          src={pin.imageUrl}
          alt={pin.title}
          className="w-full h-64 object-cover mb-4"
        />
        <p className="text-gray-600">{pin.description}</p>

        {/* Modal Footer */}
        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Close
          </button>
          <button
            onClick={handleDownload}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 ml-2"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default PinModal;