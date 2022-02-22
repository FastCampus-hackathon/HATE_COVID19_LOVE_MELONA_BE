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

	const { items } = await api(1, 6000);

	const idArray = JSON.parse(fs.readFileSync("json/contact.json", "utf8"));

	const getSeoul = items.item.filter((d) => d.sidoCdNm === "서울");

	if (items) {
		const results = [];
		let count = 0;
		for (let i = 0; i < getSeoul.length; i++) {
			const slicedSeoul = getSeoul.slice(count, count + 10);
			const addSubject = await Promise.all(
				slicedSeoul.map(async (data, index) => {
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
						subject: data.subject,
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
			count = count + 10;
			console.log(`✅ ${count}/${getSeoul.length}`);
			results.push(...addSubject);
		}

		const inputObj = {
			createAt: new Date(utcNow + 9 * 60 * 60 * 1000),
			length: results.length,
			data: results,
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
