import React from 'react';
import { Briefcase, Building2, Sparkles, ShieldCheck } from 'lucide-react';
import { CANDIDATE_INFO } from '../data/portfolioData';

export const Internship: React.FC = () => {
  const { internship } = CANDIDATE_INFO;

  return (
    <section id="internship" className="py-24 relative border-t border-white/[0.05] bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 text-lavender-400 font-mono text-xs tracking-widest uppercase">
            <span>04</span>
            <span className="w-8 h-[1px] bg-lavender-500/40" />
            <span>Practical Experience</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-zinc-100">
            Learning Beyond the Classroom
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
            Practical engagement and foundational professional exposure through organizational learning.
          </p>
        </div>

        {/* Dedicated Professional Development Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel glass-panel-hover p-8 sm:p-10 rounded-2xl border border-white/[0.08] relative overflow-hidden group">
            
            {/* Subtle top gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-lavender-600 via-lavender-400 to-purple-600 opacity-60" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
              
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 rounded-2xl bg-lavender-500/10 border border-lavender-400/25 flex items-center justify-center text-lavender-300 shrink-0 group-hover:scale-105 transition-transform">
                  <Building2 className="w-7 h-7" />
                </div>
                <div>
                  <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-lavender-500/15 text-lavender-300 border border-lavender-500/20 mb-1.5">
                    <Briefcase className="w-3 h-3" />
                    <span>{internship.label}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-zinc-100 group-hover:text-lavender-200 transition-colors">
                    {internship.organization}
                  </h3>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400 bg-white/[0.03] px-3.5 py-2 rounded-lg border border-white/[0.06] self-start md:self-auto">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified Experience Record</span>
              </div>

            </div>

            {/* Description Text */}
            <div className="p-5 rounded-xl bg-dark-950/60 border border-white/[0.05] mb-6">
              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-sans italic">
                "{internship.description}"
              </p>
            </div>

            {/* Editable & Extensible Footnote */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/[0.06] text-xs text-zinc-400">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-3.5 h-3.5 text-lavender-400" />
                <span>Structured for detailed project milestones and outcomes as they are curated.</span>
              </div>
              <span className="font-mono text-zinc-500">
                Professional Development
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
