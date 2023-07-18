import express from "express";
import log from "logger";

const app = express();

app.use((req, res) => {
  log("Received request for URL: " + req.url);
  res.end("Hello World!");
});

app.listen(3000, () => {
  log("The server is running on port 3000!");
});
