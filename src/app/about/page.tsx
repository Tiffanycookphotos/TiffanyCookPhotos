import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Tiffany Cook Photography',
  description: 'Meet Tiffany Cook - equine photographer specializing in Arabian horses. Based in Central Texas, capturing authentic, natural images since 2010.',
};

export default function AboutPage() {
  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light tracking-[0.1em] text-foreground mb-6">
            MEET TIFFANY COOK
          </h1>
          <div className="w-16 h-px bg-accent mx-auto" />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Photo placeholder */}
            <div className="aspect-[3/4] bg-card border border-border flex items-center justify-center">
              <span className="text-muted">Portrait</span>
            </div>

            {/* Bio */}
            <div className="md:col-span-2 space-y-6 text-muted leading-relaxed">
              <p>
                I specialize in equine photography with a focus on Arabian horses,
                working with owners who value authenticity and want to showcase their
                horses just as they are—naturally and honestly. My approach is simple:
                bright, natural light, real environments, and true-to-life images that
                reflect the horse standing in front of my lens. I do not alter
                conformation or digitally reshape horses. What you see is what you get.
              </p>
              <p>
                My goal is to create a realistic and respectful representation of each
                horse, capturing their presence, structure, and personality without
                exaggeration or manipulation. I believe great equine photography should
                honor the horse, not change it.
              </p>
              <p>
                My journey into photography started long before I ever picked up a camera
                professionally. I&apos;ve been involved with horses for over 30 years, and
                that experience shapes the way I see and photograph them. My love for
                photography was inspired by my grandmother, who studied photography in
                college and worked as a journalist photographer before I was born. She
                introduced me to both horses and photography, and growing up, she was
                always behind the camera—creating striking images in the days long before
                Photoshop existed. Her influence is a big part of why authenticity matters
                so much to me today.
              </p>
              <p>
                I&apos;ve been photographing horses professionally since 2010 and am based
                in Central Texas. Whether photographing a single horse or an entire program,
                I strive to provide clients with images that feel natural, honest, and
                timeless—true representations they can stand behind with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-light tracking-[0.1em] text-foreground mb-6">
            LET&apos;S WORK TOGETHER
          </h2>
          <p className="text-muted font-light leading-relaxed mb-8">
            Ready to capture your horse with authenticity and care?
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
