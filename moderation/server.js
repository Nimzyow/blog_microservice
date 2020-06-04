const express = require("express");
const bodyParser = require("body-parser");
const axios = require("Axios");

const app = express();

app.unsubscribe(bodyParser.json());

app.post("/events", (req, res) => {});

module.exports = app;
