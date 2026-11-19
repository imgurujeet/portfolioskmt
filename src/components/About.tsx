import React from 'react';
import { Sparkles, Compass, Lightbulb, HeartHandshake, BookOpen } from 'lucide-react';
import { CANDIDATE_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Lightbulb,
      title: "Curiosity-Driven Learning",
      description: "Constantly expanding capabilities from natural science observations to digital software workflows."
    },
    {
      icon: Sparkles,
      title: "Creative Synthesis",
      description: "Merging hands-on art & craft sensibilities with clean, modern digital graphic compositions."
    },
    {
      icon: Compass,
      title: "Vibe Coding Mindset",
      description: "Leveraging state-of-the-art AI pair programming to rapidly materialize concepts into working digital interfaces."
    },
    {
      icon: HeartHandshake,
      title: "Dedication & Adaptability",
      description: "Approaching every project with active communication, collaborative respect, and an earnest work ethic."
    }
  ];

  return (
    <section id="about" className="py-24 relative border-t border-white/[0.05] bg-dark-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 text-lavender-400 font-mono text-xs tracking-widest uppercase">
            <span>01</span>
            <span className="w-8 h-[1px] bg-lavender-500/40" />
            <span>Profile &amp; Perspective</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-zinc-100">
            A Little About Me
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
            Cultivating an organic dialogue between traditional creativity and modern computing.
          </p>
        </div>

        {/* Editorial Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-zinc-300 leading-relaxed text-base sm:text-lg">
            {CANDIDATE_INFO.detailedBio.map((paragraph, index) => (
              <p key={index} className="text-zinc-300/90 font-sans">
                {paragraph}
              </p>
            ))}

            {/* Quick At-A-Glance Callout */}
            <div className="pt-6 border-t border-white/[0.07] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="flex items-center space-x-2 text-lavender-400 text-xs font-mono uppercase tracking-wider mb-1">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Academic Focus</span>
                </div>
                <div className="text-zinc-100 font-medium text-sm">
                  B.Sc. Zoology, 3rd Year
                </div>
                <div className="text-zinc-400 text-xs">
                  A.N.S. College, Barh (Exp. 2028)
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="flex items-center space-x-2 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Career Trajectory</span>
                </div>
                <div className="text-zinc-100 font-medium text-sm">
                  Fresher — Ready to Contribute
                </div>
                <div className="text-zinc-400 text-xs">
                  Open to Entry-Level &amp; Internship Roles
                </div>
              </div>
            </div>

          </div>

          {/* Core Mindset Pillars (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel glass-panel-hover p-5 rounded-2xl border border-white/[0.07] transition-all"
                >
                  <div className="flex items-start space-x-3.5">
                    <div className="p-2.5 rounded-xl bg-lavender-500/10 border border-lavender-400/20 text-lavender-300 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-zinc-100 text-base mb-1">
                        {pillar.title}
                      </h3>
                      <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
