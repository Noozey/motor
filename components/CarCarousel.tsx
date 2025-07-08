import { CarDetails } from "@/types";
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowRight, ArrowLeft } from "lucide-react";

import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

type carCarouselProps = {
  cars: CarDetails[];
};

const CarCarousel = ({ cars }: carCarouselProps) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  // Delay rendering swiper until refs are ready
  useEffect(() => {
    setSwiperReady(true);
  }, []);
  return (
    <div className="relative  py-8">
      <div
        ref={prevRef}
        className="absolute z-10 -left-6 top-1/2  w-12 h-12 flex  items-center justify-center rounded-full bg-white shadow-lg border border-gray-300 text-black hover:bg-secondary hover:shadow-xl cursor-pointer transition transform hover:scale-110"
      >
        <ArrowLeft className="w-5 h-5 text-black" />
      </div>

      <div
        ref={nextRef}
        className="absolute z-10 -right-6 top-1/2  w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg border border-gray-300 text-black hover:bg-secondary hover:shadow-xl cursor-pointer transition transform hover:scale-110"
      >
        <ArrowRight className="w-5 h-5 text-black" />
      </div>

      {swiperReady && (
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false, // Keep autoplay even after user interaction
            pauseOnMouseEnter: true, // Optional: pause on hover for better UX
          }}
          onInit={(swiper: any) => {
            // Link navigation manually on init
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          //   speed={10000}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {cars.map((car, index) => (
            <SwiperSlide key={index} className="py-2">
              <div key={index} className="rounded-md shadow-sm p-4 ">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="mt-2 font-semibold ">{car.name}</h3>
                <p className="text-gray-600 ">{car.price}</p>
                <button className="mt-3 border  cursor-pointer border-red-500 text-red-500 px-4 md:px-10 py-1 rounded-md hover:bg-red-500 hover:text-white transition">
                  View May Offers
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default CarCarousel;
