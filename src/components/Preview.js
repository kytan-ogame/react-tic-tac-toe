import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import {GridList} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles(
		theme => ({
			root:{
			},
			colorPrimary: {
				'&$active':{
					background: 'rgba(128,128,128,.5)',
				}
			},
			colorSecondary: {
				'&$active':{
					background: theme.palette.secondary.light,
				}
			},
			colorDisabled: {
				'&$active':{
					background: theme.palette.grey[700] ,
				}
			},
			row: {
				'&+&': {
					borderTop: '1px solid '+ theme.palette.grey[800],
				}
			},
			cell: {
				width: 25,
				height: 25,
				'&+&': {
					borderLeft: '1px solid '+ theme.palette.grey[800],
				}
			},
			active: {}
		}),
		{name: 'Preview'}
);

const capitalize = (str) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

// récuère la position depuis laquelle
// il faudra commencer le path
const getStartPosition = (height=3,width=3,n=3,type="horizontal") =>{
	const point = {x:0,y:0};
	switch(type){
		case 'horizontal':
			point.x= Math.floor((width-n)/2);
			point.y =Math.floor(height/2)
			break;
		case 'vertical':
			point.x =Math.floor(width/2)
			point.y= Math.floor((height-n)/2);
			break;
		case 'diagonal':
			point.x= Math.floor((width-n)/2);
			point.y= Math.floor((height-n)/2);
			break;
	}
	return point
}

// rajoute le path en fonction de la position de départ calculée
// en amont
const fillBoard =(board, start={x:0,y:0}, n=3,type="horizontal" ) =>{
	for(let i = 0; i < n; i++){
		const x = start.x+i;
		const y = start.y+i;
		switch(type){
			case 'horizontal':
				if(board[x] && board[x][start.y]){
					board[x][start.y] = '2';
				}
				break;
			case 'vertical':
				if(board[start.x] && board[start.x][y]){
					board[start.x][y] = '2';
				}

				break;
			case 'diagonal':
				if(board[x] && board[x][y]) {
					board[x][y] = '2';
				}
				break;
		}
	}

}
function Preview({className, board=[], color= 'secondary', alignment = '', length = 0}) {
	const classes = useStyles();

	if(alignment){
		const start = getStartPosition(board[0].length, board.length, length, alignment)
		fillBoard(board, start, length, alignment);
		
	}

	return (
			<div className={clsx(className, classes.root)}>
			{
				board.map((row, idx) => (
					<Grid container key={idx} className={clsx(classes.row, classes[`color${capitalize(color)}`])}>
						{row.map((col,idx) => (
							<Grid item container key={idx} className={clsx(classes.cell, classes[`color${capitalize(color)}`], {
								[classes.active]: col !== '1'
							})}>
							</Grid>
						))}
					</Grid>
				))
			}
			</div>

	)
}

export default Preview;