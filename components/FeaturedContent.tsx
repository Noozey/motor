import Image from 'next/image';
import React from 'react';
import LogoScroller from './LogoScroller';
import Link from 'next/link';

const carImageSrc = "/images/car-image.png"; 

const logosStripImageSrc = "/images/featured-logos-strip.png";

const FeaturedContent: React.FC = () => {
  return (
    <div className="w-full max-w-screen-2xl mx-auto px-2 md:px-6 lg:px-8 py-10 bg-gray-50"> {/* Optional: bg-gray-50 for contrast */}
      {/* Featured In Section */}
      <section className="mb-12 md:mb-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
          Featured In
        </h2>
        <div className="flex justify-center items-center px-4">
          {/* Single image for all logos */}
          {/* <Image
            src={'/featuredImage/featuredLogos.png'} 
            alt="Featured publications logos"
            width={1200}
            height={60}
            className="object-contain w-full h-auto max-w-4xl"
          /> */}
          <LogoScroller />
        </div>
      </section>

      {/* Auto Tariffs Card Section */}
      <section className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Left Content Area */}
          <div className="p-6 sm:p-8 md:p-10 lg:p-12 lg:w-1/2 flex flex-col justify-center">
            <p className="text-sm text-gray-500 mb-1">Nepal Motor News</p>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Auto Tariffs Explained
            </h3>
            <p className="text-gray-700 mb-6 text-base md:text-lg">
              How will automotive tariffs affect your next car purchase?
              Our experts explain everything you need to know.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href={'/readMore'}
                className="px-6 py-3 border cursor-pointer border-black text-black font-semibold rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors duration-150 ease-in-out w-full sm:w-auto"
              >
                Read More
              </Link>
              <Link
                href="/exchange"
                className="px-6 py-3 cursor-pointer bg-black text-white font-semibold rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 transition-colors duration-150 ease-in-out w-full sm:w-auto"
              >
                Exchange To Ev
              </Link>
            </div>
          </div>

          {/* Right Image Area - Simplified */}
          <div className="lg:w-1/2 relative flex items-center justify-center p-6 sm:p-8 md:p-10 lg:p-0 min-h-[200px] sm:min-h-[250px] lg:min-h-0 bg-gray-100 lg:bg-transparent">
            {/* Car Image Placeholder */}
            <div className="relative z-10 w-full h-full max-w-md lg:max-w-lg">
             
              <Image
                src={'/featuredImage/inclinedCar.png'} 
                alt="Car" 
                width={800} 
                height={500} 
                className="object-cover md:object-contain w-full h-full"
                priority 
              />
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedContent;