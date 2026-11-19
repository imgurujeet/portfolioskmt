import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Internship } from './components/Internship';
import { Projects } from './components/Projects';
import { CareerGoals } from './components/CareerGoals';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { CANDIDATE_INFO } from './data/portfolioData';

export const App: React.FC = () => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  const handleDownloadResume = () => {
    try {
      const link = document.createElement('a');
      link.href = CANDIDATE_INFO.resume.path;
      link.download = CANDIDATE_INFO.resume.filename;
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast('Downloading Tulika Shree\'s Resume (PDF)...');
    } catch {
      showToast('Resume is located at public/assets/Tulika_Shree_Resume.pdf');
    }
  };

  return (
    <div className="min-h-screen bg-dark-900 text-zinc-100 flex flex-col selection:bg-lavender-500/25 selection:text-lavender-200">
      
      {/* Navigation Bar */}
      <Navbar onDownloadResume={handleDownloadResume} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onDownloadResume={handleDownloadResume} />
        <About />
        <Skills />
        <Education />
        <Internship />
        <Projects />
        <CareerGoals />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer onDownloadResume={handleDownloadResume} />

      {/* Feedback Toast */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

    </div>
  );
};

export default App;
