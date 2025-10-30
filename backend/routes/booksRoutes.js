const express = require('express');
const router = express.Router();
const { getTopBooks, getRecommendations } = require('../controllers/booksController');

router.get('/top', getTopBooks);
router.post('/recommend', getRecommendations);

module.exports = router;
