import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-light tracking-[0.2em] text-foreground">
              TIFFANY COOK <span className="text-accent">PHOTOGRAPHY</span>
            </h3>
            <p className="mt-4 text-sm text-muted leading-relaxed">
              Capturing life&apos;s beautiful moments through the lens.
              Specializing in portraits, family sessions, maternity,
              and commercial photography.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium tracking-wider text-foreground mb-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-sm text-muted hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm text-muted hover:text-accent transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/albums" className="text-sm text-muted hover:text-accent transition-colors">
                  Client Albums
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-medium tracking-wider text-foreground mb-4">
              GET IN TOUCH
            </h4>
            <p className="text-sm text-muted">
              Ready to capture your special moments?
            </p>
            <Link
              href="/contact"
              className="inline-block mt-4 px-6 py-2 border border-accent text-accent text-sm tracking-wider hover:bg-accent hover:text-background transition-all duration-300"
            >
              CONTACT ME
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-xs text-muted">
            &copy; {new Date().getFullYear()} Tiffany Cook Photography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
