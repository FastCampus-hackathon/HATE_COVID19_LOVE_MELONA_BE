import axios from "axios";

const hospital = async () => {
    const BASE_URL = `http://apis.data.go.kr/B551182/rprtHospService/getRprtHospService?serviceKey=${process.env.OPEN_KEY}&pageNo=1&numOfRows=10000`;

    const res = await axios(BASE_URL);

    if (res.status === 200) {
        return res.data.response.body;
    }
    return {
        error: `${res.status} ERROR`,
    };
};

export default hospital;
