import React from 'react';
import { 
  BadgeDollarSign, 
  CheckCircle2, 
  ShieldCheck, 
  CalendarCheck, 
  Phone, 
  Info 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface FinancingSectionProps {
  onOpenEstimate: () => void;
  onOpenChat: (msg?: string) => void;
}

export const FinancingSection: React.FC<FinancingSectionProps> = ({
  onOpenEstimate,
  onOpenChat,
}) => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-bold text-red-600 uppercase tracking-widest block mb-2">
            Affordable Payment Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Flexible Roofing Financing
          </h2>
          <p className="mt-3 text-base text-slate-600">
            A new roof is a critical investment in your property's safety and value. P&G Roofing connects homeowners and commercial clients with recognized financial lending partners.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200 shadow-sm max-w-4xl mx-auto space-y-8">
          {/* Partner Header */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Financial Lending Partner
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-1">
                Financing via GreenSky / Synovus
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Convenient financing programs tailored for roof replacement and major repairs.
              </p>
            </div>

            <div className="px-4 py-2 bg-slate-100 rounded-xl text-center shrink-0">
              <span className="text-xs font-bold text-slate-700 block">
                GreenSky® Program
              </span>
              <span className="text-[11px] text-slate-500">
                A Division of Synovus Bank
              </span>
            </div>
          </div>

          {/* Key Advantages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-sm font-bold text-slate-900 block">
                  Quick Online Application
                </strong>
                <span className="text-xs text-slate-600">
                  Paperless application process with fast credit decisioning directly from your smartphone or computer.
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-sm font-bold text-slate-900 block">
                  Manageable Monthly Payments
                </strong>
                <span className="text-xs text-slate-600">
                  Spread project costs over time instead of paying the entire installation upfront.
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-sm font-bold text-slate-900 block">
                  Repairs & Replacements Eligible
                </strong>
                <span className="text-xs text-slate-600">
                  Financing available for both full roof replacements and qualifying restorative repair work.
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-sm font-bold text-slate-900 block">
                  No Prepayment Penalties
                </strong>
                <span className="text-xs text-slate-600">
                  Pay off your balance ahead of schedule at any time with complete flexibility.
                </span>
              </div>
            </div>
          </div>

          {/* Critical Compliance Note */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-3 text-xs text-amber-900">
            <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold block mb-0.5">Financing Disclosure:</strong>
              <span>
                All financing programs and payment plans are subject to credit approval and terms provided by the third-party lending institution (GreenSky / Synovus). P&G Roofing Contractors Corp does not make credit decisions. Specific interest rates, terms, and conditions depend on the borrower's credit profile.
              </span>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500 text-center sm:text-left">
              Speak with our team to include financing paperwork with your free estimate.
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenEstimate}
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center gap-2"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Request Estimate with Financing</span>
              </button>

              <button
                onClick={() => onOpenChat('do you offer financing')}
                className="px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm rounded-xl transition-all"
              >
                Ask Assistant About Financing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
