import React, {useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import clsx from 'clsx';
import {useDispatch, useSelector} from "react-redux";
import {getStep, setStep} from "../ducks/ui";
import Icon from '@material-ui/icons/ChevronRightRounded';
import {Button} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		justifyContent: 'center'
	},
}), {name: 'NextStep'});

function NextStep({className}) {
	const classes = useStyles();
	const step = useSelector(getStep);
	const dispatch = useDispatch();

	const handleClick = e => {
		dispatch(setStep(step + 1))
	};

	return <div className={classes.root}>
		<Button variant="contained" color="primary" onClick={handleClick}
						size="large"> Submit </Button>
	</div>
}


export default NextStep;