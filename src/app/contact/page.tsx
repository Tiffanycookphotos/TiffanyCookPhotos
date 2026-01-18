'use client';

import { useState, FormEvent } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light tracking-[0.1em] text-foreground mb-6">
            CONTACT
          </h1>
          <div className="w-16 h-px bg-accent mx-auto mb-8" />
          <p className="text-lg text-muted font-light leading-relaxed">
            Ready to capture your special moments? I&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm tracking-wider text-foreground mb-2">
                NAME *
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder-muted focus:border-accent focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm tracking-wider text-foreground mb-2">
                EMAIL *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder-muted focus:border-accent focus:outline-none transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm tracking-wider text-foreground mb-2">
                PHONE
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder-muted focus:border-accent focus:outline-none transition-colors"
                placeholder="(555) 123-4567"
              />
            </div>

            {/* Service Interest */}
            <div>
              <label htmlFor="service" className="block text-sm tracking-wider text-foreground mb-2">
                SERVICE INTEREST *
              </label>
              <select
                id="service"
                required
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border text-foreground focus:border-accent focus:outline-none transition-colors"
              >
                <option value="">Select a service</option>
                <option value="portraits">Portraits & Headshots</option>
                <option value="family">Family Photography</option>
                <option value="maternity">Maternity Photography</option>
                <option value="commercial">Commercial & Brand</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm tracking-wider text-foreground mb-2">
                MESSAGE *
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder-muted focus:border-accent focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your vision, preferred dates, and any questions you have..."
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-8 py-4 bg-accent text-background font-light tracking-wider hover:bg-accent-hover transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </div>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="p-4 bg-green-900/20 border border-green-800 text-green-400 text-center">
                Thank you for your message! I&apos;ll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="p-4 bg-red-900/20 border border-red-800 text-red-400 text-center">
                Something went wrong. Please try again or email me directly at TiffanyCookPhotos@gmail.com
              </div>
            )}
          </form>

          {/* Alternative Contact */}
          <div className="mt-16 pt-16 border-t border-border text-center">
            <p className="text-muted text-sm mb-4">
              Prefer to reach out directly?
            </p>
            <a
              href="mailto:TiffanyCookPhotos@gmail.com"
              className="text-accent hover:text-accent-hover transition-colors"
            >
              TiffanyCookPhotos@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
