import React, { useEffect, useState } from 'react';
import classes from './Farm.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_HAMSTER } from '../../redux/actions/farmActions';
import axios from 'axios';

const Farm = () => {
	const dispatch = useDispatch();
	const farm = useSelector((state) => state.farm);

	return (
		<ul className={classes.farm}>
			{farm.map((hamster) => {
				return (
					<li key={hamster.name}>
						<div>
							<img width="300" height="500" src={hamster.image} alt="hamster" />
						</div>
						<p>
							Name: <span>{hamster.name}</span>
						</p>
						<p>
							Weight: <span>{hamster.weight}</span>
						</p>
						<p>
							Height: <span>{hamster.height}</span>
						</p>
					</li>
				);
			})}
		</ul>
	);
};

export default Farm;
