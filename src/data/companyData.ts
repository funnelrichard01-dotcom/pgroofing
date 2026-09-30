import { ServiceItem, ProjectItem, FAQItem } from '../types';

export const COMPANY_INFO = {
  legalName: 'P&G Roofing Contractors Corp',
  brandName: 'P&G Roofing',
  license: 'CCC1329409',
  tagline: 'Your Trusted South Florida Roofing Experts',
  experienceCommunity: 'Over 15 Years Serving the Community',
  experienceExpertise: '35 Years of Industry Expertise',
  address: {
    street: '541 NW 153rd St',
    city: 'Miami',
    state: 'FL',
    zip: '33169',
    country: 'United States',
    full: '541 NW 153rd St, Miami, FL 33169',
  },
  phones: {
    primary: '+1 (305) 300-5145',
    primaryRaw: '+13053005145',
    secondary: '+1 (786) 556-8023',
    secondaryRaw: '+17865568023',
  },
  email: 'info@pg-roofing.com',
  whatsapp: {
    number: '+1 (305) 300-5145',
    link: 'https://wa.me/13053005145',
    prefilledText: 'Hi P&G Roofing, I found your website and would like to discuss my roofing project.',
    directUrl: 'https://wa.me/13053005145?text=Hi%20P%26G%20Roofing%2C%20I%20found%20your%20website%20and%20would%20like%20to%20discuss%20my%20roofing%20project.',
  },
  businessHours: 'Monday – Saturday: 7:00 AM – 6:00 PM | Emergency Response Available',
  counties: ['Miami-Dade County', 'Broward County', 'Palm Beach County'],
  cities: [
    'Aventura',
    'Bal Harbour',
    'Biscayne Park',
    'Coral Gables',
    'Doral',
    'Florida City',
    'Hialeah',
    'Hialeah Gardens',
    'Homestead',
    'Key Biscayne',
    'Miami',
    'Miami Beach',
    'Miami Gardens',
    'Miami Lakes',
    'Miami Shores',
    'Miami Springs',
    'North Bay Village',
    'North Miami',
    'North Miami Beach',
    'Opa-locka',
    'Palmetto Bay',
    'Pinecrest',
    'South Miami',
    'Sunny Isles Beach',
    'Surfside',
    'Sweetwater',
    'Virginia Gardens',
    'West Miami',
  ],
};

