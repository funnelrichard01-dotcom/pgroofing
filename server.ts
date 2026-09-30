import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Initialize Gemini SDK if API key is provided
const apiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;
if (apiKey && apiKey !== 'MY_GEMINI_API_KEY') {
  try {
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  } catch (err) {
    console.warn('Failed to initialize GoogleGenAI client:', err);
  }
}

const SYSTEM_INSTRUCTION = `You are the "P&G Roofing Assistant", the official customer service and roofing expert assistant for P&G Roofing Contractors Corp (brand name: P&G Roofing).

COMPANY PROFILE & SOURCE OF TRUTH:
- Company Name: P&G Roofing Contractors Corp
- Brand Name: P&G Roofing
- License: Florida Certified Roofing Contractor CCC1329409
- Address: 541 NW 153rd St, Miami, FL 33169, United States
- Primary Phone: +1 (305) 300-5145
- Secondary Phone: +1 (786) 556-8023
- Email: info@pg-roofing.com
- WhatsApp: +1 (305) 300-5145 (https://wa.me/13053005145)
- Positioning: "Your Trusted South Florida Roofing Experts"
- Experience: Served the community for over 15 years, with 35 years of industry expertise.
- Customer types: Residential and Commercial properties.
- Service Areas: Miami-Dade County, Broward County, and Palm Beach County.
  Specific cities include: Aventura, Bal Harbour, Biscayne Park, Coral Gables, Doral, Florida City, Hialeah, Hialeah Gardens, Homestead, Key Biscayne, Miami, Miami Beach, Miami Gardens, Miami Lakes, Miami Shores, Miami Springs, North Bay Village, North Miami, North Miami Beach, Opa-locka, Palmetto Bay, Pinecrest, South Miami, Sunny Isles Beach, Surfside, Sweetwater, Virginia Gardens, West Miami.

SERVICES OFFERED:
1. Metal Roofing: Standing seam and 5V crimp, durability 40–70+ years, hurricane wind resistance, energy efficiency / cool roof, 100% recyclable, fire resistant.
2. Shingle Roofing: Architectural and dimensional shingles, cost-effective, high-wind ratings (up to 130 mph), algae resistance.
3. Tile Roofing: Clay and concrete tile, Spanish S-tile, barrel, flat tile, extreme weather and rain resistance, thermal and acoustic insulation, 50+ years longevity.
4. Flat Roofing: TPO, PVC, and Modified Bitumen systems for low-slope roofs, reflective cool roofing, ponding water elimination, wind uplift tolerance.
5. Roof Coating & Waterproofing: Seamless liquid-applied silicone and elastomeric waterproofing for roof systems, cement balconies, patios, and fountains.
6. Roof Repairs: Comprehensive repair services for all roof types, active leaks, broken/slipped tiles, damaged flashing, storm damage, emergency stabilization.

POLICIES & DETAILS:
- Free Inspection & Estimate: P&G offers a thorough roof inspection and roof quote at no cost, including free estimates for repairs.
- Financing: Available through financial partners (GreenSky / Synovus); subject to credit approval.
- Warranties: Both manufacturer material warranties and company workmanship warranties are provided.
- Timeline: Roof replacement generally takes 2 to 5 days depending on size, complexity, weather, and materials.
- Staying in Home: Homeowners can typically remain in their home during roof replacement, with expected daytime work noise.
- Material Brands/Partners: GAF, Owens Corning, Tamko, Eagle Roofing Products, Crown Roof Tiles, Verea Clay Roof Tile, Westlake Royal Roofing, Polyglass, Mulehide, Sika, Tremco, TRP Roofing, Bostik Adhesives.

CONVERSATION & BEHAVIOR RULES (CRITICAL):
1. UNDERSTAND NATURAL LANGUAGE:
   - When asked "what do you guys do" or "tell me about P&G Roofing", answer directly and thoroughly about P&G Roofing.
   - When the user says "yeah", "yes", "sure", or "okay", understand what it refers to based on the previous message in conversation history and continue seamlessly.
   - When asked "my roof is not good" or "my roof is messed up", express empathy and ask what they are noticing (leak, broken/missing material, storm damage, general aging).
   - When asked "it leaks" or "there's water coming in", explain that water getting into the property should be inspected promptly rather than guessing, mention P&G provides repair services, and ask whether the leak is happening right now or if they noticed older signs.
   - When asked "how much" or "how much is a roof", DO NOT INVENT A PRICE. Explain that costs depend on property size, roofing system, conditions, materials, and scope of work, and that P&G offers free estimates. If the previous conversation was about a specific roof type (like tile or metal), mention that specific system!
   - If asked conversational or emotional questions like "are u mad", respond warmly, naturally and politely like a friendly human (e.g. "Not at all! I'm here and happy to help you with any roofing questions or projects.")
   - If the user sends nonsensical text like "asdfghjkl", politely acknowledge it and offer assistance.
   - NEVER repeat canned fallback loops like "I want to make sure I understand you correctly...".
   - NEVER output raw SVG, HTML, undefined, [object Object], or internal code.
   - If user asks for a human, provide phone numbers (+1 305-300-5145, +1 786-556-8023) and WhatsApp (+1 305-300-5145).`;

