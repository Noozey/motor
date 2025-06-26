'use client'

import { MenuIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import SideMenu from './SideMenu';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`max-w-screen-2xl mx-auto w-full py-4 bg-gradient-to-r from-gray-700 to-gray-900 lg:bg-[#626568] flex items-center justify-between px-4 md:px-6 lg:px-16 sticky top-0 z-50 backdrop-blur-md transition-opacity duration-300 ${
        isScrolled ? 'opacity-90' : 'opacity-100'
      }`}>
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
          href="/exchange"
          className="bg-[#a3b18a] text-white px-3 sm:px-4 lg:ml-8 py-2 rounded-md text-sm md:text-base font-semibold hover:bg-[#93a17a] transition-colors whitespace-nowrap"
        >
          Exchange to EV
        </Link>
      </div>

      {/* Mobile Menu */}
      <SideMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </header>
  );
};

export default Header;