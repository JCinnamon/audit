const axios = require('axios');

module.exports = async (req, res) => {
  const { endpoint, params } = req.query;
  const API_KEY = process.env.GOOGLE_MAPS_API_KEY;
  
  if (!endpoint) {
    return res.status(400).json({ error: 'Endpoint parameter is required' });
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/${endpoint}?${params}&key=${API_KEY}`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred', details: error.message });
  }
};
