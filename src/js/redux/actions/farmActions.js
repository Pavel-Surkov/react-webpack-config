const ADD_HAMSTER = (hamster) => {
	return {
		type: 'ADD_HAMSTER',
		payload: hamster
	};
};

const REMOVE_HAMSTER = (hamsterName) => {
	return {
		type: 'ADD_HAMSTER',
		payload: hamsterName
	};
};
