import axios from "axios";
import fs from "fs";

// contact.json 제작용 함수, 미사용
const contact = async (id) => {
	const BASE_URL = `http://apis.data.go.kr/B551182/telCnslHospService/getTelCnslHospList?serviceKey=${process.env.OPEN_KEY}&pageNo=1&numOfRows=10000`;

	const res = await axios(BASE_URL);

	if (res.status === 200) {
		const responseBody = res.data.response.body;
		const sorted = responseBody.items.item.filter((d) => d.sidoNm === "서울");

		const ykihoArray = sorted.map((d) => d.ykiho);

		fs.appendFile(
			"json/contact.json",
			JSON.stringify({ data: ykihoArray }),
			(err) => {
				if (err) {
					console.log(err);
				}
			}
		);

		return res.data.response.body;
	}
	return {
		error: `${res.status} ERROR`,
	};
};

export default contact;
