
// // import Image from "next/image";

// import NewsCard from "./NewsCard";

// // const news = [
// //   {
// //     image: "/news/toyota.jpg",
// //     title: "The Toyota Corolla Cross Is a Little Better-Looking for 2026",
// //   },
// //   {
// //     image: "/news/corvette.jpg",
// //     title: "All 2026 Chevy Corvettes Are Getting a Sweet New Interior",
// //   },
// //   {
// //     image: "/news/genesis.jpg",
// //     title: "2026 Genesis GV70 First Drive: Making a Great SUV Even Better",
// //   },
// //   {
// //     image: "/news/toyotavsgenesis.jpg",
// //     title: "EDMUNDS U-DRAGS: Toyota GR Corolla vs. Hyundai Elantra N | Quarter Mile, Handling, & More",
// //   },
// // ];

// // const LatestNews = () => {
// //   return (
// //     <div className="w-full max-w-screen-2xl mx-auto px-2 md:px-6 lg:px-8">
// //       <h2 className="text-2xl text-center md:text-3xl font-bold mb-10 text-black">
// //         Latest Updates
// //       </h2>
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //         {/* Left big news image */}
// //         <div className="md:row-span-2 md:col-span-1">
// //           <div className="relative h-64 md:h-[32rem] w-full rounded-lg overflow-hidden">
// //             <Image
// //               src={news[0].image}
// //               alt={news[0].title}
// //               fill
// //               className="object-cover"
// //               sizes="(max-width: 768px) 100vw, 33vw"
// //               priority
// //             />
// //             <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
// //               <p className="text-white text-lg font-semibold drop-shadow">
// //                 {news[0].title}
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //         {/* Right side: two on top, one on bottom */}
// //         <div className="flex flex-col gap-4 md:col-span-2 h-full">
// //           <div className="grid grid-cols-2 gap-4 h-1/2">
// //             {news.slice(1, 3).map((item, i) => (
// //               <div
// //                 key={i}
// //                 className="relative h-32 md:h-[15.5rem] w-full rounded-lg overflow-hidden"
// //               >
// //                 <Image
// //                   src={item.image}
// //                   alt={item.title}
// //                   fill
// //                   className="object-cover"
// //                   sizes="(max-width: 768px) 50vw, 16vw"
// //                 />
// //                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
// //                   <p className="text-white text-xs md:text-base font-semibold drop-shadow">
// //                     {item.title}
// //                   </p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //           <div className="relative h-32 md:h-[15.5rem] w-full rounded-lg overflow-hidden">
// //             <Image
// //               src={news[3].image}
// //               alt={news[3].title}
// //               fill
// //               className="object-cover"
// //               sizes="(max-width: 768px) 100vw, 33vw"
// //             />
// //             <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
// //               <p className="text-white text-xs md:text-base font-semibold drop-shadow">
// //                 {news[3].title}
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LatestNews;

// // pages/index.js or wherever your LatestNews component is

// type newsCardType={
//     imageUrl:string;
//     title:string;
//     date:string;
// }
// // New content focused on the Nepal car market
// const nepalCarNews: Array<newsCardType> = [
//   {
//     // The main, large article
//     imageUrl: "/carImageType/byd-atto-3.png",
//     title: "BYD Atto 3 EV Sees Price Drop in Nepal: What It Means for Buyers",
//     date: "August 15, 2024",
//   },
//   {
//     // Top-right item 1
//     imageUrl: "/carImageType/tata-nexon.png",
//     title: "Tata Nexon Facelift Launched: New Features & Pricing Details",
//     date: "August 14, 2024",
//   },
//   {
//     // Top-right item 2
//     imageUrl: "/carImageType/suzuki-fronx.png",
//     title: "First Drive: Is the new Suzuki Fronx the perfect city SUV for Kathmandu?",
//     date: "August 12, 2024",
//   },
//   {
//     // Bottom-right item
//     imageUrl: "/carImageType/road-tax.png",
//     title: "Understanding the Latest Vehicle Tax Revisions in Nepal for 2081/82",
//     date: "August 10, 2024",
//   },
// ];


