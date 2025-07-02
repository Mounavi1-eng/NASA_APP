require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
const NASA_API_KEY = process.env.NASA_API_KEY;

// Middleware
app.use(cors(cors({
    origin: "https://nasa-frontend-era4.onrender.com", // frontend URL on Render
  })));
app.use(express.json());

// APOD route: returns today's Astronomy Picture of the Day
app.get('/api/apod', async (req, res) => {
  try {
    const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch APOD data' });
  }
});

// NEO route
app.get('/api/neo', async (req, res) => {
  try {
    const { start_date, end_date } = req.query;

    // Basic validation
    if (!start_date || !end_date) {
      return res.status(400).json({ error: 'Start and end dates are required' });
    }

    // Optional: Validate the date format (YYYY-MM-DD)
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(start_date) || !dateRegex.test(end_date)) {
      return res.status(400).json({ error: 'Invalid date format. Use YYYY-MM-DD.' });
    }

    // Construct URL
    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${start_date}&end_date=${end_date}&api_key=${NASA_API_KEY}`;
    
    const response = await axios.get(url);

    // Send back only the needed data (optional)
    res.status(200).json({
      near_earth_objects: response.data.near_earth_objects,
    });

  } catch (error) {
    console.error('Error fetching NEO data:', error.response?.data || error.message);
    const msg = error.response?.data?.error_message || 'Failed to fetch NEO data';
    res.status(error.response?.status || 500).json({ error: msg });
  }
});

// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
