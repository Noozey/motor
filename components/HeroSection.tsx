import React from 'react';
import Image from 'next/image';

const imageUrl = '/hero-car-image2.jpg'; 

const HeroSection = () => {
  return (
    <section className="relative w-full h-[90vh] ">
      {/* Background Image */}
      <Image
        src={imageUrl}
        alt="Side view of a modern silver SUV"
        layout="fill"
        objectFit="cover"
        objectPosition="left"
        quality={100}
        priority 
        className="-z-10"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent sm:from-black/50" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-end h-full px-4 pb-10 pt-16 text-white sm:p-8 md:p-12">
        <div className="w-full max-w-7xl mx-auto">
          
          {/* Stats Section */}
          <div className="flex flex-col items-center gap-8 mb-10 sm:flex-row sm:justify-center lg:justify-end sm:gap-4 md:gap-8">
            
            {/* Stat 1: Motor Power */}
            <div className="text-center">
              <h3 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">83 kW</h3>
              <p className="mt-1 text-[10px] sm:text-xs text-gray-200 md:text-sm leading-tight">
                Maximum
                <br />
                Motor Power
              </p>
            </div>

            {/* Stat 2: Range */}
            <div className="text-center sm:border-l sm:border-white/40 sm:pl-4 md:pl-8">
              <h3 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">31 KM</h3>
              <p className="mt-1 text-[10px] sm:text-xs text-gray-200 md:text-sm leading-tight">
                Run Maximum Distance
                <br />
                Per Charge/Per Time
              </p>
            </div>
            
            {/* Stat 3: Ground Clearance */}
            <div className="text-center sm:border-l sm:border-white/40 sm:pl-4 md:pl-8">
              <h3 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">209 mm</h3>
              <p className="mt-1 text-[10px] sm:text-xs text-gray-200 md:text-sm leading-tight">
                Ground Clearance
              </p>
            </div>

          </div>

          {/* Disclaimer */}
          <p className="w-full text-[10px] sm:text-xs text-right text-gray-400">
            The product featured is for reference only, and the appearance, colour, features and configuration may differ from the final delivered product. Please refer to the actual product for details.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


// BMW X5 xDrive40e 