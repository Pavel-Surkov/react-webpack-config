// import { AppDispatch } from '../store';
// import axios from 'axios';
// import { IUser } from '../../models/IUser';
// import { userSlice } from './userSlice';

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
// 	try {
// 		const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');

// 		dispatch(userSlice.actions.usersFetchingSuccess(response.data));
// 	} catch (err) {
// 		dispatch(userSlice.actions.usersFetchingError(err.message));
// 	}
// };
