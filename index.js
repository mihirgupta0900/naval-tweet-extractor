const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");
const mongoose = require("mongoose");

const routes = require("./routes");

const app = express();

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB CONNECTED...");
    })
    .catch((err) => console.log(err));

app.use(cors());

app.use("/api", routes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`App running on port: ${PORT}`);
});
