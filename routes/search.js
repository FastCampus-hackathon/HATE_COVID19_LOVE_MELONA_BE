import fs from "fs";
import convertDistance from "../utils/convertDistance";
import getDistance from "../utils/getDistance";
const PATH = "json/hospital.json";

// v1/search/37.565781556072295/127.11763398409565

const search = (req, res) => {
	const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
	console.log("⚠️ The connection is detected ::", ip);
	const read = JSON.parse(fs.readFileSync(PATH, "utf8"));

	const longitude = req.params.longitude;
	const latitude = req.params.latitude;

	const results = read.data.map((item) => {
		return {
			name: item.name,
			subject: item.subject,
			address: item.address,
			distance: getDistance(latitude, longitude, item.latitude, item.longitude),
		};
	});

	results.sort((a, b) => a.distance - b.distance);

	res.json({
		data: results.map((d) => ({ ...d, distance: convertDistance(d.distance) })),
	});
};

export default {
	path: "/search/:latitude/:longitude",
	callback: search,
};
