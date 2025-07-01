import { NextResponse } from 'next/server';
import { wallets } from '@/lib/db';
import { z } from 'zod';

const WalletSchema = z.object({
  userId: z.string().min(1),
  address: z.string().regex(/^0x[a-fA-F0-9]{40}$/, 'Invalid address'),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = WalletSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ error: result.error.errors }, { status: 400 });
    }

    wallets.push(result.data);
    return NextResponse.json({ message: 'Wallet saved' });
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }
}
