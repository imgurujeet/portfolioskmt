import React from 'react';
import { ArrowDownRight, Download, MapPin, Sparkles, Layers, Cpu, Palette } from 'lucide-react';
import { CANDIDATE_INFO } from '../data/portfolioData';

interface HeroProps {
  onDownloadResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDownloadResume }) => {
  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden radial-glow-hero">
      {/* Subtle background ambient mesh */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-lavender-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-purple-900/15 rounded-full blur-[90px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-lavender-500/10 border border-lavender-400/25 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="text-xs font-medium text-lavender-200 tracking-wide uppercase">
                {CANDIDATE_INFO.statusBadge}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-lavender-400/90 font-mono text-xs sm:text-sm tracking-wider uppercase">
                <span>Personal Portfolio</span>
                <span>/</span>
                <span>Barh, Patna, Bihar</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-heading font-bold text-zinc-100 tracking-tight leading-[1.08]">
                Creativity meets <br />
                <span className="bg-gradient-to-r from-zinc-100 via-lavender-200 to-lavender-400 bg-clip-text text-transparent">
                  Technology.
                </span>
              </h1>
            </div>

            {/* Candidate Identity Strip */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-sm text-zinc-300">
              <span className="font-heading font-semibold text-white text-lg">
                {CANDIDATE_INFO.name}
              </span>
              <span className="text-zinc-600">•</span>
              <span className="text-lavender-300 font-medium">Creative Designer</span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-300">Art &amp; Craft Enthusiast</span>
              <span className="text-zinc-600">•</span>
              <span className="text-lavender-300">Vibe Coding Explorer</span>
            </div>

            {/* Location Tag */}
            <div className="flex items-center space-x-1.5 text-xs text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-lavender-400/80" />
              <span>{CANDIDATE_INFO.location.full}</span>
            </div>

            {/* Supporting Prose */}
            <p className="text-base sm:text-lg text-zinc-300/90 font-sans leading-relaxed max-w-2xl pt-2">
              {CANDIDATE_INFO.bioSummary}
            </p>

            {/* Call To Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto">
              <button
                onClick={scrollToAbout}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-lavender-600 to-lavender-500 text-white font-medium text-sm hover:from-lavender-500 hover:to-lavender-600 transition-all duration-300 shadow-lg shadow-lavender-900/30 hover:shadow-lavender-600/30 hover:-translate-y-0.5 group focus:outline-none focus:ring-2 focus:ring-lavender-400"
              >
                <span>Explore My Journey</span>
                <ArrowDownRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onDownloadResume}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-lavender-400/40 text-zinc-200 hover:text-white font-medium text-sm transition-all duration-300 hover:-translate-y-0.5 group focus:outline-none"
              >
                <Download className="w-4 h-4 text-lavender-400 group-hover:-translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </button>
            </div>

          </div>

          {/* Right Column: Premium Typographic & Geometric Monogram Identity */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
              
              {/* Outer decorative orbit ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-white/[0.1] animate-spin" style={{ animationDuration: '60s' }} />
              <div className="absolute inset-8 rounded-full border border-lavender-500/[0.15]" />
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-lavender-950/40 via-dark-900/70 to-dark-950/80 backdrop-blur-xl border border-white/[0.08] shadow-2xl shadow-black" />

              {/* Center Monogram Composition */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center p-8 select-none">
                <div className="relative mb-3">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-lavender-900/70 via-purple-900/50 to-lavender-600/30 border border-lavender-400/40 flex items-center justify-center shadow-inner shadow-lavender-500/20">
                    <span className="font-heading font-extrabold text-4xl tracking-tighter bg-gradient-to-b from-white via-zinc-200 to-lavender-300 bg-clip-text text-transparent">
                      TS
                    </span>
                  </div>
                  {/* Subtle corner badge */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-lavender-500 flex items-center justify-center shadow-lg">
                    <Sparkles className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>

                <span className="font-heading font-bold text-xl text-zinc-100 tracking-wide uppercase">
                  Tulika Shree
                </span>
                <span className="text-xs text-lavender-300/80 font-mono tracking-wider mt-1 uppercase">
                  Design • Art • Vibe Coding
                </span>
              </div>

              {/* Floating Pill 1: Art & Craft */}
              <div className="absolute -top-3 left-4 glass-panel px-3.5 py-2 rounded-xl flex items-center space-x-2 shadow-lg border border-white/[0.1] animate-float-slow">
                <Palette className="w-4 h-4 text-lavender-400" />
                <span className="text-xs font-medium text-zinc-200">Graphic Design &amp; Craft</span>
              </div>

              {/* Floating Pill 2: Vibe Coding */}
              <div className="absolute bottom-6 -right-2 glass-panel px-3.5 py-2 rounded-xl flex items-center space-x-2 shadow-lg border border-white/[0.1] animate-float-slow" style={{ animationDelay: '2s' }}>
                <Cpu className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-medium text-zinc-200">Vibe Coding &amp; ADCA</span>
              </div>

              {/* Floating Pill 3: B.Sc. Zoology */}
              <div className="absolute -bottom-4 left-6 glass-panel px-3.5 py-2 rounded-xl flex items-center space-x-2 shadow-lg border border-white/[0.1] animate-float-slow" style={{ animationDelay: '4s' }}>
                <Layers className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-medium text-zinc-200">B.Sc. Zoology (3rd Year)</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
