'use client'

import { MenuIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="max-w-screen-2xl w-full py-4 bg-[#0f2a3f] flex items-center justify-between px-4 md:px-6 lg:px-8 relative">
      {/* Hamburger Menu (Mobile) */}
      <button
        className="md:hidden flex items-center mr-2 focus:outline-none"
        aria-label="Open menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <MenuIcon className="text-white w-6 h-6" />
      </button>

      {/* Logo Section */}
      <Link href="/" className="flex items-center">
        <Image src={'/MainLogo.png'} alt="Nepal Motor Logo" width={40} height={40} />
        <span className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold ml-2 sm:ml-3">
          Nepal Motor
        </span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-3 sm:space-x-4 md:space-x-6">
        <nav className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
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
        <Link
          href="/exchange-ev"
          className="bg-[#a3b18a] text-white px-3 sm:px-4 lg:ml-8 py-2 rounded-md text-sm md:text-base font-semibold hover:bg-[#93a17a] transition-colors whitespace-nowrap"
        >
          Exchange to EV
        </Link>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0f2a3f] shadow-lg z-50 animate-fade-in">
          <nav className="flex flex-col items-start px-6 py-4 space-y-3">
            <Link href="/" className="text-white text-base font-semibold w-full py-1" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link href="/buy" className="text-white text-base font-semibold w-full py-1" onClick={() => setMenuOpen(false)}>
              Buy
            </Link>
            <Link href="/sell" className="text-white text-base font-semibold w-full py-1" onClick={() => setMenuOpen(false)}>
              Sell
            </Link>
            <Link href="/rent" className="text-white text-base font-semibold w-full py-1" onClick={() => setMenuOpen(false)}>
              Rent
            </Link>
            <Link
              href="/exchange-ev"
              className="bg-[#a3b18a] text-white px-4 py-2 rounded-md text-base font-semibold hover:bg-[#93a17a] transition-colors w-full mt-2 text-center"
              onClick={() => setMenuOpen(false)}
            >
              Exchange to EV
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;