import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { SERVICES } from '../data/companyData';
import { ServiceId } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceId: ServiceId) => void;
  onOpenEstimate: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenEstimate,
}) => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs sm:text-sm font-bold text-red-600 uppercase tracking-widest block mb-1">
              Engineered for South Florida Climate
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Comprehensive Roofing Services
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-2xl">
              From residential Mediterranean tile to heavy-duty commercial flat roofing and emergency leak repairs, every service is executed under Florida Certified Contractor License # CCC1329409.
            </p>
          </div>

          <button
            onClick={onOpenEstimate}
            className="self-start md:self-auto px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm transition-all"
          >
            Get Free Inspection
          </button>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-red-200 transition-all overflow-hidden flex flex-col group"
            >
              {/* Image Frame */}
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-xl font-extrabold text-white">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Key Benefits Snapshot */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  {service.keyBenefits.slice(0, 3).map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Action Link */}
                <div className="pt-3">
                  <button
                    onClick={() => onSelectService(service.id)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-red-50 text-slate-800 hover:text-red-700 font-bold text-xs sm:text-sm border border-slate-200 hover:border-red-200 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Explore {service.title} Details</span>
                    <ArrowRight className="w-4 h-4 text-red-600 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
