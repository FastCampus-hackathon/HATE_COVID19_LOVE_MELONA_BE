require("dotenv").config();
import express from "express";
import cors from "cors";
import logger from "morgan";
import routes from "./routes/index.js";

const VERSION = "v1";

const app = express();

const port = process.env.PORT || 7700;

const whiteList = ["http://localhost:3000"];

const options = {
    origin: (origin, callback) => {
        if (whiteList.indexOf(origin) > -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    optionsSuccessStatus: 200,
};

// setInterval(() => {
// 	console.log(`✅ Heroku Wake up`);
// 	http.get("https://hello-hackathon-server.herokuapp.com/v1/hospital");
// }, 300000);

app.use(cors(options));
app.use(logger("tiny"));

routes.forEach((route) => {
    app.get(`/${VERSION}${route.path}`, route.callback);
});

app.listen(port);

console.log(`🚀 server running at http ${port}`);
