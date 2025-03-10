const express = require('express');
const path = require('path');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/test', (req, res) => {
  res.json({ message: 'Server is running!' });
});

app.get('/api/geonames', async (req, res) => {
  try {
    const { location } = req.query;
    const response = await axios.get(`http://api.geonames.org/searchJSON?q=${location}&maxRows=1&username=${process.env.GEONAMES_API_KEY}`);
    const data = response.data.geonames[0];
    res.json({ lat: data.lat, lng: data.lng, country: data.countryName, name: data.name });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching Geonames data' });
  }
});

app.get('/api/weather', async (req, res) => {
  try {
    const { lat, lon } = req.query;
    const response = await axios.get(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${process.env.WEATHERBIT_API_KEY}`);
    res.json(response.data.data[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching Weatherbit data' });
  }
});

app.get('/api/pixabay', async (req, res) => {
  try {
    const { location } = req.query;
    const response = await axios.get(`https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&q=${location}&image_type=photo`);
    res.json({ imageUrl: response.data.hits[0]?.webformatURL || '' });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching Pixabay data' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
