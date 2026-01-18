'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AlbumsPage() {
  const router = useRouter();
  const [albumCode, setAlbumCode] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // For demo purposes, this checks against client-side albums
    // In production, you'd verify against a backend/database
    const albums = await import('@/data/albums').then(m => m.albums).catch(() => []);
    const album = albums.find(
      (a: { code: string; password: string }) =>
        a.code.toLowerCase() === albumCode.toLowerCase() &&
        a.password === password
    );

    if (album) {
      // Store access in sessionStorage
      sessionStorage.setItem(`album_${album.code}`, 'true');
      router.push(`/albums/${album.code}`);
    } else {
      setError('Invalid album code or password. Please try again.');
    }

    setIsLoading(false);
  };

  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light tracking-[0.1em] text-foreground mb-6">
            CLIENT ALBUMS
          </h1>
          <div className="w-16 h-px bg-accent mx-auto mb-8" />
          <p className="text-lg text-muted font-light leading-relaxed">
            Access your private photo gallery using the credentials provided to you.
          </p>
        </div>
      </section>

      {/* Login Form */}
      <section className="py-24 px-6 bg-background min-h-[50vh] flex items-center">
        <div className="max-w-md mx-auto w-full">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="albumCode" className="block text-sm tracking-wider text-foreground mb-2">
                ALBUM CODE
              </label>
              <input
                type="text"
                id="albumCode"
                required
                value={albumCode}
                onChange={(e) => setAlbumCode(e.target.value)}
                className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder-muted focus:border-accent focus:outline-none transition-colors"
                placeholder="Enter your album code"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm tracking-wider text-foreground mb-2">
                PASSWORD
              </label>
              <input
                type="password"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder-muted focus:border-accent focus:outline-none transition-colors"
                placeholder="Enter your password"
              />
            </div>

            {error && (
              <div className="p-4 bg-red-900/20 border border-red-800 text-red-400 text-sm text-center">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-8 py-4 bg-accent text-background font-light tracking-wider hover:bg-accent-hover transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'ACCESSING...' : 'ACCESS ALBUM'}
            </button>
          </form>

          <div className="mt-12 text-center">
            <p className="text-muted text-sm">
              Don&apos;t have an album code?{' '}
              <a href="/contact" className="text-accent hover:text-accent-hover transition-colors">
                Contact me
              </a>{' '}
              to inquire about your session.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
