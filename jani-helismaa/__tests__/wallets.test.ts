import { wallets } from '@/lib/db';

describe('Wallet logic', () => {
  it('adds a wallet', () => {
    const initial = wallets.length;
    wallets.push({ userId: 'test', address: '0x1234567890123456789012345678901234567890' });
    expect(wallets.length).toBe(initial + 1);
  });
});
