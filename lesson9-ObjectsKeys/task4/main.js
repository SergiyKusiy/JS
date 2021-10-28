const addPropertyV1 = (userData, userId) => {
	userData.id = userId;
	return userData;
};
const addPropertyV2 = (userData, userId) => Object.assign(userData, { id: userId });
const addPropertyV3 = (userData, userId) => Object.assign({ id: userId }, userData);

const addPropertyV4 = (userData, userId) => {
	const newObj = { id: userId, ...userData };
	return newObj;
};