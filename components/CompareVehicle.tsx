import Image from 'next/image';
import Link from 'next/link';


type Vehicle={
    label:string;
    img:string;
    href:string;
}

type Vehicles=Vehicle[]

const vehicles:Vehicles = [
	{
		label: 'SUVs',
		img: '/compare/suv.png',
		href: '/compare/suvs',
	},
	{
		label: 'Trucks',
		img: '/compare/truck.png',
		href: '/compare/trucks',
	},
	{
		label: 'Sedans',
		img: '/compare/sedan.png',
		href: '/compare/sedans',
	},
	{
		label: 'Coupes',
		img: '/compare/coupe.png',
		href: '/compare/coupes',
	},
	{
		label: 'Hatchbacks',
		img: '/compare/hatchback.png',
		href: '/compare/hatchbacks',
	},
	{
		label: 'Convertibles',
		img: '/compare/convertible.png',
		href: '/compare/convertibles',
	},
];

const CompareVehicle = () => {
	return (
		<section className="w-full max-w-screen-2xl mx-auto px-2 md:px-6 lg:px-8 py-8">
			<h2 className="text-xl md:text-2xl font-bold mb-6">
				Compare popular vehicles
			</h2>
			<div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-start">
				{vehicles.map((v) => (
					<Link
						key={v.label}
						href={v.href}
						className="flex flex-col items-center w-32 sm:w-36 md:w-40 bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-3"
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
							<span className="inline-block align-middle">&gt;</span>
						</span>
					</Link>
				))}
			</div>
		</section>
	);
};

export default CompareVehicle;