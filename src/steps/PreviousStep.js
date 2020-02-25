import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import {useDispatch, useSelector} from "react-redux";
import {getStep, setStep} from "../ducks/ui";
import Icon from '@material-ui/icons/ChevronLeftRounded';
import {Button} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {},
}), {name: 'PreviousStep'});

function PreviousStep({ className }) {
    const classes = useStyles();
    const step = useSelector(getStep);
    const dispatch = useDispatch();

    const handleClick = e => {
        dispatch(setStep(step-1))
    };

    return <Button variant="contained" color="secondary" onClick={handleClick}> Back </Button>

}


export default PreviousStep;