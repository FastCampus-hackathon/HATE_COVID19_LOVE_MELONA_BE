const joinDate = (string) => {
	return [
		string.toString().slice(0, 2),
		":",
		string.toString().slice(2, 4),
	].join("");
};

export default joinDate;
