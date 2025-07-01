const request = require('supertest');
const app = require('../app');

describe('GET /badges/:userId', () => {
  it('should return badges for a valid user', async () => {
    const res = await request(app).get('/badges/abc123');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body[0]).toHaveProperty('id');
  });
});