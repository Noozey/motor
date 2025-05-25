import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
      <div className="max-w-screen-2xl w-full py-4 bg-[#0f2a3f] flex items-center justify-between px-4 md:px-6 lg:px-8">
      {/* Logo Section */}
      <Link href="/" className="flex items-center" >
        {/* <NepalMotorLogoIcon /> */}
        <Image src={'/MainLogo.png'} alt="Nepal Motor Logo" width={40} height={40} />
        <span className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold ml-2 sm:ml-3">
          Nepal Motor
        </span>
      </Link>

      {/* Navigation Links and Action Button Section */}
      <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-6">
        {/* Navigation Links */}
        <nav className="flex items-center  space-x-2 sm:space-x-3 md:space-x-4">
          <Link href="/" className="text-white hover:text-gray-300 text-sm md:text-base font-semibold transition-colors">
            Home
          </Link>
          <Link href="/buy" className="text-white hover:text-gray-300 text-sm md:text-base font-semibold transition-colors">
            Buy
          </Link>
          <Link href="/sell" className="text-white hover:text-gray-300 text-sm md:text-base font-semibold transition-colors">
            Sell
          </Link>
          <Link href="/rent" className="text-white hover:text-gray-300 text-sm md:text-base font-semibold transition-colors">
            Rent
          </Link>
        </nav>

        {/* Exchange to EV Button */}
        <Link
          href="/exchange-ev"
          className="bg-[#a3b18a] text-white px-3 sm:px-4 lg:ml-8 py-2 rounded-md text-sm md:text-base font-semibold hover:bg-[#93a17a] transition-colors whitespace-nowrap"
        >
          Exchange to EV
        </Link>
      </div>
    </div>
  );
};

export default Header;