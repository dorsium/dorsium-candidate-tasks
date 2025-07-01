import { NextResponse } from 'next/server';
import { badges } from '@/lib/db';

export async function GET(_: Request, { params }: { params: { userId: string } }) {
  const userBadges = badges[params.userId] || [];
  return NextResponse.json(userBadges);
}
