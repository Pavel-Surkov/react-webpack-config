import React from 'react';
import { addTodo } from '../store/reducers/todoSlice';
import { useAppSelector, useAppDispatch } from '../store/hooks';

const Home: React.FC = () => {
	const todos = useAppSelector((state) => state.todos);
	const dispatch = useAppDispatch();

	return (
		<div>
			<button onClick={() => dispatch(addTodo('new todo'))}>Add todo</button>
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>{todo.title}</li>
				))}
			</ul>
			{/* User */}

			{/* User */}
		</div>
	);
};

export default Home;
