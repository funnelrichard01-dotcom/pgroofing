import React, { useState } from 'react';
import { Home, Building2, CheckCircle2, CalendarCheck, Phone, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface ResidentialCommercialSectionProps {
  onOpenEstimate: (propertyType?: 'residential' | 'commercial') => void;
  onExploreService: (serviceId: any) => void;
}

export const ResidentialCommercialSection: React.FC<ResidentialCommercialSectionProps> = ({
  onOpenEstimate,
  onExploreService,
}) => {
  const [activeTab, setActiveTab] = useState<'residential' | 'commercial'>('residential');

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs sm:text-sm font-bold text-red-600 uppercase tracking-widest block mb-2">
            Tailored Roofing Pathways
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Residential & Commercial Roofing
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Whether protecting your family home or securing a large-scale commercial building, P&G Roofing deploys specialized crews, equipment, and materials for each property class.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
            <button
              onClick={() => setActiveTab('residential')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'residential'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Residential Roofing</span>
            </button>
            <button
              onClick={() => setActiveTab('commercial')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'commercial'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Commercial Roofing</span>
            </button>
          </div>
        </div>

        {/* Active Pathway Content */}
        {activeTab === 'residential' ? (
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold">
                <Home className="w-3.5 h-3.5" />
                <span>Single Family · Townhomes · Luxury Estates</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Protecting South Florida Homes from Sun, Rain & Hurricanes
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Your home is your largest investment. P&G Roofing provides high-craftsmanship tile, architectural shingles, and custom standing seam metal roofing designed to enhance curb appeal while offering maximum hurricane protection. Homeowners typically stay comfortably in their home throughout the 2 to 5 day replacement window.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-700">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Spanish Clay & Concrete Tile</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Standing Seam Hurricane Metal</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Architectural Shingle Systems</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                  <span>GreenSky / Synovus Financing</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Cement Balcony Waterproofing</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Free Thorough Home Inspection</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4">
                <button
                  onClick={() => onOpenEstimate('residential')}
                  className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md"
                >
                  Schedule Residential Inspection
                </button>
                <button
                  onClick={() => onExploreService('tile-roofing')}
                  className="px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-semibold text-sm border border-slate-200"
                >
                  View Residential Tile Options →
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 h-80">
                <img
                  src="https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=1000&q=80"
                  alt="P&G Residential Tile Roofing in South Florida"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-bold border border-slate-700">
                <Building2 className="w-3.5 h-3.5 text-red-400" />
                <span>Warehouses · Retail Plazas · Condominiums · Offices</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Engineered Commercial Roofing & Waterproofing Systems
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                P&G Roofing understands that commercial roof projects require minimal operational disruption, rigorous safety compliance, and maximum longevity. We install reflective TPO, PVC, Modified Bitumen, and liquid silicone coatings that eliminate ponding water, withstand tropical storm uplift, and significantly lower energy bills.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Single-Ply TPO & PVC Membranes</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Multi-Ply Modified Bitumen</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Liquid Silicone Restorations</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Commercial Balconies & Terraces</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Full Florida Code HVHZ Compliance</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Free Commercial Property Assessment</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4">
                <button
                  onClick={() => onOpenEstimate('commercial')}
                  className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md"
                >
                  Schedule Commercial Inspection
                </button>
                <button
                  onClick={() => onExploreService('flat-roofing')}
                  className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700"
                >
                  Explore Flat Roofing Systems →
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-800 h-80">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
                  alt="P&G Commercial Flat Roofing in South Florida"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
