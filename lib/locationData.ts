export type CityData = {
  name: string;
  state: string;
  stateSlug: string;
  slug: string;
  intro: string;
  reasons: { title: string; desc: string }[];
  nearby: { name: string; slug: string; stateSlug: string }[];
  faqs: { q: string; a: string }[];
  reviews: { name: string; text: string; service: string }[];
};

export const TX_CITY_DATA: Record<string, CityData> = {
  dallas: {
    name: "Dallas",
    state: "Texas",
    stateSlug: "tx",
    slug: "dallas",
    intro: "AlphaLux brings luxury, non-toxic house cleaning to homeowners across Dallas — from Uptown high-rises to Lakewood historic homes and North Dallas family properties. Consistently spotless results using eco-friendly products safe for every family member. Whether you're in Uptown, Oak Cliff, East Dallas, or Preston Hollow, we deliver the same white-glove standard every visit.",
    reasons: [
      { title: "Dallas Summers Demand Deep Cleans", desc: "Dallas summers are tough on homes — our deep cleans tackle A/C dust, pollen buildup, and humidity-related grime that accumulates throughout the season." },
      { title: "Built Around Dallas Schedules", desc: "Busy professionals and families love our recurring plans — we work around your schedule so your home is always ready without the effort." },
      { title: "We Know Dallas Neighborhoods", desc: "From downtown condos to Preston Hollow estates to Lakewood bungalows — we know the neighborhoods and the homes. Consistent, reliable, local service." },
    ],
    nearby: [
      { name: "Plano", slug: "dallas", stateSlug: "tx" },
      { name: "Frisco", slug: "dallas", stateSlug: "tx" },
      { name: "Irving", slug: "dallas", stateSlug: "tx" },
      { name: "Fort Worth", slug: "fort-worth", stateSlug: "tx" },
    ],
    faqs: [
      { q: "Do you serve all Dallas neighborhoods?", a: "Yes — from Uptown and Downtown to Lakewood, Oak Cliff, East Dallas, North Dallas, Preston Hollow, and beyond." },
      { q: "Do you serve nearby Dallas suburbs?", a: "We primarily serve Dallas proper. For nearby cities like Plano, Frisco, and Irving, call us at (972) 559-0223 to confirm availability." },
    ],
    reviews: [
      { name: "Rachel T.", text: "My Lakewood home has never looked better. The team was on time, thorough, and used products that didn't trigger my daughter's allergies at all.", service: "Deep Cleaning" },
      { name: "James K.", text: "I've tried three other cleaning services in Dallas. AlphaLux is the only one that actually cleans the baseboards and doesn't just wipe the visible surfaces.", service: "Standard Cleaning" },
    ],
  },
  "fort-worth": {
    name: "Fort Worth",
    state: "Texas",
    stateSlug: "tx",
    slug: "fort-worth",
    intro: "From the historic Stockyards to modern Alliance homes and West Fort Worth ranch properties, AlphaLux serves every corner of Cowtown with luxury, eco-conscious cleaning standards. Fort Worth's diverse neighborhoods — from Westover Hills to the Near Southside arts district — all benefit from our non-toxic, detail-first approach.",
    reasons: [
      { title: "Safe for Fort Worth Families", desc: "Non-toxic products valued by Fort Worth families with young children and pets. Biodegradable, plant-based — zero harsh chemicals." },
      { title: "Built for Bigger Homes", desc: "We accommodate Fort Worth's larger home sizes with efficient, detail-focused teams that don't cut corners regardless of square footage." },
      { title: "Reliable Across Fort Worth's Geography", desc: "From Downtown to Alliance to Westover Hills — we cover Fort Worth's wide geography with consistent scheduling and punctual teams." },
    ],
    nearby: [
      { name: "Arlington", slug: "fort-worth", stateSlug: "tx" },
      { name: "Mansfield", slug: "fort-worth", stateSlug: "tx" },
      { name: "Keller", slug: "fort-worth", stateSlug: "tx" },
      { name: "Dallas", slug: "dallas", stateSlug: "tx" },
    ],
    faqs: [
      { q: "Do you serve Westover Hills and Aledo area?", a: "Yes — we serve Fort Worth and surrounding areas. Call (972) 559-0223 to confirm your specific location." },
      { q: "Can you clean large ranch-style properties?", a: "Absolutely. Our teams are experienced with larger Fort Worth properties and we price based on square footage and scope." },
    ],
    reviews: [
      { name: "Susan M.", text: "Fort Worth isn't short on cleaning services, but none of them use non-toxic products. AlphaLux is the only one I trust with my kids and two dogs in the house.", service: "Recurring Cleaning" },
      { name: "Bill R.", text: "We have a 4,200 sq ft home in Westover Hills. AlphaLux handled it thoroughly and professionally. Worth every penny.", service: "Deep Cleaning" },
    ],
  },
  austin: {
    name: "Austin",
    state: "Texas",
    stateSlug: "tx",
    slug: "austin",
    intro: "Austin's eco-minded culture aligns perfectly with our non-toxic approach. Whether you're in South Congress, Tarrytown, Zilker, or North Austin's tech corridors, AlphaLux delivers luxury without the chemical load. We understand Austin's commitment to sustainability — and we build that into every clean.",
    reasons: [
      { title: "Austin's Green Ethos Is Ours Too", desc: "Austin's green ethos matches our 100% biodegradable product lineup. No harsh chemicals, no environmental compromise — ever." },
      { title: "Short-Term Rental Experts", desc: "Short-term rental hosts across Austin trust our Airbnb turnover speed and reliability. We handle tight windows and 5-star standards." },
      { title: "Every Austin Home Style Served", desc: "Familiar with Austin's varied home styles — modern builds near Domain to historic bungalows near UT and South Austin craftsmans." },
    ],
    nearby: [
      { name: "Round Rock", slug: "austin", stateSlug: "tx" },
      { name: "Cedar Park", slug: "austin", stateSlug: "tx" },
      { name: "Pflugerville", slug: "austin", stateSlug: "tx" },
      { name: "Houston", slug: "houston", stateSlug: "tx" },
    ],
    faqs: [
      { q: "Do you serve East Austin and South Congress?", a: "Yes — we serve all Austin neighborhoods, from South Congress and East Austin to Tarrytown, Zilker, and North Austin." },
      { q: "Can you handle same-day Airbnb turnovers in Austin?", a: "Yes, typically within a 3–4 hour window. Contact us to discuss your listing's schedule." },
    ],
    reviews: [
      { name: "Maya P.", text: "As someone who takes environmental impact seriously, AlphaLux is the only Austin cleaning service that truly walks the walk. All eco products, reliable team, excellent results.", service: "Recurring Cleaning" },
      { name: "Ethan W.", text: "I run two Airbnbs in East Austin. AlphaLux handles both turnovers every week. Never missed a window, never a guest complaint about cleanliness.", service: "Airbnb Cleaning" },
    ],
  },
  houston: {
    name: "Houston",
    state: "Texas",
    stateSlug: "tx",
    slug: "houston",
    intro: "Houston's size and diversity — River Oaks estates, Heights bungalows, Energy Corridor townhomes — demands a cleaning service that scales. AlphaLux delivers consistent luxury-level cleaning across every Houston neighborhood with the eco-friendly standards that set us apart.",
    reasons: [
      { title: "Houston's Climate Demands Deep Cleans", desc: "Houston humidity and allergens make our deep cleans and HEPA post-construction cleans top sellers. We tackle the buildup that Houston's environment creates." },
      { title: "Any Size Home, Same Standard", desc: "We handle 1BR condos to 5,000+ sq ft estates. Our teams scale to the job without compromising on detail or quality." },
      { title: "Reliable Across Every Houston Neighborhood", desc: "Background-checked, uniformed teams deployed across every neighborhood — River Oaks, Heights, Midtown, Energy Corridor, and beyond." },
    ],
    nearby: [
      { name: "Sugar Land", slug: "houston", stateSlug: "tx" },
      { name: "The Woodlands", slug: "houston", stateSlug: "tx" },
      { name: "Katy", slug: "houston", stateSlug: "tx" },
      { name: "San Antonio", slug: "san-antonio", stateSlug: "tx" },
    ],
    faqs: [
      { q: "Do you clean in River Oaks and West University?", a: "Yes — we serve all Houston neighborhoods including River Oaks, West University, Heights, Midtown, and Energy Corridor." },
      { q: "Do you handle post-hurricane or post-flood cleaning?", a: "We handle post-construction and renovation cleaning. For post-flood remediation, we recommend a specialized remediation company in addition to our services." },
    ],
    reviews: [
      { name: "Carlos V.", text: "Houston heat and humidity create a level of grime that regular cleaning can't handle. AlphaLux's deep clean got my house back to baseline. Incredible difference.", service: "Deep Cleaning" },
      { name: "Lisa H.", text: "We moved into a newly renovated home in River Oaks. AlphaLux handled the post-construction clean and it was spotless. Zero construction dust, perfect finishes.", service: "Post Construction Cleaning" },
    ],
  },
  "san-antonio": {
    name: "San Antonio",
    state: "Texas",
    stateSlug: "tx",
    slug: "san-antonio",
    intro: "From King William's historic homes to modern Stone Oak builds, AlphaLux serves San Antonio with eco-friendly, luxury-level care. Our teams know the city and respect every home — from River Walk-adjacent rentals to family homes in the northwest.",
    reasons: [
      { title: "Riverwalk Rental Hosts Trust Us", desc: "Riverwalk vacation rental hosts rely on our fast, thorough turnovers. We know what Riverwalk guests expect and deliver it every time." },
      { title: "Reliable for Military Families", desc: "Military families near Lackland, Randolph, and Fort Sam Houston rely on our move-out cleaning reliability — especially during PCS moves." },
      { title: "We Know SA's Neighborhoods", desc: "Locally responsive — we know San Antonio's diverse neighborhoods from King William to Stone Oak, Helotes to Alamo Heights." },
    ],
    nearby: [
      { name: "New Braunfels", slug: "san-antonio", stateSlug: "tx" },
      { name: "Schertz", slug: "san-antonio", stateSlug: "tx" },
      { name: "Helotes", slug: "san-antonio", stateSlug: "tx" },
      { name: "Austin", slug: "austin", stateSlug: "tx" },
    ],
    faqs: [
      { q: "Do you serve Stone Oak and the medical center area?", a: "Yes — we serve all San Antonio neighborhoods, from Downtown and King William to Stone Oak, Alamo Heights, and the medical center corridor." },
      { q: "Do you offer military move-out cleans?", a: "Yes — we're experienced with PCS move-out requirements and the standards military housing inspectors look for." },
    ],
    reviews: [
      { name: "Maria G.", text: "We PCS'd out of Fort Sam Houston and AlphaLux got us our full deposit back with zero issues on the walkthrough. Couldn't recommend more.", service: "Move Out Cleaning" },
      { name: "Tom B.", text: "I have a vacation rental near the Riverwalk. AlphaLux handles the turnover every time a guest checks out. Always guest-ready, never a complaint.", service: "Vacation Rental Cleaning" },
    ],
  },
};

