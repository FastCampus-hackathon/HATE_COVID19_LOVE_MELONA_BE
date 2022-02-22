import fs from "fs";
import nowDate from "../utils/nowDate";

const PATH = "json/hospital.json";

const list = (req, res) => {
	const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
	console.log("⚠️ The connection is detected ::", ip);
	const read = JSON.parse(fs.readFileSync(PATH, "utf8"));

	const day = nowDate();

	if (read.data) {
		const updateData = read.data.map((item) => {
			if (day === "sun") {
				if (item.trmtSunStart) {
					if (
						toMinutes(item.trmtSunStart) < hhmm &&
						hhmm < toMinutes(item.trmtSunEnd)
					) {
						item.status = `진료중`;
					} else {
						item.status = `진료마감`;
					}
				}
			} else if (day === "sat") {
				if (item.trmtSatStart) {
					if (
						toMinutes(item.trmtSatStart) < hhmm &&
						hhmm < toMinutes(item.trmtSatEnd)
					) {
						item.status = `진료중`;
					} else {
						item.status = `진료마감`;
					}
				}
			} else {
				if (item.trmtMonStart) {
					if (
						toMinutes(item.trmtMonStart) < hhmm &&
						hhmm < toMinutes(item.trmtMonEnd)
					) {
						item.status = `진료중`;
					} else {
						item.status = `진료마감`;
					}
				}
			}
			return item;
		});
		res.json({ ...read, data: updateData });
	} else {
		res.json(read);
	}
};

export default {
	path: "/hospital/list",
	callback: list,
};
