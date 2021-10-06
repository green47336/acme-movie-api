const express = require("express");
const app = express();

//hiiii this is still amata

module.exports = app;

app.get("/", (req, res) => {
  res.send(`
    Hi
  `);
});
