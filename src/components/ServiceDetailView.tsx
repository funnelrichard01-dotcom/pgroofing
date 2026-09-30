import React from 'react';
import { 
  ArrowLeft, 
  Phone, 
  MessageSquare, 
  CalendarCheck, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  Sparkles, 
  Home, 
  Building2 
} from 'lucide-react';
import { ServiceItem } from '../types';
import { COMPANY_INFO, SERVICES } from '../data/companyData';

interface ServiceDetailViewProps {
  service: ServiceItem;
  onBack: () => void;
  onSelectService: (serviceId: any) => void;
  onOpenEstimate: () => void;
  onOpenChat: (msg?: string) => void;
}

export const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({
  service,
  onBack,
  onSelectService,
  onOpenEstimate,
  onOpenChat,
}) => {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Breadcrumb & Navigation Header */}
      <div className="bg-slate-900 text-slate-200 py-4 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-red-400" />
            <span>Back to All Roofing Services</span>
          </button>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>P&G Services</span>
            <span>/</span>
            <span className="text-white font-medium">{service.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Banner for Service */}
      <div className="relative bg-slate-950 text-white overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover opacity-25 mix-blend-luminosity scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-800 text-red-300 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-red-400" />
              <span>Certified Installation · License # CCC1329409</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              {service.title}
            </h1>

            <p className="text-lg sm:text-xl text-red-100/90 font-medium">
              {service.tagline}
            </p>

            {/* Direct CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                onClick={onOpenEstimate}
                className="px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm shadow-md transition-all flex items-center gap-2"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>{service.ctaText}</span>
              </button>

              <a
                href={`tel:${COMPANY_INFO.phones.primaryRaw}`}
                className="px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-red-400" />
                <span>Call {COMPANY_INFO.phones.primary}</span>
              </a>

              <a
                href={COMPANY_INFO.whatsapp.directUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Service Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Prose & Details Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview Section */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                About {service.title} in South Florida
              </h2>
              {service.description.map((paragraph, idx) => (
                <p key={idx} className="text-base text-slate-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Key Benefits Card */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="flex items-center gap-2.5 mb-6">
                <Sparkles className="w-6 h-6 text-red-600" />
                <h3 className="text-xl font-bold text-slate-900">
                  Verified Performance Benefits
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.keyBenefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications & Typical Structures */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">
                Recommended Applications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.applications.map((app, idx) => (
                  <div key={idx} className="p-4 bg-white rounded-xl border border-slate-200 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-600 shrink-0"></div>
                    <span className="text-sm font-medium text-slate-800">{app}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Materials & Components */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">
                Premium Tested Materials Used
              </h3>
              <p className="text-sm text-slate-600">
                We strictly install commercial and residential components engineered to comply with the Florida Building Code and High-Velocity Hurricane Zone requirements.
              </p>
              <div className="flex flex-wrap gap-2">
                {service.materials.map((mat, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 bg-slate-100 rounded-lg text-xs font-semibold text-slate-800 border border-slate-200"
                  >
                    {mat}
                  </span>
                ))}
              </div>
            </div>

            {/* Real Project Imagery */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h3 className="text-xl font-bold text-slate-900">
                Project Gallery Examples
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.galleryImages.map((img, idx) => (
                  <div key={idx} className="rounded-xl overflow-hidden shadow-sm border border-slate-200 h-60">
                    <img
                      src={img}
                      alt={`${service.title} project example ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom In-Page Conversion CTA */}
            <div className="p-8 bg-slate-900 text-white rounded-2xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1">
                <span className="text-xs font-bold text-red-400 uppercase tracking-widest">
                  Ready to Start?
                </span>
                <h4 className="text-xl font-extrabold text-white">
                  Schedule Free {service.title} Inspection
                </h4>
                <p className="text-xs text-slate-300">
                  Our Florida licensed inspectors evaluate your roof and provide an itemized written quote.
                </p>
              </div>

              <button
                onClick={onOpenEstimate}
                className="px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm shrink-0 shadow-lg"
              >
                REQUEST FREE ESTIMATE
              </button>
            </div>
          </div>

          {/* Sidebar / Quick Links & Contact */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Estimate Card */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
              <h4 className="text-lg font-bold text-slate-900">
                Get A Quote for {service.title}
              </h4>
              <p className="text-xs text-slate-600">
                P&G Roofing provides thorough on-site inspections at no charge across South Florida.
              </p>

              <button
                onClick={onOpenEstimate}
                className="w-full py-3 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm text-center block shadow-sm"
              >
                GET FREE ROOF INSPECTION
              </button>

              <div className="pt-2 border-t border-slate-200 text-center space-y-2">
                <a
                  href={`tel:${COMPANY_INFO.phones.primaryRaw}`}
                  className="text-xs font-semibold text-slate-800 hover:text-red-600 block"
                >
                  Call: {COMPANY_INFO.phones.primary}
                </a>
                <a
                  href={COMPANY_INFO.whatsapp.directUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 block"
                >
                  WhatsApp: {COMPANY_INFO.whatsapp.number}
                </a>
              </div>
            </div>

            {/* All Services Navigation List */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-3">
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                All P&G Roofing Systems
              </h4>
              <div className="space-y-1">
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => onSelectService(s.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                      s.id === service.id
                        ? 'bg-red-600 text-white font-bold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-red-600'
                    }`}
                  >
                    <span>{s.title}</span>
                    <span>→</span>
                  </button>
                ))}
              </div>
            </div>

            {/* AI Assistant Quick Trigger */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
                <h4 className="text-sm font-bold text-white">
                  Have Questions on {service.title}?
                </h4>
              </div>
              <p className="text-xs text-slate-300">
                Ask our verified P&G Roofing Assistant about material longevity, storm durability, or financing options.
              </p>
              <button
                onClick={() => onOpenChat(`Tell me more about ${service.title}`)}
                className="w-full py-2.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-red-400 hover:text-red-300 text-xs font-bold border border-slate-700 transition-colors"
              >
                Chat with Assistant →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
