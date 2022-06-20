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
		case 'CHANGE_WEIGHT': {
			return {
				...state,
				weight: action.payload
			};
		}
		case 'CHANGE_HEIGHT': {
			return {
				...state,
				height: action.payload
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
