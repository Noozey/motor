import React, { useState } from 'react'
import TypeCarCarousel from './TypeCarCarousel';

enum carTypes{
    suv = "SUV",
    ute= "Ute",
    hatch="Hatch",
    sedan="Sedan",
    van="Van",
    coupe="Coupe",
    wagon="Wagon",
    peopleMover="People_Mover",
}
// Ute, Hatch, Sedan,Van,Coupe,Wagon, People Mover
type singleCarData={
     imageUrl: string;
  year: number;
  make: string;
  model: string;
  variant: string;
  mileage: number;
  transmission: string;
  price: number;
}
type CarTypeData={
   [key in carTypes]:singleCarData[];
}

const TypeFilter = () => {
    const tabs:carTypes[]=[carTypes.suv, carTypes.hatch, carTypes.sedan, carTypes.van, carTypes.coupe, carTypes.wagon, carTypes.peopleMover]

    const carTypeData:CarTypeData= {
      SUV: [
         {
      imageUrl: '/carTypeImage/ford.png', // Replace with your image path in the /public folder
      year: 2022,
      make: 'Ford',
      model: 'Everest Sport',
      variant: '(4WD)',
      mileage: 91628,
      transmission: 'Automatic',
      price: 47990,
    },
    {
      imageUrl: '/carTypeImage/mazda922.png',
      year: 2022,
      make: 'Mazda',
      model: 'CX-9',
      variant: 'Azami (AWD)',
      mileage: 50402,
      transmission: 'Automatic',
      price: 49990,
    },
    {
      imageUrl: '/carTypeImage/mazda3021.png',
      year: 2021,
      make: 'Mazda',
      model: 'CX-30',
      variant: 'G20 Evolve (FWD)',
      mileage: 54127,
      transmission: 'Automatic',
      price: 26990,
    },
    {
      imageUrl: '/carTypeImage/mazda920.png',
      year: 2023,
      make: 'Mazda',
      model: 'CX-9',
      variant: 'Touring (FWD)',
      mileage: 15549,
      transmission: 'Automatic',
      price: 46990,
    }, 
         {
      imageUrl: '/carTypeImage/ford.png', // Replace with your image path in the /public folder
      year: 2022,
      make: 'Ford',
      model: 'Everest Sport',
      variant: '(4WD)',
      mileage: 91628,
      transmission: 'Automatic',
      price: 47990,
    },
    {
      imageUrl: '/carTypeImage/mazda922.png',
      year: 2022,
      make: 'Mazda',
      model: 'CX-9',
      variant: 'Azami (AWD)',
      mileage: 50402,
      transmission: 'Automatic',
      price: 49990,
    },
    {
      imageUrl: '/carTypeImage/mazda3021.png',
      year: 2021,
      make: 'Mazda',
      model: 'CX-30',
      variant: 'G20 Evolve (FWD)',
      mileage: 54127,
      transmission: 'Automatic',
      price: 26990,
    },
    {
      imageUrl: '/carTypeImage/mazda920.png',
      year: 2023,
      make: 'Mazda',
      model: 'CX-9',
      variant: 'Touring (FWD)',
      mileage: 15549,
      transmission: 'Automatic',
      price: 46990,
    }, 
      ],
      Ute:[ {
    imageUrl: '/cars/toyota-hilux-ute.png',
    year: 2021,
    make: 'Toyota',
    model: 'Hilux',
    variant: 'SR5 (4x4)',
    mileage: 75200,
    transmission: 'Automatic',
    price: 55990,
  },
  {
    imageUrl: '/cars/ford-ranger-ute.png',
    year: 2022,
    make: 'Ford',
    model: 'Ranger',
    variant: 'Wildtrak 3.0 (4x4)',
    mileage: 42800,
    transmission: 'Automatic',
    price: 69990,
  },
  {
    imageUrl: '/cars/isuzu-dmax-ute.png',
    year: 2021,
    make: 'Isuzu',
    model: 'D-MAX',
    variant: 'X-TERRAIN (4x4)',
    mileage: 65150,
    transmission: 'Automatic',
    price: 58990,
  },
  {
    imageUrl: '/cars/mitsubishi-triton-ute.png',
    year: 2020,
    make: 'Mitsubishi',
    model: 'Triton',
    variant: 'GLS Premium (4x4)',
    mileage: 88000,
    transmission: 'Automatic',
    price: 45000,
  },
],
      Hatch: [
      {
    imageUrl: '/cars/vw-golf-hatch.png',
    year: 2020,
    make: 'Volkswagen',
    model: 'Golf',
    variant: 'GTI',
    mileage: 42345,
    transmission: 'Automatic',
    price: 38500,
  },
  {
    imageUrl: '/cars/hyundai-i30-hatch.png',
    year: 2022,
    make: 'Hyundai',
    model: 'i30',
    variant: 'N Line',
    mileage: 19500,
    transmission: 'Automatic',
    price: 31500,
  },
  {
    imageUrl: '/cars/subaru-impreza-hatch.png',
    year: 2021,
    make: 'Subaru',
    model: 'Impreza',
    variant: '2.0i-S (AWD)',
    mileage: 41000,
    transmission: 'Automatic',
    price: 28990,
  },
  {
    imageUrl: '/cars/mazda-cx30-hatch.png',
    year: 2021,
    make: 'Mazda',
    model: 'CX-30',
    variant: 'G20 Evolve (FWD)',
    mileage: 54127,
    transmission: 'Automatic',
    price: 26990,
  },

    ],
    Sedan: [
     {
    imageUrl: '/cars/mazda-3-sedan.png',
    year: 2023,
    make: 'Mazda',
    model: '3',
    variant: 'G25 Astina',
    mileage: 15549,
    transmission: 'Automatic',
    price: 46990,
  },
  {
    imageUrl: '/cars/toyota-camry-sedan.png',
    year: 2021,
    make: 'Toyota',
    model: 'Camry',
    variant: 'Ascent Hybrid',
    mileage: 68300,
    transmission: 'Automatic',
    price: 35990,
  },
  {
    imageUrl: '/cars/honda-accord-sedan.png',
    year: 2022,
    make: 'Honda',
    model: 'Accord',
    variant: 'VTi-LX Hybrid',
    mileage: 25500,
    transmission: 'Automatic',
    price: 46500,
  },
  {
    imageUrl: '/cars/mercedes-c300-sedan.png',
    year: 2020,
    make: 'Mercedes-Benz',
    model: 'C-Class',
    variant: 'C300',
    mileage: 45100,
    transmission: 'Automatic',
    price: 62000,
  },
    ],
    Van: [
     {
    imageUrl: '/cars/ford-transit-van.png',
    year: 2019,
    make: 'Ford',
    model: 'Transit Custom',
    variant: '320S (SWB)',
    mileage: 110540,
    transmission: 'Automatic',
    price: 34990,
  },
  {
    imageUrl: '/cars/toyota-hiace-van.png',
    year: 2022,
    make: 'Toyota',
    model: 'HiAce',
    variant: 'LWB',
    mileage: 31000,
    transmission: 'Automatic',
    price: 47990,
  },
  {
    imageUrl: '/cars/vw-transporter-van.png',
    year: 2021,
    make: 'Volkswagen',
    model: 'Transporter',
    variant: 'TDI340 SWB',
    mileage: 72500,
    transmission: 'Automatic',
    price: 42500,
  },
  {
    imageUrl: '/cars/renault-kangoo-van.png',
    year: 2019,
    make: 'Renault',
    model: 'Kangoo',
    variant: 'Maxi',
    mileage: 105200,
    transmission: 'Automatic',
    price: 21990,
  },

    ],
    Coupe: [
       {
    imageUrl: '/cars/ford-mustang-coupe.png',
    year: 2021,
    make: 'Ford',
    model: 'Mustang',
    variant: 'GT 5.0L V8',
    mileage: 18000,
    transmission: 'Automatic',
    price: 68990,
  },
  {
    imageUrl: '/cars/nissan-z-coupe.png',
    year: 2023,
    make: 'Nissan',
    model: 'Z',
    variant: 'Proto Spec',
    mileage: 5500,
    transmission: 'Automatic',
    price: 85000,
  },
  {
    imageUrl: '/cars/bmw-m2-coupe.png',
    year: 2020,
    make: 'BMW',
    model: 'M2',
    variant: 'Competition',
    mileage: 29000,
    transmission: 'Automatic',
    price: 92500,
  },
  {
    imageUrl: '/cars/subaru-brz-coupe.png',
    year: 2022,
    make: 'Subaru',
    model: 'BRZ',
    variant: 'S Coupe',
    mileage: 12100,
    transmission: 'Manual',
    price: 41990,
  },

    ],
    Wagon: [
      {
    imageUrl: '/cars/audi-a4-wagon.png',
    year: 2020,
    make: 'Audi',
    model: 'A4 Avant',
    variant: '45 TFSI quattro S line',
    mileage: 61000,
    transmission: 'Automatic',
    price: 52990,
  },
  {
    imageUrl: '/cars/subaru-outback-wagon.png',
    year: 2022,
    make: 'Subaru',
    model: 'Outback',
    variant: 'Touring XT (AWD)',
    mileage: 28000,
    transmission: 'Automatic',
    price: 51000,
  },
  {
    imageUrl: '/cars/vw-passat-wagon.png',
    year: 2021,
    make: 'Volkswagen',
    model: 'Passat Alltrack',
    variant: '162TSI Premium',
    mileage: 55400,
    transmission: 'Automatic',
    price: 47990,
  },
  {
    imageUrl: '/cars/volvo-v60-wagon.png',
    year: 2020,
    make: 'Volvo',
    model: 'V60',
    variant: 'T5 Momentum',
    mileage: 64120,
    transmission: 'Automatic',
    price: 44500,
  },
    ],
    People_Mover:[
      {
    imageUrl: '/cars/kia-carnival-mover.png',
    year: 2022,
    make: 'Kia',
    model: 'Carnival',
    variant: 'Platinum',
    mileage: 35000,
    transmission: 'Automatic',
    price: 61990,
  },
  {
    imageUrl: '/cars/hyundai-staria-mover.png',
    year: 2022,
    make: 'Hyundai',
    model: 'Staria',
    variant: 'Highlander',
    mileage: 22500,
    transmission: 'Automatic',
    price: 62500,
  },
  {
    imageUrl: '/cars/honda-odyssey-mover.png',
    year: 2021,
    make: 'Honda',
    model: 'Odyssey',
    variant: 'Vi LX7',
    mileage: 48000,
    transmission: 'Automatic',
    price: 45990,
  },
  {
    imageUrl: '/cars/mercedes-vclass-mover.png',
    year: 2019,
    make: 'Mercedes-Benz',
    model: 'V-Class',
    variant: 'V250d Avantgarde',
    mileage: 89300,
    transmission: 'Automatic',
    price: 88000,
  },
    ]
    };

    const [activeTab,setActiveTab]=useState<carTypes>(carTypes.suv)

    const handleTabClick=(tab:carTypes)=>{
        setActiveTab(tab)
    }
  return (
      <div className="w-full py-5  ">
        <div className="flex w-full gap-6 items-center justify-between border-b">
            {/* tab buttons */}
            {tabs.map((tab)=>(
                <button key={tab} className={`pb-2 cursor-pointer  ${tab==activeTab?"border-b-2 border-red-500 text-black font-semibold":"text-gray-500"}`} onClick={() => handleTabClick(tab)}>
                    {tab.split('_').map((word)=>` ${word}`)}
                </button>
            ))}
        </div>
        {/* corousal part now */}
        <div className="mt-6 p-4 ">
                <TypeCarCarousel cars={carTypeData[activeTab]}/>
            </div>
        </div>
  )
}

export default TypeFilter