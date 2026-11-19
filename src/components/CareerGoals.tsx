import React from 'react';
import { ArrowRight, Target } from 'lucide-react';
import { CANDIDATE_INFO } from '../data/portfolioData';

export const CareerGoals: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 relative border-t border-white/[0.05] bg-dark-900 overflow-hidden">
      
      {/* Decorative background radial spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-lavender-600/[0.07] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-lavender-500/10 border border-lavender-400/25 text-lavender-300 text-xs font-mono uppercase tracking-widest mb-6">
          <Target className="w-3.5 h-3.5 text-lavender-400" />
          <span>Professional Horizon</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-heading font-bold text-zinc-100 tracking-tight mb-6">
          What&apos;s Next?
        </h2>

        <p className="text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-6 font-sans">
          &ldquo;I&apos;m excited to take my first step into the professional world, learn from new experiences and contribute my creativity, communication and dedication to a growing team.&rdquo;
        </p>

        <p className="text-sm text-zinc-400 max-w-lg mx-auto mb-10 font-sans">
          {CANDIDATE_INFO.careerObjective}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToContact}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-lavender-600 to-lavender-500 text-white font-medium text-sm sm:text-base hover:from-lavender-500 hover:to-lavender-600 transition-all duration-300 shadow-xl shadow-lavender-950/40 hover:-translate-y-0.5 group focus:outline-none focus:ring-2 focus:ring-lavender-400"
          >
            <span>Let&apos;s Work Together</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
