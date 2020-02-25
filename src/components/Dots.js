import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles(
		theme => ({
			root: {
				display: 'flex',
				flexFlow: 'column nowrap',
				justifyContent: 'space-around',
				alignItems: 'center',
				width: 200,
				height: 200
			},
			dot: {
				width: 8,
				height: 8,
				background: theme.palette.secondary.main,
				borderRadius: 100,
			},
			inactive: {
				opacity: theme.palette.action.disabledOpacity
			},
			colorPrimary: {
				background: theme.palette.primary.main,
			},
			colorSecondary: {
				background: theme.palette.secondary.main,
			},
			colorDisabled: {
				background: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[800],
			}

		}),
		{name: 'Dots'}
);
const capitalize = (str) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
}
function Dots({className, number = 1, color='primary'}) {
	const classes = useStyles();
	const dots = []
	for (let i = 0; i < number; i++) {
		dots.push('');
	}


	return (
			<div className={clsx(classes.root, className)}>
				{
					dots.map((dot, idx) => (
							<div className={clsx(classes.dot,classes[`color${capitalize(color)}`])} key={idx}></div>
					))
				}
			</div>
	)
}

export default Dots;