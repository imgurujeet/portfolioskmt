import React, { useState } from 'react';
import { Layers, Sparkles, ArrowUpRight, Palette, Scissors, Code2, Cpu } from 'lucide-react';
import { CANDIDATE_INFO } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProjects = selectedCategory === 'All'
    ? CANDIDATE_INFO.projects
    : CANDIDATE_INFO.projects.filter(p => p.category === selectedCategory);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Graphic Design':
        return <Palette className="w-4 h-4" />;
      case 'Art & Craft':
        return <Scissors className="w-4 h-4" />;
      case 'Vibe Coding':
        return <Cpu className="w-4 h-4" />;
      case 'Digital Experiments':
        return <Code2 className="w-4 h-4" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  const getCategoryTeaser = (cat: string) => {
    switch (cat) {
      case 'Graphic Design':
        return "Brand concepts, visual design layouts, typography explorations, and digital posters.";
      case 'Art & Craft':
        return "Original handmade art pieces, tactile crafts, dimensional models, and material explorations.";
      case 'Vibe Coding':
        return "AI-assisted prototypes, modern interactive frontends, and prompt-driven experimentations.";
      case 'Digital Experiments':
        return "Explorations combining ADCA software skills with digital creativity and multimedia tools.";
      default:
        return "A curated showcase spanning graphic design, fine crafts, vibe coding prototypes, and digital media.";
    }
  };

  return (
    <section id="projects" className="py-24 relative border-t border-white/[0.05] bg-dark-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 text-lavender-400 font-mono text-xs tracking-widest uppercase">
            <span>05</span>
            <span className="w-8 h-[1px] bg-lavender-500/40" />
            <span>Creative Showcase</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-5xl font-heading font-bold text-zinc-100">
                Creativity in Progress
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base max-w-xl mt-2">
                Curating real-world works across visual design, physical craft, and AI-assisted digital explorations.
              </p>
            </div>

            {/* In-Development Indicator */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-lavender-500/10 border border-lavender-400/20 text-lavender-300 text-xs font-mono self-start lg:self-auto">
              <Sparkles className="w-3.5 h-3.5 text-lavender-400 animate-pulse" />
              <span>Curation Hub • V1.0 Ready</span>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {CANDIDATE_INFO.projectCategories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 focus:outline-none ${
                  isSelected
                    ? 'bg-lavender-500/20 text-lavender-200 border border-lavender-400/40 shadow-sm shadow-lavender-500/20'
                    : 'bg-white/[0.03] text-zinc-400 hover:text-zinc-200 border border-white/[0.06] hover:bg-white/[0.06]'
                }`}
              >
                {getCategoryIcon(category)}
                <span>{category}</span>
              </button>
            );
          })}
        </div>

        {/* Gallery Content Area */}
        {filteredProjects.length === 0 ? (
          /* High-Aesthetic Empty State Card */
          <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-b from-dark-850/80 via-dark-900/60 to-dark-950 p-8 sm:p-14 text-center relative overflow-hidden">
            
            {/* Background architectural grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            {/* Glowing orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-lavender-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
              
              {/* Icon badge */}
              <div className="w-16 h-16 rounded-2xl bg-lavender-500/10 border border-lavender-400/30 flex items-center justify-center text-lavender-300 mb-6 shadow-inner shadow-lavender-500/10">
                <Sparkles className="w-8 h-8 animate-pulse-subtle" />
              </div>

              {/* Tag */}
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-400 uppercase tracking-wider mb-4">
                <span>{selectedCategory} Archive</span>
              </div>

              {/* Main Headline */}
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-zinc-100 mb-3">
                Every creative journey starts with an idea.
              </h3>
              
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8">
                {getCategoryTeaser(selectedCategory)} More work coming soon as portfolio projects are documented and uploaded.
              </p>

              {/* Visual Architecture Preview Placeholder */}
              <div className="w-full p-4 sm:p-6 rounded-2xl bg-dark-950/80 border border-dashed border-white/[0.12] text-left">
                <div className="flex items-center justify-between text-xs text-zinc-500 font-mono mb-3">
                  <span>SHOWCASE_SCHEMA_READY</span>
                  <span className="text-lavender-400">STATUS: AWAITING ASSETS</span>
                </div>
                
                <div className="space-y-2">
                  <div className="h-3 w-3/4 rounded bg-white/[0.05]" />
                  <div className="h-2 w-1/2 rounded bg-white/[0.03]" />
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-2 py-0.5 rounded text-[11px] bg-white/[0.04] text-zinc-400">
                    High-Res Visuals
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] bg-white/[0.04] text-zinc-400">
                    Process Documentation
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] bg-white/[0.04] text-zinc-400">
                    Live Demo Links
                  </span>
                </div>
              </div>

            </div>

          </div>
        ) : (
          /* Dynamic Grid for when projects are provided */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="glass-panel glass-panel-hover rounded-2xl overflow-hidden border border-white/[0.08] flex flex-col group"
              >
                {project.imageUrl && (
                  <div className="relative aspect-video overflow-hidden bg-dark-850">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono text-lavender-400 uppercase">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-heading font-bold text-zinc-100 mt-1 mb-2 group-hover:text-lavender-200 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map(t => (
                        <span key={t} className="text-[11px] text-zinc-400 bg-white/[0.04] px-2 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                    {project.previewUrl && (
                      <a
                        href={project.previewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lavender-400 hover:text-lavender-300"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
