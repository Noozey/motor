import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowRight,ArrowLeft } from "lucide-react";

import { Autoplay} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import SingleCarCard from "./SingleCarCard";



type typeCarDetail={
     imageUrl: string;
  year: number;
  make: string;
  model: string;
  variant: string;
  mileage: number;
  transmission: string;
  price: number;
}

type carCarouselProps={
    cars:typeCarDetail[];
}

const TypeCarCarousel = ({cars}:carCarouselProps) => {
    console.log(cars)
    const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  // Delay rendering swiper until refs are ready
  useEffect(() => {
    setSwiperReady(true);
  }, []);
  return (
        <div className="relative  py-8">
      {/* Custom Navigation Buttons */}
    <div
  ref={prevRef}
  className="absolute z-10 -left-5 top-1/2 bg-transparent -translate-y-1/2 w-10 h-10  flex items-center justify-center rounded-sm  text-black hover:text-secondary hover:border-secondary cursor-pointer transition"
>
  <ArrowLeft className="w-5 h-5" />
</div>


<div
  ref={nextRef}
  className="absolute z-10 -right-5 top-1/2 -translate-y-1/2 w-10 h-10  flex items-center justify-center rounded-sm bg-transparent text-black hover:text-secondary hover:border-secondary cursor-pointer transition"
>
  <ArrowRight className="w-5 h-5" />
</div>


      {swiperReady && (
        <Swiper
          modules={[Navigation,Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,   // Keep autoplay even after user interaction
            pauseOnMouseEnter: true,       // Optional: pause on hover for better UX
          }}
          onInit={(swiper:any) => {
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
               {/* <CarCard  /> */}
               <SingleCarCard car={car} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  )
}

export default TypeCarCarousel
