    'use client'
    import React, { useEffect, useRef, useState } from 'react';
    import Link  from 'next/link';
    import { ChevronRight, X } from 'lucide-react';
    import { createPortal } from 'react-dom';



    type Category={ 
        name:string;
        link:string;
    }

    type Categories=Category[];

    const categories: Categories = [
    {name:'Home',link:'/'},
    {name:'Buy',link:'/buy'},
    {name:'SellOldCars',link:'/sellcars'},
    {name:'Rent',link:'/rent'},
    ];

    interface SideMenuProps{
        menuOpen:boolean;
        setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    }


    const SideMenu = ({ menuOpen, setMenuOpen }:SideMenuProps) => {
      const [mounted, setMounted] = useState(false);
  const portalRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    portalRef.current = document.getElementById('portal');
    setMounted(true);
  }, []);

  if (!mounted || !portalRef.current) return null;


        return createPortal(
            <div
                className={`fixed inset-0 z-[9999] md:relative md:inset-auto md:z-auto transition-all duration-500 ${
                    menuOpen ? '' : 'pointer-events-none'
                }`}
            >
                {/* Overlay for mobile */}
                <div
                    className={`fixed inset-0 bg-black transition-opacity duration-500 ${
                        menuOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
                    }`}
                    onClick={() => setMenuOpen(false)}
                ></div>

                {/* Menu Panel */}
                <div 
                    className={`fixed top-0 left-0 h-full w-72 sm:w-80 bg-pink-200 text-white p-5 shadow-xl transform transition-transform duration-500 ease-in-out ${
                        menuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
                    style={{
                        backgroundColor: '#0F2A3F',
                        overflowY: 'auto',
                        scrollbarWidth: 'none', // Firefox
                        msOverflowStyle: 'none', // IE 10+
                    }}
                >
                    {/* Hide scrollbar for Chrome, Safari and Opera */}
                    <style>
                        {`
                        .hide-scrollbar::-webkit-scrollbar {
                            display: none;
                        }
                        `}
                    </style>
                    <div className="flex justify-end mb-6">
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="text-white hover:text-gray-200 transition-colors"
                            aria-label="Close menu"
                        >
                            <X size={30} strokeWidth={2.5} />
                        </button>
                    </div>

                    <nav className='flex flex-col gap-5 '>
                        <ul className="space-y-2.5 hide-scrollbar">
                            {categories.map((cat, idx) => (
                                <li key={cat.name}>
                                    <Link href={cat.link} onClick={()=>setMenuOpen(false)}
                                        className="flex items-center justify-between py-3 px-3 rounded-md hover:bg-sky-500 transition-colors duration-150 ease-in-out group cursor-pointer"
                                    >
                                        <span
                                            className="text-base font-semibold group-hover:font-bold"
                                        >
                                            {cat.name}
                                        </span>
                                    
                                            <ChevronRight
                                                size={22}
                                                className="opacity-80 group-hover:opacity-100"
                                            />
                                    </Link>
                                    
                                </li>
                            ))}
                        </ul>
                        <Link
            href="/exchange"
            className="bg-[#a3b18a] text-center text-white px-3 sm:px-4 lg:ml-8 py-2 rounded-md text-sm md:text-base font-semibold hover:bg-[#93a17a] transition-colors whitespace-nowrap"
            onClick={()=> setMenuOpen(false)}
            >
            Exchange to EV
            </Link>
                    </nav>
                </div>
            </div>,
           portalRef.current
        );
    };

    export default SideMenu;