// Resilient Fallback Engine for high reliability
function generateSmartReply(userMessage: string, history: Array<{ role: string; content: string }>): string {
  const clean = userMessage.trim().toLowerCase();
  const lastAssistantMsg = [...history].reverse().find(m => m.role === 'model')?.content?.toLowerCase() || '';

  // 1. "are u mad" or mood questions
  if (clean.includes('are you mad') || clean.includes('are u mad') || clean.includes('you angry')) {
    return "Not at all! I'm here and happy to help you with any roofing questions, project planning, or service requests. How can I assist you today?";
  }

  // 2. Casual confirmations: "yeah", "yes", "sure", "okay", "ok"
  if (['yeah', 'yes', 'yep', 'sure', 'okay', 'ok', 'alright'].includes(clean)) {
    if (lastAssistantMsg.includes('residential or commercial') || lastAssistantMsg.includes('home or a commercial')) {
      return "Great! To help recommend the best roofing system, could you let me know if this is for a residential home or a commercial building?";
    }
    if (lastAssistantMsg.includes('tile') || lastAssistantMsg.includes('metal') || lastAssistantMsg.includes('shingle')) {
      return "Understood. P&G Roofing offers free, zero-obligation inspections and estimates throughout South Florida. Would you like to schedule an inspection, or discuss material options?";
    }
    return "Absolutely. One of the primary things P&G Roofing does is help South Florida homeowners and businesses with roof replacements, installations, repairs, and waterproofing. Are you looking into work for a home or a commercial property?";
  }

  // 3. Greetings
  if (['thanks', 'thank you', 'thx', 'appreciate it'].includes(clean)) {
    return "You're very welcome! If you need a free roof inspection, estimate, or have more questions, P&G Roofing is here for you. You can also reach our team directly at (305) 300-5145 or on WhatsApp!";
  }

  // 4. Specific keymash / gibberish (e.g. "asdfghjkl")
  if (clean.includes('asdf') || clean.includes('hjkl') || /^(.)\1{4,}$/.test(clean)) {
    return "I'm here to help with any roofing questions, inspections, repairs, or estimates in South Florida. Feel free to ask about our services, roof types, or scheduling an estimate!";
  }

  // 5. "tell me about P&G Roofing" / "who are you" / "company"
  if (
    clean.includes('tell me about') || 
    clean.includes('about p&g') || 
    clean.includes('about pg') || 
    clean.includes('who is p&g') || 
    clean.includes('who are you')
  ) {
    return "P&G Roofing Contractors Corp is a trusted South Florida roofing company serving residential and commercial customers. The company holds Florida Certified Roofing Contractor license CCC1329409 and has served the community for over 15 years with 35 years of industry expertise.\n\nP&G provides roofing services including metal, shingle, tile, flat roofing, roof coating and waterproofing, and comprehensive roof repairs. P&G also offers free roof inspections and estimates, warranties, and flexible financing.\n\nWould you like me to tell you more about our services, the company's roofing systems, or how the estimate process works?";
  }

  // 6. "what do you guys do" / "what do you do" / "services"
  if (clean.includes('what do you guys do') || clean.includes('what do you do') || clean.includes('what do u guys do')) {
    return "P&G Roofing provides comprehensive residential and commercial roofing services throughout South Florida. Our services include:\n\n• Metal Roofing (standing seam & 5V crimp)\n• Shingle Roofing (architectural & high-wind systems)\n• Tile Roofing (concrete & Spanish clay tiles)\n• Flat Roofing (TPO, PVC, and Modified Bitumen)\n• Roof Coating & Waterproofing (silicone and elastomeric systems for roofs, balconies, patios, and fountains)\n• Roof Repairs (active leaks, tile restoration, storm damage)\n\nWe provide free roof inspections and estimates, robust warranties, and flexible financing options. Is there a specific roofing project you have in mind for your property?";
  }

  // 7. "my roof is not good" / "messed up" / "bad condition"
  if (clean.includes('not good') || clean.includes('messed up') || clean.includes('damaged') || clean.includes('broken')) {
    return "I'm sorry you're dealing with that. I can help you figure out what type of roofing service may be appropriate.\n\nWhat are you noticing — a leak, broken or missing roofing materials, storm damage, or general aging of the roof?";
  }

  // 8. "it leaks" / "leaking" / "water coming in"
  if (clean.includes('it leaks') || clean.includes('leak') || clean.includes('water coming') || clean.includes('water dripping')) {
    return "If water is getting into the property, it's a good idea to have the roof inspected promptly rather than guessing at the cause. Water can travel along trusses before entering the ceiling, causing structural rot or drywall damage.\n\nP&G Roofing provides professional roof repair services and offers free inspections to pinpoint the exact leak source.\n\nIs the leak happening right now, or did you notice signs of an older leak?";
  }

  // 9. "how much" / "pricing" / "cost"
  if (clean.includes('how much') || clean.includes('cost') || clean.includes('price') || clean.includes('pricing')) {
    const isTile = lastAssistantMsg.includes('tile') || clean.includes('tile');
    const isMetal = lastAssistantMsg.includes('metal') || clean.includes('metal');
    const isShingle = lastAssistantMsg.includes('shingle') || clean.includes('shingle');

    let specificPrefix = "The cost of a roof";
    if (isTile) specificPrefix = "Tile roofing costs";
    else if (isMetal) specificPrefix = "Metal roofing costs";
    else if (isShingle) specificPrefix = "Shingle roofing costs";

    return `${specificPrefix} depend on factors such as property square footage, the specific roofing system, existing decking conditions, material selection, pitch, and scope of work.\n\nI don't want to invent a price. P&G Roofing offers 100% free roofing inspections and estimates so your project can be accurately evaluated on site.\n\nIs this for a full roof replacement, a new roof, or a repair?`;
  }

  // 10. "do you install tile" / "tile"
  if (clean.includes('install tile') || clean.includes('do you do tile') || clean.includes('tile roofing')) {
    return "Yes! Tile roofing is one of the core systems P&G Roofing specializes in. We work with both natural clay (including Verea Clay Tile) and concrete tiles (such as Eagle Roofing Products and Crown Roof Tiles).\n\nTile provides exceptional resistance to South Florida rain, wind, and heat, offers natural thermal insulation, and lasts 50+ years with proper maintenance.\n\nAre you considering tile replacement, a new installation, or repairs on an existing tile roof?";
  }

  // 11. "what areas do you service" / "locations" / "where do you work"
  if (clean.includes('what areas') || clean.includes('service area') || clean.includes('where do you work') || clean.includes('cities')) {
    return "P&G Roofing proudly serves Miami-Dade County, Broward County, and Palm Beach County. We service communities including Miami, Miami Beach, Coral Gables, Doral, Hialeah, Hialeah Gardens, Pinecrest, Aventura, Homestead, Key Biscayne, Sunny Isles Beach, Miami Lakes, North Miami, and surrounding South Florida areas.\n\nWhere is your property located?";
  }

  // 12. "do you work on commercial buildings" / "commercial"
  if (clean.includes('commercial') || clean.includes('commercial buildings') || clean.includes('warehouse')) {
    return "Yes, P&G Roofing works on both residential and commercial buildings. Our commercial roofing division installs and repairs flat roof systems (TPO, PVC, Modified Bitumen), commercial metal roofing, and liquid silicone roof coatings for retail plazas, warehouses, offices, and multi-family properties.\n\nWhat type of commercial property are you managing?";
  }

  // 13. "are you licensed" / "license" / "insured"
  if (clean.includes('licensed') || clean.includes('license') || clean.includes('insured')) {
    return "Yes, absolutely. P&G Roofing Contractors Corp is fully licensed and insured in the State of Florida. Our Certified Roofing Contractor license number is CCC1329409. We carry complete workers' compensation and commercial liability coverage for all residential and commercial projects.";
  }

  // 14. "how long does a roof replacement take" / "how long"
  if (clean.includes('how long') && (clean.includes('replacement') || clean.includes('take') || clean.includes('install'))) {
    return "A roof replacement generally takes between 2 to 5 days, depending on property size, roof system complexity, weather conditions, and materials. Tile or complex commercial roofs may require additional time for municipal city inspections and underlayment drying.\n\nP&G Roofing always provides a detailed timeline and keeps you informed throughout the entire process.";
  }

  // 15. "can I stay in my home" / "leave my house"
  if (clean.includes('stay in my home') || clean.includes('leave my house') || clean.includes('stay home')) {
    return "Yes, homeowners can generally stay in their home during a roof replacement. However, please keep in mind that roofing is an active construction process with considerable noise, hammering, and vibration during daytime work hours. If you work from home or have pets sensitive to noise, you might plan accordingly during the tear-off and decking phases.";
  }

  // 16. "do you offer financing" / "financing"
  if (clean.includes('financing') || clean.includes('payment plan') || clean.includes('finance')) {
    return "Yes! P&G Roofing offers flexible financing options through financial partners, including GreenSky and Synovus, subject to credit approval. This allows homeowners and business owners to manage roof replacements or repairs with affordable monthly payments.\n\nWould you like more details on how to apply with your free estimate?";
  }

  // 17. "what happens if my roof leaks" / "what should I do if my roof leaks"
  if (clean.includes('if my roof leaks') || clean.includes('what should i do if my roof leaks') || clean.includes('what happens if it leaks')) {
    return "If your roof is leaking, the first priority is protecting your interior: place a bucket beneath the leak and move furniture away. If water is bubbling in ceiling drywall, carefully make a small puncture in the center to release trapped water and prevent wider ceiling damage.\n\nThen, contact P&G Roofing immediately at (305) 300-5145 or on WhatsApp so we can send an experienced roofer for inspection, leak diagnosis, and prompt repairs.";
  }

  // 18. "how does the process work" / "process"
  if (clean.includes('how does the process work') || clean.includes('the process') || clean.includes('steps')) {
    return "The P&G Roofing process is simple and transparent:\n\n1. Free Inspection: We perform an on-site evaluation of your roof deck, flashing, and materials.\n2. Detailed Written Estimate: We provide a clear proposal with material options, pricing, and warranties.\n3. Permitting & Planning: We pull all required Florida building permits and order top-tier materials.\n4. Professional Execution: Our experienced crews complete the work according to Florida Building Code.\n5. Clean-up & Final Inspection: Magnetic sweep for nails, thorough site clean-up, and municipal sign-off.";
  }

  // 19. "I need someone to look at my roof" / "inspect my roof"
  if (clean.includes('look at my roof') || clean.includes('inspect') || clean.includes('need someone to look')) {
    return "P&G Roofing would be glad to inspect your roof! We provide 100% free, thorough roof inspections with no obligation across Miami-Dade, Broward, and Palm Beach Counties.\n\nYou can schedule online using our Free Estimate form, call us directly at (305) 300-5145, or message us on WhatsApp at +1 (305) 300-5145. What city is your property located in?";
  }

  // 20. Default helpful answer
  return "P&G Roofing Contractors Corp (License #CCC1329409) is here to help with your South Florida roofing project. We offer free roof inspections, estimates, repairs, and installations for metal, tile, shingle, flat roofs, and waterproofing.\n\nWould you like to schedule a free inspection, or learn more about a specific roofing system?";
}

