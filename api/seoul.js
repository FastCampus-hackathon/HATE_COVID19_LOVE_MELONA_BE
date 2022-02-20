import axios from "axios";

const seoul = async () => {
	const BASE_URL = `http://openapi.seoul.go.kr:8088/${process.env.SEOUL_KEY}/json/TbCorona19CountStatusJCG/1/5/2022.02.20.00`;

	const res = await axios(BASE_URL);

	if (res.status === 200) {
		return res.data;
	}
	return {
		error: `${res.status} ERROR`,
	};
};

export default seoul;
