import { CarDetails } from '@/types'
import React, { ReactNode } from 'react'

type CarGridProps={
    cars:Array<CarDetails>;
}

const CarGrid:React.FC<CarGridProps> = ({cars}) => {
  return (
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {cars.map((car, index) => (
        <div key={index} className="rounded-md p-4 ">
          <img src={car.image} alt={car.name} className="w-full h-40 object-cover rounded-md" />
          <h3 className="mt-2 font-semibold">{car.name}</h3>
          <p className="text-gray-600">{car.price}</p>
          <button className="mt-3 border text-center block cursor-pointer border-red-500 text-red-500 px-4 py-1 rounded hover:bg-red-500 hover:text-white transition">
            View May Offers
          </button>
        </div>
      ))}
    </div>
  )
}

export default CarGrid