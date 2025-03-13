require('dotenv').config();
const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));

// Log API keys for debugging (ensure this is removed before production)
console.log('GEONAMES_API_KEY:', process.env.GEONAMES_API_KEY);
console.log('WEATHERBIT_API_KEY:', process.env.WEATHERBIT_API_KEY);
console.log('PIXABAY_API_KEY:', process.env.PIXABAY_API_KEY);

// Serve index.html on root route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/t', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'), (err) => {
    if (err) {
      console.error('Error serving index.html:', err);
      res.status(500).send('Error loading page');
    }
  });
});

// Test endpoint
app.get('/test', (req, res) => {
  res.json({ message: 'Server is running!' });
});

// Geonames API - Fixed Incorrect Query Parameter
app.get('/api/geonames', async (req, res) => {
  try {
    const { location } = req.query;
    if (!location) {
      return res.status(400).json({ error: 'Location is required' });
    }

    console.log(`Fetching Geonames data for: ${location}`);
    const response = await axios.get(
      `http://api.geonames.org/searchJSON?q=${encodeURIComponent(location)}&maxRows=1&username=${process.env.GEONAMES_API_KEY}`
    );

    if (!response.data.geonames || response.data.geonames.length === 0) {
      throw new Error('No location data found');
    }

    const data = response.data.geonames[0];
    res.json({ lat: data.lat, lng: data.lng, country: data.countryName, name: data.name });
  } catch (error) {
    console.error('Error fetching Geonames data:', error.message);
    res.status(500).json({ error: 'Error fetching Geonames data' });
  }
});

// Weather API
app.get('/api/weather', async (req, res) => {
  try {
    const { lat, lon } = req.query;
    if (!lat || !lon) {
      return res.status(400).json({ error: 'Latitude and longitude are required' });
    }

    console.log(`Fetching Weather data for lat: ${lat}, lon: ${lon}`);
    const response = await axios.get(
      `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${process.env.WEATHERBIT_API_KEY}`
    );

    res.json(response.data.data[0]);
  } catch (error) {
    console.error('Error fetching Weatherbit data:', error.message);
    res.status(500).json({ error: 'Error fetching Weatherbit data' });
  }
});

// Pixabay API
app.get('/api/pixabay', async (req, res) => {
  try {
    const { location } = req.query;
    if (!location) {
      return res.status(400).json({ error: 'Location is required' });
    }

    console.log(`Fetching Pixabay image for: ${location}`);
    const response = await axios.get(
      `https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&q=${encodeURIComponent(location)}&image_type=photo`
    );

    res.json({ imageUrl: response.data.hits[0]?.webformatURL || '' });
  } catch (error) {
    console.error('Error fetching Pixabay data:', error.message);
    res.status(500).json({ error: 'Error fetching Pixabay data' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;

