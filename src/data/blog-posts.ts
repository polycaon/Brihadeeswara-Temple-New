export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  featured_image?: string;
  author?: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  published: boolean;
  category?: string;
  tags?: string[];
  read_time?: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: "4",
    title: "Where is Brihadeeswara Temple Located? - Complete Guide",
    slug: "where-is-brihadeeswara-temple-located",
    excerpt: "Discover the exact location of Brihadeeswara Temple in Thanjavur, Tamil Nadu, along with detailed directions and nearby attractions.",
    content: `<article class="prose prose-lg max-w-none">
      <div class="bg-[#FFF8E1] border-l-4 border-[#FFA000] p-6 my-8">
        <p>The Brihadeeswara Temple, also known as the Peruvudaiyar Kovil, is located in the heart of Thanjavur (Tanjore) city in Tamil Nadu, India. Considered as a UNESCO World Heritage Site, the temple stands tall within the Thanjavur Fort Complex, a fortified area that once served as the political and cultural hub of the mighty Chola Empire.</p>
      </div>
      
      <div class="bg-gray-100 p-6 rounded-lg my-8">
        <p>The Brihadeeswara Temple is situated near the southern bank of the Cauvery River and the exact address is:</p>
        <p class="font-bold text-temple-navy">Membalam Rd, Balaganapathy Nagar, Thanjavur, Tamil Nadu 613007</p>
        <p>This makes it easily accessible for pilgrims and travelers exploring South India's spiritual heritage.</p>
      </div>
      
      <div class="my-8">
        <h2 class="text-2xl font-bold text-temple-navy mb-4">Exact Geographic Location & How to Reach</h2>
        <div class="flex justify-center">
        <img src="https://www.researchgate.net/publication/265084072/figure/fig3/AS:667619367612416@1536184269066/Location-map-of-the-study-area.jpg" alt="Thanjavur location map" class="w-[600px] rounded-lg mb-4">
        </div>
        <p>Geographically, Thanjavur lies in the fertile Cauvery Delta region, which is approximately 350 kilometers (or 217 miles) southwest of Chennai and about 55 kilometers (or 34 miles) northeast of Tiruchirappalli (Trichy). The temple is situated within the old walled city area, surrounded by historical structures like the Thanjavur Palace and the Saraswathi Mahal Library.</p>
        <p>For those using GPS navigation, the temple's coordinates are <code class="bg-gray-200 px-2 py-1 rounded">10.7828° N latitude and 79.1318° E longitude</code>, which can be easily located on Google Maps or any navigation app.</p>
      </div>
      
      <div class="my-8">
        <h2 class="text-2xl font-bold text-temple-navy mb-4">Why the Location Matters</h2>
        <div class="flex justify-center">
        <img src="https://live.staticflickr.com/3894/14914066431_273b874181_h.jpg" alt="Brihadeeswara Temple complex view" class="w-[1000px] rounded-lg mb-4">
        </div>
        <p>The Brihadeeswara Temple's location in Thanjavur Fort features its historical importance as the spiritual and main center of the Chola dynasty. Built by Emperor Raja Raja Chola I in 1010 CE, the temple was designed to show the empire's greatness, and its location was carefully chosen to dominate the city's skyline. Even today, the temple remains a crucial point for devotees, historians, and architecture lovers.</p>
        <p>For travelers planning a visit, the temple's central location in Thanjavur means you can easily explore nearby attractions like the Thanjavur Maratha Palace, Schwartz Church, and the Tamil University Museum, all within a short distance.</p>
      </div>
      
      <div class="bg-[#E8F5E9] border-l-4 border-[#4CAF50] p-6 my-8">
        <h3 class="text-xl font-bold text-temple-navy mb-3">Pro Tip for Visitors</h3>
        <p>To avoid crowds, plan your visit early in the morning or on weekdays. The temple is open from 6:00 AM to 12:30 PM and 4:00 PM to 8:30 PM.</p>
        <p>For accurate temple timings and rituals, please check <a href="/visitor-info" class="text-temple-red hover:text-temple-brown">our visitor information page</a>.</p>
        <p>Wondering how much time you'll need? Read our guide on <a href="/blog/how-much-time-needed-visit-brihadeeswarar-temple" class="text-temple-red hover:text-temple-brown">how much time is needed to explore the temple</a>.</p>
      </div>
      
      <div class="my-8">
        <h2 class="text-2xl font-bold text-temple-navy mb-4">Nearby Attractions</h2>
        <div class="flex justify-center">
        <img src="https://thanjavur.info/wp-content/uploads/2019/05/thanjavur-aranmanai-palace.jpg" alt="Thanjavur Palace" class="w-[600px] rounded-lg mb-4">
        </div>
        <ul class="space-y-2">
          <li><strong>Thanjavur Palace</strong> - Just 500m from the temple</li>
          <li><strong>Saraswathi Mahal Library</strong> - Ancient library with rare manuscripts</li>
          <li><strong>Schwartz Church</strong> - Historic colonial-era church</li>
          <li><strong>Tamil University Museum</strong> - Showcasing Tamil culture and history</li>
        </ul>
      </div>
      
      <div class="bg-[#FFF8E1] border-l-4 border-[#FFA000] p-6 my-8">
        <h3 class="text-xl font-bold text-temple-navy mb-3">Plan Your Visit</h3>
        <p>Now that you know exactly where the Brihadeeswara Temple is located, you can plan your pilgrimage or cultural visit to this magnificent Chola-era wonder. Don't forget to check:</p>
        <ul class="space-y-2">
          <li><a href="/visitor-info" class="text-temple-red hover:text-temple-brown">Temple timings and rituals</a></li>
          <li><a href="/blog/how-much-time-needed-visit-brihadeeswarar-temple" class="text-temple-red hover:text-temple-brown">Time needed for exploration</a></li>
          <li><a href="/visitor-info#accommodation" class="text-temple-red hover:text-temple-brown">Nearby accommodation options</a></li>
        </ul>
      </div>
    </article>`,
    author: "Temple Administration",
    published_at: "2025-04-28T12:00:00Z",
    created_at: "2025-04-28T12:00:00Z",
    updated_at: "2025-04-28T12:00:00Z",
    published: true,
    category: "Visitor Information",
    read_time: 6,
    tags: ["location", "directions", "visitor guide", "nearby attractions"]
  },
  {
    id: "1",
    title: "Brihadeeswara Temple Timings",
    slug: "brihadeeswara-temple-timings",
    excerpt: "A comprehensive guide to Brihadeeswara Temple's visiting hours and important information for planning your visit.",
    content: `<article class="prose prose-lg max-w-none">
      <div class="bg-[#e3f2fd] border-l-4 border-[#2196f3] p-6 my-8">
        <p>The Brihadeeswara Temple in Thanjavur, which is locally known as Rajarajeswaram or Peruvudaiyar Kovil, is one of India's oldest and grandest Shiva temples, a stunning example of Chola dynasty architecture. This UNESCO-listed temple stands on the south bank of the Cauvery River in Tamil Nadu.</p>
      </div>
      
      <div class="bg-temple-stone rounded-lg p-6 my-8">
        <h2 class="text-temple-navy font-bold mb-4">Brihadeeswara Temple Timings (Daily)</h2>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse">
            <thead>
              <tr class="bg-temple-navy">
                <th class="border border-gray-300 p-4 text-white font-bold text-lg">Temple Timings</th>
                <th class="border border-gray-300 p-4 text-white font-bold text-lg">Temple Opening Time</th>
                <th class="border border-gray-300 p-4 text-white font-bold text-lg">Temple Closing Time</th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr>
                <td class="border border-gray-300 p-4 font-semibold">Morning</td>
                <td class="border border-gray-300 p-4 text-temple-red">6:00 am</td>
                <td class="border border-gray-300 p-4 text-temple-red">12:30 pm</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-4 font-semibold">Evening</td>
                <td class="border border-gray-300 p-4 text-temple-red">4:00 pm</td>
                <td class="border border-gray-300 p-4 text-temple-red">8:30 pm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div class="bg-[#fff8e1] border-l-4 border-[#ffc107] p-6 my-8">
        <h3 class="text-temple-navy font-bold mb-4">Important Notes:</h3>
        <ul class="space-y-2">
          <li class="flex items-center">
            <span class="text-[#27ae60] mr-2">✓</span>
            The temple follows the same schedule every day, including weekends
          </li>
          <li class="flex items-center">
            <span class="text-[#27ae60] mr-2">✓</span>
            Break between 12:30 PM to 4:00 PM (temple remains closed)
          </li>
          <li class="flex items-center">
            <span class="text-[#27ae60] mr-2">✓</span>
            Best time to visit: Early morning or late evening
          </li>
          <li class="flex items-center">
            <span class="text-[#27ae60] mr-2">✓</span>
            Entry is free (fees apply for special poojas and sevas)
          </li>
        </ul>
      </div>
    </article>`,
    author: "Temple Administration",
    published_at: "2025-02-24T12:00:00Z",
    created_at: "2025-02-24T12:00:00Z",
    updated_at: "2025-02-24T12:00:00Z",
    published: true,
    category: "Visitor Information",
    read_time: 3,
    tags: ["timings", "visitor info", "temple guide"]
  },
  {
    id: "2",
    title: "How Much Time Is Needed to Visit Brihadeeswarar Temple?",
    slug: "how-much-time-needed-visit-brihadeeswarar-temple",
    excerpt: "A detailed guide on planning your visit duration to the Brihadeeswarar Temple based on your interests and what you want to explore.",
    content: `<article class="prose prose-lg max-w-none">
      <div class="bg-[#e3f2fd] border-l-4 border-[#2196f3] p-6 my-8">
        <p>Your visit duration to the Brihadeeswarar Temple (Big Temple) depends on your interests. Here's a comprehensive breakdown:</p>
      </div>
      
      <div class="bg-temple-stone rounded-lg p-6 my-8">
        <h3 class="text-temple-navy font-bold mb-4">1. Quick Darshan (1 Hour)</h3>
        <ul class="space-y-2">
          <li class="flex items-center">
            <span class="text-temple-red mr-2">•</span>
            If you're only seeking darshan and blessings of Lord Shiva
          </li>
          <li class="flex items-center">
            <span class="text-temple-red mr-2">•</span>
            Expect longer queues during festivals or auspicious days
          </li>
        </ul>
      </div>
      
      <div class="bg-temple-stone rounded-lg p-6 my-8">
        <h3 class="text-temple-navy font-bold mb-4">2. Exploring Architecture & Sculptures (2-3 Hours)</h3>
        <ul class="space-y-2">
          <li class="flex items-center">
            <span class="text-temple-red mr-2">•</span>
            World's largest Shiva Lingam and Nandi statue
          </li>
          <li class="flex items-center">
            <span class="text-temple-red mr-2">•</span>
            Intricate Chola-era stone carvings
          </li>
          <li class="flex items-center">
            <span class="text-temple-red mr-2">•</span>
            On-site museum with ancient relics
          </li>
        </ul>
      </div>
      
      <div class="bg-temple-stone rounded-lg p-6 my-8">
        <h3 class="text-temple-navy font-bold mb-4">3. Peak Times & Tips</h3>
        <ul class="space-y-2">
          <li class="flex items-center">
            <span class="text-temple-red mr-2">•</span>
            Mornings (6 AM - 9 AM) are ideal
          </li>
          <li class="flex items-center">
            <span class="text-temple-red mr-2">•</span>
            Avoid weekends & festivals for shorter wait times
          </li>
          <li class="flex items-center">
            <span class="text-temple-red mr-2">•</span>
            Guided tours available at ticket counter
          </li>
        </ul>
      </div>
      
      <div class="bg-[#fff8e1] border-l-4 border-[#ffc107] p-6 my-8">
        <h3 class="text-temple-navy font-bold mb-4">Why It Takes 2-3 Hours?</h3>
        <ul class="space-y-2">
          <li class="flex items-center">
            <span class="text-[#27ae60] mr-2">✓</span>
            <strong>Sheer Scale:</strong> 3.2 hectares of extensive walking
          </li>
          <li class="flex items-center">
            <span class="text-[#27ae60] mr-2">✓</span>
            <strong>Photo Stops:</strong> Countless Instagram-worthy spots
          </li>
          <li class="flex items-center">
            <span class="text-[#27ae60] mr-2">✓</span>
            <strong>Guided Tours:</strong> ₹200-500 for detailed insights
          </li>
        </ul>
      </div>
    </article>`,
    author: "Temple Administration",
    published_at: "2025-03-24T13:00:00Z",
    created_at: "2025-03-24T13:00:00Z",
    updated_at: "2025-03-24T13:00:00Z",
    published: true,
    category: "Visitor Information",
    read_time: 4,
    tags: ["visitor guide", "temple tour", "planning"]
  },
  {
    id: "3",
    title: "Best Time to Visit Brihadeeswarar Temple",
    slug: "best-time-to-visit-brihadeeswarar-temple",
    excerpt: "Learn about the ideal times and seasons to visit Brihadeeswarar Temple for the most comfortable and enriching experience.",
    content: `<article class="prose prose-lg max-w-none">
      <p>Planning your visit to the UNESCO-listed Brihadeeswarar Temple? Here's when to go for the most comfortable experience:</p>
      
      <h2>Recommended Visiting Times:</h2>
      
      <div class="bg-temple-stone rounded-lg p-6 my-8">
        <h3 class="text-temple-navy font-bold mb-4">1. Early Morning (6:00 AM - 8:30 AM)</h3>
        <ul class="list-disc pl-6 space-y-2">
          <li>Beat the crowds and intense heat</li>
          <li>Cooler temple floors (important as you must walk barefoot)</li>
          <li>Peaceful atmosphere for spiritual experience</li>
          <li>Best lighting for photography</li>
        </ul>
      </div>
      
      <div class="bg-temple-stone rounded-lg p-6 my-8">
        <h3 class="text-temple-navy font-bold mb-4">2. Late Afternoon (4:00 PM - 6:30 PM)</h3>
        <ul class="list-disc pl-6 space-y-2">
          <li>Avoids peak daytime heat</li>
          <li>Beautiful golden hour lighting on ancient carvings</li>
          <li>More cultural activities often occur</li>
        </ul>
      </div>
      
      <h2>Seasons to Consider:</h2>
      <ul class="list-disc pl-6 space-y-2 my-6">
        <li><strong>Winter (Nov-Feb):</strong> Most comfortable (25-30°C)</li>
        <li><strong>Summer (Mar-Jun):</strong> Extremely hot (up to 40°C) - morning visits essential</li>
        <li><strong>Monsoon (Jul-Oct):</strong> Humid but manageable</li>
      </ul>
      
      <div class="bg-[#fff8e1] border-l-4 border-[#ffc107] p-6 my-8">
        <h3 class="text-temple-navy font-bold mb-4">Important Notes:</h3>
        <ul class="space-y-2">
          <li class="flex items-center">
            <span class="text-[#27ae60] mr-2">✓</span>
            <strong>Barefoot Walking:</strong> All visitors must remove footwear
          </li>
          <li class="flex items-center">
            <span class="text-[#27ae60] mr-2">✓</span>
            <strong>Floor Temperature:</strong> Can become extremely hot by midday (test with your hand before walking)
          </li>
          <li class="flex items-center">
            <span class="text-[#27ae60] mr-2">✓</span>
            <strong>Festival Days:</strong> Expect larger crowds but more vibrant atmosphere
          </li>
        </ul>
      </div>
      
      <div class="bg-[#e3f2fd] border-l-4 border-[#2196f3] p-6 my-8 italic">
        <strong>Pro Tip:</strong> Combine your morning temple visit with nearby attractions like the Tanjore Palace in the afternoon when indoor spaces are cooler.
      </div>
    </article>`,
    author: "Temple Administration",
    published_at: "2024-02-24T14:00:00Z",
    created_at: "2024-02-24T14:00:00Z",
    updated_at: "2024-02-24T14:00:00Z",
    published: true,
    category: "Visitor Information",
    read_time: 5,
    tags: ["best time", "seasons", "visitor guide", "tips"]
  }
];