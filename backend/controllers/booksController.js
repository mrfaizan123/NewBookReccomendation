const axios = require('axios');

// Fetch top books from Flask
exports.getTopBooks = async (req, res) => {
  try {
    const response = await axios.get('http://127.0.0.1:5001/');
    res.status(200).json(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Failed to fetch top books' });
  }
};

// Fetch recommendations from Flask
exports.getRecommendations = async (req, res) => {
  const { user_input } = req.body;
  try {
    const response = await axios.post('http://127.0.0.1:5001/recommend_books', { user_input });
    res.status(200).json(response.data);
  } catch (err) {
    console.error(err.message);
    if (err.response && err.response.data.error) {
      res.status(404).json({ error: err.response.data.error });
    } else {
      res.status(500).json({ error: 'Failed to fetch recommendations' });
    }
  }
};
