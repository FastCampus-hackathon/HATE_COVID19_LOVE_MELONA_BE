import api from "../api/hospital";

const hospital = async (req, res) => {
	const results = await api();
	res.json(results);
};

export default {
	path: "/hospital",
	callback: hospital,
};
