import axios from "axios";
import joinDate from "../utils/joinDate";
import nowDate from "../utils/nowDate";
import toMinutes from "../utils/toMinutes";

const detail = async (id) => {
	const BASE_URL = `http://apis.data.go.kr/B551182/medicInsttDetailInfoService/getDetailInfo?serviceKey=${process.env.OPEN_KEY}&numOfRows=10&ykiho=${id}`;

	const res = await axios(BASE_URL);

	if (res.status === 200) {
		const responseBody = res.data.response.body;

		if (responseBody.items !== "") {
			const item = responseBody.items.item;
			const day = nowDate();
			const now = new Date();
			const results = {};

			const hhmm = now.getHours() * 60 + now.getMinutes();

			if (day === "sun") {
				if (item.trmtSunStart) {
					if (
						toMinutes(item.trmtSunStart) < hhmm &&
						hhmm < toMinutes(item.trmtSunEnd)
					) {
						results.status = `진료중`;
					} else {
						results.status = `진료마감`;
					}
				}
			} else if (day === "sat") {
				if (item.trmtSatStart) {
					if (
						toMinutes(item.trmtSatStart) < hhmm &&
						hhmm < toMinutes(item.trmtSatEnd)
					) {
						results.status = `진료중`;
					} else {
						results.status = `진료마감`;
					}
				}
			} else {
				if (item.trmtMonStart) {
					if (
						toMinutes(item.trmtMonStart) < hhmm &&
						hhmm < toMinutes(item.trmtMonEnd)
					) {
						results.status = `진료중`;
					} else {
						results.status = `진료마감`;
					}
				}
			}

			if (item.trmtMonStart && item.trmtMonEnd) {
				results.week = `${joinDate(item.trmtMonStart)} ~ ${joinDate(
					item.trmtMonEnd
				)}`;
			} else {
				results.week = `정보없음`;
			}
			if (item.trmtSatStart && item.trmtSatEnd) {
				results.sat = `${joinDate(item.trmtSatStart)} ~ ${joinDate(
					item.trmtSatEnd
				)}`;
			} else {
				results.sat = `휴무`;
			}
			if (item.trmtSunStart && item.trmtSunEnd) {
				results.sun = `${joinDate(item.trmtSunStart)} ~ ${joinDate(
					item.trmtSunEnd
				)}`;
			} else {
				results.sun = `휴무`;
			}

			return results;
		}

		return {
			status: "정보없음",
			week: "정보없음",
			sat: "정보없음",
			sun: "정보없음",
		};
	}
	return {
		error: `${res.status} ERROR`,
	};
};

export default detail;
