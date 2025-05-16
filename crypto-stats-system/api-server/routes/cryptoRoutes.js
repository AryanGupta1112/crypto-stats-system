const express = require('express');
const router = express.Router();
const CryptoStat = require('../models/CryptoStat');

router.get('/stats', async (req, res) => {
  const { coin } = req.query;
  const latest = await CryptoStat.findOne({ coin }).sort({ createdAt: -1 });
  if (!latest) return res.status(404).json({ error: 'No data found' });

  res.json({
    price: latest.price,
    marketCap: latest.marketCap,
    "24hChange": latest.change24h
  });
});

router.get('/deviation', async (req, res) => {
  const { coin } = req.query;
  const records = await CryptoStat.find({ coin }).sort({ createdAt: -1 }).limit(100);
  const prices = records.map(r => r.price);

  const mean = prices.reduce((sum, val) => sum + val, 0) / prices.length;
  const variance = prices.reduce((acc, val) => acc + (val - mean) ** 2, 0) / prices.length;
  const deviation = Math.sqrt(variance);

  res.json({ deviation: +deviation.toFixed(2) });
});

module.exports = router;
