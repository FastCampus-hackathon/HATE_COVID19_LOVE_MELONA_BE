import api from "../api/hospital.js";
import fs from "fs";
import time from "../api/time.js";

const PATH = "json/hospital.json";

const create = async (req, res) => {
    fs.stat(PATH, (err, stats) => {
        if (err) {
            console.log("here");
            return console.error(err);
        }
        fs.unlinkSync(PATH);
    });

    const now = new Date();
    const utcNow = now.getTime();
    const { items } = await api();
    // const tt = await time();
    // console.log(tt);
    if (items) {
        const sorted = items.item.filter((d) => d.sidoCdNm === "서울");
        const inputObj = {
            createAt: new Date(utcNow + 9 * 60 * 60 * 1000),
            length: sorted.length,
            data: sorted,
        };
        fs.appendFile(PATH, JSON.stringify(inputObj), (err) => {
            if (err) {
                console.log(err);
            }
        });
    }
    // res.json(tt);
    res.json({ status: "success" });
};

export default {
    path: "/hospital/create",
    callback: create,
};
