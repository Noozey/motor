import React, { useRef, useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Bookmark,
  Gauge,
  Fuel,
  Settings,
} from "lucide-react";

type CarDetails = {
  imageUrl: string;
  year: number;
  make: string;
  model: string;
  variant: string;
  mileage: number;
  transmission: "Automatic" | "Manual";
  price: number;
};

type ResponseResult = CarDetails[];

// SingleCarCard Component
const SingleCarCard: React.FC<{ car: CarDetails }> = ({ car }) => {
  // Format price to display in lakhs/crores for Indian currency
  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(1)} Cr`;
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(1)} L`;
    } else {
      return `₹${price.toLocaleString()}`;
    }
  };

  // Format mileage
  const formatMileage = (mileage: number) => {
    if (mileage >= 1000) {
      return `${Math.floor(mileage / 1000)}k Miles`;
    }
    return `${mileage} Miles`;
  };

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
            <span className="text-sm font-medium text-gray-900">
              {formatMileage(car.mileage)}
            </span>
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
          <span className="text-2xl font-bold text-gray-900">
            {formatPrice(car.price)}
          </span>

          <button className="flex items-center gap-2 text-blue-500 font-medium text-sm hover:text-blue-600 transition-colors">
            View Details
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

const CarSearchDisplay = () => {
  const responseResult: ResponseResult = [
    {
      imageUrl: "/carTypeImage/ford.png",
      year: 2021,
      make: "Suzuki",
      model: "Swift",
      variant: "ZXI+",
      mileage: 42500,
      transmission: "Manual",
      price: 2650000,
    },
    {
      imageUrl: "/carTypeImage/hyundai-i22.png",
      year: 2022,
      make: "Hyundai",
      model: "i20",
      variant: "Asta (O)",
      mileage: 28150,
      transmission: "Automatic",
      price: 3490000,
    },
    {
      imageUrl: "/carTypeImage/tata-nexon-ev.png",
      year: 2022,
      make: "Tata",
      model: "Nexon EV",
      variant: "XZ+ Lux (Prime)",
      mileage: 21800,
      transmission: "Automatic",
      price: 3875000,
    },
    {
      imageUrl: "/carTypeImage/suzuki-brezza.png",
      year: 2023,
      make: "Suzuki",
      model: "Brezza",
      variant: "VXi Smart Hybrid",
      mileage: 14600,
      transmission: "Automatic",
      price: 4150000,
    },
    {
      imageUrl: "/carTypeImage/hyundai-creta.png",
      year: 2021,
      make: "Hyundai",
      model: "Creta",
      variant: "SX (O)",
      mileage: 35940,
      transmission: "Automatic",
      price: 4590000,
    },
    {
      imageUrl: "/carTypeImage/kia-seltos.png",
      year: 2022,
      make: "Kia",
      model: "Seltos",
      variant: "HTX+",
      mileage: 31200,
      transmission: "Automatic",
      price: 4850000,
    },
    {
      imageUrl: "/carTypeImage/byd-atto-3.png",
      year: 2023,
      make: "BYD",
      model: "Atto 3",
      variant: "Superior",
      mileage: 11500,
      transmission: "Automatic",
      price: 5500000,
    },
    {
      imageUrl: "/carTypeImage/mahindra-xuv700.png",
      year: 2022,
      make: "Mahindra",
      model: "XUV700",
      variant: "AX7 L (AWD)",
      mileage: 29800,
      transmission: "Automatic",
      price: 7900000,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle responsive slides per view
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setSlidesPerView(4);
      } else if (width >= 768) {
        setSlidesPerView(3);
      } else if (width >= 640) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = responseResult.length - slidesPerView;
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [responseResult.length, slidesPerView]);

  const goToPrev = () => {
    setCurrentIndex((prev) => {
      const maxIndex = responseResult.length - slidesPerView;
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  const goToNext = () => {
    setCurrentIndex((prev) => {
      const maxIndex = responseResult.length - slidesPerView;
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < slidesPerView; i++) {
      const index = (currentIndex + i) % responseResult.length;
      cards.push(responseResult[index]);
    }
    return cards;
  };

  return (
    <div className="relative py-8  mx-auto px-4">
      {/* Carousel Container */}
      <div ref={containerRef} className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out gap-5"
          style={{
            transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
          }}
        >
          {responseResult.map((car, index) => (
            <div key={index} className="p-4">
              <SingleCarCard car={car} />
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        <div className="flex gap-2">
          <button
            onClick={goToPrev}
            className="top-1/3 w-14 h-8 flex items-center justify-center rounded-lg bg-white shadow-lg border border-gray-300 text-black hover:bg-gray-100 hover:shadow-xl cursor-pointer transition transform hover:scale-110"
          >
            <ArrowLeft className="w-5 h-5 text-black" />
          </button>

          <button
            onClick={goToNext}
            className="top-1/3 w-14 h-8 flex items-center justify-center rounded-lg bg-white shadow-lg border border-gray-300 text-black hover:bg-gray-100 hover:shadow-xl cursor-pointer transition transform hover:scale-110"
          >
            <ArrowRight className="w-5 h-5 text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarSearchDisplay;
