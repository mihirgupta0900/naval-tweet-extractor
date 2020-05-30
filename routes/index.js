const router = require("express").Router();
const Twitter = require("twitter");
const Tweet = require("../models/tweet");
const { performance } = require("perf_hooks");

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

const count = 2;

const params = {
    screen_name: "NavalBot",
    count: count,
    tweet_mode: "extended",
};

router.get("/getTweet", async (req, res) => {
    let randomTweet = "";
    client.get("statuses/user_timeline", params, (err, tweets, response) => {
        if (err) {
            res.statusCode(400).json(err);
        }
        // const t0 = performance.now();
        tweets.forEach((tweet) => {
            const tweetId = tweet.id_str;
            const tweetText = tweet.full_text;
            const obj = { tweetId, tweetText };
            Tweet.findOne({ tweetId: tweetId }).exec((err, dbTweet) => {
                if (err) {
                    res.status(400).json(err);
                } else if (!dbTweet) {
                    Tweet.create(obj, (err, newTweet) => {
                        if (err) {
                            res.status(400).json(err);
                        }
                    });
                    return;
                } else if (dbTweet) {
                    return;
                }
            });
        });
        // const t1 = performance.now();
        // console.log(`Took ${(t1 - t0) / 1000} seconds to complete function 1`);
        // const t2 = performance.now();
        Tweet.countDocuments().exec(function (err, count) {
            // Get a random entry
            var random = Math.floor(Math.random() * count);

            // Again query all users but only fetch one offset by our random #
            Tweet.findOne()
                .skip(random)
                .exec(function (err, result) {
                    // Tada! random user
                    // console.log(result);
                    res.json(result.tweetText);
                    // console.log(result.tweetText);
                });
        });
        // const t3 = performance.now();
        console.log(`Took ${(t3 - t2) / 1000} seconds to complete function 2`);
    });
});

module.exports = router;
