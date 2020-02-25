import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';


const useStyles = makeStyles(theme => ({
    root: {},
}), {name: 'Game'});




function Game({ className }) {
    const classes = useStyles();
    return <div className={clsx(classes.root, className)}>Game</div>;
}


export default Game;