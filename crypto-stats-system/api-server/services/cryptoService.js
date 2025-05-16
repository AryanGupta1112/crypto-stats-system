const axios = require('axios');
const CryptoStat = require('../models/CryptoStat');

async function storeCryptoStats() {
  const coins = ['bitcoin', 'ethereum', 'matic-network'];
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coins.join(',')}&vs_currencies=usd&include_market_cap=true&include_24hr_change=true`;

  const { data } = await axios.get(url);

  for (let coin of coins) {
    const info = data[coin];
    await CryptoStat.create({
      coin,
      price: info.usd,
      marketCap: info.usd_market_cap,
      change24h: info.usd_24h_change
    });
  }
}

module.exports = { storeCryptoStats };
