import { ImageResponse } from 'next/og';
import ShowPeers from '@/components/ShowPeers';
import { BackgroundCanvas } from '@/components/BackgroundCanvas';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const roomId = searchParams.get('roomId');

  if (!roomId) {
    return new Response('Missing roomId', { status: 400 });
  }

  try {
    return new ImageResponse(<BackgroundCanvas />, {
      width: 1200,
      height: 630,
    });
  } catch (e: any) {
    console.log(e);
    return new Response(e, { status: 500 });
  }
}
