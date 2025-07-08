export interface Article {
  id: string;
  slug: string; 
  title: string;
  author: string;
  date: string;
  readTime: string;
  image: {
    src: string;
    alt: string;
  };
  body: string;
}


export const articles: Article[] = [
  {
    id: 'byd-atto-3-price-drop-nepal',
    title: 'BYD Atto 3 EV Sees Price Drop in Nepal: What It Means for Buyers',
    author: 'Nepal Motor Staff',
    slug: "atto3",
    date: 'October 26, 2023',
    readTime: '4 min read',
    image: {
      src: '/news/byd-atto-4.jpg',
      alt: 'A white BYD Atto 3 electric SUV parked with a scenic mountain backdrop.',
    },
    body: `
      <p class="mb-6 leading-relaxed text-gray-700">In a significant move for Nepal's burgeoning electric vehicle market, the price of the popular BYD Atto 3 has been officially reduced. This development is poised to make one of the country's best-selling EVs even more accessible to a wider range of consumers, potentially accelerating the shift away from fossil fuels.</p>
      
      <p class="mb-6 leading-relaxed text-gray-700">The price adjustment comes amidst a dynamic period for the Nepali auto industry, where government policies and increasing competition are reshaping the landscape. For prospective buyers, this news is overwhelmingly positive. The Atto 3, already lauded for its combination of style, performance, and cutting-edge technology, now presents an even more compelling value proposition.</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Key Takeaways for Buyers</h2>
      <p class="mb-6 leading-relaxed text-gray-700">What does this mean if you've been considering an EV? Here are the key implications:</p>
      <ul class="list-disc pl-5 mb-6 space-y-3 text-gray-700">
        <li><strong>Increased Affordability:</strong> The most direct benefit is the lower barrier to entry. This price drop could be the final push needed for many families to make the switch to electric.</li>
        <li><strong>Competitive Edge:</strong> The Atto 3 is known for its revolutionary Blade Battery technology, offering enhanced safety and a respectable range of over 400 km. At a lower price point, it becomes a formidable competitor to other EVs in its segment.</li>
        <li><strong>Market Impact:</strong> This move by BYD is likely to trigger a competitive response from other brands, potentially leading to further price rationalization across the EV market in Nepal.</li>
      </ul>

      <p class="leading-relaxed text-gray-700">As Nepal continues to embrace sustainable transportation, moves like this are crucial. It demonstrates a commitment from manufacturers to align with the country's green goals and makes the dream of owning a high-quality electric vehicle a reality for more Nepalis.</p>
    `,
  },
  {
    id: 'tata-nexon-facelift-launch-nepal',
    title: 'Tata Nexon Facelift Launched: New Features & Pricing Details',
    author: 'Nepal Motor Staff',
    date: 'October 15, 2023',
    readTime: '3 min read',
    slug: "tata-nexon",
    image: {
      src: '/news/Tata-Nexon-Headlift.jpg',
      alt: 'Close-up of the new, futuristic-looking headlight and front grille of the Tata Nexon facelift.',
    },
    body: `
      <p class="mb-6 leading-relaxed text-gray-700">The wait is over for one of Nepal's most anticipated vehicle updates. The facelifted Tata Nexon has officially been launched, bringing a wave of futuristic design changes, advanced technology, and enhanced safety features to the highly popular compact SUV.</p>

      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">What's New in the 2023 Nexon?</h2>
      <p class="mb-6 leading-relaxed text-gray-700">Tata has gone beyond a minor touch-up, giving the Nexon a complete design overhaul inspired by its concept cars. The changes are immediately noticeable and position the Nexon as one of the most modern vehicles in its class.</p>
      <ul class="list-disc pl-5 mb-6 space-y-3 text-gray-700">
        <li><strong>Futuristic Exterior:</strong> The front fascia is entirely new, featuring a sleek, full-width LED Daytime Running Light (DRL) strip and vertically stacked LED headlights. The rear also gets a new connected LED tail lamp design, giving it a distinct and premium look.</li>
        <li><strong>Revamped Interior:</strong> Inside, the cabin feels like it's from a segment above. The highlight is the new, freestanding 12.3-inch touchscreen infotainment system and a 10.25-inch fully digital instrument cluster. The new two-spoke steering wheel with an illuminated logo adds to the sophisticated feel.</li>
        <li><strong>Enhanced Safety:</strong> Building on its 5-star safety legacy, the new Nexon comes with 6 airbags as standard across all variants, along with ESC, ISOFIX mounts, and more.</li>
      </ul>
      <p class="leading-relaxed text-gray-700">With its aggressive new look and a feature list that rivals more expensive SUVs, the Tata Nexon facelift is set to continue its dominance in the Nepali market. It offers a powerful combination of style, technology, and safety that is hard to ignore.</p>
    `,
  },
  {
    id: 'suzuki-fronx-first-drive-kathmandu',
    title: 'First Drive: Is the new Suzuki Fronx the perfect city SUV for Kathmandu?',
    author: 'Ashis Sharma',
    date: 'September 28, 2023',
    readTime: '5 min read',
    slug: "firstDrive",
    image: {
      src: '/news/Suzuki-Fronx.jpg',
      alt: 'Side profile of a sleek Suzuki Fronx crossover SUV in an urban setting.',
    },
    body: `
      <p class="mb-6 leading-relaxed text-gray-700">Kathmandu's streets are a unique challenge. They demand a vehicle that's compact enough to navigate tight spaces, efficient enough to handle stop-and-go traffic, and comfortable enough to tackle imperfect road surfaces. Enter the Suzuki Fronx, the company's latest 'compact SUV coupe'. We took it for a spin to see if it's the urban champion the city has been waiting for.</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Design & Dimensions</h2>
      <p class="mb-6 leading-relaxed text-gray-700">Based on the Baleno, the Fronx stands taller and has a more aggressive, SUV-like stance. Its compact dimensions are a clear advantage in Kathmandu's traffic. Parking is less of a hassle, and zipping through gaps feels effortless. The coupe-like sloping roofline gives it a stylish flair that stands out from the traditional boxy SUVs.</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">The Drive: Engine and Handling</h2>
      <p class="mb-6 leading-relaxed text-gray-700">We drove the 1.2-litre DualJet petrol engine variant, which is known for its excellent fuel efficiency—a huge plus given current fuel prices. The power is adequate for city commutes, providing a smooth and refined driving experience. The suspension is tuned for comfort, absorbing most of the bumps and potholes on city roads surprisingly well. The light steering makes it incredibly easy to maneuver, reducing driver fatigue during long traffic jams.</p>
      
      <h3 class="text-xl font-bold text-gray-900 mt-10 mb-4">The Verdict</h3>
      <p class="mb-6 leading-relaxed text-gray-700">So, is the Fronx the perfect city SUV for Kathmandu? It comes incredibly close. It nails the most important criteria:</p>
      <ul class="list-disc pl-5 mb-6 space-y-3 text-gray-700">
        <li><strong>Compact & Maneuverable:</strong> Yes, its size is a significant advantage.</li>
        <li><strong>Fuel Efficient:</strong> Absolutely, it's one of the best in its class.</li>
        <li><strong>Comfortable Ride:</strong> The suspension is well-suited for urban conditions.</li>
      </ul>
      <p class="leading-relaxed text-gray-700">While it may not be a true off-roader, it was never meant to be. As a stylish, practical, and economical daily driver for navigating the urban jungle of Kathmandu, the Suzuki Fronx is a brilliant and highly recommended choice.</p>
    `,
  },
  {
    id: 'nepal-vehicle-tax-revisions-2081-82',
    title: 'Understanding the Latest Vehicle Tax Revisions in Nepal for 2081/82',
    author: 'Nepal Motor Staff',
    date: 'October 20, 2023',
    readTime: '4 min read',
    slug: "tax-revisions",
    image: {
      src: '/news/vehicle-tax-revision.jpg',
      alt: 'A person reviewing financial documents and tax forms with a calculator and a pen.',
    },
    body: `
      <p class="mb-6 leading-relaxed text-gray-700">Each year, the Government of Nepal's budget announcement brings changes to the country's tax structure, and the automotive sector is always a key area of focus. For the fiscal year 2081/82, new revisions to vehicle taxes have been implemented, affecting the final on-road price of cars and motorcycles. Understanding these changes is crucial for anyone looking to purchase a new vehicle.</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Breaking Down Vehicle Taxes in Nepal</h2>
      <p class="mb-6 leading-relaxed text-gray-700">The total cost of a vehicle in Nepal is determined by three main taxes levied on its import value:</p>
      <ul class="list-disc pl-5 mb-6 space-y-3 text-gray-700">
        <li><strong>Customs Duty:</strong> A tax on importing the vehicle into the country.</li>
        <li><strong>Excise Duty:</strong> An additional tax, often varying based on the engine capacity (cc) or motor power (kW for EVs). This is where most annual changes occur.</li>
        <li><strong>Value Added Tax (VAT):</strong> A 13% tax applied on the total value after the above duties are added.</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Key Changes for 2081/82</h2>
      <p class="mb-6 leading-relaxed text-gray-700">The latest budget continues the government's policy of promoting electric mobility while managing the import of luxury fossil fuel vehicles. The key highlights of the tax revision include:</p>
      <ul class="list-disc pl-5 mb-6 space-y-3 text-gray-700">
        <li><strong>EVs Remain Advantaged:</strong> Electric vehicles, particularly those with a motor power below 100 kW, continue to enjoy significantly lower tax rates compared to their petrol or diesel counterparts. This maintains their price advantage and encourages green transport.</li>
        <li><strong>Adjustments for High-Capacity Engines:</strong> There have been slight upward revisions in the excise duty for petrol and diesel vehicles with larger engine capacities (typically above 2000cc), making luxury SUVs and sedans slightly more expensive.</li>
        <li><strong>Hybrid Vehicle Category:</strong> The tax structure for hybrid vehicles has been further clarified to encourage their adoption as a middle ground between traditional and fully electric cars.</li>
      </ul>
      
      <p class="leading-relaxed text-gray-700">For the average buyer, the message is clear: small-capacity petrol cars and mainstream EVs remain the most tax-efficient choices. Before finalizing a purchase, we strongly advise buyers to consult with their dealership to get a precise on-road price calculation based on the very latest tax slabs.</p>
    `,
  },
];