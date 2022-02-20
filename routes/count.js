import seoul from "../api/seoul";

const count = async (req, res) => {
	const results = await seoul();
	res.json(results);
};

export default {
	path: "/count",
	callback: count,
};
