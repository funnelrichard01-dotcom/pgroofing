import React from 'react';
import { 
  Phone, 
  MessageSquare, 
  CalendarCheck, 
  ShieldCheck, 
  CheckCircle2, 
  BadgePercent, 
  Award,
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeroProps {
  onOpenEstimate: () => void;
  onOpenChat: (initialMsg?: string) => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenEstimate,
  onOpenChat,
  onExploreServices,
}) => {
  return (
    <section className="relative bg-slate-950 text-white overflow-hidden">
      {/* Background Graphic & Texture */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=2000&q=85"
          alt="South Florida Tile and Metal Roofing by P&G Roofing Contractors"
          className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity scale-105 transform motion-safe:animate-pulse duration-[12000ms]"
        />
        {/* Gradients to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 md:pt-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Value Proposition Column */}
          <div className="lg:col-span-8 space-y-6">
            {/* Trust Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs sm:text-sm text-slate-300 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
              <span className="font-semibold text-white">Florida Certified Roofing Contractor</span>
              <span className="text-slate-500">·</span>
              <span className="text-red-400 font-mono font-medium">Lic #{COMPANY_INFO.license}</span>
            </div>

            {/* Authority Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] text-balance">
              <span className="text-red-500">P&G ROOFING</span>
              <br />
              <span className="text-white">Your Trusted South Florida Roofing Experts</span>
            </h1>

            {/* Verified Supporting Statement */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Serving Miami-Dade, Broward, and Palm Beach for over 15 years with 35 years of industry expertise. Specializing in durable tile, standing seam metal, architectural shingles, commercial flat roofing, waterproofing, and precision leak repairs.
            </p>

            {/* Quick Proof Points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>Residential & Commercial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>100% Free Roof Inspections</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>Flexible Financing Available</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>Full Workmanship Warranties</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>Florida HVHZ Code Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>Prompt Leak Diagnostics</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-4">
              {/* Primary CTA */}
              <button
                onClick={onOpenEstimate}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-red-600 hover:bg-red-700 active:scale-[0.98] text-white font-extrabold text-sm sm:text-base shadow-lg shadow-red-950/50 hover:shadow-red-900/70 transition-all border border-red-500"
              >
                <CalendarCheck className="w-5 h-5 text-white" />
                <span>GET A FREE ROOF INSPECTION</span>
              </button>

              {/* Secondary CTA: Phone */}
              <a
                href={`tel:${COMPANY_INFO.phones.primaryRaw}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm sm:text-base border border-slate-700 transition-all"
              >
                <Phone className="w-4 h-4 text-red-400" />
                <span>CALL {COMPANY_INFO.phones.primary}</span>
              </a>

              {/* Additional CTA: WhatsApp */}
              <a
                href={COMPANY_INFO.whatsapp.directUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-emerald-600/90 hover:bg-emerald-600 text-white font-bold text-sm sm:text-base border border-emerald-500/50 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>WHATSAPP US</span>
              </a>
            </div>

            {/* Quick interactive chat prompt */}
            <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
              <span>Have an active leak or urgent question?</span>
              <button
                onClick={() => onOpenChat('my roof is not good')}
                className="text-red-400 hover:text-red-300 font-semibold underline underline-offset-4 flex items-center gap-1"
              >
                Ask P&G Roofing Assistant <ArrowRight className="w-3 h-3 inline" />
              </button>
            </div>
          </div>

          {/* Quick Inspection Card Column */}
          <div className="lg:col-span-4">
            <div className="bg-slate-900/95 border border-slate-800 rounded-2xl p-6 shadow-2xl backdrop-blur-sm space-y-4">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-[11px] font-bold text-red-500 uppercase tracking-widest block mb-1">
                  Zero Obligation
                </span>
                <h2 className="text-xl font-extrabold text-white">
                  Schedule Free Roof Inspection
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Our certified technicians evaluate your roof deck, flashing, and materials at zero cost.
                </p>
              </div>

              {/* Fast Direct Action Links inside Hero Box */}
              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">License # CCC1329409</strong>
                    <span className="text-slate-400 text-[11px]">Fully licensed & insured certified contractor</span>
                  </div>
                </div>

                <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800 flex items-start gap-3">
                  <BadgePercent className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Financing Available</strong>
                    <span className="text-slate-400 text-[11px]">Partnered with GreenSky / Synovus (subject to credit)</span>
                  </div>
                </div>

                <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800 flex items-start gap-3">
                  <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Dual Warranties</strong>
                    <span className="text-slate-400 text-[11px]">Manufacturer materials + P&G workmanship warranty</span>
                  </div>
                </div>
              </div>

              {/* CTA Inside Hero Box */}
              <button
                onClick={onOpenEstimate}
                className="w-full py-3.5 px-4 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl transition-all shadow-md text-center block"
              >
                REQUEST MY FREE ESTIMATE
              </button>

              <div className="text-center">
                <a
                  href={`tel:${COMPANY_INFO.phones.primaryRaw}`}
                  className="text-xs text-slate-400 hover:text-white transition-colors"
                >
                  Or call directly: <strong className="text-slate-200">{COMPANY_INFO.phones.primary}</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Signal Bottom Strip */}
      <div className="relative z-10 border-t border-slate-800 bg-slate-900/60 backdrop-blur-sm py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-3 gap-x-6 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="font-semibold text-white">Serving South Florida:</span>
            <span>Miami-Dade · Broward · Palm Beach Counties</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span>Tile</span>
            <span>·</span>
            <span>Standing Seam Metal</span>
            <span>·</span>
            <span>Architectural Shingle</span>
            <span>·</span>
            <span>TPO / Flat Systems</span>
            <span>·</span>
            <span>Waterproofing</span>
          </div>

          <button
            onClick={onExploreServices}
            className="text-red-400 hover:text-red-300 font-semibold flex items-center gap-1 ml-auto"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
