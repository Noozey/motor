
'use client'

import { ChevronUp } from "lucide-react";

type HandleScrollTop=()=>void;

const ScrollToTop = () => {
    
  const handleScrollTop:HandleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
}
  return (
     <button  onClick={handleScrollTop}  className='px-3 py-2 border cursor-pointer rounded-full border-black flex item-center justify-center gap-2 '><span className='text-sm text-[#1B72EB]'>Back to top</span><ChevronUp className='cursor-pointer' size={24}/> </button>
  )
}

export default ScrollToTop