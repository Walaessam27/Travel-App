// server.test.js
const request = require('supertest');
const app = require('./src/server/server'); // Link to your server file

describe('Express Server', () => {
  it('should respond with status 200 on GET /', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, World!');
  });

  it('should return location data from /api/geonames', async () => {
    const response = await request(app).get('/api/geonames?city=London');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('geonames'); // Ensure the response structure
  });

  it('should return weather data from /api/weather', async () => {
    const response = await request(app).get('/api/weather?city=London');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data'); // Ensure the response structure
  });

  it('should return images from /api/pixabay', async () => {
    const response = await request(app).get('/api/pixabay?city=London');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('hits'); // Ensure the response structure
  });

  it('should respond with 404 for invalid routes', async () => {
    const response = await request(app).get('/invalid-route');
    expect(response.status).toBe(404);
  });
});
