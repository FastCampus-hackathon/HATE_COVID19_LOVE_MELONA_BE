const nowDate = () => {
	const now = new Date();
	const week = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

	return week[now.getDay()];
};

export default nowDate;
