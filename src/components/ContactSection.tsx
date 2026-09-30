import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  ShieldCheck, 
  CalendarCheck 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface ContactSectionProps {
  onOpenEstimate: () => void;
  onOpenChat: (msg?: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenEstimate,
  onOpenChat,
}) => {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-bold text-red-600 uppercase tracking-widest block mb-2">
            Direct & Responsive Communication
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact P&G Roofing
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Have questions about your roof, need an emergency leak assessment, or want to schedule your free on-site roof inspection? Reach out to our Miami office directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
                <div className="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center font-black text-xl">
                  P&G
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {COMPANY_INFO.legalName}
                  </h3>
                  <div className="text-xs text-red-600 font-semibold flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Florida License # {COMPANY_INFO.license}</span>
                  </div>
                </div>
              </div>

              {/* Physical Address */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-red-600 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    Headquarters Address
                  </strong>
                  <p className="text-sm font-semibold text-slate-900 mt-0.5">
                    {COMPANY_INFO.address.street}
                    <br />
                    {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}
                    <br />
                    {COMPANY_INFO.address.country}
                  </p>
                </div>
              </div>

              {/* Phones */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-red-600 shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <strong className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    Direct Telephone
                  </strong>
                  <div>
                    <a
                      href={`tel:${COMPANY_INFO.phones.primaryRaw}`}
                      className="text-base font-bold text-slate-900 hover:text-red-600 transition-colors block"
                    >
                      {COMPANY_INFO.phones.primary} <span className="text-xs font-normal text-slate-500">(Primary Office)</span>
                    </a>
                    <a
                      href={`tel:${COMPANY_INFO.phones.secondaryRaw}`}
                      className="text-sm text-slate-700 hover:text-red-600 transition-colors block"
                    >
                      {COMPANY_INFO.phones.secondary} <span className="text-xs font-normal text-slate-500">(Operations Line)</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-emerald-600 shrink-0 mt-0.5">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    Instant WhatsApp Support
                  </strong>
                  <a
                    href={COMPANY_INFO.whatsapp.directUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-emerald-700 hover:text-emerald-800 transition-colors block mt-0.5"
                  >
                    {COMPANY_INFO.whatsapp.number} — Click to Chat
                  </a>
                  <span className="text-xs text-slate-500">
                    Fast response for photos, questions, and project coordination.
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-red-600 shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    Official Email
                  </strong>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-sm font-semibold text-slate-900 hover:text-red-600 transition-colors block mt-0.5"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    Working Hours
                  </strong>
                  <p className="text-xs sm:text-sm text-slate-700 mt-0.5">
                    {COMPANY_INFO.businessHours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Fast Action Card & Map */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6">
              <div>
                <span className="text-xs font-bold text-red-400 uppercase tracking-widest block mb-1">
                  Immediate Next Step
                </span>
                <h3 className="text-2xl font-extrabold text-white">
                  Schedule Free On-Site Inspection
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2">
                  Our certified inspectors will visit your property in Miami-Dade, Broward, or Palm Beach County at no charge.
                </p>
              </div>

              <div className="p-4 bg-slate-950/70 rounded-2xl border border-slate-800 space-y-3">
                <div className="text-xs font-bold text-slate-200">
                  What happens when you request an inspection?
                </div>
                <div className="space-y-2 text-xs text-slate-400">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5"></span>
                    <span>Prompt confirmation call from our Miami dispatch desk</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5"></span>
                    <span>Thorough roof surface, underlayment & flashing assessment</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5"></span>
                    <span>Itemized written quote with material & warranty choices</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onOpenEstimate}
                  className="w-full py-3.5 px-4 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs sm:text-sm rounded-xl transition-all shadow-md text-center flex items-center justify-center gap-2"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>REQUEST FREE ESTIMATE NOW</span>
                </button>

                <a
                  href={COMPANY_INFO.whatsapp.directUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WHATSAPP</span>
                </a>
              </div>
            </div>

            {/* Miami Location & Service Area Map Frame */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 bg-slate-100 p-6 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-800">
                  Serving Tri-County South Florida
                </span>
                <span className="text-red-600 font-semibold">
                  HQ: 541 NW 153rd St, Miami
                </span>
              </div>
              <div className="h-44 rounded-2xl bg-slate-200 relative overflow-hidden flex items-center justify-center border border-slate-300">
                <div className="text-center p-4">
                  <MapPin className="w-8 h-8 text-red-600 mx-auto mb-1 animate-bounce" />
                  <strong className="text-sm font-bold text-slate-900 block">
                    P&G Roofing Contractors Corp
                  </strong>
                  <span className="text-xs text-slate-600 block mt-0.5">
                    541 NW 153rd St, Miami, FL 33169
                  </span>
                  <a
                    href="https://maps.google.com/?q=541+NW+153rd+St,+Miami,+FL+33169"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-xs font-bold text-red-600 hover:underline"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
