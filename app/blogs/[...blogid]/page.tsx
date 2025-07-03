import React from 'react';
import Image from 'next/image';
import { Clock, UserCircle, Calendar } from 'lucide-react';
import BlogLayout from '@/components/blogsComponents/BlogLayout';

// --- Mock Data for the Sidebar ---
// import { useRouter } from 'next/router'



const BlogArticlePage = async ({params}:{params:Promise<{blogid:string}>}) => {
  console.log(params)
  const {blogid}= await params
  console.log(blogid)
    // const router = useRouter();
    // const { blogid } = router.query;
    // console.log(blogid)
  return (
    // <div className="bg-gray-50 py-12 sm:py-16">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="lg:grid lg:grid-cols-3 lg:gap-x-12">

    //       {/* --- Main Article Content (Left Column) --- */}
    //       <main className="lg:col-span-2">
    //         {/* Article Header */}
    //         <div className="border-b border-gray-200 pb-8">
    //           <h1 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
    //             What Makes Gogoro Different From Other EVs? Start With the Battery
    //           </h1>
    //           <div className="mt-6 flex flex-wrap items-center text-sm text-gray-500 gap-x-6 gap-y-2">
    //             <div className="flex items-center gap-2">
    //               <UserCircle className="h-5 w-5" />
    //               <span>By M2X</span>
    //             </div>
    //             <div className="flex items-center gap-2">
    //               <Calendar className="h-5 w-5" />
    //               <span>May 04, 2025</span>
    //             </div>
    //             <div className="flex items-center gap-2">
    //               <Clock className="h-5 w-5" />
    //               <span>3 min read</span>
    //             </div>
    //           </div>
    //         </div>

    //         {/* Main Image */}
    //         <div className="mt-8">
    //           <Image
    //             src="https://images.unsplash.com/photo-1629788399632-35850ea0d80a?q=80&w=1200&auto=format&fit=crop"
    //             alt="Person swapping a Gogoro electric scooter battery at a charging station."
    //             width={1200}
    //             height={800}
    //             className="w-full rounded-2xl shadow-lg object-cover"
    //             priority
    //           />
    //         </div>

    //         {/* Article Body */}
    //         <article className="mt-10 prose prose-lg max-w-none prose-indigo prose-p:text-gray-700 prose-headings:font-bold prose-headings:text-gray-900">
    //           <p>
    //             Gogoro is flipping the script on electric scooter ownership, and it starts with one simple idea: you don’t own the battery. Instead, you subscribe to Gogoro’s battery-swapping service and get instant access to fully charged batteries whenever you need them.
    //           </p>
    //           <p>
    //             This isn’t just a fancy feature. It’s a game-changing shift in how electric scooters work, giving riders a bunch of real-world benefits. The primary advantage is the elimination of range anxiety. With traditional EVs, you have to find a charging station and wait, sometimes for hours. With Gogoro, you simply find a GoStation®, swap your depleted batteries for fresh ones in seconds, and you’re back on the road.
    //           </p>
              
    //           <h2>The Power of the Swap</h2>
    //           <p>
    //             The convenience factor is enormous. Imagine never having to worry about finding an outlet at home or work. The GoStation network is dense in the cities it serves, making it as easy to "refuel" as a traditional gas-powered scooter, but faster and cleaner. This model also addresses the high upfront cost of EVs, as the most expensive component—the battery—is part of a subscription, not a purchase.
    //           </p>
    //           <ul>
    //             <li><strong>Instant Power:</strong> Swapping takes less than a minute.</li>
    //             <li><strong>No Degradation Worries:</strong> You always get a healthy, high-performance battery. Gogoro manages battery health and recycling.</li>
    //             <li><strong>Lower Upfront Cost:</strong> The scooter is cheaper without the battery cost included.</li>
    //           </ul>
              
    //           <h2>More Than Just Convenience</h2>
    //           <p>
    //             Beyond individual benefits, this system has broader implications for urban infrastructure. It reduces the strain on the grid by charging batteries during off-peak hours and creates a more sustainable ecosystem for battery lifecycle management. Each battery is monitored via the cloud, ensuring safety and optimal performance. This data-driven approach allows Gogoro to predict demand and manage its network efficiently. As cities around the world look for smarter, cleaner transportation solutions, Gogoro's battery-swapping platform presents a compelling and proven model for the future of urban mobility.
    //           </p>
    //            <p>
    //             This innovative approach is what truly sets Gogoro apart from other electric vehicles. It’s not just about building an electric scooter; it’s about building an entire energy network that makes electric transportation more accessible, efficient, and sustainable for everyone.
    //           </p>
    //         </article>
    //       </main>

    //       {/* --- Sidebar (Right Column) --- */}
    //       <LatestUsedCar />
          
    //     </div>
    //   </div>
    // </div>
    <BlogLayout>
    <main className="lg:col-span-2">
            {/* Article Header */}
            <div className="border-b border-gray-200 pb-8">
              <h1 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
                What Makes Gogoro Different From Other EVs? Start With the Battery
              </h1>
              <div className="mt-6 flex flex-wrap items-center text-sm text-gray-500 gap-x-6 gap-y-2">
                <div className="flex items-center gap-2">
                  <UserCircle className="h-5 w-5" />
                  <span>By M2X</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>May 04, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>3 min read</span>
                </div>
              </div>
            </div>

            {/* Main Image */}
            <div className="mt-8">
              <Image
                src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhcnxlbnwwfHwwfHx8MA%3D%3D"
                alt="Person swapping a Gogoro electric scooter battery at a charging station."
                width={1200}
                height={800}
                className="w-full rounded-2xl shadow-lg object-cover"
                priority
              />
            </div>

            {/* Article Body */}
            <article className="mt-10 prose prose-lg max-w-none flex flex-col items-start justify-start gap-5">
              <p>
                Gogoro is flipping the script on electric scooter ownership, and it starts with one simple idea: you don’t own the battery. Instead, you subscribe to Gogoro’s battery-swapping service and get instant access to fully charged batteries whenever you need them.
              </p>
              <p>
                This isn’t just a fancy feature. It’s a game-changing shift in how electric scooters work, giving riders a bunch of real-world benefits. The primary advantage is the elimination of range anxiety. With traditional EVs, you have to find a charging station and wait, sometimes for hours. With Gogoro, you simply find a GoStation®, swap your depleted batteries for fresh ones in seconds, and you’re back on the road.
              </p>
              
              <h2>The Power of the Swap</h2>
              <p>
                The convenience factor is enormous. Imagine never having to worry about finding an outlet at home or work. The GoStation network is dense in the cities it serves, making it as easy to "refuel" as a traditional gas-powered scooter, but faster and cleaner. This model also addresses the high upfront cost of EVs, as the most expensive component—the battery—is part of a subscription, not a purchase.
              </p>
              <ul>
                <li><strong>Instant Power:</strong> Swapping takes less than a minute.</li>
                <li><strong>No Degradation Worries:</strong> You always get a healthy, high-performance battery. Gogoro manages battery health and recycling.</li>
                <li><strong>Lower Upfront Cost:</strong> The scooter is cheaper without the battery cost included.</li>
              </ul>
              
              <h2>More Than Just Convenience</h2>
              <p>
                Beyond individual benefits, this system has broader implications for urban infrastructure. It reduces the strain on the grid by charging batteries during off-peak hours and creates a more sustainable ecosystem for battery lifecycle management. Each battery is monitored via the cloud, ensuring safety and optimal performance. This data-driven approach allows Gogoro to predict demand and manage its network efficiently. As cities around the world look for smarter, cleaner transportation solutions, Gogoro's battery-swapping platform presents a compelling and proven model for the future of urban mobility.
              </p>
               <p>
                This innovative approach is what truly sets Gogoro apart from other electric vehicles. It’s not just about building an electric scooter; it’s about building an entire energy network that makes electric transportation more accessible, efficient, and sustainable for everyone.
              </p>
            </article>
          </main>
          </BlogLayout>
  );
};

export default BlogArticlePage;