const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const {PORT, mongoURL} = require("./config/config");
// const bodyParser = require("body-parser");
const bodyParser = require('body-parser');
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(bodyParser.json({limit: "50mb"}));
app.use(cors());

app.use(express.json());
app.use("/api", routes);
  

const start = async () => {
    try {
        await mongoose.connect(mongoURL, {
            useCreateIndex: true,
            useUnifiedTopology: true,
            useNewUrlParser: true
        })

        app.listen(PORT || 5000, () => console.log(`app has been started on port: ${PORT} _ _ _ _`));
    }
    catch (e) {
        console.log(`SERVER error ..... ${e.message}`);
        process.exit(1);
    }
}

start();