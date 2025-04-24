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