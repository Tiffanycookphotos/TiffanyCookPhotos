'use client';

import { useState } from 'react';
import Link from 'next/link';

const categories = ['All', 'Portraits', 'Family', 'Maternity', 'Commercial'];

// Placeholder portfolio items - replace with real images
const portfolioItems = [
  { id: 1, category: 'Portraits', title: 'Portrait 1' },
  { id: 2, category: 'Family', title: 'Family 1' },
  { id: 3, category: 'Maternity', title: 'Maternity 1' },
  { id: 4, category: 'Commercial', title: 'Commercial 1' },
  { id: 5, category: 'Portraits', title: 'Portrait 2' },
  { id: 6, category: 'Family', title: 'Family 2' },
  { id: 7, category: 'Maternity', title: 'Maternity 2' },
  { id: 8, category: 'Commercial', title: 'Commercial 2' },
  { id: 9, category: 'Portraits', title: 'Portrait 3' },
  { id: 10, category: 'Family', title: 'Family 3' },
  { id: 11, category: 'Maternity', title: 'Maternity 3' },
  { id: 12, category: 'Commercial', title: 'Commercial 3' },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light tracking-[0.1em] text-foreground mb-6">
            PORTFOLIO
          </h1>
          <div className="w-16 h-px bg-accent mx-auto mb-8" />
          <p className="text-lg text-muted font-light leading-relaxed">
            A collection of moments captured, stories told, and memories preserved.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 px-6 bg-background border-b border-border sticky top-16 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 text-sm tracking-wider transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-accent text-background'
                    : 'text-muted hover:text-foreground border border-border hover:border-foreground'
                }`}
              >
                {category.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item.id)}
                className="aspect-square bg-card border border-border flex items-center justify-center image-hover cursor-pointer relative group overflow-hidden"
              >
                <span className="text-muted text-sm">{item.title}</span>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-accent text-sm tracking-wider">{item.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-background/95 z-50 flex items-center justify-center p-8"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground hover:text-accent transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="max-w-4xl max-h-[80vh] aspect-square bg-card border border-border flex items-center justify-center">
            <span className="text-muted">
              {portfolioItems.find(i => i.id === selectedImage)?.title} - Full Size
            </span>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-light tracking-[0.1em] text-foreground mb-6">
            LIKE WHAT YOU SEE?
          </h2>
          <p className="text-muted font-light leading-relaxed mb-8">
            Let&apos;s create something beautiful together. Reach out to discuss your vision.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-accent text-background font-light tracking-wider hover:bg-accent-hover transition-colors duration-300"
          >
            BOOK YOUR SESSION
          </Link>
        </div>
      </section>
    </div>
  );
}
