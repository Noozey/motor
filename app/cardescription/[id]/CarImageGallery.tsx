"use client";
import React, { useState } from "react";

interface CarImageGalleryProps {
  images: string[];
  title: string;
}

const CarImageGallery: React.FC<CarImageGalleryProps> = ({ images, title }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="flex items-center justify-center aspect-video">
        <img
          src={
            images[currentImageIndex] || "/carTabsImage/Sedan/honda_city.png"
          }
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex space-x-2 overflow-x-auto">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                currentImageIndex === index
                  ? "border-teal-500"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <img
                src={image || "/carTabsImage/Sedan/honda_city.png"}
                alt={`${title} view ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarImageGallery;
