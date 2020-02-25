import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';


const useStyles = makeStyles(theme => ({
    root: {},
}), {name: 'Step1'});




function Step1({ className }) {
    const classes = useStyles();
    return <div className={clsx(classes.root, className)}>Step1</div>;
}


export default Step1;