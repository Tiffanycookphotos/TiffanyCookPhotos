import Link from 'next/link';

const services = [
  {
    title: 'Portraits',
    description: 'Professional headshots and individual portraits that capture your essence.',
    href: '/services#portraits',
  },
  {
    title: 'Family',
    description: 'Timeless family moments preserved in beautiful, natural settings.',
    href: '/services#family',
  },
  {
    title: 'Maternity',
    description: 'Celebrating the beauty of motherhood with elegant maternity sessions.',
    href: '/services#maternity',
  },
  {
    title: 'Commercial',
    description: 'Brand photography that tells your story and elevates your business.',
    href: '/services#commercial',
  },
];

export default function Home() {
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Placeholder background - replace with actual hero image */}
        <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-background" />
        <div className="absolute inset-0 bg-[url('/placeholder-hero.jpg')] bg-cover bg-center opacity-30" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-[0.15em] text-foreground mb-6">
            TIFFANY COOK
          </h1>
          <p className="text-lg md:text-xl font-light tracking-[0.3em] text-accent mb-8">
            PHOTOGRAPHY
          </p>
          <p className="text-lg md:text-xl text-muted font-light leading-relaxed max-w-2xl mx-auto mb-12">
            Capturing life&apos;s most precious moments with artistry and authenticity.
            Every photograph tells a story worth remembering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/portfolio"
              className="px-8 py-3 bg-accent text-background font-light tracking-wider hover:bg-accent-hover transition-colors duration-300"
            >
              VIEW PORTFOLIO
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border border-foreground text-foreground font-light tracking-wider hover:bg-foreground hover:text-background transition-all duration-300"
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light tracking-[0.1em] text-foreground mb-4">
              SERVICES
            </h2>
            <div className="w-16 h-px bg-accent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-8 bg-card hover:bg-card-hover border border-border transition-all duration-300"
              >
                <h3 className="text-lg font-light tracking-wider text-foreground mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block px-8 py-3 border border-accent text-accent font-light tracking-wider hover:bg-accent hover:text-background transition-all duration-300"
            >
              VIEW ALL SERVICES
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light tracking-[0.1em] text-foreground mb-4">
              FEATURED WORK
            </h2>
            <div className="w-16 h-px bg-accent mx-auto" />
          </div>

          {/* Placeholder grid for portfolio preview */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-square bg-background border border-border flex items-center justify-center image-hover cursor-pointer"
              >
                <span className="text-muted text-sm">Portfolio Image {i}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-block px-8 py-3 border border-accent text-accent font-light tracking-wider hover:bg-accent hover:text-background transition-all duration-300"
            >
              VIEW FULL PORTFOLIO
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light tracking-[0.1em] text-foreground mb-6">
            LET&apos;S CREATE SOMETHING BEAUTIFUL
          </h2>
          <p className="text-lg text-muted font-light leading-relaxed mb-8">
            Whether it&apos;s a milestone celebration, a family gathering, or elevating your brand,
            I&apos;m here to capture moments that matter.
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
