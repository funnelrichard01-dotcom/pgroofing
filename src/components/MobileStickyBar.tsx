import React from 'react';
import { Phone, MessageSquare, CalendarCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface MobileStickyBarProps {
  onOpenEstimate: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenEstimate }) => {
  return (
    <aside 
      aria-label="Quick contact actions"
      className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800 p-2.5 px-3 shadow-2xl transition-transform"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call CTA */}
        <a
          href={`tel:${COMPANY_INFO.phones.primaryRaw}`}
          className="flex flex-col sm:flex-row items-center justify-center gap-1 py-2 px-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 active:scale-95 transition-all text-center"
          aria-label="Call P&G Roofing"
        >
          <Phone className="w-3.5 h-3.5 text-red-400 shrink-0" />
          <span className="truncate">Call</span>
        </a>

        {/* WhatsApp CTA */}
        <a
          href={COMPANY_INFO.whatsapp.directUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col sm:flex-row items-center justify-center gap-1 py-2 px-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold active:scale-95 transition-all text-center shadow-sm"
          aria-label="WhatsApp P&G Roofing"
        >
          <MessageSquare className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">WhatsApp</span>
        </a>

        {/* Free Estimate CTA */}
        <button
          onClick={onOpenEstimate}
          className="flex flex-col sm:flex-row items-center justify-center gap-1 py-2 px-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-bold active:scale-95 transition-all text-center shadow-md shadow-red-900/20"
          aria-label="Request Free Roof Inspection"
        >
          <CalendarCheck className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">Estimate</span>
        </button>
      </div>
    </aside>
  );
};
