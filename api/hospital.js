import axios from "axios";

const hospital = async (page, count) => {
	const BASE_URL = `http://apis.data.go.kr/B551182/rprtHospService/getRprtHospService?serviceKey=${process.env.OPEN_KEY}&pageNo=${page}&numOfRows=${count}`;

	const res = await axios(BASE_URL);

	if (res.status === 200) {
		if (res.data.response.body) {
			return res.data.response.body;
		}
	}
	return {
		error: `${res.status} ERROR`,
	};
};

export default hospital;
