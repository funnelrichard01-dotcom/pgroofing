import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ServicesSection } from './components/ServicesSection';
import { ServiceDetailView } from './components/ServiceDetailView';
import { ResidentialCommercialSection } from './components/ResidentialCommercialSection';
import { ProjectGallery } from './components/ProjectGallery';
import { ServiceAreasSection } from './components/ServiceAreasSection';
import { FinancingSection } from './components/FinancingSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { EstimateModal } from './components/EstimateModal';
import { ChatAssistant } from './components/ChatAssistant';
import { MessageSquare, CalendarCheck, Phone, Bot } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from './data/companyData';
import { ServiceId } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<ServiceId>('tile-roofing');
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);
  const [estimatePropertyType, setEstimatePropertyType] = useState<'residential' | 'commercial'>('residential');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInitialPrompt, setChatInitialPrompt] = useState<string | undefined>(undefined);

  const handleNavigate = (sectionId: string, serviceId?: ServiceId) => {
    if (sectionId === 'service-detail' && serviceId) {
      setSelectedServiceId(serviceId);
      setActiveSection('service-detail');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setActiveSection(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEstimate = (propertyType: 'residential' | 'commercial' = 'residential') => {
    setEstimatePropertyType(propertyType);
    setIsEstimateModalOpen(true);
  };

  const handleOpenChat = (prompt?: string) => {
    if (prompt) {
      setChatInitialPrompt(prompt);
    }
    setIsChatOpen(true);
  };

  const currentService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col relative selection:bg-red-600 selection:text-white">
      {/* Authoritative Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenEstimate={() => handleOpenEstimate('residential')}
        onOpenChat={handleOpenChat}
      />

      {/* Main Page Content Router */}
      <main className="flex-1">
        {activeSection === 'home' && (
          <>
            <Hero
              onOpenEstimate={() => handleOpenEstimate('residential')}
              onOpenChat={handleOpenChat}
              onExploreServices={() => handleNavigate('services')}
            />
            <WhyChooseUs
              onOpenEstimate={() => handleOpenEstimate('residential')}
              onOpenChat={handleOpenChat}
            />
            <ServicesSection
              onSelectService={(id) => handleNavigate('service-detail', id)}
              onOpenEstimate={() => handleOpenEstimate('residential')}
            />
            <ResidentialCommercialSection
              onOpenEstimate={handleOpenEstimate}
              onExploreService={(id) => handleNavigate('service-detail', id)}
            />
            <ProjectGallery
              onOpenEstimate={() => handleOpenEstimate('residential')}
              onOpenChat={handleOpenChat}
            />
            <ServiceAreasSection
              onOpenEstimate={() => handleOpenEstimate('residential')}
              onOpenChat={handleOpenChat}
            />
            <FinancingSection
              onOpenEstimate={() => handleOpenEstimate('residential')}
              onOpenChat={handleOpenChat}
            />
            <FAQSection
              onOpenEstimate={() => handleOpenEstimate('residential')}
              onOpenChat={handleOpenChat}
            />
            <ContactSection
              onOpenEstimate={() => handleOpenEstimate('residential')}
              onOpenChat={handleOpenChat}
            />
          </>
        )}

        {activeSection === 'services' && (
          <div>
            <div className="bg-slate-900 text-white py-12 px-4 text-center">
              <span className="text-xs font-bold text-red-500 uppercase tracking-widest block mb-1">
                Florida Certified Contractor CCC1329409
              </span>
              <h1 className="text-3xl sm:text-4xl font-black">
                P&G Roofing Systems & Services
              </h1>
              <p className="text-sm text-slate-300 max-w-xl mx-auto mt-2">
                Engineered for South Florida extreme weather, hurricane winds, and intense UV exposure.
              </p>
            </div>
            <ServicesSection
              onSelectService={(id) => handleNavigate('service-detail', id)}
              onOpenEstimate={() => handleOpenEstimate('residential')}
            />
            <WhyChooseUs
              onOpenEstimate={() => handleOpenEstimate('residential')}
              onOpenChat={handleOpenChat}
            />
          </div>
        )}

        {activeSection === 'service-detail' && (
          <ServiceDetailView
            service={currentService}
            onBack={() => handleNavigate('services')}
            onSelectService={(id) => handleNavigate('service-detail', id)}
            onOpenEstimate={() => handleOpenEstimate('residential')}
            onOpenChat={handleOpenChat}
          />
        )}

        {activeSection === 'residential' && (
          <div>
            <div className="bg-slate-900 text-white py-12 px-4 text-center">
              <span className="text-xs font-bold text-red-500 uppercase tracking-widest block mb-1">
                Single Family Homes & Luxury Estates
              </span>
              <h1 className="text-3xl sm:text-4xl font-black">
                Residential Roofing Solutions
              </h1>
            </div>
            <ResidentialCommercialSection
              onOpenEstimate={handleOpenEstimate}
              onExploreService={(id) => handleNavigate('service-detail', id)}
            />
            <ServicesSection
              onSelectService={(id) => handleNavigate('service-detail', id)}
              onOpenEstimate={() => handleOpenEstimate('residential')}
            />
            <ProjectGallery
              onOpenEstimate={() => handleOpenEstimate('residential')}
              onOpenChat={handleOpenChat}
            />
          </div>
        )}

        {activeSection === 'commercial' && (
          <div>
            <div className="bg-slate-900 text-white py-12 px-4 text-center">
              <span className="text-xs font-bold text-red-500 uppercase tracking-widest block mb-1">
                Commercial Facilities, Warehouses & Plazas
              </span>
              <h1 className="text-3xl sm:text-4xl font-black">
                Commercial Roofing & Waterproofing
              </h1>
            </div>
            <ResidentialCommercialSection
              onOpenEstimate={handleOpenEstimate}
              onExploreService={(id) => handleNavigate('service-detail', id)}
            />
            <ProjectGallery
              onOpenEstimate={() => handleOpenEstimate('commercial')}
              onOpenChat={handleOpenChat}
            />
          </div>
        )}

        {activeSection === 'gallery' && (
          <div>
            <div className="bg-slate-900 text-white py-12 px-4 text-center">
              <span className="text-xs font-bold text-red-500 uppercase tracking-widest block mb-1">
                Real South Florida Installations
              </span>
              <h1 className="text-3xl sm:text-4xl font-black">
                Our Work & Projects
              </h1>
            </div>
            <ProjectGallery
              onOpenEstimate={() => handleOpenEstimate('residential')}
              onOpenChat={handleOpenChat}
            />
          </div>
        )}

        {activeSection === 'service-areas' && (
          <div>
            <div className="bg-slate-900 text-white py-12 px-4 text-center">
              <span className="text-xs font-bold text-red-500 uppercase tracking-widest block mb-1">
                Miami-Dade · Broward · Palm Beach
              </span>
              <h1 className="text-3xl sm:text-4xl font-black">
                Service Areas Across South Florida
              </h1>
            </div>
            <ServiceAreasSection
              onOpenEstimate={() => handleOpenEstimate('residential')}
              onOpenChat={handleOpenChat}
            />
          </div>
        )}

        {activeSection === 'financing' && (
          <div>
            <div className="bg-slate-900 text-white py-12 px-4 text-center">
              <span className="text-xs font-bold text-red-500 uppercase tracking-widest block mb-1">
                GreenSky / Synovus Financing Partner
              </span>
              <h1 className="text-3xl sm:text-4xl font-black">
                Financing Programs & Payment Options
              </h1>
            </div>
            <FinancingSection
              onOpenEstimate={() => handleOpenEstimate('residential')}
              onOpenChat={handleOpenChat}
            />
          </div>
        )}

        {activeSection === 'faq' && (
          <div>
            <div className="bg-slate-900 text-white py-12 px-4 text-center">
              <span className="text-xs font-bold text-red-500 uppercase tracking-widest block mb-1">
                Help & Information
              </span>
              <h1 className="text-3xl sm:text-4xl font-black">
                Frequently Asked Questions
              </h1>
            </div>
            <FAQSection
              onOpenEstimate={() => handleOpenEstimate('residential')}
              onOpenChat={handleOpenChat}
            />
          </div>
        )}

        {activeSection === 'contact' && (
          <div>
            <div className="bg-slate-900 text-white py-12 px-4 text-center">
              <span className="text-xs font-bold text-red-500 uppercase tracking-widest block mb-1">
                Miami Headquarters & Dispatch
              </span>
              <h1 className="text-3xl sm:text-4xl font-black">
                Contact P&G Roofing Contractors Corp
              </h1>
            </div>
            <ContactSection
              onOpenEstimate={() => handleOpenEstimate('residential')}
              onOpenChat={handleOpenChat}
            />
          </div>
        )}
      </main>

      {/* Comprehensive Corporate Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenEstimate={() => handleOpenEstimate('residential')}
        onOpenChat={handleOpenChat}
      />

      {/* Mobile Sticky Contact Bar (Always visible on mobile without obscuring content) */}
      <MobileStickyBar onOpenEstimate={() => handleOpenEstimate('residential')} />

      {/* Floating Action Trigger for AI Assistant & WhatsApp (Desktop & Mobile) - Positioned on the Left */}
      <div className="fixed bottom-20 lg:bottom-6 left-4 sm:left-6 z-40 flex flex-col items-start gap-2.5">
        {/* Floating WhatsApp Button */}
        <a
          href={COMPANY_INFO.whatsapp.directUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl flex items-center justify-center transition-transform hover:scale-105 active:scale-95 group"
          title="Chat on WhatsApp (+1 305-300-5145)"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-6 h-6" />
        </a>

        {/* Floating P&G Roofing Assistant Trigger */}
        <button
          onClick={() => handleOpenChat()}
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white shadow-2xl border border-slate-700 transition-all hover:scale-105 active:scale-95 group"
          aria-label="Open P&G Roofing Assistant"
        >
          <div className="relative">
            <div className="w-7 h-7 rounded-lg bg-red-600 flex items-center justify-center text-white text-xs font-black">
              P&G
            </div>
            <span className="w-2 h-2 rounded-full bg-emerald-400 absolute -top-0.5 -right-0.5 animate-pulse"></span>
          </div>
          <span className="text-xs font-bold hidden sm:inline">P&G Assistant</span>
        </button>
      </div>

      {/* Free Inspection Booking Modal */}
      <EstimateModal
        isOpen={isEstimateModalOpen}
        onClose={() => setIsEstimateModalOpen(false)}
        initialPropertyType={estimatePropertyType}
      />

      {/* Conversational P&G Roofing Assistant */}
      <ChatAssistant
        isOpen={isChatOpen}
        onClose={() => {
          setIsChatOpen(false);
          setChatInitialPrompt(undefined);
        }}
        onOpenEstimate={() => {
          setIsChatOpen(false);
          handleOpenEstimate('residential');
        }}
        initialPrompt={chatInitialPrompt}
      />
    </div>
  );
}
