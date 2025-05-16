const { connect } = require('nats');
const { storeCryptoStats } = require('../services/cryptoService');

async function setupNatsListener() {
  const nc = await connect({ servers: process.env.NATS_URL });
  console.log('Connected to NATS [API Server]');

  const sub = nc.subscribe('crypto.update');
  for await (const msg of sub) {
    console.log(`Received message: ${msg.data}`);
    await storeCryptoStats();
  }
}

module.exports = { setupNatsListener };
