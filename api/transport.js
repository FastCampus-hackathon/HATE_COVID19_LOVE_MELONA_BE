import axios from "axios";

const transport = async (id) => {
	const BASE_URL = `http://apis.data.go.kr/B551182/medicInsttDetailInfoService/getTransportInfoList?ykiho=${id}&serviceKey=${process.env.OPEN_KEY}`;

	const res = await axios(BASE_URL);

	if (res.status === 200) {
		return res.data.response.body;
	}
	return {
		error: `${res.status} ERROR`,
	};
};

export default transport;
