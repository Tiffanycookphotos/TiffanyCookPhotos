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
            MEET TIFFANY
          </h1>
          <div className="w-16 h-px bg-accent mx-auto" />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Photo placeholder */}
            <div className="aspect-[3/4] bg-card border border-border flex items-center justify-center sticky top-24">
              <span className="text-muted">Tiffany Portrait</span>
            </div>

            {/* Bio */}
            <div>
              <h2 className="text-2xl md:text-3xl font-light tracking-wider text-foreground mb-6">
                Equine Photographer
              </h2>
              <p className="text-accent text-sm tracking-wider mb-8">
                CENTRAL TEXAS • SINCE 2010
              </p>

              <div className="space-y-6 text-muted leading-relaxed">
                <p>
                  I specialize in equine photography with a focus on Arabian horses,
                  working with owners who value authenticity and want to showcase their
                  horses just as they are—naturally and honestly.
                </p>
                <p>
                  My approach is simple: bright, natural light, real environments, and
                  true-to-life images that reflect the horse standing in front of my lens.
                  I do not alter conformation or digitally reshape horses. What you see
                  is what you get.
                </p>
                <p>
                  My goal is to create a realistic and respectful representation of each
                  horse, capturing their presence, structure, and personality without
                  exaggeration or manipulation. I believe great equine photography should
                  honor the horse, not change it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light tracking-[0.1em] text-foreground mb-4">
              MY STORY
            </h2>
            <div className="w-16 h-px bg-accent mx-auto" />
          </div>

          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              My journey into photography started long before I ever picked up a camera
              professionally. I&apos;ve been involved with horses for over 30 years, and that
              experience shapes the way I see and photograph them.
            </p>
            <p>
              My love for photography was inspired by my grandmother, who studied photography
              in college and worked as a journalist photographer before I was born. She
              introduced me to both horses and photography, and growing up, she was always
              behind the camera—creating striking images in the days long before Photoshop existed.
            </p>
            <p>
              Her influence is a big part of why authenticity matters so much to me today.
            </p>
            <p>
              I&apos;ve been photographing horses professionally since 2010 and am based in
              Central Texas. Whether photographing a single horse or an entire program, I
              strive to provide clients with images that feel natural, honest, and
              timeless—true representations they can stand behind with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-6 bg-background">
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
                No digital reshaping. No altered conformation.
                What you see is what you get—honest images that
                truly represent your horse.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 border border-accent flex items-center justify-center mx-auto mb-6">
                <span className="text-accent text-2xl font-light">02</span>
              </div>
              <h3 className="text-lg font-light tracking-wider text-foreground mb-3">
                NATURAL LIGHT
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Bright, natural lighting in real environments.
                No artificial setups—just beautiful light that
                showcases your horse naturally.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 border border-accent flex items-center justify-center mx-auto mb-6">
                <span className="text-accent text-2xl font-light">03</span>
              </div>
              <h3 className="text-lg font-light tracking-wider text-foreground mb-3">
                RESPECT
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Great equine photography should honor the horse,
                not change it. I capture presence, structure, and
                personality with integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-light text-accent mb-2">30+</p>
              <p className="text-sm text-muted tracking-wider">YEARS WITH HORSES</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-light text-accent mb-2">15+</p>
              <p className="text-sm text-muted tracking-wider">YEARS PROFESSIONAL</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-light text-accent mb-2">TX</p>
              <p className="text-sm text-muted tracking-wider">CENTRAL TEXAS</p>
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
            Ready to capture your Arabian or equine program with authenticity and care?
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