export const CA_CITY_DATA: Record<string, CityData> = {
  "beverly-hills": {
    name: "Beverly Hills",
    state: "California",
    stateSlug: "ca",
    slug: "beverly-hills",
    intro: "Beverly Hills homes demand white-glove treatment — and AlphaLux delivers. Our luxury, non-toxic cleaning is ideal for high-end properties where detail, discretion, and premium products matter. Whether it's a Trousdale estate or a Flats bungalow, every home receives the same meticulous standard.",
    reasons: [
      { title: "Trained for High-End Properties", desc: "Discreet, professional teams trained for luxury homes. We protect valuable finishes, artwork, and furnishings while delivering a spotless result." },
      { title: "Health-Conscious Products", desc: "Eco-conscious, non-toxic products preferred by Beverly Hills' health-minded residents. No harsh chemicals, ever." },
      { title: "Detail That Respects Value", desc: "Detail-oriented service that respects valuable finishes, hardwood floors, marble surfaces, and custom fixtures." },
    ],
    nearby: [
      { name: "Bel Air", slug: "beverly-hills", stateSlug: "ca" },
      { name: "West Hollywood", slug: "hollywood", stateSlug: "ca" },
      { name: "Brentwood", slug: "brentwood", stateSlug: "ca" },
      { name: "Los Angeles", slug: "los-angeles", stateSlug: "ca" },
    ],
    faqs: [
      { q: "Are your teams trained for luxury home standards?", a: "Yes — our teams are trained specifically for luxury properties, including proper handling of delicate surfaces, fine furnishings, and high-value finishes." },
      { q: "Do you offer discreet service for privacy-minded clients?", a: "Absolutely. Discretion and professionalism are part of our standard for every Beverly Hills client." },
    ],
    reviews: [
      { name: "Diana W.", text: "I've had AlphaLux cleaning my home in the Flats for over a year. The level of detail is exceptional and they've never damaged a single thing. Truly white-glove.", service: "Recurring Cleaning" },
      { name: "Robert A.", text: "The non-toxic commitment was why I switched to AlphaLux. My home in Beverly Hills is full of children and pets. Clean without chemicals — exactly what I needed.", service: "Standard Cleaning" },
    ],
  },
  brentwood: {
    name: "Brentwood",
    state: "California",
    stateSlug: "ca",
    slug: "brentwood",
    intro: "Brentwood's blend of privacy, luxury, and family-focused homes matches AlphaLux perfectly. Eco-friendly cleaning meeting Brentwood family standards while keeping homes safe for kids and pets. From San Vicente corridor to Mandeville Canyon, we serve every Brentwood neighborhood.",
    reasons: [
      { title: "Family-Safe Non-Toxic Products", desc: "Family-safe, non-toxic products trusted by health-conscious Brentwood parents. Biodegradable, plant-based, and safe for kids and pets." },
      { title: "Efficient for Larger Homes", desc: "Brentwood's larger home sizes are no problem — our teams work efficiently without ever cutting corners on detail." },
      { title: "Reliable for Busy Professionals", desc: "Reliable recurring schedules for Brentwood's busy professionals — we maintain your home without you needing to think about it." },
    ],
    nearby: [
      { name: "Pacific Palisades", slug: "brentwood", stateSlug: "ca" },
      { name: "Santa Monica", slug: "santa-monica", stateSlug: "ca" },
      { name: "Beverly Hills", slug: "beverly-hills", stateSlug: "ca" },
      { name: "Los Angeles", slug: "los-angeles", stateSlug: "ca" },
    ],
    faqs: [
      { q: "Do you serve Mandeville Canyon and upper Brentwood?", a: "Yes — we serve all Brentwood areas including canyon properties and the San Vicente corridor." },
      { q: "Do you handle homes with young children and pets?", a: "Absolutely. Our 100% non-toxic product line is specifically designed to be safe around children and pets." },
    ],
    reviews: [
      { name: "Claire B.", text: "We have three kids and two dogs. Finding a cleaning service that used truly non-toxic products was nearly impossible until AlphaLux. They're the only ones we'll use.", service: "Recurring Cleaning" },
      { name: "Mark S.", text: "Our Brentwood home is 4,800 sq ft. AlphaLux handles it in about 4 hours and it's immaculate every time.", service: "Standard Cleaning" },
    ],
  },
  glendale: {
    name: "Glendale",
    state: "California",
    stateSlug: "ca",
    slug: "glendale",
    intro: "From Verdugo Woodlands hillside homes to walkable downtown Glendale, AlphaLux brings consistent luxury-level cleaning to every corner with products safe for families and pets. We know Glendale's diverse mix of condo communities, single-family neighborhoods, and hillside properties.",
    reasons: [
      { title: "Familiar with Glendale's Diversity", desc: "From hillside homes in Verdugo Woodlands to downtown condos and flat neighborhoods — we know Glendale's varied home styles and clean them all to the same standard." },
      { title: "Trusted by Glendale Families", desc: "Strong reviews from Glendale families who value non-toxic cleaning. Safe for children, pets, and allergy-sensitive households." },
      { title: "Commuter-Friendly Scheduling", desc: "Flexible scheduling around Glendale's commuter culture — we work while you're at work, so you return to a clean home." },
    ],
    nearby: [
      { name: "Burbank", slug: "glendale", stateSlug: "ca" },
      { name: "Pasadena", slug: "pasadena", stateSlug: "ca" },
      { name: "Los Angeles", slug: "los-angeles", stateSlug: "ca" },
    ],
    faqs: [
      { q: "Do you serve Montrose and La Crescenta?", a: "We primarily serve Glendale proper. For nearby Montrose and La Crescenta, call (972) 559-0223 to confirm availability." },
      { q: "Do you clean high-rise or condo buildings?", a: "Yes — we clean individual units in condo and apartment buildings throughout Glendale." },
    ],
    reviews: [
      { name: "Anna K.", text: "Living in Glendale near the hills means a lot of dust. AlphaLux's deep clean addressed buildup I didn't even know was there. Excellent team.", service: "Deep Cleaning" },
      { name: "George P.", text: "We've been using AlphaLux bi-weekly for 8 months. Consistent team, consistent quality. Never a complaint.", service: "Recurring Cleaning" },
    ],
  },
  pasadena: {
    name: "Pasadena",
    state: "California",
    stateSlug: "ca",
    slug: "pasadena",
    intro: "Pasadena's historic homes — Craftsman bungalows to Oak Knoll estates — require cleaners who respect architectural detail. AlphaLux delivers careful luxury-level cleaning with eco-friendly products that protect delicate finishes. We understand what Pasadena homes need.",
    reasons: [
      { title: "Trained for Historic Finishes", desc: "Trained for Pasadena's historic finishes — original hardwood, period tile, Craftsman detail work, and delicate surfaces that require a careful touch." },
      { title: "Eco-Conscious Products for Eco-Conscious Residents", desc: "Non-toxic products preferred by Pasadena's environmentally-minded residents — protecting both your home and the environment." },
      { title: "Consistent Across Every Neighborhood", desc: "Consistent service whether you're in Cal Tech's neighborhood, Oak Knoll, Bungalow Heaven, or Madison Heights." },
    ],
    nearby: [
      { name: "Altadena", slug: "pasadena", stateSlug: "ca" },
      { name: "San Marino", slug: "pasadena", stateSlug: "ca" },
      { name: "Glendale", slug: "glendale", stateSlug: "ca" },
      { name: "Los Angeles", slug: "los-angeles", stateSlug: "ca" },
    ],
    faqs: [
      { q: "Are you careful with original hardwood floors and Craftsman details?", a: "Yes — our teams are specifically trained on period finishes and historic materials common in Pasadena homes." },
      { q: "Do you serve San Marino and Arcadia?", a: "We primarily serve Pasadena. For San Marino and Arcadia, call (972) 559-0223 to confirm availability." },
    ],
    reviews: [
      { name: "Helen R.", text: "Our 1920s Craftsman in Bungalow Heaven has original hardwood and plaster throughout. AlphaLux cleaned it beautifully — not a scratch, not a streak, not a missed corner.", service: "Deep Cleaning" },
      { name: "David L.", text: "The first Pasadena cleaner I've found who actually understands period homes. They treated our Craftsman bungalow with the respect it deserves.", service: "Standard Cleaning" },
    ],
  },
  "los-angeles": {
    name: "Los Angeles",
    state: "California",
    stateSlug: "ca",
    slug: "los-angeles",
    intro: "LA is home to thousands of our clients — from Silver Lake bungalows to Mid-City apartments to Hancock Park estates. AlphaLux delivers consistent, luxury-level, eco-conscious cleaning across every LA neighborhood. We know the city, we know the homes, and we deliver the same standard everywhere.",
    reasons: [
      { title: "We Know Every LA Neighborhood", desc: "We know the city — every neighborhood, traffic pattern, and home style. Consistent scheduling and reliable service across the sprawl." },
      { title: "LA's Health-Conscious Choice", desc: "Non-toxic products matching LA's health-conscious culture. No harsh chemicals in the city's air or your home's surfaces." },
      { title: "Scales from 1BR to Estate", desc: "Scalable service from 1BR Hollywood apartments to Hancock Park estates — same standard, same commitment, same team quality." },
    ],
    nearby: [
      { name: "Silver Lake", slug: "los-angeles", stateSlug: "ca" },
      { name: "Beverly Hills", slug: "beverly-hills", stateSlug: "ca" },
      { name: "Santa Monica", slug: "santa-monica", stateSlug: "ca" },
      { name: "Hollywood", slug: "hollywood", stateSlug: "ca" },
    ],
    faqs: [
      { q: "Do you serve all LA neighborhoods?", a: "We serve a wide range of LA neighborhoods — Silver Lake, Echo Park, Hancock Park, Koreatown, Mid-City, and more. Call to confirm your specific area." },
      { q: "Can you clean apartment buildings and condo units?", a: "Yes — individual apartment and condo units throughout LA are a regular part of our service area." },
    ],
    reviews: [
      { name: "Nina T.", text: "I have a 1BR in Silver Lake and AlphaLux has been my go-to for over a year. Reliable, thorough, and the non-toxic products are a non-negotiable for me.", service: "Recurring Cleaning" },
      { name: "Jason F.", text: "Hancock Park estate, 5,200 sq ft. AlphaLux handles every room with the same care. The level of detail in the bathrooms and kitchen alone is worth the price.", service: "Standard Cleaning" },
    ],
  },
  "santa-monica": {
    name: "Santa Monica",
    state: "California",
    stateSlug: "ca",
    slug: "santa-monica",
    intro: "Santa Monica's coastal lifestyle and eco-minded culture align perfectly with our sustainable approach. From ocean-facing condos to family homes north of Montana, AlphaLux serves every Santa Monica block with non-toxic, luxury-level cleaning.",
    reasons: [
      { title: "Coastal Cleaning Expertise", desc: "Ocean air is tough on homes — salt deposits, humidity buildup, and coastal grime require specific attention. Our deep cleans address what standard cleaning misses." },
      { title: "Sustainability Matches Local Values", desc: "Sustainability-focused products match Santa Monica's community values. 100% biodegradable, plant-based, aligned with the city's green commitment." },
      { title: "Trusted by Short-Term Rental Hosts", desc: "Trusted by short-term rental hosts along the beach strip — we know the standards beach-area guests expect and deliver them reliably." },
    ],
    nearby: [
      { name: "Venice", slug: "santa-monica", stateSlug: "ca" },
      { name: "Brentwood", slug: "brentwood", stateSlug: "ca" },
      { name: "Pacific Palisades", slug: "santa-monica", stateSlug: "ca" },
      { name: "Los Angeles", slug: "los-angeles", stateSlug: "ca" },
    ],
    faqs: [
      { q: "Do you handle salt air and coastal buildup in Santa Monica?", a: "Yes — coastal homes accumulate salt deposits and moisture-related buildup. Our deep clean protocol specifically addresses these common coastal issues." },
      { q: "Do you serve the beach strip rentals?", a: "Yes — short-term rental turnovers along the Santa Monica beach are a regular service for us." },
    ],
    reviews: [
      { name: "Sophie M.", text: "Living a block from the beach, our windows and surfaces collect salt constantly. AlphaLux is the only service I've found that actually handles coastal buildup properly.", service: "Deep Cleaning" },
      { name: "Alex C.", text: "I have a vacation rental near the Pier. AlphaLux turns it over between every booking without fail. Zero guest complaints about cleanliness in 14 months.", service: "Vacation Rental Cleaning" },
    ],
  },
  hollywood: {
    name: "Hollywood",
    state: "California",
    stateSlug: "ca",
    slug: "hollywood",
    intro: "From historic Hollywood bungalows to modern condos along the Walk of Fame, AlphaLux brings luxury-level eco-conscious cleaning to every style of Hollywood home — with discreet, professional service that respects your privacy and your space.",
    reasons: [
      { title: "Discreet Professional Service", desc: "Discreet service for privacy-minded Hollywood residents. Our teams are professional, uniformed, and understand the value of discretion." },
      { title: "Short-Term Rental Specialists", desc: "Fast turnarounds for Hollywood's active short-term rental market. We know the neighborhood's guest expectations and deliver 5-star results." },
      { title: "Every Hollywood Home Style", desc: "Reliable teams experienced with Hollywood's varied home styles — 1920s bungalows to modern high-rises and canyon homes." },
    ],
    nearby: [
      { name: "West Hollywood", slug: "hollywood", stateSlug: "ca" },
      { name: "Los Feliz", slug: "los-angeles", stateSlug: "ca" },
      { name: "Beverly Hills", slug: "beverly-hills", stateSlug: "ca" },
      { name: "Los Angeles", slug: "los-angeles", stateSlug: "ca" },
    ],
    faqs: [
      { q: "Do you serve the Hollywood Hills?", a: "Yes — we serve Hollywood Hills homes and canyon properties, not just the flats." },
      { q: "Can you handle multiple short-term rental properties?", a: "Yes — we handle individual listings and multi-property portfolios for hosts and property managers throughout Hollywood." },
    ],
    reviews: [
      { name: "Sam L.", text: "I rent out my Hollywood bungalow on Airbnb. AlphaLux turns it over in 3 hours every time. Guests consistently note how clean and fresh it is.", service: "Airbnb Cleaning" },
      { name: "Karen D.", text: "Privacy is important to me and AlphaLux gets it. Professional, thorough, discreet — exactly what I needed.", service: "Recurring Cleaning" },
    ],
  },
  "long-beach": {
    name: "Long Beach",
    state: "California",
    stateSlug: "ca",
    slug: "long-beach",
    intro: "Long Beach's mix of coastal condos, historic craftsman homes, and waterfront properties calls for versatile expertise. AlphaLux delivers consistent luxury across every Long Beach neighborhood — from Belmont Shore to Bixby Knolls — with non-toxic products safe for coastal living.",
    reasons: [
      { title: "Coastal Expertise", desc: "Salt air, humidity, and beach-home wear require specialized knowledge. Our cleaning protocols address the specific challenges of coastal Long Beach properties." },
      { title: "Safe for Coastal Families", desc: "Non-toxic products safe for families, pets, and the allergy profiles common in coastal living environments." },
      { title: "Reliable Across Long Beach", desc: "Reliable service from Belmont Shore to Bixby Knolls to Signal Hill — we cover Long Beach's diverse neighborhoods consistently." },
    ],
    nearby: [
      { name: "Seal Beach", slug: "long-beach", stateSlug: "ca" },
      { name: "Lakewood", slug: "long-beach", stateSlug: "ca" },
      { name: "Los Angeles", slug: "los-angeles", stateSlug: "ca" },
      { name: "Huntington Beach", slug: "huntington-beach", stateSlug: "ca" },
    ],
    faqs: [
      { q: "Do you serve Belmont Shore and Naples?", a: "Yes — we serve all Long Beach neighborhoods including Belmont Shore, Naples, Bixby Knolls, Signal Hill, and more." },
      { q: "Are your products safe for coastal environments?", a: "Yes — our biodegradable products are safe for homes near water, pets, and ecologically sensitive coastal areas." },
    ],
    reviews: [
      { name: "Olivia K.", text: "Our Belmont Shore cottage is steps from the beach. AlphaLux handles the salt and sand buildup better than anyone we've tried.", service: "Deep Cleaning" },
      { name: "Paul T.", text: "I have a rental property in Naples, Long Beach. AlphaLux turns it over reliably between bookings. Clean, professional, on time.", service: "Vacation Rental Cleaning" },
    ],
  },
  "huntington-beach": {
    name: "Huntington Beach",
    state: "California",
    stateSlug: "ca",
    slug: "huntington-beach",
    intro: "Surf City homes face constant salt air, sand, and coastal humidity. AlphaLux delivers detailed eco-conscious cleaning designed for Huntington Beach — from beachfront condos to inland family properties in Huntington Harbour and Seacliff.",
    reasons: [
      { title: "Ocean-Side Wear Expertise", desc: "Experience with ocean-side wear — salt, sand, and humidity require specific cleaning protocols our teams follow on every Huntington Beach visit." },
      { title: "Safe for Surfer Families", desc: "Non-toxic products safe for surfer families, active lifestyles, and the coastal pets and children that fill these homes." },
      { title: "Vacation Rental Turnover Specialists", desc: "Reliable vacation rental turnovers for Huntington Beach's active short-term rental market — beachfront properties handled with care." },
    ],
    nearby: [
      { name: "Seal Beach", slug: "huntington-beach", stateSlug: "ca" },
      { name: "Costa Mesa", slug: "huntington-beach", stateSlug: "ca" },
      { name: "Long Beach", slug: "long-beach", stateSlug: "ca" },
      { name: "Anaheim", slug: "anaheim", stateSlug: "ca" },
    ],
    faqs: [
      { q: "Do you clean beachfront properties and condos?", a: "Yes — beachfront and beach-adjacent properties are a specialty for us. We know the salt and sand issues inside out." },
      { q: "Do you serve Huntington Harbour and Seacliff?", a: "Yes — we serve all Huntington Beach areas including Huntington Harbour, Seacliff, and the downtown beach strip." },
    ],
    reviews: [
      { name: "Tyler S.", text: "Living in HB means sand everywhere all the time. AlphaLux is the first cleaner that actually gets the floors truly clean, not just pushed around. Game changer.", service: "Standard Cleaning" },
      { name: "Breanna H.", text: "We have a vacation rental on the beach. AlphaLux handles every turnover and our listing has maintained a 4.98 rating. Directly because of the cleaning.", service: "Vacation Rental Cleaning" },
    ],
  },
  anaheim: {
    name: "Anaheim",
    state: "California",
    stateSlug: "ca",
    slug: "anaheim",
    intro: "Anaheim's family-centric homes — from neighborhoods near Disneyland to quieter Anaheim Hills — deserve cleaning that keeps kids, pets, and allergy-sensitive family members safe. AlphaLux's non-toxic approach makes the difference that Anaheim families notice.",
    reasons: [
      { title: "Non-Toxic for Anaheim Families", desc: "Non-toxic products trusted by Anaheim families with children. Safe around kids, pets, and allergy-sensitive household members." },
      { title: "Fast Disneyland-Area Turnovers", desc: "Fast vacation rental turnovers for Disneyland-area hosts — we know the expectations of guests visiting one of the world's most visited destinations." },
      { title: "All Anaheim Property Types", desc: "Familiar with Anaheim tract homes, condo communities, and custom Anaheim Hills builds — we clean them all to the same standard." },
    ],
    nearby: [
      { name: "Orange", slug: "anaheim", stateSlug: "ca" },
      { name: "Fullerton", slug: "anaheim", stateSlug: "ca" },
      { name: "Yorba Linda", slug: "anaheim", stateSlug: "ca" },
      { name: "Irvine", slug: "irvine", stateSlug: "ca" },
    ],
    faqs: [
      { q: "Do you clean vacation rentals near Disneyland?", a: "Yes — Disneyland-area vacation rental turnovers are a specialty. We know the quick-turn requirements and guest expectations." },
      { q: "Do you serve Anaheim Hills?", a: "Yes — we serve both the Anaheim flatlands near Disneyland and the hillside communities of Anaheim Hills." },
    ],
    reviews: [
      { name: "Michelle R.", text: "Three kids, two cats, one very clean house thanks to AlphaLux. The non-toxic products were the selling point and the quality keeps us coming back.", service: "Recurring Cleaning" },
      { name: "John P.", text: "I rent out a unit near Disneyland. AlphaLux turns it over between every stay. Guests notice and comment on how clean it is. Five stars every time.", service: "Airbnb Cleaning" },
    ],
  },
  irvine: {
    name: "Irvine",
    state: "California",
    stateSlug: "ca",
    slug: "irvine",
    intro: "Irvine's planned communities call for organized, detail-focused cleaning. AlphaLux delivers reliable eco-conscious cleans across every Irvine village — from Woodbridge to Turtle Rock, Northwood to Quail Hill — with the consistency that Irvine's scheduling-oriented culture expects.",
    reasons: [
      { title: "Reliable On-Time Service", desc: "Reliable on-time service for Irvine's scheduling-oriented culture. We show up when we say we will, every single time." },
      { title: "HOA-Community Experience", desc: "Experience with HOA-governed planned communities — we understand the standards and expectations of managed communities." },
      { title: "Preferred by Health-Conscious Families", desc: "Non-toxic products preferred by health-conscious Irvine families. Many Irvine clients specifically chose us for our zero-chemical commitment." },
    ],
    nearby: [
      { name: "Tustin", slug: "irvine", stateSlug: "ca" },
      { name: "Newport Beach", slug: "irvine", stateSlug: "ca" },
      { name: "Costa Mesa", slug: "irvine", stateSlug: "ca" },
      { name: "Anaheim", slug: "anaheim", stateSlug: "ca" },
    ],
    faqs: [
      { q: "Do you serve all Irvine villages?", a: "Yes — we serve all Irvine communities including Woodbridge, Northwood, Turtle Rock, Quail Hill, Westpark, and the Great Park neighborhoods." },
      { q: "Are you familiar with HOA cleaning standards?", a: "Yes — we're experienced with HOA community requirements and understand the standards expected in planned communities." },
    ],
    reviews: [
      { name: "Jenny C.", text: "Irvine families are particular about cleanliness and what goes into their homes. AlphaLux checks every box — thorough clean, non-toxic products, reliable scheduling.", service: "Recurring Cleaning" },
      { name: "Michael Z.", text: "Our Quail Hill home has been on AlphaLux's schedule for 18 months. Never late, never a missed spot, never a chemical smell. Perfect.", service: "Standard Cleaning" },
    ],
  },
  sacramento: {
    name: "Sacramento",
    state: "California",
    stateSlug: "ca",
    slug: "sacramento",
    intro: "From Midtown's historic Victorians to newer Natomas and Elk Grove developments, AlphaLux brings luxury-level eco-conscious cleaning to every Sacramento neighborhood. Sacramento's diverse housing stock — from century-old Victorians to brand-new builds — all receive the same meticulous standard.",
    reasons: [
      { title: "Summer Dust and Allergen Experts", desc: "Sacramento's hot dry summers demand careful dust and allergen handling. Our HEPA-equipped teams address the seasonal buildup that Sacramento summers create." },
      { title: "Eco-Conscious Choice for Sacramento", desc: "Non-toxic products aligned with Sacramento's growing eco-conscious resident base. Farm-to-table city, farm-to-home cleaning." },
      { title: "Wide Sacramento Footprint", desc: "Reliable service across Sacramento's wide footprint — from Midtown and East Sacramento to Natomas, Land Park, and beyond." },
    ],
    nearby: [
      { name: "Elk Grove", slug: "sacramento", stateSlug: "ca" },
      { name: "Roseville", slug: "sacramento", stateSlug: "ca" },
      { name: "Folsom", slug: "sacramento", stateSlug: "ca" },
    ],
    faqs: [
      { q: "Do you serve Midtown and East Sacramento?", a: "Yes — we serve Sacramento's urban neighborhoods including Midtown, East Sacramento, Land Park, Curtis Park, and more." },
      { q: "Do you handle the summer dust season in Sacramento?", a: "Yes — our deep cleaning protocols are specifically suited to the heavy dust accumulation that Sacramento's hot, dry summers create." },
    ],
    reviews: [
      { name: "Sarah V.", text: "Sacramento summers mean constant dust, especially with the valley winds. AlphaLux's deep clean at the end of summer is now a yearly tradition for us.", service: "Deep Cleaning" },
      { name: "Ben W.", text: "Our Midtown Victorian has original plaster walls and old hardwood. AlphaLux handles it with care and knowledge. Genuinely impressed.", service: "Standard Cleaning" },
    ],
  },
};
