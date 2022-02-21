import fs from "fs";

const PATH = "json/hospital.json";

const list = (req, res) => {
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    console.log("⚠️ The connection is detected ::", ip);
    const read = fs.readFileSync(PATH, "utf8");
    res.json(JSON.parse(read));
};

export default {
    path: "/hospital/list",
    callback: list,
};
