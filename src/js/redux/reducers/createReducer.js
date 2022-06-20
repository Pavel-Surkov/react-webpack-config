const initialState = {
	name: '',
	weight: 500,
	height: 20,
	stomach: []
};

const createReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CHANGE_NAME': {
			return {
				...state,
				name: action.payload
			};
		}
		case 'FEED': {
			const food = action.payload;
			const newStomach = state.stomach.concat(food);

			return {
				...state,
				weight: state.weight + 20,
				height: state.height + 0.5,
				stomach: newStomach
			};
		}
		case 'CLEAR': {
			return initialState;
		}
		default:
			return state;
	}
};

export default createReducer;
