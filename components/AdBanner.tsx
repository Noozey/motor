import Image from "next/image";
import Link from "next/link";
import React from "react";

const AdBanner = () => {
  return (
    <section className="p-8 md:p-12  w-full border-t border-b border-teal-500">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative">
          <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-8 flex items-center justify-center h-80 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-16 h-16 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-8 right-8 w-12 h-12 border-2 border-white rounded-full"></div>
              <div className="absolute top-1/2 right-4 w-8 h-8 border-2 border-white rounded-full"></div>
            </div>

            {/* Car placeholder */}
            <div className="relative z-10">
              <Image
                src="/sponsoredadsimages/hyundai-kona-ev.png"
                alt="A teal Hyundai Kona Electric car"
                width={800}
                height={400}
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
              Sponsored by
            </span>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-gray-800 mb-2">
              Hyundai Kona
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Experience the future of electric mobility with cutting-edge
              technology and premium comfort.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-[#00A797] text-white rounded-xl font-bold hover:bg-[#00BBA7] ">
              Book a Test Drive
            </button>
            <button className="border-2 border-teal-500 text-teal-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-teal-500 hover:text-white transition-all duration-200">
              Learn More
            </button>
          </div>

          <div className="flex items-center space-x-6 pt-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-600">452km</div>
              <div className="text-sm text-gray-500">Range</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-600">7.9s</div>
              <div className="text-sm text-gray-500">0-100 km/h</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-600">64kWh</div>
              <div className="text-sm text-gray-500">Battery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdBanner;
