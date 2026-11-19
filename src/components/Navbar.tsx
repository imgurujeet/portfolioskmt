import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Sparkles } from 'lucide-react';
import { CANDIDATE_INFO } from '../data/portfolioData';

interface NavbarProps {
  onDownloadResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onDownloadResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'education', 'internship', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Internship', href: '#internship' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-950/85 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-2xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo / Monogram */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="group flex items-center space-x-2.5 text-zinc-100 focus:outline-none"
            aria-label="Tulika Shree Home"
          >
            <div className="w-9 h-9 rounded-lg overflow-hidden border border-lavender-400/40 bg-dark-850 flex items-center justify-center group-hover:border-lavender-400/80 transition-colors shadow-sm shadow-lavender-900/30">
              <img
                src={CANDIDATE_INFO.avatarUrl}
                alt={CANDIDATE_INFO.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-sm sm:text-base tracking-[0.18em] text-zinc-100 group-hover:text-lavender-300 transition-colors uppercase">
                {CANDIDATE_INFO.name}
              </span>
              <span className="text-[10px] text-zinc-400 tracking-wider font-sans -mt-0.5 hidden sm:block">
                PORTFOLIO
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-md text-xs xl:text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-zinc-100 font-semibold'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.03]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-lavender-500 to-lavender-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Download Resume Action */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onDownloadResume}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-lavender-500/10 hover:bg-lavender-500/20 border border-lavender-400/30 hover:border-lavender-400/60 text-lavender-200 text-xs sm:text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-lavender-500/10 group focus:outline-none focus:ring-2 focus:ring-lavender-400/40"
              title="Download Tulika Shree's Resume PDF"
            >
              <Download className="w-3.5 h-3.5 text-lavender-300 group-hover:-translate-y-0.5 transition-transform" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={onDownloadResume}
              className="p-2 rounded-lg bg-lavender-500/10 border border-lavender-400/30 text-lavender-300"
              aria-label="Download Resume"
              title="Download Resume"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-zinc-300 hover:text-white focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-dark-950/95 border-b border-white/[0.08] px-4 pt-3 pb-5 backdrop-blur-xl animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between ${
                    isActive
                      ? 'bg-lavender-500/15 text-lavender-200 font-semibold border border-lavender-500/20'
                      : 'text-zinc-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <Sparkles className="w-3.5 h-3.5 text-lavender-400" />}
                </a>
              );
            })}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onDownloadResume();
                }}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-lavender-600 to-lavender-700 text-white text-sm font-medium shadow-md shadow-lavender-900/30"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
