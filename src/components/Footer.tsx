import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  CalendarCheck, 
  ArrowUp 
} from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY_INFO, SERVICES } from '../data/companyData';
import { ServiceId } from '../types';

interface FooterProps {
  onNavigate: (section: string, serviceId?: ServiceId) => void;
  onOpenEstimate: () => void;
  onOpenChat: (msg?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenEstimate,
  onOpenChat,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 lg:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand & Corporate Profile */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="light" />

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              <strong>{COMPANY_INFO.legalName}</strong> is your trusted South Florida roofing contractor. {COMPANY_INFO.experienceCommunity} with {COMPANY_INFO.experienceExpertise}. Providing Florida code-certified installations and repairs across Miami-Dade, Broward, and Palm Beach.
            </p>

            <div className="p-3.5 bg-slate-900 rounded-xl border border-slate-800 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-white font-semibold">
                <ShieldCheck className="w-4 h-4 text-red-500" />
                <span>FL Certified Roofing Contractor</span>
              </div>
              <div className="text-slate-400 font-mono">
                License # <strong className="text-red-400">{COMPANY_INFO.license}</strong>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="pt-2">
              <a
                href={COMPANY_INFO.whatsapp.directUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp: {COMPANY_INFO.whatsapp.number}</span>
              </a>
            </div>
          </div>

          {/* Quick Links / Roofing Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Roofing Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onNavigate('service-detail', s.id)}
                    className="hover:text-red-400 transition-colors text-left"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => onNavigate('residential')}
                  className="hover:text-red-400 transition-colors text-slate-200 font-medium"
                >
                  Residential Roofing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('commercial')}
                  className="hover:text-red-400 transition-colors text-slate-200 font-medium"
                >
                  Commercial Roofing
                </button>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-red-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gallery')} className="hover:text-red-400 transition-colors">
                  Our Work & Gallery
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('service-areas')} className="hover:text-red-400 transition-colors">
                  Service Areas
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('financing')} className="hover:text-red-400 transition-colors">
                  Financing (GreenSky)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faq')} className="hover:text-red-400 transition-colors">
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-red-400 transition-colors">
                  Contact & Location
                </button>
              </li>
              <li>
                <button onClick={onOpenEstimate} className="text-red-400 font-bold hover:underline">
                  Free Inspection Request
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Location Block */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Miami Office
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>
                  {COMPANY_INFO.address.street}
                  <br />
                  {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <div>
                  <a
                    href={`tel:${COMPANY_INFO.phones.primaryRaw}`}
                    className="text-white font-bold hover:text-red-400 block"
                  >
                    {COMPANY_INFO.phones.primary}
                  </a>
                  <a
                    href={`tel:${COMPANY_INFO.phones.secondaryRaw}`}
                    className="hover:text-red-400 block text-[11px]"
                  >
                    {COMPANY_INFO.phones.secondary}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-red-500 shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenChat()}
                  className="w-full py-2 px-3 bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold rounded-lg border border-slate-800 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  <span>Open AI Assistant</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.legalName}. All rights reserved. Florida Certified Roofing Contractor # CCC1329409.
          </div>

          <div className="flex items-center gap-6">
            <span>Miami-Dade · Broward · Palm Beach</span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-lg hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