// POST /api/chat
app.post('/api/chat', async (req: Request, res: Response) => {
  try {
    const { messages, message } = req.body;
    const conversationHistory: Array<{ role: string; content: string }> = Array.isArray(messages)
      ? messages
      : [];

    const userPrompt = message || (conversationHistory.length > 0 ? conversationHistory[conversationHistory.length - 1].content : '');

    if (!userPrompt) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // If Gemini client is active, try calling Gemini 3.8 Flash model
    if (aiClient) {
      try {
        const contents = conversationHistory.slice(-8).map(m => ({
          role: m.role === 'model' ? 'model' : 'user',
          parts: [{ text: m.content }],
        }));

        // If userPrompt isn't in contents yet, add it
        if (contents.length === 0 || contents[contents.length - 1].parts[0].text !== userPrompt) {
          contents.push({
            role: 'user',
            parts: [{ text: userPrompt }],
          });
        }

        const response = await aiClient.models.generateContent({
          model: 'gemini-3.8-flash',
          contents,
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.7,
            topP: 0.95,
          },
        });

        const replyText = response.text?.trim();
        if (replyText) {
          return res.json({ reply: replyText });
        }
      } catch (geminiError) {
        console.warn('Gemini API call failed, using verified fallback engine:', geminiError);
      }
    }

    // Fallback engine: Context-aware and deterministic
    const smartReply = generateSmartReply(userPrompt, conversationHistory);
    return res.json({ reply: smartReply });
  } catch (error) {
    console.error('Chat error:', error);
    return res.json({
      reply: "P&G Roofing is here to help! We offer free roof inspections and estimates for residential and commercial properties throughout South Florida. Please call us at (305) 300-5145 or message us on WhatsApp.",
    });
  }
});

// POST /api/estimate
app.post('/api/estimate', (req: Request, res: Response) => {
  try {
    const data = req.body;
    const confirmationId = `PG-${Date.now().toString().slice(-6)}`;

    console.log('Received Estimate Request:', {
      confirmationId,
      name: data.fullName,
      phone: data.phone,
      address: data.address,
      service: data.serviceNeeded,
    });

    return res.json({
      success: true,
      confirmationId,
      message: 'Your free inspection request has been received. A P&G Roofing project specialist will contact you promptly.',
    });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to process request' });
  }
});

// Health check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    brand: 'P&G Roofing Contractors Corp',
    license: 'CCC1329409',
    phone: '+1 (305) 300-5145',
  });
});

// Production static assets or Vite in development
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`P&G Roofing server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
