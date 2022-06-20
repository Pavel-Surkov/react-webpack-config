const farmReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_HAMSTER': {
			const hamster = action.payload;
			const newFarm = state.concat(hamster);

			return newFarm;
		}
		case 'REMOVE_HAMSTER': {
			const hamsterName = action.payload;
			const newFarm = state.concat().filter((hamster) => hamster.name !== hamsterName);

			return newFarm;
		}
		default:
			return state;
	}
};

export default farmReducer;
