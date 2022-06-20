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
		case 'FEED_HAMSTER': {
			const food = action.payload.food;
			const hamster = action.payload.hamster;

			const newStomach = hamster.stomach.concat(food);

			const newFarm = state.concat().filter((hmstr) => hmstr.name !== hamster.name);

			return [
				...newFarm,
				{
					name: hamster.name,
					weight: hamster.weight + 20,
					height: hamster.height + 0.5,
					stomach: newStomach
				}
			];
		}
		default:
			return state;
	}
};

export default farmReducer;
