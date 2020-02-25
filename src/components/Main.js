import React from 'react';
import {makeStyles} from '@material-ui/styles';
import clsx from "clsx";
import Step0 from "../steps/Step0";
import NextStep from "../steps/NextStep";
import {useSelector} from "react-redux";
import {getStep} from "../ducks/ui";
import Step1 from "../steps/Step1";
import Game from "../steps/Game";
import PreviousStep from "../steps/PreviousStep";

const useStyles = makeStyles(
		theme => ({
			root:{},
			btn: {}

		}),
		{name: 'Main'}
);

function Main({className}) {
	const classes = useStyles();
	const currentStep = useSelector(getStep);
	return (
			<div className={clsx(classes.root, className)}>
				{currentStep === 0 && <Step0 />}
				{currentStep === 1 && <Step1 />}
				{currentStep === 2 && <Game />}
				{currentStep < 2 && currentStep > 0 && <PreviousStep />}
				{currentStep < 2 && <NextStep />}
			</div>
	)
}

export default Main;