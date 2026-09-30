import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Menu, 
  X, 
  ChevronDown, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  CalendarCheck 
} from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY_INFO, SERVICES } from '../data/companyData';
import { ServiceId } from '../types';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string, serviceId?: ServiceId) => void;
  onOpenEstimate: () => void;
  onOpenChat: (initialMessage?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenEstimate,
  onOpenChat,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleServiceClick = (id: ServiceId) => {
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    onNavigate('service-detail', id);
  };

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm border-b border-slate-200">
      {/* Top Utility Trust & Contact Header */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* Trust credentials & location */}
          <div className="flex items-center flex-wrap gap-x-4 gap-y-1 text-slate-300">
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-red-500" />
              <span>FL License # <strong className="text-white">{COMPANY_INFO.license}</strong></span>
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-red-400" />
              <span>Miami-Dade · Broward · Palm Beach</span>
            </span>
            <span className="hidden lg:inline text-slate-600">|</span>
            <span className="hidden lg:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{COMPANY_INFO.experienceCommunity}</span>
            </span>
          </div>

          {/* Quick Direct Actions */}
          <div className="flex items-center gap-4 text-xs">
            {/* WhatsApp Link */}
            <a
              href={COMPANY_INFO.whatsapp.directUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
              aria-label="WhatsApp P&G Roofing"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>WhatsApp:</span>
              <strong className="text-white">{COMPANY_INFO.whatsapp.number}</strong>
            </a>

            <span className="text-slate-600">|</span>

            {/* Direct Phone */}
            <a
              href={`tel:${COMPANY_INFO.phones.primaryRaw}`}
              className="flex items-center gap-1 text-slate-100 hover:text-white font-semibold"
            >
              <Phone className="w-3 h-3 text-red-500" />
              <span>{COMPANY_INFO.phones.primary}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded-md"
            aria-label="P&G Roofing Home"
          >
            <Logo />
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-1 text-sm font-medium text-slate-700">
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3 py-2 rounded-md transition-colors hover:text-red-600 ${
                activeSection === 'home' ? 'text-red-600 font-bold' : ''
              }`}
            >
              Home
            </button>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 rounded-md transition-colors hover:text-red-600 ${
                  activeSection.startsWith('service') ? 'text-red-600 font-bold' : ''
                }`}
                onClick={() => handleNavClick('services')}
                aria-expanded={servicesDropdownOpen}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-red-600 transition-transform duration-200" />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                    Roofing Systems & Solutions
                  </div>
                  {SERVICES.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => handleServiceClick(s.id)}
                      className="w-full text-left px-4 py-2.5 hover:bg-red-50 hover:text-red-700 text-slate-700 text-sm flex items-center justify-between transition-colors"
                    >
                      <span className="font-medium">{s.title}</span>
                      <span className="text-[11px] text-slate-400">View</span>
                    </button>
                  ))}
                  <div className="mt-1 pt-1.5 border-t border-slate-100 px-3">
                    <button
                      onClick={() => handleNavClick('services')}
                      className="w-full text-center py-1.5 text-xs font-semibold text-red-600 hover:text-red-700"
                    >
                      Overview of All Services →
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('residential')}
              className={`px-3 py-2 rounded-md transition-colors hover:text-red-600 ${
                activeSection === 'residential' ? 'text-red-600 font-bold' : ''
              }`}
            >
              Residential
            </button>

            <button
              onClick={() => handleNavClick('commercial')}
              className={`px-3 py-2 rounded-md transition-colors hover:text-red-600 ${
                activeSection === 'commercial' ? 'text-red-600 font-bold' : ''
              }`}
            >
              Commercial
            </button>

            <button
              onClick={() => handleNavClick('gallery')}
              className={`px-3 py-2 rounded-md transition-colors hover:text-red-600 ${
                activeSection === 'gallery' ? 'text-red-600 font-bold' : ''
              }`}
            >
              Our Work
            </button>

            <button
              onClick={() => handleNavClick('service-areas')}
              className={`px-3 py-2 rounded-md transition-colors hover:text-red-600 ${
                activeSection === 'service-areas' ? 'text-red-600 font-bold' : ''
              }`}
            >
              Service Areas
            </button>

            <button
              onClick={() => handleNavClick('financing')}
              className={`px-3 py-2 rounded-md transition-colors hover:text-red-600 ${
                activeSection === 'financing' ? 'text-red-600 font-bold' : ''
              }`}
            >
              Financing
            </button>

            <button
              onClick={() => handleNavClick('faq')}
              className={`px-3 py-2 rounded-md transition-colors hover:text-red-600 ${
                activeSection === 'faq' ? 'text-red-600 font-bold' : ''
              }`}
            >
              FAQ
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`px-3 py-2 rounded-md transition-colors hover:text-red-600 ${
                activeSection === 'contact' ? 'text-red-600 font-bold' : ''
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Desktop Right CTA Group */}
          <div className="hidden lg:flex items-center gap-3">
            {/* WhatsApp Quick CTA */}
            <a
              href={COMPANY_INFO.whatsapp.directUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 text-xs font-semibold transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            {/* AI Assistant Quick Trigger */}
            <button
              onClick={() => onOpenChat()}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
              title="Chat with P&G Roofing Assistant"
            >
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              <span>AI Assistant</span>
            </button>

            {/* Primary Action Button */}
            <button
              onClick={onOpenEstimate}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold shadow-sm hover:shadow transition-all"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Free Inspection</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={onOpenEstimate}
              className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-lg"
            >
              Free Inspection
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200 shadow-xl max-h-[85vh] overflow-y-auto">
          {/* Quick Contact Bar for Mobile */}
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
            <a
              href={`tel:${COMPANY_INFO.phones.primaryRaw}`}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-slate-900 text-white text-xs font-bold rounded-lg"
            >
              <Phone className="w-3.5 h-3.5 text-red-400" />
              <span>Call Us</span>
            </a>
            <a
              href={COMPANY_INFO.whatsapp.directUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-emerald-600 text-white text-xs font-bold rounded-lg"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Navigation Links */}
          <div className="space-y-1">
            <button
              onClick={() => handleNavClick('home')}
              className="w-full text-left px-3 py-2 rounded-lg text-slate-800 font-semibold hover:bg-slate-50"
            >
              Home
            </button>

            {/* Services Accordion */}
            <div className="py-1">
              <div className="px-3 py-1 text-xs font-bold text-slate-400 uppercase tracking-wider">
                Roofing Services
              </div>
              <div className="pl-3 space-y-1 border-l-2 border-slate-100 ml-2 mt-1">
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleServiceClick(s.id)}
                    className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:text-red-600 flex items-center justify-between"
                  >
                    <span>{s.title}</span>
                    <span className="text-xs text-slate-400">→</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleNavClick('residential')}
              className="w-full text-left px-3 py-2 rounded-lg text-slate-800 font-semibold hover:bg-slate-50"
            >
              Residential Roofing
            </button>
            <button
              onClick={() => handleNavClick('commercial')}
              className="w-full text-left px-3 py-2 rounded-lg text-slate-800 font-semibold hover:bg-slate-50"
            >
              Commercial Roofing
            </button>
            <button
              onClick={() => handleNavClick('gallery')}
              className="w-full text-left px-3 py-2 rounded-lg text-slate-800 font-semibold hover:bg-slate-50"
            >
              Our Work & Projects
            </button>
            <button
              onClick={() => handleNavClick('service-areas')}
              className="w-full text-left px-3 py-2 rounded-lg text-slate-800 font-semibold hover:bg-slate-50"
            >
              Service Areas (Miami-Dade, Broward, Palm Beach)
            </button>
            <button
              onClick={() => handleNavClick('financing')}
              className="w-full text-left px-3 py-2 rounded-lg text-slate-800 font-semibold hover:bg-slate-50"
            >
              Financing (GreenSky / Synovus)
            </button>
            <button
              onClick={() => handleNavClick('faq')}
              className="w-full text-left px-3 py-2 rounded-lg text-slate-800 font-semibold hover:bg-slate-50"
            >
              Frequently Asked Questions
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full text-left px-3 py-2 rounded-lg text-slate-800 font-semibold hover:bg-slate-50"
            >
              Contact & Address
            </button>
          </div>

          {/* AI Chat trigger inside mobile drawer */}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenChat();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-semibold rounded-lg border border-slate-200"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-red-600"></span>
              <span>Ask P&G Roofing Assistant</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
