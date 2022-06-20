import React from 'react';
import classes from './AddHamster.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_NAME, CHANGE_HEIGHT, CHANGE_WEIGHT } from '../../redux/actions/createActions';
import { ADD_HAMSTER } from '../../redux/actions/farmActions';

const AddHamster = () => {
	const dispatch = useDispatch();
	const createHamster = useSelector((state) => state.create);
	const farm = useSelector((state) => state.farm);

	const addHamster = () => {
		const hamsterWithTheSameName = farm.find((hamster) => hamster.name === createHamster.name);

		if (hamsterWithTheSameName) {
			alert('The farm has a hamster with this name');
			return;
		}

		const newHamster = {
			name: createHamster.name,
			weight: +createHamster.weight,
			height: +createHamster.height
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

		dispatch(ADD_HAMSTER(newHamster));
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
					type="text"
					placeholder="Weight"
					value={createHamster.weight}
					onChange={(evt) => dispatch(CHANGE_WEIGHT(evt.target.value))}
				/>
			</div>
			<div className={classes.height}>
				<input
					type="text"
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
