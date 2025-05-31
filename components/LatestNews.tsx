
import Image from "next/image";

const news = [
  {
    image: "/news/toyota.jpg",
    title: "The Toyota Corolla Cross Is a Little Better-Looking for 2026",
  },
  {
    image: "/news/corvette.jpg",
    title: "All 2026 Chevy Corvettes Are Getting a Sweet New Interior",
  },
  {
    image: "/news/genesis.jpg",
    title: "2026 Genesis GV70 First Drive: Making a Great SUV Even Better",
  },
  {
    image: "/news/toyotavsgenesis.jpg",
    title: "EDMUNDS U-DRAGS: Toyota GR Corolla vs. Hyundai Elantra N | Quarter Mile, Handling, & More",
  },
];

const LatestNews = () => {
  return (
    <div className="w-full max-w-screen-2xl mx-auto px-2 md:px-6 py-5 lg:px-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black">
        Latest Car News From Our Experts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left big news image */}
        <div className="md:row-span-2 md:col-span-1">
          <div className="relative h-64 md:h-[32rem] w-full rounded-lg overflow-hidden">
            <Image
              src={news[0].image}
              alt={news[0].title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white text-lg font-semibold drop-shadow">
                {news[0].title}
              </p>
            </div>
          </div>
        </div>
        {/* Right side: two on top, one on bottom */}
        <div className="flex flex-col gap-4 md:col-span-2 h-full">
          <div className="grid grid-cols-2 gap-4 h-1/2">
            {news.slice(1, 3).map((item, i) => (
              <div
                key={i}
                className="relative h-32 md:h-[15.5rem] w-full rounded-lg overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 16vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                  <p className="text-white text-xs md:text-base font-semibold drop-shadow">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative h-32 md:h-[15.5rem] w-full rounded-lg overflow-hidden">
            <Image
              src={news[3].image}
              alt={news[3].title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
              <p className="text-white text-xs md:text-base font-semibold drop-shadow">
                {news[3].title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;