const http = require("http");
const { Worker } = require("worker_threads");

const server = http.createServer((req, res) => {
  if (req.url === "/block") {
    const worker = new Worker("./worker.js");

    worker.on("message", msg => {
      res.end(`Result: ${msg}`);
    });
  } else {
    res.end("Server alive");
  }
})

server.listen(8000,()=>{
    console.log("Server is runnig on port 8000");
})
