export type ServiceId = 
  | 'metal-roofing' 
  | 'shingle-roofing' 
  | 'tile-roofing' 
  | 'flat-roofing' 
  | 'roof-coating' 
  | 'roof-repairs';

export type PropertyType = 'residential' | 'commercial';

export interface ServiceItem {
  id: ServiceId;
  title: string;
  shortDesc: string;
  tagline: string;
  description: string[];
  keyBenefits: string[];
  applications: string[];
  materials: string[];
  heroImage: string;
  galleryImages: string[];
  ctaText: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Metal' | 'Flat' | 'Waterproof' | 'Tile' | 'Repair' | 'Shingle';
  location: string;
  propertyType: 'Residential' | 'Commercial';
  description: string;
  image: string;
  afterImage?: string;
  materialUsed: string;
  completionYear?: string;
  highlights: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Services' | 'Estimates' | 'Process' | 'Warranties';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  content: string;
  timestamp: number;
  suggestions?: string[];
  quickActions?: {
    label: string;
    action: 'call' | 'whatsapp' | 'estimate' | 'message';
    payload?: string;
  }[];
}

export interface EstimateFormData {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  propertyType: 'residential' | 'commercial';
  roofType: string;
  serviceNeeded: string;
  problemDescription: string;
  urgency: 'immediate' | 'within-week' | 'planning';
  hasActiveLeak: boolean;
  photoUploaded?: boolean;
}
