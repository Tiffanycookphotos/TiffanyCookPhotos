'use client';

import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { getAlbumByCode, Album, Photo } from '@/data/albums';

interface AlbumPageProps {
  params: Promise<{ code: string }>;
}

export default function AlbumPage({ params }: AlbumPageProps) {
  const resolvedParams = use(params);
  const router = useRouter();
  const [album, setAlbum] = useState<Album | null>(null);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPhotos, setSelectedPhotos] = useState<Set<string>>(new Set());
  const [viewingPhoto, setViewingPhoto] = useState<Photo | null>(null);
  const [showSubmitForm, setShowSubmitForm] = useState(false);
  const [clientNotes, setClientNotes] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useEffect(() => {
    // Check authorization
    const hasAccess = sessionStorage.getItem(`album_${resolvedParams.code}`);
    if (!hasAccess) {
      router.push('/albums');
      return;
    }

    // Load album data
    const albumData = getAlbumByCode(resolvedParams.code);
    if (!albumData) {
      router.push('/albums');
      return;
    }

    setAlbum(albumData);
    setIsAuthorized(true);
    setIsLoading(false);

    // Load any previously saved selections
    const savedSelections = localStorage.getItem(`selections_${resolvedParams.code}`);
    if (savedSelections) {
      setSelectedPhotos(new Set(JSON.parse(savedSelections)));
    }
  }, [resolvedParams.code, router]);

  // Save selections to localStorage whenever they change
  useEffect(() => {
    if (album && selectedPhotos.size > 0) {
      localStorage.setItem(
        `selections_${resolvedParams.code}`,
        JSON.stringify([...selectedPhotos])
      );
    }
  }, [selectedPhotos, resolvedParams.code, album]);

  const togglePhotoSelection = (photoId: string) => {
    const newSelection = new Set(selectedPhotos);
    if (newSelection.has(photoId)) {
      newSelection.delete(photoId);
    } else {
      newSelection.add(photoId);
    }
    setSelectedPhotos(newSelection);
  };

  const handleSubmitSelections = async () => {
    if (selectedPhotos.size === 0) return;

    setSubmitStatus('sending');

    const selectedPhotosList = album?.photos
      .filter(p => selectedPhotos.has(p.id))
      .map(p => p.filename)
      .join('\n- ');

    try {
      const response = await fetch('/api/album-selections', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          clientName: album?.clientName,
          albumCode: album?.code,
          sessionType: album?.sessionType,
          sessionDate: album?.sessionDate,
          totalSelected: selectedPhotos.size,
          selectedPhotos: `\n- ${selectedPhotosList}`,
          clientNotes: clientNotes || 'No additional notes',
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Clear saved selections after successful submit
        localStorage.removeItem(`selections_${resolvedParams.code}`);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-muted">Loading album...</div>
      </div>
    );
  }

  if (!isAuthorized || !album) {
    return null;
  }

  return (
    <div className="page-transition">
      {/* Header */}
      <section className="py-12 px-6 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/albums"
            className="text-muted hover:text-foreground text-sm tracking-wider transition-colors mb-4 inline-block"
          >
            ← Back to Albums
          </Link>
          <h1 className="text-3xl md:text-4xl font-light tracking-[0.1em] text-foreground mb-2">
            {album.clientName}
          </h1>
          <p className="text-muted">
            {album.sessionType} • {album.sessionDate}
          </p>
        </div>
      </section>

      {/* Selection Bar */}
      <section className="py-4 px-6 bg-background border-b border-border sticky top-16 z-40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted">
            <span className="text-accent font-medium">{selectedPhotos.size}</span> of{' '}
            {album.photos.length} photos selected
          </div>
          <div className="flex gap-4">
            {selectedPhotos.size > 0 && (
              <>
                <button
                  onClick={() => setSelectedPhotos(new Set())}
                  className="px-4 py-2 text-sm text-muted hover:text-foreground border border-border hover:border-foreground transition-all"
                >
                  Clear Selection
                </button>
                <button
                  onClick={() => setShowSubmitForm(true)}
                  className="px-6 py-2 bg-accent text-background text-sm tracking-wider hover:bg-accent-hover transition-colors"
                >
                  SUBMIT SELECTIONS
                </button>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-8 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {album.photos.map((photo) => (
              <div
                key={photo.id}
                className={`relative aspect-square bg-card border-2 transition-all cursor-pointer group ${
                  selectedPhotos.has(photo.id)
                    ? 'border-accent'
                    : 'border-border hover:border-muted'
                }`}
              >
                {/* Photo placeholder - replace with actual images */}
                <div
                  className="w-full h-full flex items-center justify-center"
                  onClick={() => setViewingPhoto(photo)}
                >
                  <span className="text-muted text-sm">{photo.filename}</span>
                </div>

                {/* Selection checkbox */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePhotoSelection(photo.id);
                  }}
                  className={`absolute top-3 right-3 w-8 h-8 border-2 flex items-center justify-center transition-all ${
                    selectedPhotos.has(photo.id)
                      ? 'bg-accent border-accent'
                      : 'bg-background/80 border-foreground/50 hover:border-accent'
                  }`}
                >
                  {selectedPhotos.has(photo.id) && (
                    <svg
                      className="w-5 h-5 text-background"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </button>

                {/* Photo number */}
                <div className="absolute bottom-3 left-3 bg-background/80 px-2 py-1 text-xs text-foreground">
                  #{photo.id}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {viewingPhoto && (
        <div
          className="fixed inset-0 bg-background/95 z-50 flex items-center justify-center p-4"
          onClick={() => setViewingPhoto(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground hover:text-accent transition-colors"
            onClick={() => setViewingPhoto(null)}
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="max-w-5xl w-full">
            <div className="aspect-[4/3] bg-card border border-border flex items-center justify-center">
              <span className="text-muted">{viewingPhoto.filename} - Full Size</span>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-foreground">Photo #{viewingPhoto.id}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  togglePhotoSelection(viewingPhoto.id);
                }}
                className={`px-6 py-2 text-sm tracking-wider transition-all ${
                  selectedPhotos.has(viewingPhoto.id)
                    ? 'bg-accent text-background hover:bg-accent-hover'
                    : 'border border-accent text-accent hover:bg-accent hover:text-background'
                }`}
              >
                {selectedPhotos.has(viewingPhoto.id) ? 'SELECTED ✓' : 'SELECT PHOTO'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Submit Form Modal */}
      {showSubmitForm && (
        <div className="fixed inset-0 bg-background/95 z-50 flex items-center justify-center p-4">
          <div className="bg-card border border-border max-w-lg w-full p-8">
            {submitStatus === 'success' ? (
              <div className="text-center">
                <div className="w-16 h-16 border-2 border-accent flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-light tracking-wider text-foreground mb-4">
                  SELECTIONS SUBMITTED
                </h2>
                <p className="text-muted mb-6">
                  Thank you! I&apos;ve received your photo selections and will be in touch soon.
                </p>
                <button
                  onClick={() => {
                    setShowSubmitForm(false);
                    setSubmitStatus('idle');
                    setSelectedPhotos(new Set());
                  }}
                  className="px-6 py-2 border border-accent text-accent hover:bg-accent hover:text-background transition-all"
                >
                  CLOSE
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-light tracking-wider text-foreground mb-6">
                  CONFIRM SELECTIONS
                </h2>

                <div className="mb-6 p-4 bg-background border border-border">
                  <p className="text-sm text-muted mb-2">You have selected:</p>
                  <p className="text-2xl text-accent font-light">
                    {selectedPhotos.size} photos
                  </p>
                </div>

                <div className="mb-6">
                  <label className="block text-sm tracking-wider text-foreground mb-2">
                    ADDITIONAL NOTES (Optional)
                  </label>
                  <textarea
                    value={clientNotes}
                    onChange={(e) => setClientNotes(e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder-muted focus:border-accent focus:outline-none transition-colors resize-none"
                    placeholder="Any special requests or notes about your selections..."
                  />
                </div>

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-900/20 border border-red-800 text-red-400 text-sm">
                    Something went wrong. Please try again.
                  </div>
                )}

                <div className="flex gap-4">
                  <button
                    onClick={() => setShowSubmitForm(false)}
                    className="flex-1 px-6 py-3 border border-border text-muted hover:text-foreground hover:border-foreground transition-all"
                  >
                    CANCEL
                  </button>
                  <button
                    onClick={handleSubmitSelections}
                    disabled={submitStatus === 'sending'}
                    className="flex-1 px-6 py-3 bg-accent text-background hover:bg-accent-hover transition-colors disabled:opacity-50"
                  >
                    {submitStatus === 'sending' ? 'SENDING...' : 'SUBMIT'}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Instructions */}
      <section className="py-12 px-6 bg-card">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-light tracking-wider text-foreground mb-4">
            HOW TO SELECT YOUR PHOTOS
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-sm text-muted">
            <div>
              <span className="text-accent text-lg">1</span>
              <p className="mt-2">Click the checkbox on any photo to select it</p>
            </div>
            <div>
              <span className="text-accent text-lg">2</span>
              <p className="mt-2">Click the photo to view it larger</p>
            </div>
            <div>
              <span className="text-accent text-lg">3</span>
              <p className="mt-2">Click &quot;Submit Selections&quot; when you&apos;re done</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
