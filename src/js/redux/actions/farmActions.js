export const ADD_HAMSTER = (hamster) => {
	return {
		type: 'ADD_HAMSTER',
		payload: hamster
	};
};

export const REMOVE_HAMSTER = (hamsterName) => {
	return {
		type: 'ADD_HAMSTER',
		payload: hamsterName
	};
};

export const FEED_HAMSTER = (food, hamster) => {
	return {
		type: 'FEED_HAMSTER',
		payload: {
			food,
			hamster
		}
	};
};
