import React from 'react';
import { ArrowUp, Download, Mail } from 'lucide-react';
import { CANDIDATE_INFO } from '../data/portfolioData';

interface FooterProps {
  onDownloadResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onDownloadResume }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-dark-950 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/[0.05]">
          
          {/* Identity & Tagline */}
          <div className="flex flex-col items-center md:items-start space-y-1">
            <div className="flex items-center space-x-2">
              <span className="font-heading font-bold text-lg text-zinc-100 tracking-wider uppercase">
                {CANDIDATE_INFO.name}
              </span>
              <span className="text-zinc-600">/</span>
              <span className="text-xs font-mono text-lavender-400">
                PORTFOLIO
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400">
              Creative Designer &amp; Digital Creator • Barh, Patna, Bihar
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${CANDIDATE_INFO.contact.email}`}
              className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] text-xs text-zinc-300 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-lavender-400" />
              <span>{CANDIDATE_INFO.contact.email}</span>
            </a>

            <button
              onClick={onDownloadResume}
              className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-lg bg-lavender-500/10 hover:bg-lavender-500/20 border border-lavender-400/30 text-xs text-lavender-300 font-medium transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </button>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-xs text-zinc-400 hover:text-zinc-200 transition-colors"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-3 text-center sm:text-left">
          <div>
            &copy; {currentYear} {CANDIDATE_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center space-x-1 text-zinc-500">
            <span>Designed with</span>
            <span className="text-lavender-400 font-mono">minimalism &amp; intentional craft</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
