import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';


type Vehicle={
    label:string;
    img:string;
    href:string;
    price:string;
}

type Vehicles=Vehicle[]

const vehicles:Vehicles = [
	{
		label: 'Proton eMas 7',
		img: '/compareVehicleImage/Hyundai-Kona-Electric.png',
		href: '/compare/suvs',
		price: '56.99 lakhs Onwards',
	},
	{
		label: 'Trucks',
		img: '/compareVehicleImage/Maxus-eTerron-9.png',
		href: '/compare/trucks',
		price: '56.99 lakhs Onwards',
	},
	{
		label: 'Sedans',
		img: '/compareVehicleImage/proton-eMas-7.png',
		href: '/compare/sedans',
		price: '56.99 lakhs Onwards',
	},
	// {
	// 	label: 'Coupes',
	// 	img: '/compareVehicleImage/Maxus-eTerron-9.png',
	// 	href: '/compare/coupes',
	// },
	{
		label: 'Hatchbacks',
		img: '/compareVehicleImage/Tata-Curvv-EV.png',
		href: '/compare/hatchbacks',
		price:'56.99 lakhs Onwards'
	},
	// {
	// 	label: 'Convertibles',
	// 	img: '/compareVehicleImage/convertibles.png',
	// 	href: '/compare/convertibles',
	// },
];

const NewArrivalCars = () => {
	return (
		<section className="w-full pb-10">
			<h2 className="text-xl md:text-2xl text-center font-bold mb-6">
				New Arrivals
			</h2>
			{/* <div className="flex flex-wrap gap-6 justify-center ">
				{vehicles.map((v) => (
					<Link
						key={v.label}
						href={v.href}
						className="flex flex-col items-center w-40 sm:w-36 md:w-40 bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-3"
					>
						<div className="w-full h-20 sm:h-24 md:h-28 flex items-center justify-center mb-2">
							<Image
								src={v.img}
								alt={v.label}
								width={120}
								height={60}
								className="object-contain w-full h-full"
							/>
						</div>
						<span className="text-sm md:text-base font-medium text-center">
							Compare popular <br />
							{v.label}{' '}
							<span className="inline-block align-middle"><ChevronRight size={16} /></span>
						</span>
					</Link>
				))}
			</div> */}
			<div className="flex flex-wrap gap-8 justify-center p-4 bg-gray-50">
	{vehicles.map((v) => (
		<Link
			key={v.label}
			href={v.href}
			className="block w-48 bg-white rounded-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
		>
			<div className="w-full  flex items-center justify-center">
				<Image
					src={v.img}
					alt={v.label}
					width={300}
					height={200}
					className="object-contain h-full w-full"
				/>
			</div>
			<div className="px-4 pb-2">
				<h3 className="text-lg font-semibold tracking-tight text-gray-900">
					{v.label}
				</h3>
				<p className="mt-1 font-normal text-sm text-gray-600">
					{v.price}
				</p>
			</div>
		</Link>
	))}
</div>
		</section>
	);
};

export default NewArrivalCars;