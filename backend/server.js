// backend/server.js

const express = require("express");
const Twitter = require("twitter-lite");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const client = new Twitter({
  consumer_key: "YOUR_CONSUMER_KEY",
  consumer_secret: "YOUR_CONSUMER_SECRET",
});

let requestTokenSecret;

app.post("/api/v1/auth/twitter/reverse", async (req, res) => {
  try {
    const response = await client.getRequestToken(
      "http://localhost:3000/twitter-callback"
    );
    requestTokenSecret = response.oauth_token_secret;
    res.json(response);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/api/v1/auth/twitter", async (req, res) => {
  const { oauth_token, oauth_verifier } = req.body;
  try {
    const response = await client.getAccessToken({
      oauth_verifier,
      oauth_token,
      oauth_token_secret: requestTokenSecret,
    });
    res.json(response);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});
