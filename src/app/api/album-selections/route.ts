import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { clientName, albumCode, sessionType, sessionDate, totalSelected, selectedPhotos, clientNotes } = body;

    // Validate required fields
    if (!clientName || !albumCode || !selectedPhotos) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { error } = await resend.emails.send({
      from: 'Tiffany Cook Photography <onboarding@resend.dev>', // Change to your verified domain later
      to: 'TiffanyCookPhotos@gmail.com',
      subject: `Photo Selections from ${clientName} - ${albumCode}`,
      html: `
        <h2>Client Photo Selections</h2>
        <p><strong>Client:</strong> ${clientName}</p>
        <p><strong>Album Code:</strong> ${albumCode}</p>
        <p><strong>Session Type:</strong> ${sessionType}</p>
        <p><strong>Session Date:</strong> ${sessionDate}</p>
        <hr />
        <h3>Selected Photos (${totalSelected} total):</h3>
        <ul>
          ${selectedPhotos.split('\n').filter((p: string) => p.trim()).map((photo: string) => `<li>${photo.replace('- ', '')}</li>`).join('')}
        </ul>
        <hr />
        <h3>Client Notes:</h3>
        <p>${clientNotes || 'No additional notes provided'}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Album selections error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
