const cron = require('node-cron');
const { connect } = require('nats');
require('dotenv').config();

async function startWorker() {
  const nc = await connect({ servers: process.env.NATS_URL });
  console.log('Connected to NATS [Worker]');

  cron.schedule('*/15 * * * *', async () => {
    console.log("Triggering event...");
    nc.publish('crypto.update', Buffer.from(JSON.stringify({ trigger: 'update' })));
  });
}

module.exports = { startWorker };
