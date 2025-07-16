// // src/components/AboutUs.tsx

// import React from 'react';
// import Image from 'next/image';
// import { FaShieldAlt, FaWallet, FaArrowRight } from 'react-icons/fa';

// // NOTE: For a more authentic signature like the one in the design,
// // we recommend using a custom font. The instructions to add the
// // 'Satisfy' Google Font are provided in the section below.
// // After setting it up, the `font-cursive` class will work perfectly.

// // You can define component props here if needed in the future
// interface AboutUsProps {}

// const AboutUs: React.FC<AboutUsProps> = () => {
//   return (
//     <section className="bg-white font-sans">
//       <div className="container mx-auto px-4 py-16 md:py-24">
//         <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
//           {/* Left Column: Text Content */}
//           <div className="lg:w-1/2 w-full">
//             <p className="text-sm font-bold uppercase tracking-wider text-red-500 mb-3">
//               About Us
//             </p>
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
//               PROVIDING RELIABLE CAR RENTALS
//             </h2>
//             <p className="text-gray-600 leading-relaxed mb-4">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//               tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//               veniam, quis nostrud exercitation ullamco laboris nisi ut.
//             </p>
//             <p className="text-gray-600 leading-relaxed mb-10">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//               tempor incididunt ut labore et dolore magna aliqua.
//             </p>

//             {/* Feature Icons */}
//             <div className="flex flex-col sm:flex-row gap-6 mb-10">
//               <div className="flex items-center gap-4">
//                 <div className="flex-shrink-0 bg-orange-100 p-3 rounded-lg">
//                   <FaShieldAlt className="text-orange-500 text-2xl" />
//                 </div>
//                 <span className="font-bold text-gray-800">SAFE & TRUSTED</span>
//               </div>
//               <div className="flex items-center gap-4">
//                 <div className="flex-shrink-0 bg-gray-900 p-3 rounded-lg">
//                   <FaWallet className="text-white text-2xl" />
//                 </div>
//                 <span className="font-bold text-gray-800">AFFORDABLE PRICE</span>
//               </div>
//             </div>

//             <hr className="border-gray-200" />

//             {/* Founder's Section */}
//             <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
//               <div className="flex items-center gap-4">
//                 <Image
//                   src="/founder-photo.jpg" // Replace with your image path in the /public folder
//                   alt="James Austin, Founder & CEO"
//                   width={60}
//                   height={60}
//                   className="rounded-full object-cover"
//                 />
//                 <div>
//                   <p className="font-bold text-gray-900">JAMES AUSTIN</p>
//                   <p className="text-sm font-semibold text-red-500">
//                     Founder & CEO
//                   </p>
//                 </div>
//               </div>
//               <div className="font-cursive text-red-500 text-4xl">
//                 James Austin
//               </div>
//             </div>
//           </div>

//           {/* Right Column: View More Button */}
//           <div className="lg:w-1/2 w-full flex items-center justify-center min-h-[250px] lg:min-h-0 mt-8 lg:mt-0">
//             <button
//               className="group flex items-center gap-3 bg-orange-500 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
//               aria-label="View more about our car rentals"
//             >
//               <span>View More</span>
//               <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
//             </button>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;

// src/components/AboutUs.tsx

import React from 'react';
import Image from 'next/image';
import { FaPlay, FaArrowRight } from 'react-icons/fa';

// Define the component's props for future flexibility
interface AboutUsProps {}

const AboutUs: React.FC<AboutUsProps> = () => {
  return (
    <section className="bg-white font-sans">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Column: Text Content & View More Button */}
          <div className="lg:w-1/2 w-full lg:pr-8">
            <p className="text-sm font-bold uppercase tracking-wider text-red-500 mb-3">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              PROVIDING RELIABLE CAR RENTALS
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>

            {/* View More Button - Replaces the icons and signature */}
            <button
              className="group inline-flex items-center gap-3 bg-gray-900 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
              aria-label="View more about our car rentals"
            >
              <span>View More</span>
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right Column: Image with Play Button */}
          <div className="lg:w-1/2 w-full mt-12 lg:mt-0">
            <div className="relative">
              <Image
                src="/man-driving.jpg" // IMPORTANT: Replace with your image in the /public folder
                alt="Happy customer driving a rental car"
                width={800}
                height={800}
                className="rounded-lg object-cover w-full h-full shadow-2xl"
              />
              {/* Play Button Overlay */}
              <button
                className="absolute top-8 -left-4 sm:-left-6 w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center text-white shadow-xl hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300 transition-transform duration-300 hover:scale-110"
                aria-label="Play video about our services"
              >
                <FaPlay className="text-2xl" />
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutUs;