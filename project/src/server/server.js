const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

// ✅ Define API routes before serving static files
app.get('/test', (req, res) => {
  res.json({ message: 'Server is running!' });
});

// ✅ Serve static files
app.use(express.static(path.join(__dirname, '../dist')));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
