
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const teamMembers = [
  {
    name: 'Ashis Sharma',
    role: 'Founder & CEO',
    imageUrl: 'https://i.pravatar.cc/150?u=asha',
  },
  {
    name: 'Rajan Shrestha',
    role: 'Chief Technology Officer',
    imageUrl: 'https://i.pravatar.cc/150?u=yamuna',
  },
  {
    name: 'Bikash Thapa',
    role: 'Head of Dealer Relations',
    imageUrl: 'https://i.pravatar.cc/150?u=sunita',
  },
  {
    name: 'Sunita Gurung',
    role: 'Head of Marketing',
    imageUrl: 'https://i.pravatar.cc/150?u=bikash',
  },
];

const services = [
  {
    name: 'Trusted Vehicle Listings',
    description: 'The largest selection of new and used cars and bikes from verified sellers across Nepal.',
    icon: 'V',
  },
  {
    name: 'Verified Dealer Network',
    description: 'We partner with hundreds of trusted showrooms to ensure quality and reliability.',
    icon: 'D',
  },
  {
    name: 'Easy Financing Solutions',
    description: 'Connect with our partner banks to get transparent and competitive loan offers.',
    icon: 'F',
  },
  {
    name: 'Expert Reviews & News',
    description: 'Stay updated with the latest in the Nepali auto scene with our unbiased reviews and articles.',
    icon: 'R',
  },
];

const IconPlaceholder = ({ character }: { character: string }) => (
  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#93A17A] text-white">
    <span className="text-2xl font-bold">{character}</span>
  </div>
);


export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800 max-w-screen-2xl mx-auto w-full ">
        
      <section 
        className="relative h-[50vh] min-h-[300px] bg-cover bg-center text-white"
        style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661369891046-ab577895d0c7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl font-extrabold md:text-6xl">About Nepal Motor</h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            Driving Nepal's future, one connection at a time.
          </p>
        </div>
      </section>

      {/* 2. Mission & Story Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Mission & Story
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Founded in 2018 in the heart of Kathmandu, Nepal Motor was born from a simple idea: to make buying and selling vehicles in Nepal simple, transparent, and trustworthy. We saw a fragmented market where good information was scarce and navigating the process was a challenge.
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Today, we are Nepal's leading digital automotive marketplace, connecting thousands of buyers with a trusted network of sellers from the Himalayan highlands to the Terai plains. Our mission is to empower every Nepali with the data, tools, and connections they need to find their perfect vehicle with confidence.
          </p>
        </div>
      </section>

      {/* 3. Team Section (Our People) */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet Our People
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The dedicated team committed to revolutionizing Nepal's auto industry.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((person) => (
              <div key={person.name} className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-md transition-transform hover:scale-105">
                <Image
                  className="h-24 w-24 rounded-full"
                  src={person.imageUrl}
                  alt={`Portrait of ${person.name}`}
                  width={96}
                  height={96}
                />
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{person.name}</h3>
                <p className="text-blue-600">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Ecosystem Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Ecosystem</h2>
            <p className="mt-4 text-lg text-gray-600">
              A complete solution for your vehicle journey.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
            {services.map((service) => (
              <div key={service.name} className="flex items-start space-x-4">
                <IconPlaceholder character={service.icon} />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                  <p className="mt-1 text-base text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 5. Call to Action (CTA) Section */}
      <section className=" bg-gradient-to-r from-gray-700 to-gray-900">
        <div className="container mx-auto px-4 py-16 text-center sm:py-20">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Join Our Journey
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-100">
            Help us build the future of the automotive industry in Nepal.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="w-full rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-700 shadow-sm transition-colors hover:bg-blue-50 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
            >
              View Careers
            </a>
            <Link 
              href="/contact"
              className="w-full rounded-md border border-white px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-white/10 focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}