const Twitter = require("twitter");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");

const app = express();

const client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    bearer_token: process.env.BEARER_TOKEN,
});

const randomIntegerGenerator = (min, max) => {
    var random = Math.random() * (+max - +min) + +min;
    var randomInt = Math.floor(random);
    return randomInt;
};

const count = 200;

const params = {
    screen_name: "NavalBot",
    count: count,
    tweet_mode: "extended",
};

app.use(cors());

app.get("/api/getTweet", (req, res) => {
    let randomTweet = "";
    client.get("statuses/user_timeline", params, (err, tweets, response) => {
        if (err) {
            res.statusCode(400).json(err);
        }
        randomTweet = tweets[randomIntegerGenerator(0, count - 1)];
        res.json(randomTweet.full_text);
    });
});

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`App running on port: ${PORT}`);
});
