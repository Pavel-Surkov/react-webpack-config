import React, { useEffect, useState } from 'react';
import classes from './AddHamster.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
	CHANGE_NAME,
	CHANGE_HEIGHT,
	CHANGE_WEIGHT,
	CLEAR
} from '../../redux/actions/createActions';
import { ADD_HAMSTER } from '../../redux/actions/farmActions';
import axios from 'axios';

const AddHamster = () => {
	const dispatch = useDispatch();
	const createHamster = useSelector((state) => state.create);
	const farm = useSelector((state) => state.farm);

	const [images, setImages] = useState(null);
	const [count, setCount] = useState(0);

	useEffect(() => {
		axios
			.get('https://random.dog/doggos')
			.then((resp) => {
				console.log(resp);
				setImages(resp.data);
			})
			.catch((err) => console.log(err));
	}, []);

	const addHamster = () => {
		const hamsterWithTheSameName = farm.find((hamster) => hamster.name === createHamster.name);

		if (hamsterWithTheSameName) {
			alert('The farm has a hamster with this name');
			return;
		}

		const newHamster = {
			name: createHamster.name,
			weight: +createHamster.weight,
			height: +createHamster.height,
			image: `https://random.dog/${images[count]}`
		};

		if (newHamster.weight < 0) {
			alert('Weight is uncorrect');
			return;
		} else if (newHamster.height < 0) {
			alert('Height is uncorrect');
			return;
		} else if (newHamster.name === '') {
			alert('Hamster does not have name');
			return;
		}

		setCount((count) => count + 1);

		dispatch(ADD_HAMSTER(newHamster));
		dispatch(CLEAR());
	};

	return (
		<form className={classes.add}>
			<div className={classes.name}>
				<input
					type="text"
					placeholder="Name"
					value={createHamster.name}
					onChange={(evt) => dispatch(CHANGE_NAME(evt.target.value))}
				/>
			</div>
			<div className={classes.weight}>
				<input
					type="number"
					placeholder="Weight"
					value={createHamster.weight}
					onChange={(evt) => dispatch(CHANGE_WEIGHT(evt.target.value))}
				/>
			</div>
			<div className={classes.height}>
				<input
					type="number"
					placeholder="Height"
					value={createHamster.height}
					onChange={(evt) => dispatch(CHANGE_HEIGHT(evt.target.value))}
				/>
			</div>
			<button type="button" onClick={addHamster}>
				Add Hamster
			</button>
		</form>
	);
};

export default AddHamster;
