# Day 19 – Node.js Worker Threads (Non-Blocking CPU Tasks)

This project demonstrates how to handle **CPU-intensive tasks** in Node.js using **Worker Threads** to avoid blocking the main event loop.

---

## 📂 Files
Day-19/
│
├── server.js
└── Worker.js

---

## 🧠 Problem Being Solved

Node.js runs on a **single-threaded event loop**.  
If a CPU-heavy task runs on the main thread, it blocks the server and prevents it from handling other requests.

This project shows how to **offload heavy computation** to a worker thread.

---

## 📄 File Explanation

### 🔹 server.js
- Creates an HTTP server using Node.js core modules
- Handles requests on port `8000`
- On `/block` route:
  - Spawns a worker thread
  - Delegates heavy computation to the worker
  - Receives result asynchronously
- Keeps the server responsive

---

### 🔹 worker.js
- Runs in a separate thread
- Performs a CPU-intensive loop
- Calculates a large sum
- Sends the result back to the main thread using `parentPort`

---

## 🚀 How It Works

1. Client hits `/block`
2. Main thread creates a Worker
3. Worker performs heavy computation
4. Worker sends result back
5. Server responds without blocking the event loop

---

## 🎯 Learning Outcomes

- Understood Node.js event loop limitations
- Learned how CPU-bound tasks block the main thread
- Used `worker_threads` to achieve parallel execution
- Improved server responsiveness using workers
- Practiced inter-thread communication

---

## 🛠 Tech Stack

- Node.js
- Core Modules:
  - `http`
  - `worker_threads`

---

## 📌 Note

This is a learning experiment to understand **Node.js internals and performance optimization**.