const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tweetSchema = new Schema({
    tweetId: {
        type: String,
        required: true,
    },
    tweetText: {
        type: String,
        required: true,
        trim: true,
    },
});

const tweet = mongoose.model("tweet", tweetSchema);

module.exports = tweet;
