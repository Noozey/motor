import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  ArrowLeft,
  Bookmark,
  Gauge,
  Fuel,
  Settings,
} from "lucide-react";

type CarCardProps = {
  car: CarCardDetails;
};

type CarCardDetails = {
  imageUrl: string;
  year: number;
  make: string;
  model: string;
  variant: string;
  mileage: number;
  transmission: string;
  price: number;
};

const HeartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-6 w-6 text-gray-400 transition-colors group-hover:text-red-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
    />
  </svg>
);

const SingleCarCard = ({ car }: CarCardProps) => {
  const { imageUrl, year, make, model, variant, mileage, transmission, price } =
    car;

  return (
    <div className="w-[328px] bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Image Section */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
          alt={`${car.make} ${car.model} ${car.year}`}
          className="w-full h-48 object-cover"
        />

        {/* Great Price Badge */}
        <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          Great Price
        </div>

        {/* Bookmark Icon */}
        <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
          <Bookmark className="w-5 h-5 text-gray-600" />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900 mb-1">
          {car.make} {car.model} – {car.year}
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 text-sm mb-4">{car.variant}</p>

        {/* Specs Row */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex flex-col items-center">
            <Gauge className="w-6 h-6 text-gray-400 mb-1" />
            <span className="text-sm font-medium text-gray-900"></span>
          </div>

          <div className="flex flex-col items-center">
            <Fuel className="w-6 h-6 text-gray-400 mb-1" />
            <span className="text-sm font-medium text-gray-900">Petrol</span>
          </div>

          <div className="flex flex-col items-center">
            <Settings className="w-6 h-6 text-gray-400 mb-1" />
            <span className="text-sm font-medium text-gray-900">
              {car.transmission}
            </span>
          </div>
        </div>

        {/* Price and View Details */}
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-gray-900"></span>

          <button className="flex items-center gap-2 text-blue-500 font-medium text-sm hover:text-blue-600 transition-colors">
            View Details
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCarCard;
