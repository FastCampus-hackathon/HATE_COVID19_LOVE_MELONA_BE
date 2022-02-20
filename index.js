import express from "express";
import cors from "cors";

const app = express();

const port = process.env.PORT || 7000;

app.listen(port);

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

app.use(cors(options));

app.get("/", (req, res) => {
	res.send("hello nodee");
});

console.log(`🚀 server running at http ${port}`);
