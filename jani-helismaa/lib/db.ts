export type Badge = {
  id: string;
  name: string;
  image: string;
  awardedAt: string;
};

export type Wallet = {
  userId: string;
  address: string;
};

export const badges: Record<string, Badge[]> = {
  user123: [
    {
      id: 'badge-1',
      name: 'Early Adopter',
      image: 'https://example.com/early.png',
      awardedAt: new Date().toISOString(),
    },
  ],
};

export const wallets: Wallet[] = [];