import api from "../api/hospital.js";
import fs from "fs";
import time from "../api/time.js";
import subject from "../api/subject.js";
import detail from "../api/detail.js";
import transport from "../api/transport.js";
import contact from "../api/contact.js";

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

	const idArray = JSON.parse(fs.readFileSync("json/contact.json", "utf8"));

	if (items) {
		const sorted = items.item.filter((d) => d.sidoCdNm === "서울");

		const addSubject = await Promise.all(
			sorted.map(async (data) => {
				const {
					items: { item },
				} = await subject(data.ykihoEnc);

				if (Array.isArray(item)) {
					data.subject = item[0].dgsbjtCdNm;
				} else {
					data.subject = item.dgsbjtCdNm;
				}

				const details = await detail(data.ykihoEnc);

				const editData = {
					address: data.addr,
					name: data.yadmNm,
					isPcr: data.pcrPsblYn === "Y" ? true : false,
					isRat: data.ratPsblYn === "Y" ? true : false,
					category:
						data.recuClCd === 11
							? "종합병원"
							: data.recuClCd === 21
							? "병원"
							: "의원",
					isClinic: data.rprtWorpClicFndtTgtYn === "Y" ? true : false,
					tel: data.telno,
					longitude: data.XPosWgs84,
					latitude: data.YPosWgs84,
					isContact: idArray.data.includes(data.ykihoEnc),
				};
				return Object.assign(editData, details);
			})
		);

		const inputObj = {
			createAt: new Date(utcNow + 9 * 60 * 60 * 1000),
			length: addSubject.length,
			data: addSubject,
		};
		fs.appendFile(PATH, JSON.stringify(inputObj), (err) => {
			if (err) {
				console.log(err);
			}
		});
	}
	res.json({ status: "success" });
};

export default {
	path: "/hospital/create",
	callback: create,
};
