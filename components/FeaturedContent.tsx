// import Image from 'next/image';
// import React from 'react';

// // Placeholder logos - replace with your actual logo paths or components
// type logoData={
//     src:string,
//     alt:string,
//     width:number,
//     height:number
// }
// const logos:logoData[] = [
//   { src: '/images/logo-bloomberg.svg', alt: 'Bloomberg', width: 150, height: 30 }, // Example
//   { src: '/images/logo-placeholder-blue.svg', alt: 'Blue Diamond', width: 80, height: 70 },
//   { src: '/images/logo-thenational.svg', alt: 'The National', width: 120, height: 30 },
//   { src: '/images/logo-gulfnews.svg', alt: 'Gulf News', width: 120, height: 30 },
//   { src: '/images/logo-emiratesnews.svg', alt: 'Emirates News', width: 100, height: 40 },
//   { src: '/images/logo-khaleejtimes.svg', alt: 'Khaleej Times', width: 130, height: 30 },
//   { src: '/images/logo-forbes.svg', alt: 'Forbes', width: 100, height: 30 },
//   { src: '/images/logo-gulfbusiness.svg', alt: 'Gulf Business', width: 130, height: 30 },
//   { src: '/images/logo-ibusiness.svg', alt: 'iBusiness.com', width: 120, height: 25 },
// ];

// // Create dummy SVG placeholders if you don't have real ones yet
// // Save these in public/images/
// // Example: public/images/logo-bloomberg.svg
// /*
// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 30" width="150" height="30">
//   <rect width="150" height="30" fill="#eee"/>
//   <text x="75" y="20" font-family="Arial, sans-serif" font-size="12" fill="#333" text-anchor="middle">Bloomberg</text>
// </svg>
// */
// // Create similar SVGs for other logos as needed, or use simple text if images are not ready.

// const FeaturedContent: React.FC = () => {
//   return (
//     <div className="w-full max-w-screen-2xl mx-auto px-2 md:px-6 lg:px-8 py-10 bg-gray-50"> {/* Added bg-gray-50 for contrast */}
//       {/* Featured In Section */}
//       <section className="mb-12 md:mb-16 text-center">
//         <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
//           Featured in
//         </h2>
//         <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-6 sm:gap-x-8 md:gap-x-10 lg:gap-x-12">
//           {logos.map((logo) => (
//             <div key={logo.alt} className="h-8 md:h-10 flex items-center">
//               {/*
//                 For actual logos, you'd use Next/Image.
//                 If you have text logos for quick dev:
//                 <span className="text-gray-500 font-semibold text-lg">{logo.alt}</span>
//               */}
//               <Image
//                 src={logo.src} // Make sure these paths are correct and images exist in public/images
//                 alt={logo.alt}
//                 width={logo.width}
//                 height={logo.height}
//                 className="object-contain h-full w-auto" // Adjust styling as needed
//               />
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Auto Tariffs Card Section */}
//       <section className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
//         <div className="flex flex-col lg:flex-row">
//           {/* Left Content Area */}
//           <div className="p-6 sm:p-8 md:p-10 lg:p-12 lg:w-1/2 flex flex-col justify-center">
//             <p className="text-sm text-gray-500 mb-1">Cars.com news</p>
//             <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
//               Auto tariffs explained
//             </h3>
//             <p className="text-gray-700 mb-6 text-base md:text-lg">
//               How will automotive tariffs affect your next car purchase?
//               Our experts explain everything you need to know.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
//               <button
//                 type="button"
//                 className="px-6 py-3 border border-black text-black font-semibold rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors duration-150 ease-in-out w-full sm:w-auto"
//               >
//                 See all tariff news
//               </button>
//               <button
//                 type="button"
//                 className="px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 transition-colors duration-150 ease-in-out w-full sm:w-auto"
//               >
//                 Shop American-made cars
//               </button>
//             </div>
//           </div>

//           {/* Right Image Area with Decorative Background */}
//           <div className="lg:w-1/2 relative flex items-center justify-center p-6 sm:p-8 md:p-0 min-h-[300px] lg:min-h-0">
//             {/* Decorative background elements */}
//             <div className="absolute inset-0 overflow-hidden -z-0">
//               <div
//                 className="absolute bg-purple-100 w-[150%] h-[60%] lg:h-[70%] -bottom-[5%] -right-[30%] lg:-bottom-[10%] lg:-right-[25%]"
//                 style={{
//                   clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)',
//                   transform: 'skewY(-8deg)',
//                 }}
//               />
//               <div
//                 className="absolute bg-purple-200 w-[120%] h-[50%] lg:h-[60%] -bottom-[0%] -right-[10%] lg:-bottom-[5%] lg:-right-[5%]"
//                 style={{
//                   clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)',
//                   transform: 'skewY(-10deg)',
//                 }}
//               />
//             </div>

