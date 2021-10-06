const express = require("express");
const app = express();

//hiiii this is amata
//hiiii this is corinne
module.exports = app;

app.get("/", (req, res) => {
  res.send(`
    Hi
  `);
});
