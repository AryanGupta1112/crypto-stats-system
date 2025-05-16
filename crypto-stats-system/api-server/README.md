# API Server – Crypto Stats System

This is the main API server for fetching and analyzing cryptocurrency data using MongoDB and NATS messaging. It provides endpoints to fetch the latest stats and calculate price deviation.

---

## 📌 Features

- Fetches real-time data from the CoinGecko API for:
  - Bitcoin
  - Ethereum
  - Matic Network
- Stores data in MongoDB
- Exposes two main endpoints:
  - `/stats?coin=...` – returns latest stats
  - `/deviation?coin=...` – returns standard deviation of last 100 prices
- Listens to NATS messages from worker-server every 15 minutes to update data

---

## ⚙️ Setup Instructions

### 1. Install dependencies

```bash
npm install
```
### 2. Configure environment
Create a .env file based on .env.example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
NATS_URL=nats://localhost:4222
```
### 3. Run the server
```bash
node server.js
```
### 🔌 API Endpoints
/stats?coin=bitcoin
Returns the latest price, market cap, and 24h change for the coin.

/deviation?coin=bitcoin
Returns standard deviation of last 100 price records.

### 📦 Tech Stack
Node.js

Express

MongoDB

NATS

Axios