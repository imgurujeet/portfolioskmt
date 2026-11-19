import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, ExternalLink, AlertCircle, Info, Loader2, CheckCircle2 } from 'lucide-react';
import { CANDIDATE_INFO } from '../data/portfolioData';

interface ContactProps {
  onShowToast: (message: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const validate = () => {
    const errs: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Subject is required.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Message cannot be empty.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    onShowToast(`Copied ${label} to clipboard!`);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(CANDIDATE_INFO.contact.formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.fullName.trim(),
          fullName: formData.fullName.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          source: 'Tulika Shree Portfolio Website'
        })
      });

      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }

      setIsSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: ''
      });
      onShowToast('Message successfully sent to Tulika!');
    } catch (err: unknown) {
      console.error('Form submission error:', err);
      setServerError('Unable to send through direct endpoint right now. You can open your mail client instead.');
      onShowToast('Could not deliver form. Please use the direct mail link.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMailtoFallback = () => {
    const recipient = CANDIDATE_INFO.contact.email;
    const subjectEncoded = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject || 'Opportunity Inquiry'} - from ${formData.fullName || 'Recruiter'}`);
    const bodyEncoded = encodeURIComponent(
      `Hello Tulika,\n\nName: ${formData.fullName}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}\n\n---\nSent via Tulika Shree Portfolio Contact Interface`
    );
    window.location.href = `mailto:${recipient}?subject=${subjectEncoded}&body=${bodyEncoded}`;
  };

  return (
    <section id="contact" className="py-24 relative border-t border-white/[0.05] bg-dark-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 text-lavender-400 font-mono text-xs tracking-widest uppercase">
            <span>06</span>
            <span className="w-8 h-[1px] bg-lavender-500/40" />
            <span>Direct Outreach</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-zinc-100">
            Have an Opportunity in Mind?
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
            Let&apos;s connect and explore how we can create something meaningful together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="glass-panel p-6 rounded-2xl border border-white/[0.08] relative group">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-lavender-500/10 border border-lavender-400/20 text-lavender-300 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-1">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${CANDIDATE_INFO.contact.email}`}
                      className="text-zinc-100 hover:text-lavender-300 font-medium text-sm sm:text-base transition-colors break-all"
                    >
                      {CANDIDATE_INFO.contact.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(CANDIDATE_INFO.contact.email, 'Email')}
                  className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] text-zinc-400 hover:text-zinc-200 transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedField === 'Email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="glass-panel p-6 rounded-2xl border border-white/[0.08] relative group">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-1">
                      Direct Phone
                    </span>
                    <a
                      href={`tel:${CANDIDATE_INFO.contact.phone}`}
                      className="text-zinc-100 hover:text-emerald-300 font-medium text-sm sm:text-base transition-colors"
                    >
                      {CANDIDATE_INFO.contact.phoneDisplay}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(CANDIDATE_INFO.contact.phone, 'Phone')}
                  className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] text-zinc-400 hover:text-zinc-200 transition-colors"
                  title="Copy phone to clipboard"
                  aria-label="Copy phone number"
                >
                  {copiedField === 'Phone' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-panel p-6 rounded-2xl border border-white/[0.08]">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-400/20 text-purple-300 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-1">
                    Based In
                  </span>
                  <div className="text-zinc-100 font-medium text-sm sm:text-base">
                    {CANDIDATE_INFO.location.full}
                  </div>
                  <div className="text-xs text-zinc-400 mt-0.5">
                    Open to remote, hybrid, or on-site opportunities
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Notice on Social Channels */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-start space-x-3 text-xs text-zinc-400">
              <Info className="w-4 h-4 text-lavender-400 shrink-0 mt-0.5" />
              <span>
                Verified factual integrity note: Professional network profiles (LinkedIn/GitHub/Behance) will be added here once activated. Direct communication is available via Email and Phone above.
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/[0.08] relative">
              
              <div className="mb-6">
                <h3 className="text-xl font-heading font-bold text-zinc-100 mb-1">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-zinc-400">
                  Fill in your details below. Connected to Tulika&apos;s direct endpoint to deliver straight to her inbox.
                </p>
              </div>

              {isSuccess ? (
                /* Success State */
                <div className="py-10 px-6 rounded-2xl bg-lavender-500/[0.07] border border-lavender-400/30 text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-400 mb-4">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-zinc-100 mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-zinc-300 text-sm max-w-md mb-6 leading-relaxed">
                    Thank you for reaching out. Your message has been routed to Tulika&apos;s email. She will review it and get back to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-xs font-medium text-zinc-200 hover:text-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                /* Form Fields */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  
                  {serverError && (
                    <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                        <span>{serverError}</span>
                      </div>
                      <button
                        type="button"
                        onClick={handleMailtoFallback}
                        className="underline hover:text-white ml-2 shrink-0 font-medium"
                      >
                        Open Email
                      </button>
                    </div>
                  )}

                  {/* Full Name & Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-mono text-zinc-300 uppercase mb-2">
                        Full Name <span className="text-lavender-400">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        placeholder="e.g. Jane Doe"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 rounded-xl bg-dark-900 border text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none transition-colors ${
                          errors.fullName
                            ? 'border-rose-500/80 focus:border-rose-500'
                            : 'border-white/[0.1] focus:border-lavender-400'
                        } ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
                      />
                      {errors.fullName && (
                        <p className="mt-1.5 text-xs text-rose-400 flex items-center space-x-1">
                          <AlertCircle className="w-3 h-3 inline shrink-0" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-zinc-300 uppercase mb-2">
                        Email Address <span className="text-lavender-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 rounded-xl bg-dark-900 border text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-rose-500/80 focus:border-rose-500'
                            : 'border-white/[0.1] focus:border-lavender-400'
                        } ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-rose-400 flex items-center space-x-1">
                          <AlertCircle className="w-3 h-3 inline shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono text-zinc-300 uppercase mb-2">
                      Subject <span className="text-lavender-400">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="e.g. Creative Design Opportunity / Interview"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-xl bg-dark-900 border text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none transition-colors ${
                        errors.subject
                          ? 'border-rose-500/80 focus:border-rose-500'
                          : 'border-white/[0.1] focus:border-lavender-400'
                      } ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
                    />
                    {errors.subject && (
                      <p className="mt-1.5 text-xs text-rose-400 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3 inline shrink-0" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-zinc-300 uppercase mb-2">
                      Message <span className="text-lavender-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Describe your role, opportunity, or project inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-xl bg-dark-900 border text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none transition-colors resize-none ${
                        errors.message
                          ? 'border-rose-500/80 focus:border-rose-500'
                          : 'border-white/[0.1] focus:border-lavender-400'
                      } ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-rose-400 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3 inline shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit button & Mailto fallback helper */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-lavender-600 to-lavender-500 text-white font-medium text-sm hover:from-lavender-500 hover:to-lavender-600 transition-all duration-300 shadow-lg shadow-lavender-900/30 hover:-translate-y-0.5 group focus:outline-none focus:ring-2 focus:ring-lavender-400 ${
                        isSubmitting ? 'opacity-70 cursor-wait' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 text-white animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleMailtoFallback}
                      className="inline-flex items-center space-x-1.5 text-xs text-zinc-400 hover:text-lavender-300 transition-colors"
                    >
                      <span>Open in mail client instead</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
