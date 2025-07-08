import AdBanner from '@/components/AdBanner';
import CartTabs from '@/components/CartTabs';
import FeaturedContent from '@/components/FeaturedContent';
import HeroSection from '@/components/HeroSection';
import LatestNews from '@/components/LatestNews';
import SearchSection from '@/components/SearchSection';
import React from 'react';
import { JSX } from 'react';
import NewArrivalCars from '@/components/NewArrivalCars';

type Car = {
  name: string;
  image: string;
};

const cars: Car[] = [
  { name: 'Deepal S07', image: '/heropageImage/deepsai.png' },
  { name: 'Hyundai Kona', image: '/heropageImage/hyundia.png' },
  { name: 'TATA Nexon Ev', image: '/heropageImage/tata.png' },
  { name: 'Mercedes-Benz G-Class', image: '/heropageImage/mercedies.png' },
];

export default function CarShowcase(): JSX.Element {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection />

    {/* <div className='w-full max-w-screen-2xl mx-auto px-2 md:px-6 lg:px-8 py-10'> */}
       
      {/* car research and type search */}
      <SearchSection />
        {/* Car Compare */}
        <NewArrivalCars />
        {/* sponsored Section */}
        <AdBanner/>
      {/* featured Section */}
      <FeaturedContent/>
      {/* Car Tabs */}
        <CartTabs />
      {/* latest new section */}
      <LatestNews/>
    </div>
    // </div>
  );
}
