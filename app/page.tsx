import Image from "next/image";
import { DropdownOption } from "./types";
import { DropdownField } from "@/components/DropdownField";
import { RadioIcon } from "@/components/RadioIcon";

export default function Home() {
    const sampleLocations: DropdownOption[] = [
    { value: 'ktm', label: 'Kathmandu' },
    { value: 'pkr', label: 'Pokhara' },
    { value: 'lmn', label: 'Lumbini' },
  ];
  const sampleDates: DropdownOption[] = [ 
    { value: 'today', label: 'Today' },
    { value: 'tomorrow', label: 'Tomorrow' },
    { value: 'nextweek', label: 'Next Week' },
  ];
  const sampleTimes: DropdownOption[] = [ 
    { value: '1000', label: '10:00 AM' },
    { value: '1200', label: '12:00 PM' },
    { value: '1400', label: '02:00 PM' },
  ];

  // const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   // Handle form submission logic here
  //   console.log('Form submitted');
  // };
    
    

  return (
    // This div is the wrapper provided in your prompt
   <div className="w-full bg-[#a3b18a] ">
     <div className="w-full max-w-screen-2xl px-2 md:px-6 lg:px-8">
      {/* Hero Section with Olive Green Background */}
      <div className="relative rounded-lg pt-10 sm:pt-12 md:pt-16 lg:pt-20 pb-24 sm:pb-28 md:pb-32 lg:pb-36 overflow-hidden">
        <div className="w-full mx-auto  flex flex-col lg:flex-row items-center justify-between relative z-10">
          {/* Text Content */}
          <div className="lg:w-5/12 xl:w-2/5 text-[#0f2a3f] text-center lg:text-left mb-10 lg:mb-0 lg:pr-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
              FAST AND EASY WAY TO <br className="hidden sm:inline md:hidden lg:inline" /> RENT A CAR
            </h1>
            <p className="text-sm sm:text-base md:text-lg mb-3 sm:mb-4">
              Our Car Rental online booking system designed to meet the specific
              needs of car business owners. This easy-to-use car software will let you
              manage.
            </p>
            <p className="text-xs sm:text-sm md:text-base mb-4 sm:mb-6">
              100% Trusted Car platform in the Nepal
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
              <button
                type="button" 
                className="bg-[#0f2a3f] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-md font-semibold hover:bg-[#1c3a55] transition-colors text-sm md:text-base"
              >
                Book Now
              </button>
              <button
                type="button"
                className="bg-white text-[#0f2a3f] px-5 sm:px-6 py-2.5 sm:py-3 rounded-md font-semibold border border-[#0f2a3f] hover:bg-gray-100 transition-colors text-sm md:text-base"
              >
                See all cars
              </button>
            </div>
          </div>

          {/* Car Image */}
          <div className="lg:w-7/12 xl:w-3/5 flex justify-center lg:justify-end relative mt-6 lg:mt-0">
            
              <Image
                src="/HeroImage.png" 
                alt="Luxury black car"
                width={700} 
                height={400} 
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl object-contain filter drop-shadow-lg"
               
              />
            
          </div>
        </div>
      </div>

      {/* Booking Form Section */}
      <div className="relative bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-xl -mt-20 md:-mt-24 lg:-mt-28 mx-auto w-[96%] sm:w-[92%] md:w-[90%] lg:w-[85%] xl:w-[80%] z-20">
        <form >
          <div className="flex flex-col xl:flex-row items-stretch xl:items-end gap-4 md:gap-5 lg:gap-6">
            {/* Pick-up Section */}
            <div className="flex-1 xl:max-w-[calc(50%-1.25rem)]"> 
              <div className="flex items-center mb-2 sm:mb-3">
                <RadioIcon />
                <span className="font-semibold text-sm sm:text-base text-gray-800">Pick - Up</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                <DropdownField id="pickup-location" label="Locations" placeholder="Select your city" options={sampleLocations} />
                <DropdownField id="pickup-date" label="Date" placeholder="Select your date" options={sampleDates} />
                <DropdownField id="pickup-time" label="Time" placeholder="Select your time" options={sampleTimes} />
              </div>
            </div>

           
            <div className="hidden xl:flex items-end pb-1">
              <div className="border-l border-gray-300 h-10 sm:h-12 self-stretch my-auto"></div>
            </div>
            
          
            <hr className="xl:hidden border-gray-200 my-3" />

            {/* Drop-off Section */}
            <div className="flex-1 xl:max-w-[calc(50%-1.25rem)]"> 
              <div className="flex items-center mb-2 sm:mb-3">
                <RadioIcon />
                <span className="font-semibold text-sm sm:text-base text-gray-800">Drop - Off</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                <DropdownField id="dropoff-location" label="Locations" placeholder="Select your city" options={sampleLocations} />
                <DropdownField id="dropoff-date" label="Date" placeholder="Select your date" options={sampleDates} />
                <DropdownField id="dropoff-time" label="Time" placeholder="Select your time" options={sampleTimes} />
              </div>
            </div>

            {/* Search Button */}
            <div className="mt-4 xl:mt-0 xl:self-end"> 
              <button
                type="submit"
                className="w-full xl:w-auto bg-[#a3b18a] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-md font-semibold hover:bg-[#93a17a] transition-colors text-sm md:text-base h-full flex items-center justify-center min-h-[42px] sm:min-h-[46px]" // Ensure button height matches dropdowns
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
   </div>
  );
}
