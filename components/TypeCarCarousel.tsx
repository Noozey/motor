import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowRight, ArrowLeft } from "lucide-react";

import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import SingleCarCard from "./SingleCarCard";
import { typeCarDetail } from "@/types";

type carCarouselProps = {
  cars: typeCarDetail[];
};

const TypeCarCarousel = ({ cars }: carCarouselProps) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  // Delay rendering swiper until refs are ready
  useEffect(() => {
    setSwiperReady(true);
  }, []);
  return (
    <div className="relative  py-2 md:py-8">
      {/* Custom Navigation Buttons */}

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
            <SwiperSlide key={index} className="p-4">
              {/* <CarCard  /> */}
              <SingleCarCard car={car} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <div className="flex justify-center mt-6 space-x-2">
        <div className="flex gap-2">
          <div
            ref={prevRef}
            className="top-1/3 w-14 h-8 flex items-center justify-center rounded-lg bg-white shadow-lg border border-gray-300 text-black hover:bg-gray-100 hover:shadow-xl cursor-pointer transition transform hover:scale-110"
          >
            <ArrowLeft className="w-5 h-5 text-black" />
          </div>

          <div
            ref={nextRef}
            className="top-1/3 w-14 h-8 flex items-center justify-center rounded-lg bg-white shadow-lg border border-gray-300 text-black hover:bg-gray-100 hover:shadow-xl cursor-pointer transition transform hover:scale-110"
          >
            <ArrowRight className="w-5 h-5 text-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeCarCarousel;
