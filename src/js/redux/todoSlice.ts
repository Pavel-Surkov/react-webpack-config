import { createSlice } from '@reduxjs/toolkit';

type Todo = {
	id: string;
	title: string;
	completed: boolean;
};

const initialState: Todo[] = [];

const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: (state, action) => {
			state.push({
				id: new Date().toISOString(),
				title: action.payload,
				completed: false
			});
		}
	}
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
