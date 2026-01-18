import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Tiffany Cook Photography',
  description: 'Professional photography services including portraits, family sessions, maternity photography, and commercial brand work.',
};

const services = [
  {
    id: 'portraits',
    title: 'Portraits & Headshots',
    description: `Whether you need a professional headshot for your career or a stunning portrait that captures your personality,
    I specialize in creating images that make you look and feel your best.`,
    features: [
      'Professional headshots for LinkedIn & corporate use',
      'Creative individual portraits',
      'Actor/Model portfolios',
      'Personal branding sessions',
    ],
    details: 'Sessions typically last 1-2 hours and include wardrobe changes, professional lighting, and expert direction to bring out your best angles.',
  },
  {
    id: 'family',
    title: 'Family Photography',
    description: `Family is everything. I capture the connections, the laughter, and the love that makes your family unique.
    From annual portraits to special occasions, these are the moments you'll treasure forever.`,
    features: [
      'Family portraits (indoor & outdoor)',
      'Extended family sessions',
      'Generational portraits',
      'Milestone celebrations',
    ],
    details: 'I work with families of all sizes to create relaxed, natural images that showcase your authentic connections.',
  },
  {
    id: 'maternity',
    title: 'Maternity Photography',
    description: `Pregnancy is a beautiful journey deserving of celebration. My maternity sessions capture the anticipation,
    the glow, and the profound beauty of this transformative time.`,
    features: [
      'Studio maternity sessions',
      'Outdoor/lifestyle maternity',
      'Partner & sibling inclusion',
      'Artistic/editorial style options',
    ],
    details: 'Best scheduled between 28-36 weeks. Each session is tailored to your vision and comfort level.',
  },
  {
    id: 'commercial',
    title: 'Commercial & Brand',
    description: `Elevate your brand with professional imagery that tells your story and connects with your audience.
    From product photography to team headshots, I help businesses look their best.`,
    features: [
      'Product photography',
      'Brand lifestyle imagery',
      'Team & corporate headshots',
      'Social media content',
    ],
    details: 'I collaborate with businesses to create cohesive visual content that aligns with your brand identity and marketing goals.',
  },
];

export default function ServicesPage() {
  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light tracking-[0.1em] text-foreground mb-6">
            SERVICES
          </h1>
          <div className="w-16 h-px bg-accent mx-auto mb-8" />
          <p className="text-lg text-muted font-light leading-relaxed">
            Every session is tailored to your unique vision and needs.
            Explore my services below and let&apos;s create something beautiful together.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Image placeholder */}
                <div className={`aspect-[4/3] bg-card border border-border flex items-center justify-center ${
                  index % 2 === 1 ? 'md:order-2' : ''
                }`}>
                  <span className="text-muted">{service.title} Image</span>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <h2 className="text-2xl md:text-3xl font-light tracking-wider text-foreground mb-4">
                    {service.title}
                  </h2>
                  <div className="w-12 h-px bg-accent mb-6" />
                  <p className="text-muted leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <span className="text-accent mr-3">—</span>
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-muted italic mb-6">
                    {service.details}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block px-6 py-2 border border-accent text-accent text-sm tracking-wider hover:bg-accent hover:text-background transition-all duration-300"
                  >
                    INQUIRE NOW
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-light tracking-[0.1em] text-foreground mb-6">
            READY TO BOOK?
          </h2>
          <p className="text-muted font-light leading-relaxed mb-8">
            Contact me to discuss your vision and schedule your session.
            I&apos;d love to hear about what you&apos;re looking to capture.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-accent text-background font-light tracking-wider hover:bg-accent-hover transition-colors duration-300"
          >
            GET IN TOUCH
          </Link>
        </div>
      </section>
    </div>
  );
}
