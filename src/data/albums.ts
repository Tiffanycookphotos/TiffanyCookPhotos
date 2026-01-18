// Album data - In production, this would come from a database or CMS
// For now, you can manage albums by editing this file

export interface Photo {
  id: string;
  filename: string;
  thumbnail?: string;
}

export interface Album {
  code: string;
  password: string;
  clientName: string;
  sessionDate: string;
  sessionType: string;
  photos: Photo[];
  expiresAt?: string; // Optional expiration date
}

export const albums: Album[] = [
  // EXAMPLE ALBUM - Replace with real client albums
  {
    code: 'smith-family-2024',
    password: 'demo123',
    clientName: 'Smith Family',
    sessionDate: '2024-01-15',
    sessionType: 'Family Session',
    photos: [
      { id: '1', filename: 'IMG_001.jpg' },
      { id: '2', filename: 'IMG_002.jpg' },
      { id: '3', filename: 'IMG_003.jpg' },
      { id: '4', filename: 'IMG_004.jpg' },
      { id: '5', filename: 'IMG_005.jpg' },
      { id: '6', filename: 'IMG_006.jpg' },
      { id: '7', filename: 'IMG_007.jpg' },
      { id: '8', filename: 'IMG_008.jpg' },
      { id: '9', filename: 'IMG_009.jpg' },
      { id: '10', filename: 'IMG_010.jpg' },
      { id: '11', filename: 'IMG_011.jpg' },
      { id: '12', filename: 'IMG_012.jpg' },
    ],
  },
  // Add more albums as needed:
  // {
  //   code: 'client-name-date',
  //   password: 'unique-password',
  //   clientName: 'Client Name',
  //   sessionDate: '2024-XX-XX',
  //   sessionType: 'Session Type',
  //   photos: [
  //     { id: '1', filename: 'photo1.jpg' },
  //     // ... more photos
  //   ],
  // },
];

// Helper function to get album by code
export function getAlbumByCode(code: string): Album | undefined {
  return albums.find(album => album.code.toLowerCase() === code.toLowerCase());
}
