import React from 'react';
import { 
  ShieldCheck, 
  ClipboardCheck, 
  Award, 
  BadgeDollarSign, 
  Layers, 
  Sparkles,
  Phone,
  MessageSquare,
  CalendarCheck
} from 'lucide-react';
import { WHY_CHOOSE_US, PARTNERS_BRANDS, COMPANY_INFO } from '../data/companyData';

interface WhyChooseUsProps {
  onOpenEstimate: () => void;
  onOpenChat: (msg?: string) => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenEstimate, onOpenChat }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-red-600" />;
      case 'ClipboardCheck':
        return <ClipboardCheck className="w-6 h-6 text-red-600" />;
      case 'Award':
        return <Award className="w-6 h-6 text-red-600" />;
      case 'BadgeDollarSign':
        return <BadgeDollarSign className="w-6 h-6 text-red-600" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-red-600" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-red-600" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-red-600" />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold text-red-600 uppercase tracking-widest block mb-2">
            The P&G Roofing Standard
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Choose P&G Roofing
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            With over 15 years serving the South Florida community and 35 years of industry expertise, P&G Roofing Contractors Corp provides unmatched craftsmanship, verified materials, and transparent communication.
          </p>
        </div>

        {/* 6 Core Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-red-300 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                  {getIcon(item.icon)}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Card Footer note */}
              <div className="pt-4 mt-4 border-t border-slate-200/70 flex items-center justify-between text-xs text-slate-400">
                <span>Verified Benefit</span>
                <span className="text-red-600 font-semibold group-hover:translate-x-0.5 transition-transform">
                  P&G Standard
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Brand & Manufacturer Section */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
              Tested Quality Materials
            </span>
            <h3 className="text-xl font-extrabold text-slate-800 mt-1">
              Industry-Leading Manufacturer Partnerships
            </h3>
            <p className="text-xs text-slate-500 max-w-xl mx-auto mt-1">
              We install high-performance roofing components from recognized brands certified for Florida Building Code and High-Velocity Hurricane Zones.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {PARTNERS_BRANDS.map((partner, idx) => (
              <div
                key={idx}
                className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center flex flex-col justify-center items-center hover:bg-white hover:border-slate-300 transition-colors"
              >
                <span className="text-xs font-bold text-slate-800 block truncate w-full">
                  {partner.name}
                </span>
                <span className="text-[10px] text-slate-500 truncate w-full mt-0.5">
                  {partner.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Free Inspection Callout Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 text-white border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-bold text-red-400 uppercase tracking-widest">
              No Cost · No Obligation
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Get A Free Roof Inspection & Transparent Written Quote
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              From minor tile repairs to full residential and commercial re-roofing, we evaluate your property thoroughly before giving you an accurate proposal.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenEstimate}
              className="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>GET FREE ESTIMATE</span>
            </button>

            <a
              href={`tel:${COMPANY_INFO.phones.primaryRaw}`}
              className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all flex items-center gap-1.5"
            >
              <Phone className="w-4 h-4 text-red-400" />
              <span>{COMPANY_INFO.phones.primary}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
