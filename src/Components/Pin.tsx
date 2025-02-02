// src/Components/Pin.tsx
import React from 'react';

interface PinProps {
  pin: {
    id: string;
    imageUrl: string; // Simplified image URL
    title: string;
    description: string;
  };
}

const PinComponent: React.FC<PinProps> = ({ pin }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white cursor-pointer">
      {/* Pin Image */}
      <div className="w-full h-48 overflow-hidden"> {/* Container for the image */}
        <img
          src={pin.imageUrl}
          alt={pin.title}
          className="w-full h-full object-contain" // Ensure image covers the container
        />
      </div>
      {/* Pin Content */}
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{pin.title}</h3>
        <p className="text-sm text-gray-600">{pin.description}</p>
      </div>
    </div>
  );
};

export default PinComponent;