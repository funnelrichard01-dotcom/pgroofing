import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  Tag, 
  Layers, 
  ZoomIn, 
  CalendarCheck, 
  Phone, 
  MessageSquare,
  CheckCircle2
} from 'lucide-react';
import { PROJECTS_GALLERY, COMPANY_INFO } from '../data/companyData';
import { ProjectItem } from '../types';

interface ProjectGalleryProps {
  onOpenEstimate: () => void;
  onOpenChat: (msg?: string) => void;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  onOpenEstimate,
  onOpenChat,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxProject, setActiveLightboxProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Metal', 'Flat', 'Waterproof', 'Tile', 'Repair', 'Shingle'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_GALLERY
    : PROJECTS_GALLERY.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs sm:text-sm font-bold text-red-600 uppercase tracking-widest block mb-2">
            Proven Craftsmanship Across South Florida
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Work & Project Portfolio
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Browse our completed South Florida roofing projects across Miami-Dade, Broward, and Palm Beach, spanning luxury residential tile, storm-rated standing seam metal, commercial flat roofs, and waterproofed balconies.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-white rounded-2xl border border-slate-200 max-w-2xl mx-auto mb-12 shadow-sm">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                selectedCategory === cat
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-red-200 transition-all overflow-hidden flex flex-col group cursor-pointer"
              onClick={() => setActiveLightboxProject(project)}
            >
              {/* Image Container with Hover Overlay */}
              <div className="relative h-60 overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors" />

                {/* Category & Location Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 bg-slate-900/90 text-white text-[11px] font-bold rounded-lg backdrop-blur-sm">
                    {project.category}
                  </span>
                  <span className="px-2.5 py-1 bg-white/90 text-slate-800 text-[11px] font-semibold rounded-lg backdrop-blur-sm flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-red-600" />
                    <span>{project.location}</span>
                  </span>
                </div>

                {/* Zoom Hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="px-4 py-2 bg-slate-900/80 text-white text-xs font-bold rounded-xl flex items-center gap-2 backdrop-blur-sm">
                    <ZoomIn className="w-4 h-4 text-red-400" />
                    <span>View Project Details</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-xs text-red-600 font-semibold mb-1">
                    {project.propertyType} Roofing
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Specs / Highlights */}
                <div className="pt-3 border-t border-slate-100 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Layers className="w-3.5 h-3.5 text-slate-400" />
                    <span className="truncate"><strong>Material:</strong> {project.materialUsed}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Post-Gallery Conversion Callout */}
        <div className="mt-16 p-8 bg-slate-900 rounded-3xl text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-bold text-red-400 uppercase tracking-widest">
              Have A Similar Property?
            </span>
            <h3 className="text-2xl font-extrabold text-white">
              Get A Free Estimate for Your South Florida Property
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              We inspect your roof condition on-site and provide an itemized proposal with clear material choices and warranty options.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenEstimate}
              className="px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm rounded-xl shadow-lg transition-all"
            >
              REQUEST FREE INSPECTION
            </button>
            <a
              href={`tel:${COMPANY_INFO.phones.primaryRaw}`}
              className="px-5 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm rounded-xl border border-slate-700 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-red-400" />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
            {/* Modal Header & Close Button */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 bg-red-600 text-white text-xs font-bold rounded-lg">
                  {activeLightboxProject.category}
                </span>
                <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-red-600" />
                  <span>{activeLightboxProject.location}</span>
                </span>
              </div>

              <button
                onClick={() => setActiveLightboxProject(null)}
                className="p-1.5 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-slate-200/60 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto p-6 space-y-6">
              {/* Full Image */}
              <div className="rounded-2xl overflow-hidden h-72 sm:h-96 bg-slate-100 shadow-inner">
                <img
                  src={activeLightboxProject.image}
                  alt={activeLightboxProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-black text-slate-900">
                  {activeLightboxProject.title}
                </h3>

                <p className="text-sm text-slate-700 leading-relaxed">
                  {activeLightboxProject.description}
                </p>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <div className="text-xs font-bold text-slate-900">
                    Project Specifications:
                  </div>
                  <div className="text-xs text-slate-600">
                    <strong>Material System:</strong> {activeLightboxProject.materialUsed}
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {activeLightboxProject.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-white border border-slate-200 text-slate-700 text-xs font-semibold rounded-lg flex items-center gap-1"
                      >
                        <CheckCircle2 className="w-3 h-3 text-red-600" />
                        <span>{h}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action buttons inside modal */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100">
                <div className="text-xs text-slate-500">
                  Need a quote on a similar project?
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={COMPANY_INFO.whatsapp.directUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>

                  <button
                    onClick={() => {
                      setActiveLightboxProject(null);
                      onOpenEstimate();
                    }}
                    className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl shadow-sm"
                  >
                    Request Free Estimate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
