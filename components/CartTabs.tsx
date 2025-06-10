'use client'
import { useState } from "react";
import CarGrid from "./CarGrid";
import CarCarousel from "./CarCarousel";
import { CarData, CarTabs } from "@/types";
import { ChevronRight } from "lucide-react";

const CartTabs:React.FC = () => {
    const tabs:CarTabs[]=[CarTabs.suv, CarTabs.hatchback, CarTabs.sedan, CarTabs.muv, CarTabs.luxury]

    // Sample car data
    const carData:CarData = {
  SUV: [
    { name: "Mahindra Thar RDX", price: "₹12.99 - 20.09 Lakh*", image: "carTabsImage/suv/image-1.png" },
    { name: "Mahindra Scorpio N", price: "₹13.99 - 24.09 Lakh*", image: "carTabsImage/suv/image-2.png" },
    { name: "Mahindra XUV700", price: "₹14.09 - 25.74 Lakh*", image: "carTabsImage/suv/image-3.png" },
    { name: "Hyundai Creta", price: "₹11.11 - 20.50 Lakh*", image: "carTabsImage/suv/image.png" },
    { name: "Mahindra Thar RDX", price: "₹12.99 - 20.09 Lakh*", image: "carTabsImage/suv/image-1.png" },
    { name: "Mahindra Scorpio N", price: "₹13.99 - 24.09 Lakh*", image: "carTabsImage/suv/image-2.png" },
    { name: "Mahindra XUV700", price: "₹14.09 - 25.74 Lakh*", image: "carTabsImage/suv/image-3.png" },
    { name: "Hyundai Creta", price: "₹11.11 - 20.50 Lakh*", image: "carTabsImage/suv/image.png" },
  ],
  Hatchback: [
  { name: "Maruti Suzuki Swift", price: "₹6.24 - 9.14 Lakh*", image: "/swift.jpg" },
  { name: "Hyundai i20", price: "₹7.04 - 11.21 Lakh*", image: "/i20.jpg" },
  { name: "Tata Altroz", price: "₹6.64 - 10.79 Lakh*", image: "/altroz.jpg" },
  { name: "Maruti Suzuki Baleno", price: "₹6.66 - 9.83 Lakh*", image: "/baleno.jpg" },
  { name: "Maruti Suzuki Swift", price: "₹6.24 - 9.14 Lakh*", image: "/swift.jpg" },
  { name: "Hyundai i20", price: "₹7.04 - 11.21 Lakh*", image: "/i20.jpg" },
  { name: "Tata Altroz", price: "₹6.64 - 10.79 Lakh*", image: "/altroz.jpg" },
  { name: "Maruti Suzuki Baleno", price: "₹6.66 - 9.83 Lakh*", image: "/baleno.jpg" },
],
Sedan: [
  { name: "Honda City", price: "₹11.82 - 16.30 Lakh*", image: "/city.jpg" },
  { name: "Hyundai Verna", price: "₹11.00 - 17.42 Lakh*", image: "/verna.jpg" },
  { name: "Skoda Slavia", price: "₹11.63 - 19.12 Lakh*", image: "/slavia.jpg" },
  { name: "Volkswagen Virtus", price: "₹11.56 - 19.15 Lakh*", image: "/virtus.jpg" },
],
MUV: [
  { name: "Maruti Ertiga", price: "₹8.69 - 13.03 Lakh*", image: "/ertiga.jpg" },
  { name: "Toyota Innova Crysta", price: "₹19.99 - 26.05 Lakh*", image: "/innova.jpg" },
  { name: "Renault Triber", price: "₹6.33 - 8.97 Lakh*", image: "/triber.jpg" },
  { name: "Kia Carens", price: "₹10.52 - 19.67 Lakh*", image: "/carens.jpg" },
],
Luxury: [
  { name: "Mercedes-Benz S-Class", price: "₹1.71 - 2.17 Crore*", image: "/sclass.jpg" },
  { name: "BMW 7 Series", price: "₹1.82 - 1.84 Crore*", image: "/7series.jpg" },
  { name: "Audi A8 L", price: "₹1.34 - 1.63 Crore*", image: "/a8l.jpg" },
  { name: "Lexus LS", price: "₹1.96 - 2.27 Crore*", image: "/ls.jpg" },
],

  // other categories...
};

const [activeTab,setActiveTab]=useState<CarTabs>(CarTabs.suv)
const [viewAll,setViewAll]=useState<boolean>(false);

const handleTabClick=(tab:CarTabs)=>{
    setActiveTab(tab)
    setViewAll(false);
}
  return (
    <div className="w-full max-w-screen-2xl mx-auto px-2 md:px-6 lg:px-8 py-10  ">
      <h4 className="text-left mb-5 text-[20px] font-semibold text-[#535353]">The most searched cars</h4>
        <div className="flex w-full justify-center md:justify-around gap-6 border-b">
            {/* tab buttons */}
            {tabs.map((tab)=>(
                <button key={tab} className={`pb-2 cursor-pointer  ${tab==activeTab?"border-b-2 border-gray-500 text-black font-semibold":"text-gray-500"}`} onClick={() => handleTabClick(tab)}>
                    {tab}
                </button>
            ))}
        </div>
        {/* carshow section */} 
        <div className="mt-6 p-4 bg-[#F8F8F8]">
           { viewAll ? (<CarGrid cars={carData[activeTab]} />):(<CarCarousel cars={carData[activeTab]}/>)}
        </div>
        {!viewAll && <p onClick={()=>setViewAll(true)} className="text-left cursor-pointer text-gray-500 py-5">view all cars <ChevronRight className="inline" size={24} /></p>
}
    </div>
    
  )
}

export default CartTabs