import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles(
		theme => ({
			root: {
				height: '100%',
				display: 'flex',
				flexFlow: 'row nowrap',
				justifyContent: 'space-evenly',
				alignItems: 'center'
			},
			vertical: {
				flexFlow: 'column-reverse nowrap',
			},
			btn: {
				background: theme.palette.background.paper,
				opacity: 0.8,
				color: theme.palette.getContrastText(theme.palette.background.paper)
			},
			btnRoot: {
				width: 36,
				height: 36,
				'&:hover': {
					background: theme.palette.background.paper,
					opacity: 1,
					transform: 'scale(1.1)'
				}
			},

		}),
		{name: 'NumberSelector'}
);

function NumberSelector({
													className,
													min = -Infinity,
													max = Infinity,
													value = 0,
													orientation = "vertical",
													onChange = () => {
													}
												}) {
	const classes = useStyles();

	const [currentValue, setCurrentValue] = useState(value);


	if (currentValue < min) {
		setCurrentValue(min);
	}
	if (currentValue > max) {
		setCurrentValue(max);
	}

	const add = (delta) => (e) => {
		let val = currentValue + delta;
		if (val >= min && val <= max) {
			setCurrentValue(val);
		}
	}

	useEffect(() => {
		onChange(currentValue);
	}, [currentValue]);

	return (
			<div className={clsx(classes.root, className, {
				[classes.vertical]: orientation === 'vertical'
			})}>
				<Fab onClick={add(-1)} className={classes.btn} classes={{root: classes.btnRoot}} disabled={currentValue <= min}><RemoveIcon/></Fab>
				<Box fontWeight="fontWeightBold" m={1} textAlign="center" fontSize="h6.fontSize">
					{currentValue}
				</Box>
				<Fab onClick={add(1)} className={classes.btn} classes={{root: classes.btnRoot}}
						 disabled={currentValue >= max}><AddIcon/></Fab>
			</div>
	)
}

export default NumberSelector;