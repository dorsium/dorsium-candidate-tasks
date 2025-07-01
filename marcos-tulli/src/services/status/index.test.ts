jest.mock('@config', () => ({
  getConfig: jest.fn(),
}));

import { getConfig } from '@config';

(getConfig as jest.Mock).mockReturnValue({
  version: '1.2.3',
  mode: 'test',
});

import { StatusServiceInstance } from '.';

describe('StatusService', () => {
  it('should return status with correct version, mode and timestamp', () => {
    const status = StatusServiceInstance.getStatus();

    expect(status.status).toBe('ok');
    expect(status.version).toBe('1.2.3');
    expect(status.mode).toBe('test');

    const ts = new Date(status.timestamp).getTime();
    expect(ts).not.toBeNaN();
    const now = Date.now();
    expect(Math.abs(now - ts)).toBeLessThanOrEqual(5000);
  });

  it('should return an object with exact keys', () => {
    const keys = Object.keys(StatusServiceInstance.getStatus());
    expect(keys.sort()).toEqual(['mode', 'status', 'timestamp', 'version'].sort());
  });

  it('matches snapshot shape', () => {
    const status = StatusServiceInstance.getStatus();
    expect(status).toMatchSnapshot({
      timestamp: expect.any(String),
    });
  });
});
