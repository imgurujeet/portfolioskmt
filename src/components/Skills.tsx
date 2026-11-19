import React from 'react';
import { Palette, Sparkles, Wand2, Monitor, Compass, MessageSquare, CheckCircle2 } from 'lucide-react';
import { CANDIDATE_INFO } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette':
        return <Palette className="w-6 h-6 text-lavender-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-purple-400" />;
      case 'Wand2':
        return <Wand2 className="w-6 h-6 text-indigo-400" />;
      case 'Monitor':
        return <Monitor className="w-6 h-6 text-sky-400" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-emerald-400" />;
      case 'MessageSquare':
        return <MessageSquare className="w-6 h-6 text-amber-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-lavender-400" />;
    }
  };

  const primarySkills = CANDIDATE_INFO.skills.filter(s => s.category !== 'professional');
  const professionalSkills = CANDIDATE_INFO.skills.filter(s => s.category === 'professional');

  return (
    <section id="skills" className="py-24 relative border-t border-white/[0.05] bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 text-lavender-400 font-mono text-xs tracking-widest uppercase">
            <span>02</span>
            <span className="w-8 h-[1px] bg-lavender-500/40" />
            <span>Capabilities &amp; Disciplines</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-zinc-100">
            What I Bring to the Table
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
            A balanced foundation spanning creative intuition, tactile craft, modern AI tool utilization, and reliable digital applications.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {primarySkills.map((skill, index) => (
            <div
              key={skill.name}
              className="glass-panel glass-panel-hover p-7 rounded-2xl border border-white/[0.08] relative overflow-hidden group"
            >
              {/* Subtle card backdrop glow on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-lavender-500/[0.03] group-hover:bg-lavender-500/[0.08] rounded-full blur-2xl transition-all duration-500 pointer-events-none" />

              <div className="flex items-start justify-between mb-5">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] group-hover:border-lavender-500/30 transition-colors">
                  {getIcon(skill.iconName)}
                </div>
                <span className="font-mono text-xs text-zinc-500 group-hover:text-lavender-400 transition-colors">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-xl font-heading font-bold text-zinc-100 group-hover:text-lavender-200 transition-colors mb-2">
                {skill.name}
              </h3>

              <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-sans">
                {skill.description}
              </p>

              {/* Verified Competency Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.05]">
                {skill.highlights.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-white/[0.03] text-zinc-300 border border-white/[0.06] group-hover:border-lavender-500/20 group-hover:text-zinc-200 transition-all"
                  >
                    <CheckCircle2 className="w-3 h-3 text-lavender-400" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Professional Strengths Strip */}
        <div className="rounded-2xl bg-gradient-to-r from-dark-850 via-dark-800 to-dark-850 p-6 sm:p-8 border border-white/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-mono text-lavender-400 uppercase tracking-wider">
                Interpersonal &amp; Work Ethic
              </span>
              <h3 className="text-lg sm:text-xl font-heading font-bold text-zinc-100">
                Professional Strengths
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
              Essential collaborative attributes that ensure dependable execution and team cohesion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {professionalSkills.map((skill) => (
              <div
                key={skill.name}
                className="p-5 rounded-xl bg-dark-900/60 border border-white/[0.06] flex items-start space-x-4"
              >
                <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-lavender-300 shrink-0">
                  {getIcon(skill.iconName)}
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-zinc-200 text-base mb-1">
                    {skill.name}
                  </h4>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-3">
                    {skill.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skill.highlights.map((h) => (
                      <span key={h} className="text-[11px] text-lavender-300/80 bg-lavender-500/10 px-2 py-0.5 rounded">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
