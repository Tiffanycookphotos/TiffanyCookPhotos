import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Tiffany Cook Photography',
  description: 'Learn more about Tiffany Cook Photography - the story, the passion, and the commitment to capturing your most precious moments.',
};

export default function AboutPage() {
  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light tracking-[0.1em] text-foreground mb-6">
            ABOUT
          </h1>
          <div className="w-16 h-px bg-accent mx-auto" />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Photo placeholder */}
            <div className="aspect-[3/4] bg-card border border-border flex items-center justify-center">
              <span className="text-muted">Photographer Portrait</span>
            </div>

            {/* Bio */}
            <div>
              <h2 className="text-2xl md:text-3xl font-light tracking-wider text-foreground mb-6">
                Hello, I&apos;m Tiffany
              </h2>
              <div className="w-12 h-px bg-accent mb-8" />

              <div className="space-y-6 text-muted leading-relaxed">
                <p>
                  Welcome to my corner of the creative world. I&apos;m a professional photographer
                  with a passion for capturing life&apos;s most meaningful moments. Every click of
                  my camera is driven by a desire to freeze time and preserve memories that will
                  be treasured for generations.
                </p>
                <p>
                  My journey into photography began with a simple fascination for the way light
                  and shadow could tell a story. Over the years, that fascination has evolved
                  into a deep commitment to my craft and to my clients.
                </p>
                <p>
                  I specialize in portrait, family, maternity, and commercial photography,
                  bringing a distinctive eye for detail and a warm, relaxed approach to every
                  session. My goal is to make you feel comfortable and confident, allowing your
                  authentic self to shine through.
                </p>
                <p>
                  When I&apos;m not behind the camera, you&apos;ll find me exploring new locations,
                  spending time with loved ones, and continuously learning new techniques to
                  bring fresh perspectives to my work.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-block px-6 py-2 border border-accent text-accent text-sm tracking-wider hover:bg-accent hover:text-background transition-all duration-300"
                >
                  LET&apos;S CONNECT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light tracking-[0.1em] text-foreground mb-4">
              MY PHILOSOPHY
            </h2>
            <div className="w-16 h-px bg-accent mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="w-16 h-16 border border-accent flex items-center justify-center mx-auto mb-6">
                <span className="text-accent text-2xl font-light">01</span>
              </div>
              <h3 className="text-lg font-light tracking-wider text-foreground mb-3">
                AUTHENTICITY
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                I believe the most beautiful images come from genuine moments.
                I focus on capturing you as you truly are.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 border border-accent flex items-center justify-center mx-auto mb-6">
                <span className="text-accent text-2xl font-light">02</span>
              </div>
              <h3 className="text-lg font-light tracking-wider text-foreground mb-3">
                CONNECTION
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Great photos start with trust. I take time to understand your
                story and create a comfortable environment.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 border border-accent flex items-center justify-center mx-auto mb-6">
                <span className="text-accent text-2xl font-light">03</span>
              </div>
              <h3 className="text-lg font-light tracking-wider text-foreground mb-3">
                ARTISTRY
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Each image is thoughtfully composed and carefully edited to
                create timeless photographs you&apos;ll love.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-light tracking-[0.1em] text-foreground mb-6">
            LET&apos;S WORK TOGETHER
          </h2>
          <p className="text-muted font-light leading-relaxed mb-8">
            I&apos;d love to hear about your story and help capture your precious moments.
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
