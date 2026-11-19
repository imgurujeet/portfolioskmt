import React from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { CANDIDATE_INFO } from '../data/portfolioData';

export const Education: React.FC = () => {
  const { education } = CANDIDATE_INFO;

  return (
    <section id="education" className="py-24 relative border-t border-white/[0.05] bg-dark-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 text-lavender-400 font-mono text-xs tracking-widest uppercase">
            <span>03</span>
            <span className="w-8 h-[1px] bg-lavender-500/40" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-zinc-100">
            My Academic Journey
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
            A solid scientific education providing observational precision, systematic analysis, and lifelong learning habits.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central guide line */}
          <div className="hidden sm:block absolute left-8 top-6 bottom-6 w-[2px] bg-gradient-to-b from-lavender-500/40 via-lavender-500/20 to-transparent" />

          {/* Education Milestone Card */}
          <div className="relative sm:pl-20">
            {/* Timeline node icon */}
            <div className="hidden sm:flex absolute left-4 -translate-x-1/2 top-6 w-9 h-9 rounded-full bg-dark-900 border-2 border-lavender-400 items-center justify-center text-lavender-300 shadow-md shadow-lavender-900/40">
              <GraduationCap className="w-4 h-4" />
            </div>

            <div className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-2xl border border-white/[0.08] relative group">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                
                {/* Degree & Status */}
                <div className="space-y-1">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-2xl font-heading font-bold text-zinc-100 group-hover:text-lavender-200 transition-colors">
                      {education.degree}
                    </h3>
                    <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{education.stage}</span>
                    </span>
                  </div>
                  
                  <div className="text-lg font-medium text-lavender-300">
                    {education.institution}
                  </div>
                </div>

                {/* Timeline dates badge */}
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.07] text-xs font-mono text-zinc-300">
                  <Calendar className="w-3.5 h-3.5 text-lavender-400" />
                  <span>Expected Completion: {education.expectedYear}</span>
                </div>
              </div>

              {/* Institution Location */}
              <div className="flex items-center space-x-1.5 text-xs text-zinc-400 mb-5">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                <span>Barh, Patna, Bihar, India</span>
              </div>

              {/* Description */}
              <p className="text-zinc-300/90 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                {education.description}
              </p>

              {/* Academic Highlights */}
              <div className="pt-5 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex items-center space-x-2 text-xs text-zinc-300">
                  <CheckCircle className="w-4 h-4 text-lavender-400 shrink-0" />
                  <span>Analytical Observation</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-zinc-300">
                  <CheckCircle className="w-4 h-4 text-lavender-400 shrink-0" />
                  <span>Systematic Documentation</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-zinc-300">
                  <CheckCircle className="w-4 h-4 text-lavender-400 shrink-0" />
                  <span>Ongoing 3rd Year Studies</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
