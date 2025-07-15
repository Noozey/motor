import React from "react";
import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    name: "Ashis Sharma",
    role: "Founder & CEO",
    imageUrl: "https://i.pravatar.cc/150?u=asha",
  },
  {
    name: "Rajan Shrestha",
    role: "Chief Technology Officer",
    imageUrl: "https://i.pravatar.cc/150?u=yamuna",
  },
  {
    name: "Bikash Thapa",
    role: "Head of Dealer Relations",
    imageUrl: "https://i.pravatar.cc/150?u=sunita",
  },
  {
    name: "Sunita Gurung",
    role: "Head of Marketing",
    imageUrl: "https://i.pravatar.cc/150?u=bikash",
  },
];

const services = [
  {
    name: "Trusted Vehicle Listings",
    description:
      "The largest selection of new and used cars and bikes from verified sellers across Nepal.",
    icon: "V",
  },
  {
    name: "Verified Dealer Network",
    description:
      "We partner with hundreds of trusted showrooms to ensure quality and reliability.",
    icon: "D",
  },
  {
    name: "Easy Financing Solutions",
    description:
      "Connect with our partner banks to get transparent and competitive loan offers.",
    icon: "F",
  },
  {
    name: "Expert Reviews & News",
    description:
      "Stay updated with the latest in the Nepali auto scene with our unbiased reviews and articles.",
    icon: "R",
  },
];

const achievements = [
  { number: "50,000+", label: "Vehicles Listed" },
  { number: "500+", label: "Trusted Dealers" },
  { number: "100,000+", label: "Happy Customers" },
  { number: "77", label: "Districts Covered" },
];

const IconPlaceholder = ({ character }: { character: string }) => (
  <div
    className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg text-white"
    style={{ backgroundColor: "#008080" }}
  >
    <span className="text-2xl font-bold">{character}</span>
  </div>
);

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800 max-w-screen-2xl mx-auto w-full">
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "#008080" }}
      >
        <div
          className="absolute inset-0 transform -skew-y-1 origin-top-left"
          style={{ backgroundColor: "#004D40" }}
        ></div>
        <div className="relative z-10 px-4 py-24 sm:py-32">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  Nepal's Auto
                  <span className="block" style={{ color: "#00F3FF" }}>
                    Revolution
                  </span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-100">
                  Transforming how Nepal buys, sells, and experiences vehicles
                  since 2018.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    className="px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                    style={{ backgroundColor: "#00F3FF", color: "#004D40" }}
                    href="#mission"
                  >
                    Our Story
                  </a>
                  <a
                    href="#team"
                    className="px-8 py-4 rounded-full text-lg font-semibold border-2 text-white transition-all duration-300 hover:bg-white hover:text-gray-900"
                    style={{ borderColor: "#00F3FF" }}
                  >
                    Meet the Team
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-96 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="https://hips.hearstapps.com/hmg-prod/images/2022-mercedes-benz-s500-4matic-123-1642184026.jpg?crop=0.458xw:0.387xh;0.316xw,0.418xh&resize=1200:*"
                    alt="Nepal Motor Office"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#F3F4F6" }}>
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((stat, index) => (
              <div key={index} className="text-center">
                <div
                  className="text-4xl md:text-5xl font-bold mb-2"
                  style={{ color: "#008080" }}
                >
                  {stat.number}
                </div>
                <div className="text-gray-600 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Mission & Story Section */}
      <section
        className="py-16 sm:py-24"
        style={{ backgroundColor: "#F3F4F6" }}
        id="mission"
      >
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Mission & Story
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Founded in 2018 in the heart of Kathmandu, Nepal Motor was born from
            a simple idea: to make buying and selling vehicles in Nepal simple,
            transparent, and trustworthy. We saw a fragmented market where good
            information was scarce and navigating the process was a challenge.
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Today, we are Nepal's leading digital automotive marketplace,
            connecting thousands of buyers with a trusted network of sellers
            from the Himalayan highlands to the Terai plains. Our mission is to
            empower every Nepali with the data, tools, and connections they need
            to find their perfect vehicle with confidence.
          </p>
        </div>
      </section>

      {/* 3. Team Section (Our People) */}
      <section className="bg-white py-16 sm:py-24" id="team">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet Our People
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The dedicated team committed to revolutionizing Nepal's auto
              industry.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((person) => (
              <div
                key={person.name}
                className="flex flex-col items-center rounded-lg p-6 text-center shadow-md transition-transform hover:scale-105"
                style={{ backgroundColor: "#F3F4F6" }}
              >
                <Image
                  className="h-24 w-24 rounded-full"
                  src={person.imageUrl}
                  alt={`Portrait of ${person.name}`}
                  width={96}
                  height={96}
                />
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {person.name}
                </h3>
                <p className="text-lg font-medium" style={{ color: "#008080" }}>
                  {person.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Ecosystem Section */}
      <section
        className="py-16 sm:py-24"
        style={{ backgroundColor: "#F3F4F6" }}
      >
        <div className="container mx-auto max-w-5xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Ecosystem
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              A complete solution for your vehicle journey.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
            {services.map((service) => (
              <div key={service.name} className="flex items-start space-x-4">
                <IconPlaceholder character={service.icon} />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {service.name}
                  </h3>
                  <p className="mt-1 text-base text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Call to Action (CTA) Section */}
      <section style={{ backgroundColor: "#004D40" }}>
        <div className="container mx-auto px-4 py-16 text-center sm:py-20">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Join Our Journey
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-100">
            Help us build the future of the automotive industry in Nepal.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="w-full rounded-md px-6 py-3 text-base font-semibold shadow-sm transition-colors hover:opacity-90 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
              style={{
                backgroundColor: "#00F3FF",
                color: "#004D40",
              }}
            >
              View Careers
            </a>
            <Link
              href="/contact"
              className="w-full rounded-md border px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
              style={{ borderColor: "#00F3FF" }}
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
