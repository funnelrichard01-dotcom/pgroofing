import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare, Phone, CalendarCheck } from 'lucide-react';
import { FAQS, COMPANY_INFO } from '../data/companyData';

interface FAQSectionProps {
  onOpenEstimate: () => void;
  onOpenChat: (msg?: string) => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenEstimate, onOpenChat }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'General', 'Services', 'Estimates', 'Process', 'Warranties'];

  const filteredFaqs = selectedFilter === 'All'
    ? FAQS
    : FAQS.filter(f => f.category === selectedFilter);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs sm:text-sm font-bold text-red-600 uppercase tracking-widest block mb-2">
            Clear, Verified Answers
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Everything you need to know about roof replacement, leak repairs, materials, Florida hurricane building codes, and warranties.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-slate-100 rounded-xl max-w-lg mx-auto mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                selectedFilter === cat
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'border-red-200 bg-red-50/20 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-red-100 text-red-600' : 'bg-slate-100 text-slate-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm sm:text-base text-slate-700 leading-relaxed border-t border-slate-100/80 pt-4">
                    <p>{faq.answer}</p>
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-400">
                      <span>Have a specific follow-up?</span>
                      <button
                        onClick={() => onOpenChat(faq.question)}
                        className="text-red-600 hover:text-red-700 font-semibold underline underline-offset-2"
                      >
                        Ask P&G Assistant about this
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help Banner Below FAQ */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-3">
          <HelpCircle className="w-8 h-8 text-red-600 mx-auto" />
          <h3 className="text-lg font-bold text-slate-900">
            Have a question not listed here?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
            Our team is available by phone and WhatsApp, or you can chat immediately with our 24/7 P&G Roofing Assistant.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onOpenChat()}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl shadow-sm"
            >
              Chat With AI Assistant
            </button>
            <a
              href={`tel:${COMPANY_INFO.phones.primaryRaw}`}
              className="px-4 py-2 bg-white hover:bg-slate-100 text-slate-800 font-semibold text-xs rounded-xl border border-slate-200 flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-red-600" />
              <span>Call ({COMPANY_INFO.phones.primary})</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