//             {/* Dollar Sign */}
//             <div className="absolute top-[20%] right-[10%] sm:top-[25%] sm:right-[15%] lg:top-1/4 lg:right-16 z-10">
//               <span className="text-5xl sm:text-6xl font-bold text-purple-500 opacity-80">
//                 $
//               </span>
//             </div>

//             {/* Car Image */}
//             <div className="relative z-10 w-full max-w-md lg:max-w-lg transform lg:scale-110 lg:translate-x-4 lg:-translate-y-2">
//               <Image
//                 src="/featuredImage/inclinedCar.png" // Replace with your car image path
//                 alt="White SUV"
//                 width={800} // Original width of your image
//                 height={500} // Original height of your image
//                 className="object-contain w-full h-auto"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default FeaturedContent;
import Image from 'next/image';
import React from 'react';

// Placeholder for the car image - replace with your actual car image path
const carImageSrc = "/images/car-image.png"; // Or any placeholder you prefer

// Placeholder for the strip of logos - replace with your actual image path
const logosStripImageSrc = "/images/featured-logos-strip.png";

const FeaturedContent: React.FC = () => {
  return (
    <div className="w-full max-w-screen-2xl mx-auto px-2 md:px-6 lg:px-8 py-10 bg-gray-50"> {/* Optional: bg-gray-50 for contrast */}
      {/* Featured In Section */}
      <section className="mb-12 md:mb-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
          Featured in
        </h2>
        <div className="flex justify-center items-center px-4">
          {/* Single image for all logos */}
          <Image
            src={'/featuredImage/featuredLogos.png'} // Path to your combined logos image
            alt="Featured publications logos"
            width={1200} // Approximate width of your combined logo image
            height={60}   // Approximate height of your combined logo image
            className="object-contain w-full h-auto max-w-4xl" // Responsive: takes full width up to max-w-4xl, scales height
          />
        </div>
      </section>

      {/* Auto Tariffs Card Section */}
      <section className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Left Content Area */}
          <div className="p-6 sm:p-8 md:p-10 lg:p-12 lg:w-1/2 flex flex-col justify-center">
            <p className="text-sm text-gray-500 mb-1">Cars.com news</p>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Auto tariffs explained
            </h3>
            <p className="text-gray-700 mb-6 text-base md:text-lg">
              How will automotive tariffs affect your next car purchase?
              Our experts explain everything you need to know.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                type="button"
                className="px-6 py-3 border border-black text-black font-semibold rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors duration-150 ease-in-out w-full sm:w-auto"
              >
                See all tariff news
              </button>
              <button
                type="button"
                className="px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 transition-colors duration-150 ease-in-out w-full sm:w-auto"
              >
                Shop American-made cars
              </button>
            </div>
          </div>

          {/* Right Image Area - Simplified */}
          <div className="lg:w-1/2 relative flex items-center justify-center p-6 sm:p-8 md:p-10 lg:p-0 min-h-[250px] sm:min-h-[300px] lg:min-h-0 bg-gray-100 lg:bg-transparent">
            {/* Car Image Placeholder */}
            <div className="relative z-10 w-full max-w-md lg:max-w-lg">
              {/*
                You will add your image here.
                For now, a placeholder or the existing one.
                The background color (bg-gray-100) is added for visibility if no image is present,
                you can remove it or lg:bg-transparent if your image has its own background.
              */}
              <Image
                src={'/featuredImage/inclinedCar.png'} // Replace with your car image path
                alt="Car" // Update alt text as needed
                width={800} // Original width of your image
                height={500} // Original height of your image
                className="object-contain w-full h-auto"
                priority // Optional: if this image is above the fold
              />
            </div>
            {/*
              If you want a completely blank space until you add the image,
              you can comment out or remove the <Image /> component above
              and ensure the parent div has some height (e.g., using min-h classes).
              The current min-h-[250px] sm:min-h-[300px] on the parent div gives some space.
            */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedContent;