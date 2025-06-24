import React from 'react';
import Image from 'next/image';

const imageUrl = '/hero-car-image.jpg';

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen font-sans">
      {/* Background Image */}
      <Image
        src={imageUrl}
        alt="Side view of a modern silver SUV"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority 
        className="-z-10" 
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white sm:p-8 md:p-12">
        <div className="w-full max-w-7xl mx-auto">
          {/* Stats Section */}
          <div className="flex flex-col items-center gap-6 mb-6 sm:flex-row sm:justify-center lg:justify-end sm:gap-4 md:gap-8">
            
            {/* Stat 1: Motor Power */}
            <div className="text-center">
              <h3 className="text-3xl font-bold md:text-4xl lg:text-5xl">XX kW</h3>
              <p className="mt-1 text-xs text-gray-200 md:text-sm">
                Maximum
                <br />
                Motor Power
              </p>
            </div>

            {/* Stat 2: Range */}
            <div className="text-center sm:border-l sm:border-white/40 sm:pl-4 md:pl-8">
              <h3 className="text-3xl font-bold md:text-4xl lg:text-5xl">XX KM</h3>
              <p className="mt-1 text-xs text-gray-200 md:text-sm">
                Run Maximum Distance
                <br />
                Per Charge/Per Time
              </p>
            </div>
            
            {/* Stat 3: Ground Clearance */}
            <div className="text-center sm:border-l sm:border-white/40 sm:pl-4 md:pl-8">
              <h3 className="text-3xl font-bold md:text-4xl lg:text-5xl">XX mm</h3>
              <p className="mt-1 text-xs text-gray-200 md:text-sm">
                Ground Clearance
              </p>
            </div>

          </div>

          {/* Disclaimer */}
          <p className="w-full text-xs text-center text-gray-400">
            The product featured is for reference only, and the appearance, colour, features and configuration may differ from the final delivered product. Please refer to the actual product for details.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;