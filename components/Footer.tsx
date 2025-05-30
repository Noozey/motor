import { ChevronUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type SocialMediaProps={
    label:string,
    src:string
}

const socialMediaIcons:SocialMediaProps[]=[
    {label:'youtube',src:'/footerImage/youtube.png'},
    {label:'instagram',src:'/footerImage/instagram.png'},
    {label:'tiktok',src:'/footerImage/tiktok.png'},
    {label:'facebook',src:'/footerImage/facebook.png'},
    {label:'twitter',src:'/footerImage/twitter.png'},
    {label:'material-symbol',src:'/footerImage/material-symbol.png'},
]

const Footer:React.FC = () => {
  return (
    <div className='w-full relative  px-20  py-20'>
        {/* header upper part */}
        <div className='w-full space-y-4'>
            <div className='w-full flex items-center justify-between'>
                <div className='flex-1'>
                    <h1 className='font-bold text-3xl '>Join Nepal Motors</h1>
                    <p className='text-sm'>Recieve pricing updates, shopping tips & more!</p>
                </div>
                <button className='px-3 py-2 border rounded-full border-black flex item-center justify-center gap-2 '><span className='text-sm'>Back to top</span><ChevronUp className='cursor-pointer' size={24}/> </button>
            </div>
            <div >
                <label htmlFor="email" className='text-md pb-2'>Email Address</label>
                <div className=' w-full rounded-md border border-black md:w-[40%]  overflow-hidden  flex items-center'>
                    <input id='email' type="text" className='border-none py-2 px-2 flex-1 focus:outline-none ' />
                    <button className='bg-black px-3 py-3 text-white text-sm'>Sign Up</button>
                </div>
            </div>
        </div>
            <div className='h-[1px] my-5 bg-gray-700'></div>
        {/* header lower part */}
        <div className='w-full'>
            <div className='flex flex-col gap-3 md:flex-row items-center md:justify-between justify-center '>
                {/* follow us part */}
                <div className='flex flex-col gap-3'>
                    <h1 className='font-extralight text-sm'>Follow us</h1>
                    <div className='flex items-baseline justify-center gap-7 '>
                        {socialMediaIcons.map((socialIcon)=><Image key={socialIcon.label} height={24} width={24} src={socialIcon.src} alt={socialIcon.label}/>)}
                    </div>  
                </div >
                {/* download the app part */}
                <div className='flex flex-col item-center justify-start gap-2'>
                    <h1 className='font-extralight text-sm'>Download the Nepal Motors app</h1>
                    <div className='flex items-center justify-center gap-2'>
                        <div className='flex items-center justify-center bg-black text-white gap-2 p-2 rounded-md'>
                            <Image width={24} height={24} src={'/footerImage/apple.png'} alt={'apple logo'} />
                            <div className='flex flex-col justify-start item-center '>
                                <h6 className='text-sm'>Downlaod the app</h6>
                                 <h1 className='font-bold text-md'>App Store</h1>
                            </div>
                        </div>
                        <div className='flex items-center justify-center bg-black text-white gap-2 p-2 rounded-md'>
                            <Image width={24} height={24} src={'/footerImage/google.png'} alt={'google logo'} />
                            <div className='flex flex-col justify-start item-center '>
                                <h6 className='text-sm'>Get it on</h6>
                                 <h1 className='font-bold text-md'>Play Store</h1>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='w-full flex items-center gap-5 lg:gap-0 justify-center text-sm pt-5'>
                <div className='flex flex-col gap-2 lg:flex-row justify-start items-start md:justify-between lg:gap-5'>
                    <Link href={'/contact'}>Contact Us</Link>
                    <Link href={'/contact'}>Careers</Link>
                    <Link href={'/contact'}>Your Ad Choices</Link>
                    <Link href={'/contact'}>Privacy Statement</Link>
                    </div>
                    <div className='flex flex-col gap-2 lg:flex-row justify-start items-start md:items-center md:justify-between lg:gap-5'>
                    <Link href={'/contact'}>Visitor Agreement</Link>
                    <Link href={'/contact'}>Accessibility</Link>
                    <Link href={'/contact'}>Do Not Sell or Share My Personal Information</Link>
                    <Link href={'/contact'}>Edmunds Information</Link>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Footer