// const LatestNews = () => {
//   // We can destructure the array to make it easier to read in the JSX
//   const [mainNews, ...otherNews] = nepalCarNews;

//   return (
//     <div className="w-full max-w-screen-xl mx-auto px-4 py-12 md:px-6 lg:px-8">
//       <h2 className="text-3xl text-center font-bold mb-10 text-gray-800">
//         Latest Car Updates in Nepal
//       </h2>

//       {/* Main Grid Layout */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

//         {/* Left Column: Big News Item */}
//         <div>
//           <NewsCard
//             imageUrl={mainNews.imageUrl}
//             title={mainNews.title}
//             date={mainNews.date}
//           />
//         </div>

//         {/* Right Column: Three Smaller News Items */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
//           {/* This maps the remaining 3 items */}
//           {otherNews.map((newsItem, index) => (
//             <NewsCard
//               key={index}
//               imageUrl={newsItem.imageUrl}
//               title={newsItem.title}
//               date={newsItem.date}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LatestNews;
import Image from "next/image";

// The content data remains the same
const nepalCarNews = [
  {
    image: "/news/byd-atto-4.jpg",
    title: "BYD Atto 3 EV Sees Price Drop in Nepal: What It Means for Buyers",
  },
  {
    image: "/news/Tata-Nexon-Headlift.jpg",
    title: "Tata Nexon Facelift Launched: New Features & Pricing Details",
  },
  {
    image: "/news/Suzuki-Fronx.jpg",
    title: "First Drive: Is the new Suzuki Fronx the perfect city SUV for Kathmandu?",
  },
  {
    image: "/news/Vehicle-Tax-Revisions.jpg",
    title: "Understanding the Latest Vehicle Tax Revisions in Nepal for 2081/82",
  },
];

const LatestNews = () => {
  return (
    <div className="w-full max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-8 py-12">
      <h2 className="text-2xl text-center md:text-3xl font-bold mb-10 text-black">
        Latest Updates
      </h2>
      {/* 
        Key Fix: Added 'md:items-start' to ensure the left and right columns 
        align at the top, preventing the right column from being vertically centered.
      */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:items-start">
        
        {/* Left big news item */}
        <div className="md:row-span-2 md:col-span-1">
          {/* Image Container */}
          <div className="relative h-64 md:h-[30rem] w-full rounded-lg overflow-hidden bg-gray-200">
            <Image
              src={nepalCarNews[0].image}
              alt={nepalCarNews[0].title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
          {/* Text content BELOW the image */}
          <div className="mt-4">
            {/* Type badge has been removed */}
            <h3 className="text-xl font-bold text-gray-900">
              {nepalCarNews[0].title}
            </h3>
          </div>
        </div>

        {/* Right side: two on top, one on bottom */}
        <div className="flex flex-col gap-8 md:col-span-2">
          {/* Top two small items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {nepalCarNews.slice(1, 3).map((item, i) => (
              <div key={i}>
                {/* Image Container - Height increased and consistent */}
                <div className="relative h-48 w-full rounded-lg overflow-hidden bg-gray-200">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 16vw"
                  />
                </div>
                {/* Text content BELOW the image */}
                <div className="mt-3">
                  {/* Type badge has been removed */}
                  <h3 className="text-base font-bold text-gray-900">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          {/* Bottom single item */}
          <div>
            {/* Image Container - Height increased and consistent */}
            <div className="relative h-48 w-full rounded-lg overflow-hidden bg-gray-200">
              <Image
                src={nepalCarNews[3].image}
                alt={nepalCarNews[3].title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            {/* Text content BELOW the image */}
            <div className="mt-3">
              {/* Type badge has been removed */}
              <h3 className="text-base font-bold text-gray-900">
                {nepalCarNews[3].title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;