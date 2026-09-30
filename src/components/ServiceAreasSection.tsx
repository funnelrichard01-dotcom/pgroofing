import React, { useState } from 'react';
import { MapPin, Search, CheckCircle2, Phone, CalendarCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface ServiceAreasSectionProps {
  onOpenEstimate: () => void;
  onOpenChat: (msg?: string) => void;
}

export const ServiceAreasSection: React.FC<ServiceAreasSectionProps> = ({
  onOpenEstimate,
  onOpenChat,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCities = COMPANY_INFO.cities.filter((city) =>
    city.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-bold text-red-600 uppercase tracking-widest block mb-2">
            South Florida Regional Coverage
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Service Areas
          </h2>
          <p className="mt-3 text-base text-slate-600">
            P&G Roofing Contractors Corp provides prompt residential and commercial roofing across Miami-Dade County, Broward County, and Palm Beach County.
          </p>
        </div>

        {/* 3 County Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-3">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Miami-Dade County</h3>
            <p className="text-xs text-slate-600">
              Primary headquarters in Miami. Serving all incorporated and unincorporated municipalities with code-certified roofing.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center mx-auto mb-3">
              <MapPin className="w-5 h-5 text-red-400" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Broward County</h3>
            <p className="text-xs text-slate-600">
              Full residential and commercial roofing teams servicing Broward communities with storm-ready systems.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-3">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Palm Beach County</h3>
            <p className="text-xs text-slate-600">
              Specialized tile, metal, and commercial flat roof replacements, maintenance, and waterproofing across Palm Beach.
            </p>
          </div>
        </div>

        {/* City Directory with Live Search */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl font-extrabold text-slate-900">
                Verified Municipality Directory
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Showing all {COMPANY_INFO.cities.length} verified municipalities served by P&G Roofing:
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search your city..."
                className="w-full pl-9 pr-4 py-2 bg-white rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
          </div>

          {/* Cities Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2.5">
            {filteredCities.map((city, idx) => (
              <button
                key={idx}
                onClick={() => onOpenChat(`Do you service ${city}?`)}
                className="p-3 bg-white rounded-xl border border-slate-200 text-left hover:border-red-400 hover:shadow-sm transition-all group flex items-center justify-between"
              >
                <span className="text-xs font-semibold text-slate-800 group-hover:text-red-600 truncate">
                  {city}
                </span>
                <MapPin className="w-3 h-3 text-slate-300 group-hover:text-red-500 shrink-0 ml-1" />
              </button>
            ))}
          </div>

          {filteredCities.length === 0 && (
            <div className="text-center py-8 text-slate-500 text-sm">
              No matching city listed. P&G Roofing serves all of Miami-Dade, Broward, and Palm Beach County. Contact us directly at (305) 300-5145.
            </div>
          )}

          {/* Service Area Bottom Prompt */}
          <div className="mt-10 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <div className="text-sm font-bold text-slate-900">
                Don't see your specific neighborhood?
              </div>
              <div className="text-xs text-slate-600">
                If your property is in Miami-Dade, Broward, or Palm Beach County, our teams cover your location.
              </div>
            </div>

            <button
              onClick={onOpenEstimate}
              className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-sm shrink-0"
            >
              Confirm Service & Schedule Inspection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
