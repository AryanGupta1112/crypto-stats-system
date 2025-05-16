require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { setupNatsListener } = require('./events/natsClient');

const app = express();
app.use(express.json());
app.use('/', require('./routes/cryptoRoutes'));

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('MongoDB connected');
  app.listen(process.env.PORT, () => console.log(`API Server running on port ${process.env.PORT}`));
  setupNatsListener(); // NATS listener
});
