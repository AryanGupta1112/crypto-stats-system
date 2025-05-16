# Worker Server – Crypto Stats System

This is the background job server for triggering periodic cryptocurrency data updates. It publishes update events to NATS every 15 minutes.


## 📌 Features

- Publishes an update event to the NATS queue every 15 minutes
- Works independently of the API server
- Keeps the database updated through event-driven architecture


## ⚙️ Setup Instructions

### 1. Install dependencies

```bash
npm install
```
### 2. Configure environment
Create a .env file based on .env.example:

```env
NATS_URL=nats://localhost:4222
```
### 3. Run the worker
```bash
node index.js
This will start the cron job.
```

### 📦 Tech Stack
Node.js

node-cron

NATS

## ✅ Final Steps

### 1. Create the files

```bash
cd api-server
ni README.md
# Paste the first one above

cd ../worker-server
ni README.md
# Paste the second one above
```
### 2. Commit and push
```bash
git add api-server/README.md worker-server/README.md
git commit -m "Add README files for api-server and worker-server"
git push
```