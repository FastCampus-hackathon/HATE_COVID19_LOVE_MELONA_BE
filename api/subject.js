import axios from "axios";

const subject = async (id) => {
	const BASE_URL = `http://apis.data.go.kr/B551182/medicInsttDetailInfoService/getMdlrtSbjectInfoList?serviceKey=${process.env.OPEN_KEY}&numOfRows=10&ykiho=${id}`;

	const res = await axios(BASE_URL);

	if (res.status === 200) {
		return res.data.response.body;
	}
	return {
		error: `${res.status} ERROR`,
	};
};

export default subject;
