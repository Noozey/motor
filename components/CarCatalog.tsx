import React, { useState } from 'react'

const CarCatalog: React.FC = () => {
    type Tab={
        id:string,
        label:string
    }
    const tabs: Tab[] = [
	{ id: "popular", label: "Popular" },
	{ id: "largeCar", label: "Large Car" },
	{ id: "smallCar", label: "Small Car" },
	{ id: "exclusiveCar", label: "Exclusive Car" },
];

  const [activeTab,setActiveTab]=useState<string>(tabs[0].id)
  return (
    <div className='w-full relative'>

    </div>
  )
}

export default CarCatalog