const express = require('express');
const { handleGenerateNewShortURL, handleGetAnalytics } = require('../controllers/url');

const router = express.Router();

router.post('/', handleGenerateNewShortURL); // http://localhost:8001/url

router.get('/analytics/:shortId', handleGetAnalytics); // http://localhost:8001/url/analytics/y5OBSOgHC

module.exports = router;

