import Image from 'next/image';
import React from 'react';
import { JSX } from 'react';

type Car = {
  name: string;
  image: string;
};

const cars: Car[] = [
  { name: 'Deepal S07', image: '/heropageImage/deepsai.png' },
  { name: 'Hyundai Kona', image: '/heropageImage/hyundia.png' },
  { name: 'TATA Nexon Ev', image: '/heropageImage/tata.png' },
  { name: 'Mercedes-Benz G-Class', image: '/heropageImage/mercedies.png' },
];

export default function CarShowcase(): JSX.Element {
  return (
    <div className="w-full max-w-screen-2xl mx-auto px-2 md:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Panel */}
        <div className="bg-[#1B2A34] text-white p-6 rounded-xl space-y-4">
          <div className="text-sm font-semibold text-gray-400">SPONSORED CONTENT</div>
          <h2 className="text-2xl font-bold">Tesla Model 3</h2>

          <div className="flex space-x-4 text-sm">
            <button className="px-4 py-1 bg-[#A9C686] text-black rounded-full font-medium">Exterior</button>
            <button className="px-4 py-1 hover:underline">Interior</button>
            <button className="px-4 py-1 hover:underline">Video</button>
          </div>

          <p className="text-gray-300 text-sm">
            The electric SUV that drives like a sports car. Available now.
          </p>

          <a href="#" className="text-sm text-[#A9C686] underline">
            Full details, review and specs
          </a>

          <button className="bg-[#A9C686] ml-4 text-black text-sm px-6 py-2 rounded-md font-semibold">
            Shop Now
          </button>
          <div className="text-xs text-gray-400">Polestar.com</div>
        </div>

        {/* Car Image */}
        <div className="flex justify-center">
          <Image
            src="/heropageImage/MainPhoto.png" // Replace with your image path
            alt="Tesla Model 3"
            width={500}
            height={300}
            className="object-contain"
          />
        </div>
      </div>

      {/* Bottom Carousel */}
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-center">
        {cars.map((car, idx) => (
          <div key={idx} className="text-center">
            <Image
              src={car.image} // Replace with your image paths
              alt={car.name}
              width={150}
              height={100}
              className="mx-auto object-contain"
            />
            <p className="mt-2 text-sm font-medium">{car.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
