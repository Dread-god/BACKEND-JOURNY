const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("All notes");
});

router.post("/", (req, res) => {
  res.send("Create note");
});

module.exports = router;
