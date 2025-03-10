const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config(); // Load .env variables

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Handle JSON data
app.use(express.static(path.join(__dirname, '../dist')));

// Test Route
app.get('/test', (req, res) => {
  res.json({ message: 'Server is running!' });
});

// Check if API keys are loading correctly
console.log("Geo API Key:", process.env.GEO_API_KEY);
console.log("Weatherbit API Key:", process.env.WEATHERBIT_API_KEY);
console.log("Pixabay API Key:", process.env.PIXABAY_API_KEY);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
