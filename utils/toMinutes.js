const toMinutes = (string) => {
	const converted =
		Number(string.toString().slice(0, 2)) * 60 +
		Number(string.toString().slice(2, 4));
	return converted;
};

export default toMinutes;