export const PARTNERS_BRANDS = [
  { name: 'GAF Roofing', category: 'Shingles & Commercial Systems' },
  { name: 'Owens Corning', category: 'Architectural Shingles' },
  { name: 'Tamko', category: 'Building Products & Shingles' },
  { name: 'Eagle Roofing', category: 'Concrete Roof Tiles' },
  { name: 'Crown Roof Tiles', category: 'Clay & Concrete Tile' },
  { name: 'Verea Clay Roof Tile', category: 'Spanish Clay Tiles' },
  { name: 'Westlake Royal Roofing', category: 'Unified Steel & Clay Solutions' },
  { name: 'Polyglass', category: 'Modified Bitumen & Waterproofing' },
  { name: 'Mulehide', category: 'Low-Slope Membrane Roofing' },
  { name: 'Sika', category: 'Liquid Waterproofing & Roof Systems' },
  { name: 'Tremco', category: 'Commercial Roofing & Sealants' },
  { name: 'TRP Roofing', category: 'Specialty Coatings' },
  { name: 'Bostik Adhesives', category: 'Advanced Tile Mortar & Adhesives' },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Efficiency & Quality',
    description:
      'We combine meticulous Florida code compliance with prompt execution, ensuring your roof is installed or repaired cleanly without unnecessary delays.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Quote & Inspection',
    description:
      'Thorough roof inspections and transparent written quotes provided at zero cost and no obligation, including detailed estimates for repairs.',
    icon: 'ClipboardCheck',
  },
  {
    title: 'Warranties',
    description:
      'Robust manufacturer material warranties alongside our own dedicated company workmanship warranty for complete long-term protection.',
    icon: 'Award',
  },
  {
    title: 'Flexible Financing',
    description:
      'Partnered with recognized financial institutions (including GreenSky / Synovus) to offer accessible monthly payment options subject to credit approval.',
    icon: 'BadgeDollarSign',
  },
  {
    title: 'Quality Materials',
    description:
      'We strictly utilize industry-tested products from premier manufacturers including GAF, Eagle, Verea, Polyglass, Owens Corning, and Westlake Royal.',
    icon: 'Layers',
  },
  {
    title: 'Competitive Pricing',
    description:
      'Direct, fair, and transparent pricing tailored to South Florida properties with no surprise hidden fees or inflated estimates.',
    icon: 'Sparkles',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'metal-roofing',
    title: 'Metal Roofing',
    tagline: 'Extreme hurricane durability, clean architectural lines & superior energy efficiency',
    shortDesc:
      'Standing seam and 5V crimp metal roof systems engineered to withstand South Florida tropical storms while drastically cutting cooling costs.',
    heroImage:
      'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1600&q=80',
    description: [
      'Metal roofing represents one of the most durable, resilient, and energy-efficient roofing investments for South Florida homes and commercial facilities.',
      'Engineered to withstand hurricane-force winds, intense ultraviolet radiation, and driving tropical rains, modern metal roofs offer an extraordinary lifespan of 40 to 70+ years with minimal maintenance required.',
      'Metal roofs naturally reflect solar heat instead of absorbing it into your attic, dramatically lowering interior cooling demand during grueling Florida summers. Systems are fully recyclable at the end of their lifecycle, making them environmentally responsible.',
    ],
    keyBenefits: [
      'Exceptional longevity (40 to 70+ years)',
      'High wind resistance engineered for Florida High-Velocity Hurricane Zones (HVHZ)',
      'Solar reflective cool-roof finishes reduce air conditioning costs',
      'Class A fire resistance and superior impact tolerance',
      '100% recyclable environmentally friendly material',
      'Wide variety of architectural styles, profiles, and color coatings',
    ],
    applications: [
      'Residential standing seam installations',
      'Commercial low and steep slope structures',
      'Coastal homes needing maximum salt-air corrosion resistance',
      'Modern architectural remodels and additions',
    ],
    materials: ['Standing Seam Aluminum & Steel', '5V Crimp Metal Panels', 'Kynar 500 / PVDF Finishes'],
    galleryImages: [
      'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    ],
    ctaText: 'Get a Free Metal Roof Inspection',
  },
  {
    id: 'shingle-roofing',
    title: 'Shingle Roofing',
    tagline: 'Cost-effective, versatile & proven residential protection',
    shortDesc:
      'Premium architectural and impact-resistant asphalt shingles providing reliable storm resistance and beautiful curb appeal.',
    heroImage:
      'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1600&q=80',
    description: [
      'Asphalt shingles remain the most popular residential roofing system across America due to their balance of affordability, style versatility, and dependable weather protection.',
      'P&G Roofing installs high-grade dimensional and architectural shingles manufactured by leading brands such as GAF, Owens Corning, and Tamko, engineered specifically for high-wind Florida conditions and algae resistance.',
      'Whether replacing an aging roof or carrying out selective repairs, our experienced crews ensure proper underlayment sealing, flashing alignment, and wind-rated nail patterns according to Florida Building Code.',
    ],
    keyBenefits: [
      'Budget-friendly upfront installation and replacement cost',
      'Architectural dimensional styles with dimensional depth and shade lines',
      'Algae-resistant granules preventing unsightly Florida black streaks',
      'Wind-resistance ratings up to 130 mph with enhanced fastening',
      'Wide assortment of colors complementing any neighborhood HOA guidelines',
      'Quick installation with typical projects completed in 2 to 4 days',
    ],
    applications: [
      'Single-family homes and townhome communities',
      'Full roof tear-off and replacements',
      'Storm damage shingle repairs and wind-uplift fixes',
    ],
    materials: ['Architectural / Dimensional Shingles', 'High-Wind Rated Shingles', 'Synthetic Underlayment & Ice/Water Shield'],
    galleryImages: [
      'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    ],
    ctaText: 'Get a Free Shingle Roof Inspection',
  },
  {
    id: 'tile-roofing',
    title: 'Tile Roofing',
    tagline: 'Timeless Mediterranean beauty, natural thermal insulation & 50+ year longevity',
    shortDesc:
      'Authentic clay and concrete tile roofing engineered for maximum wind resistance, rain deflection, and iconic South Florida architecture.',
    heroImage:
      'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=1600&q=80',
    description: [
      'Tile roofing is the quintessential architectural signature of South Florida. Beyond its striking Mediterranean elegance, tile offers exceptional resistance to heavy tropical rains, high winds, and severe solar exposure.',
      'P&G Roofing works with premier clay and concrete tile manufacturers including Verea Clay Roof Tile, Eagle Roofing Products, Crown Roof Tiles, and Westlake Royal Roofing.',
      'Natural air circulation beneath installed roof tiles creates a powerful thermal barrier, reducing heat transfer into your living space and significantly improving energy efficiency.',
      'Available in Spanish S-tile, barrel, and sleek contemporary flat tile profiles, tile roofs are known to last 50 years or more with proper maintenance and professional underlayment installation.',
    ],
    keyBenefits: [
      'Unsurpassed longevity (50+ years with proper maintenance)',
      'Natural thermal and acoustic insulation keeping interiors cooler and quieter',
      'Heavy-duty defense against wind, driving rain, and hail',
      'Sustainable natural clay and concrete composition',
      'Rich array of earth tones, glazes, and modern flat profiles',
      'Substantial property value and curb appeal enhancement',
    ],
    applications: [
      'Luxury residential homes and estates',
      'HOA-mandated tile communities',
      'Historic Spanish, Mediterranean, and contemporary Florida architecture',
      'Tile re-roofing, underlayment renewal, and slipped tile repairs',
    ],
    materials: ['Natural Kiln-Fired Clay Tile', 'High-Density Concrete Roof Tile', 'Self-Adhering High-Temp Underlayment', 'Bostik Foam & Mechanical Fasteners'],
    galleryImages: [
      'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    ],
    ctaText: 'Get a Free Tile Roof Inspection',
  },
  {
    id: 'flat-roofing',
    title: 'Flat Roofing',
    tagline: 'Specialized low-slope commercial and residential waterproofing systems',
    shortDesc:
      'TPO, PVC, and Modified Bitumen systems engineered for Florida drainage, intense UV exposure, and zero-leak reliability.',
    heroImage:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80',
    description: [
      'Flat and low-slope roofing systems are inherently more complex than sloped roofs, demanding specialized engineering knowledge for proper drainage, seam integrity, and wind uplift resistance.',
      'P&G Roofing installs state-of-the-art flat roofing membranes including heat-welded TPO (Thermoplastic Polyolefin), PVC, and multi-ply Modified Bitumen systems from trusted brands like Polyglass and Mulehide.',
      'Our systems incorporate reflective cool-roof surfaces that bounce UV radiation away from commercial facilities and modern residential flat sections, reducing heat islands and HVAC wear.',
      'We pay meticulous attention to internal drains, scuppers, edge metal, and parapet flashing to eliminate ponding water risks and protect building structural integrity.',
    ],
    keyBenefits: [
      'Highly reflective white membranes lowering interior operating temperatures',
      'Heat-welded seams creating an impenetrable waterproof barrier',
      'Superior resistance to chemical exposure, grease, and ozone',
      'Flexible space utilization for rooftop HVAC, solar, or maintenance access',
      'Engineered slope taper packages eliminating standing and ponding water',
      'High wind uplift ratings certified for South Florida coastal zones',
    ],
    applications: [
      'Commercial warehouses, shopping plazas, and office buildings',
      'Multi-family residential complexes and condominiums',
      'Residential flat additions, carports, and modern patio roofs',
    ],
    materials: ['TPO (Thermoplastic Polyolefin) Single-Ply', 'PVC Heat-Welded Membranes', 'Self-Adhered & Torch-Down Modified Bitumen', 'Tapered Polyiso Insulation'],
    galleryImages: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80',
    ],
    ctaText: 'Get a Free Flat Roof Inspection',
  },
  {
    id: 'roof-coating',
    title: 'Roof Coating & Waterproofing',
    tagline: 'Seamless liquid-applied barrier extending roof life and sealing porous structures',
    shortDesc:
      'Advanced silicone and elastomeric coating solutions for roofs, cement balconies, patios, flat decks, and decorative fountains.',
    heroImage:
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80',
    description: [
      'Liquid-applied roof coating and waterproofing systems provide an exceptional, cost-effective layer of protection against South Florida water intrusion and brutal ultraviolet deterioration.',
      'P&G Roofing specializes in seamless commercial and residential waterproofing across roof surfaces, cement balconies, outdoor patios, and fountains using industry-leading formulations from Sika, Tremco, and TRP Roofing.',
      'A high-grade silicone or elastomeric restoration creates a 100% monolithic seal that fills micro-fissures, eliminates seam vulnerability, and resists ponding water without requiring a costly full structural tear-off.',
      'Coating systems also dramatically improve thermal reflectivity, resulting in measurable energy savings while preventing mold, mildew, and concrete spalling.',
    ],
    keyBenefits: [
      'Monolithic seamless seal over entire surface eliminating leak points',
      'Cost-effective alternative that extends roof service life by 10 to 15+ years',
      'High solar reflectance (cool roof) significantly lowering energy bills',
      'Waterproofing for cement balconies, pedestrian decks, patios & fountains',
      'Resistant to ponding water, mold, mildew, and Florida algae growth',
      'Environmentally conscious solution avoiding heavy landfill debris',
    ],
    applications: [
      'Commercial flat roofs needing rejuvenation without tear-off',
      'Residential and condo cement balconies and terraces',
      'Outdoor patio decks and architectural fountains',
      'Metal roof rust encapsulation and seam sealing',
    ],
    materials: ['High-Solids Silicone Coatings', 'Elastomeric Acrylic Coatings', 'Polyurethane Balcony Membranes', 'Reinforced Mesh Interlayers'],
    galleryImages: [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    ],
    ctaText: 'Get a Free Waterproofing Inspection',
  },
  {
    id: 'roof-repairs',
    title: 'Roof Repairs',
    tagline: 'Precision leak diagnostics, storm recovery & tile restoration across South Florida',
    shortDesc:
      'Prompt, code-compliant repair services for active leaks, broken tiles, loose flashing, and storm-damaged roof systems.',
    heroImage:
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1600&q=80',
    description: [
      'A leaking or damaged roof demands swift, professional attention before small moisture incursions translate into severe structural wood rot, drywall collapse, or hazardous mold colonies.',
      'P&G Roofing provides comprehensive repair services for all South Florida roof types — including tile, shingle, metal, and flat systems. Our technicians diagnose the true root source of the leak, not just the visible ceiling stain.',
      'From replacing cracked or slipped clay tiles and re-sealing compromised pipe boots to addressing storm-related wind damage and emergency tarping, we deliver durable, code-compliant repairs with free inspections and upfront estimates.',
    ],
    keyBenefits: [
      'Zero-cost thorough inspection and repair estimate',
      'Root-cause forensic leak detection preventing recurring water intrusion',
      'Tile repair expertise: broken, shifted, or unanchored tiles secured',
      'Flashing, valley, vent pipe boot, and chimney resealing',
      'Storm damage stabilization and emergency tarping services',
      'Workmanship warranty on repair work executed',
    ],
    applications: [
      'Active water leaks and ceiling moisture stains',
      'Displaced, cracked, or broken concrete and clay roof tiles',
      'Wind-torn or missing asphalt shingles',
      'Flat roof membrane punctures, blisters, and perimeter failures',
    ],
    materials: ['Matching Tile & Shingle Products', 'Modified Bitumen Mastics & Membranes', 'Commercial Flashing & Counter-Flashing Metal', 'High-Grade Polyurethane Sealants'],
    galleryImages: [
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    ],
    ctaText: 'Request a Roof Repair',
  },
];

export const PROJECTS_GALLERY: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Custom Standing Seam Metal Roof Installation',
    category: 'Metal',
    location: 'Coral Gables, FL',
    propertyType: 'Residential',
    description:
      'Full roof conversion from degraded shingles to premium custom charcoal standing seam aluminum metal roofing engineered for Category 5 wind speeds.',
    image:
      'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1200&q=80',
    materialUsed: 'Standing Seam Kynar Aluminum .032',
    highlights: ['150+ MPH Wind Rating', 'Energy Star Cool Roof', '45+ Year Longevity'],
  },
  {
    id: 'proj-2',
    title: 'Spanish Barrel Clay Tile Replacement',
    category: 'Tile',
    location: 'Pinecrest, FL',
    propertyType: 'Residential',
    description:
      'Complete tear-off and replacement with natural Verea clay barrel tiles, dual self-adhering high-temperature underlayment, and copper valley flashing.',
    image:
      'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=1200&q=80',
    materialUsed: 'Verea Clay Spanish Barrel Tiles',
    highlights: ['Natural Clay Insulation', 'Self-Adhered Underlayment', '50-Year Expected Life'],
  },
  {
    id: 'proj-3',
    title: 'Commercial TPO Membrane Flat Roof System',
    category: 'Flat',
    location: 'Doral, FL',
    propertyType: 'Commercial',
    description:
      '18,000 sq ft commercial distribution facility flat roof renewal featuring heat-welded 60-mil white TPO membrane over tapered polyiso insulation board.',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    materialUsed: 'Mule-Hide 60-mil White TPO',
    highlights: ['Zero Ponding Taper Package', 'Reflective Energy Savings', 'Commercial Warranty'],
  },
  {
    id: 'proj-4',
    title: 'Condominium Balcony & Roof Waterproofing',
    category: 'Waterproof',
    location: 'Miami Beach, FL',
    propertyType: 'Commercial',
    description:
      'Comprehensive high-solids silicone roof coating and polyurethane pedestrian balcony waterproofing for multi-level coastal condominium building.',
    image:
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80',
    materialUsed: 'Sika High-Solids Liquid Silicone System',
    highlights: ['Seamless Monolithic Seal', 'Salt-Air Barrier', 'Zero Landfill Tear-off'],
  },
  {
    id: 'proj-5',
    title: 'High-Wind Architectural Shingle Replacement',
    category: 'Shingle',
    location: 'Miami Gardens, FL',
    propertyType: 'Residential',
    description:
      'Tear-off and installation of GAF Timberline HDZ architectural shingles with enhanced 6-nail perimeter pattern and algae-shield protection.',
    image:
      'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80',
    materialUsed: 'GAF Timberline HDZ Architectural Shingles',
    highlights: ['130 MPH Wind Limited Warranty', 'StainGuard Plus Algae Defense', 'Fast 3-Day Completion'],
  },
  {
    id: 'proj-6',
    title: 'Tile Valley & Flashing Leak Repair',
    category: 'Repair',
    location: 'Hialeah, FL',
    propertyType: 'Residential',
    description:
      'Forensic leak diagnosis, removal of 120 shifted concrete tiles, replacement of rotted sub-fascia and damaged underlayment, re-anchoring with code foam.',
    image:
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
    materialUsed: 'Bostik Tile Mortar & Modified Flashing',
    highlights: ['Active Leak Eliminated', 'Color-Matched Tile Blend', 'Free Initial Inspection'],
  },
  {
    id: 'proj-7',
    title: 'Flat Concrete Balcony & Patio Waterproofing',
    category: 'Waterproof',
    location: 'Aventura, FL',
    propertyType: 'Residential',
    description:
      'Multi-coat elastomeric waterproofing applied to outdoor cement patio deck and second-story terrace, resolving persistent moisture seepage into lower garage.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    materialUsed: 'Tremco Multi-Ply Elastomeric Deck Coating',
    highlights: ['Slip-Resistant Texture', 'UV Moisture Shield', '10-Year Water Protection'],
  },
  {
    id: 'proj-8',
    title: 'Modern Flat Tile Residential Re-Roof',
    category: 'Tile',
    location: 'Miami Lakes, FL',
    propertyType: 'Residential',
    description:
      'Installation of sleek slate-gray flat concrete roof tiles by Eagle Roofing Products, delivering contemporary curb appeal and robust hurricane defense.',
    image:
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    materialUsed: 'Eagle Roofing Bel Air Concrete Flat Tiles',
    highlights: ['Contemporary Geometric Profile', 'High Wind Load Fastening', 'Class A Fire Rated'],
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'How do I know if I need a roof replacement?',
    answer:
      'Common indicators include widespread broken, missing, or curling tiles/shingles; recurring leaks in multiple areas; sagging decking; granule loss filling your gutters; daylight visible through the attic; or a roof exceeding 20–25 years of age under intense South Florida sun. P&G Roofing provides thorough roof inspections at no cost to accurately determine whether a repair is sufficient or if replacement is the more cost-effective decision.',
  },
  {
    id: 'faq-2',
    category: 'Process',
    question: 'How long does a roof replacement take?',
    answer:
      'A roof replacement generally takes between 2 to 5 days, depending on the property size, roof system complexity, weather conditions, and selected materials. Tile roofs or custom metal fabrications may require additional time for municipal inspections and proper curing. We always provide a clear, realistic project schedule before commencing work.',
  },
  {
    id: 'faq-3',
    category: 'Estimates',
    question: 'Do you provide free roofing estimates?',
    answer:
      'Yes, absolutely. P&G Roofing offers a thorough roof inspection and a written roof quote completely free of charge and with no obligation. This includes free estimates for repairs, re-roofs, maintenance, and waterproofing across Miami-Dade, Broward, and Palm Beach Counties.',
  },
  {
    id: 'faq-4',
    category: 'Services',
    question: 'What types of roofing do you specialize in?',
    answer:
      'We specialize in six primary roofing disciplines: Metal Roofing (standing seam and 5V crimp), Shingle Roofing (architectural and high-wind shingles), Tile Roofing (concrete and Spanish clay tiles), Flat Roofing (TPO, PVC, and Modified Bitumen), Roof Coating & Waterproofing (silicone and elastomeric systems for roofs, balconies, patios, and fountains), and comprehensive Roof Repairs.',
  },
  {
    id: 'faq-5',
    category: 'Services',
    question: 'What should I do if my roof leaks?',
    answer:
      'If your roof is leaking, first protect your interior belongings by placing a bucket or waterproof container beneath the drip and moving furniture away. If water is pooling on your ceiling drywall, carefully poke a small hole in the center with a screwdriver to release pressure and prevent a wider ceiling collapse. Then, contact P&G Roofing immediately by phone at (305) 300-5145 or via WhatsApp so our technicians can schedule an inspection and perform prompt repairs or temporary emergency stabilization.',
  },
  {
    id: 'faq-6',
    category: 'General',
    question: 'What materials do you use?',
    answer:
      'We exclusively work with proven, high-performance manufacturers certified for Florida Building Code standards, including GAF Roofing, Owens Corning, Tamko, Eagle Roofing Products, Crown Roof Tiles, Verea Clay Roof Tile, Westlake Royal Roofing, Polyglass, Mulehide, Sika, Tremco, TRP Roofing, and Bostik Adhesives.',
  },
  {
    id: 'faq-7',
    category: 'Warranties',
    question: 'Do you offer warranties?',
    answer:
      'Yes. We provide both manufacturer material warranties (ranging from 20 years to lifetime depending on the specific product line) and our own comprehensive P&G Roofing workmanship warranty to guarantee that your roof has been installed strictly according to manufacturer specifications and Florida codes.',
  },
  {
    id: 'faq-8',
    category: 'Process',
    question: 'Can I stay in my home during roof replacement?',
    answer:
      'Yes. In the majority of cases, homeowners are able to comfortably remain inside their residence during the replacement process. However, please be aware that roofing involves continuous hammering, machinery, and vibration during daytime working hours. If you work from home or have sensitive pets, you may choose to make alternate plans during the loudest tear-off phases.',
  },
  {
    id: 'faq-9',
    category: 'General',
    question: 'What areas do you service?',
    answer:
      'P&G Roofing proudly serves Miami-Dade County, Broward County, and Palm Beach County. Key cities include Miami, Miami Beach, Coral Gables, Doral, Hialeah, Hialeah Gardens, Aventura, Pinecrest, Palmetto Bay, Homestead, Key Biscayne, Sunny Isles Beach, Miami Gardens, Miami Lakes, North Miami, Surfside, Bal Harbour, and surrounding communities.',
  },
  {
    id: 'faq-10',
    category: 'General',
    question: 'Are you licensed and insured in Florida?',
    answer:
      'Yes. P&G Roofing Contractors Corp is fully licensed and insured in the State of Florida under Certified Roofing Contractor License # CCC1329409. We hold full worker’s compensation and comprehensive commercial liability insurance.',
  },
  {
    id: 'faq-11',
    category: 'Estimates',
    question: 'Do you offer financing options?',
    answer:
      'Yes. We partner with financial institutions including GreenSky / Synovus to offer convenient, flexible monthly financing options for qualified homeowners and business property owners, subject to credit approval.',
  },
  {
    id: 'faq-12',
    category: 'Services',
    question: 'Do you work on commercial buildings?',
    answer:
      'Yes. P&G Roofing handles both residential and commercial properties. Our commercial division services warehouses, shopping plazas, multi-family condominiums, office complexes, and industrial low-slope flat roofs with specialized safety protocols and commercial warranties.',
  },
];
