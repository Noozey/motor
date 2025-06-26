import { typeCarDetail } from '@/types'
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowRight,ArrowLeft } from "lucide-react";

import { Autoplay} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import SingleCarCard from "./SingleCarCard";

type ResponseResult=typeCarDetail[];

const CarSearchDisplay = () => {
    // const responseResult:ResponseResult=[
    //       {
    //   imageUrl: '/carTypeImage/ford.png', // Replace with your image path in the /public folder
    //   year: 2022,
    //   make: 'Ford',
    //   model: 'Everest Sport',
    //   variant: '(4WD)',
    //   mileage: 91628,
    //   transmission: 'Automatic',
    //   price: 47990,
    // },
    // {
    //   imageUrl: '/carTypeImage/mazda922.png',
    //   year: 2022,
    //   make: 'Mazda',
    //   model: 'CX-9',
    //   variant: 'Azami (AWD)',
    //   mileage: 50402,
    //   transmission: 'Automatic',
    //   price: 49990,
    // },
    // {
    //   imageUrl: '/carTypeImage/mazda3021.png',
    //   year: 2021,
    //   make: 'Mazda',
    //   model: 'CX-30',
    //   variant: 'G20 Evolve (FWD)',
    //   mileage: 54127,
    //   transmission: 'Automatic',
    //   price: 26990,
    // },
    // {
    //   imageUrl: '/carTypeImage/mazda920.png',
    //   year: 2023,
    //   make: 'Mazda',
    //   model: 'CX-9',
    //   variant: 'Touring (FWD)',
    //   mileage: 15549,
    //   transmission: 'Automatic',
    //   price: 46990,
    // }, 
    //       {
    //   imageUrl: '/carTypeImage/ford.png', // Replace with your image path in the /public folder
    //   year: 2022,
    //   make: 'Ford',
    //   model: 'Everest Sport',
    //   variant: '(4WD)',
    //   mileage: 91628,
    //   transmission: 'Automatic',
    //   price: 47990,
    // },
    // {
    //   imageUrl: '/carTypeImage/mazda922.png',
    //   year: 2022,
    //   make: 'Mazda',
    //   model: 'CX-9',
    //   variant: 'Azami (AWD)',
    //   mileage: 50402,
    //   transmission: 'Automatic',
    //   price: 49990,
    // },
    // {
    //   imageUrl: '/carTypeImage/mazda3021.png',
    //   year: 2021,
    //   make: 'Mazda',
    //   model: 'CX-30',
    //   variant: 'G20 Evolve (FWD)',
    //   mileage: 54127,
    //   transmission: 'Automatic',
    //   price: 26990,
    // },
    // {
    //   imageUrl: '/carTypeImage/mazda920.png',
    //   year: 2023,
    //   make: 'Mazda',
    //   model: 'CX-9',
    //   variant: 'Touring (FWD)',
    //   mileage: 15549,
    //   transmission: 'Automatic',
    //   price: 46990,
    // }, 
    // ]

    // Define the type for better code quality and readability
type CarDetails = {
  imageUrl: string;
  year: number;
  make: string;
  model: string;
  variant: string;
  mileage: number; // in Kilometers (km)
  transmission: 'Automatic' | 'Manual';
  price: number; // in Nepalese Rupees (NPR)
};

// This would be your ResponseResult type
type ResponseResult = CarDetails[];

const responseResult: ResponseResult = [
  {
    imageUrl: '/carTypeImage/ford.png',
    year: 2021,
    make: 'Suzuki',
    model: 'Swift',
    variant: 'ZXI+',
    mileage: 42500,
    transmission: 'Manual',
    price: 2650000, // 26.5 Lakhs NPR
  },
  {
    imageUrl: '/carTypeImage/hyundai-i22.png',
    year: 2022,
    make: 'Hyundai',
    model: 'i20',
    variant: 'Asta (O)',
    mileage: 28150,
    transmission: 'Automatic',
    price: 3490000, // 34.9 Lakhs NPR
  },
  {
    imageUrl: '/carTypeImage/tata-nexon-ev.png',
    year: 2022,
    make: 'Tata',
    model: 'Nexon EV',
    variant: 'XZ+ Lux (Prime)',
    mileage: 21800,
    transmission: 'Automatic',
    price: 3875000, // 38.75 Lakhs NPR
  },
  {
    imageUrl: '/carTypeImage/suzuki-brezza.png',
    year: 2023,
    make: 'Suzuki',
    model: 'Brezza',
    variant: 'VXi Smart Hybrid',
    mileage: 14600,
    transmission: 'Automatic',
    price: 4150000, // 41.5 Lakhs NPR
  },
  {
    imageUrl: '/carTypeImage/hyundai-creta.png',
    year: 2021,
    make: 'Hyundai',
    model: 'Creta',
    variant: 'SX (O)',
    mileage: 35940,
    transmission: 'Automatic',
    price: 4590000, // 45.9 Lakhs NPR
  },
  {
    imageUrl: '/carTypeImage/kia-seltos.png',
    year: 2022,
    make: 'Kia',
    model: 'Seltos',
    variant: 'HTX+',
    mileage: 31200,
    transmission: 'Automatic',
    price: 4850000, // 48.5 Lakhs NPR
  },
  {
    imageUrl: '/carTypeImage/byd-atto-3.png',
    year: 2023,
    make: 'BYD',
    model: 'Atto 3',
    variant: 'Superior',
    mileage: 11500,
    transmission: 'Automatic',
    price: 5500000, // 55 Lakhs NPR
  },
  {
    imageUrl: '/carTypeImage/mahindra-xuv700.png',
    year: 2022,
    make: 'Mahindra',
    model: 'XUV700',
    variant: 'AX7 L (AWD)',
    mileage: 29800,
    transmission: 'Automatic',
    price: 7900000, // 79 Lakhs NPR
  },
];


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
          {responseResult.map((car, index) => (
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

export default CarSearchDisplay








