import React, {useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import clsx from 'clsx';
import {useDispatch, useSelector} from "react-redux";
import {
	getWinRulesDiagonal,
	getWinRulesHorizontal,
	getWinRulesVertical,
	setBoardCols,
	setBoardRows,
	setWinRulesDiagonal,
	setWinRulesHorizontal,
	setWinRulesVertical,
	setWinRulesNb, getWinRulesNb, getBoardCols, getBoardRows
} from "../ducks/config";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import NumberSelector from "../components/NumberSelector";
import Dots from "../components/Dots";
import Typography from "@material-ui/core/Typography";
import Preview from "../components/Preview";
import Box from "@material-ui/core/Box";


const useStyles = makeStyles(theme => ({
	root: {},
	title: {
		fontFamily: 'Baloo',
		fontWeight: 100,
		marginTop: theme.spacing(5)
	},
	grid: {
		maxWidth: 980,
		margin: '0 auto',
		alignItems: 'center'
	},
	gridItem: {
		cursor: 'pointer',
		padding: theme.spacing(1),
	},
	firstCol: {
		flex: '0 0 100px'
	},
	vertical: {
		transform: 'rotate(90deg)'
	},
	diagonal: {
		transform: 'rotate(45deg)'
	},
	numberSelector: {
		// background: theme.palette.background.paper,
	},
	active: {
		// background: 'rgba(128,128,128,.05)',

		// boxShadow: theme.shadows[5]
	}
}), {name: 'Step0'});


function Step0({className}) {
	const classes = useStyles();
	const dispatch = useDispatch();
	const cols = useSelector(getBoardCols);
	const rows = useSelector(getBoardRows);
	const diagonal = useSelector(getWinRulesDiagonal);
	const vertical = useSelector(getWinRulesVertical);
	const horizontal = useSelector(getWinRulesHorizontal);
	const nb = useSelector(getWinRulesNb);


	const fakeBoard = [];
	for (let i = 0; i < rows; i++) {
		fakeBoard[i] = []
		for (let j = 0; j < cols; j++) {
			fakeBoard[i][j] = '1';
		}
	}
	let start = {x: 0, y: 0};
	const fakeBoardH = JSON.parse(JSON.stringify(fakeBoard));
	// start.x = fakeBoardH[Math.floor(fakeBoardH.length /2)-Math.floor(cols/2)][Math.floor(fakeBoardH.length /2];
	const fakeBoardV = JSON.parse(JSON.stringify(fakeBoard));
	const fakeBoardD = JSON.parse(JSON.stringify(fakeBoard));


	const handleClick = (value, fn) => (e) => {
		dispatch(fn(value));
	}
	const handleChangeNb = (n) => {
		if (n !== nb) {
			dispatch(setWinRulesNb(n))
		}
	}
	const handleChangeRows = (n) => {
		if (n !== rows) {
			dispatch(setBoardRows(n))
		}
	}
	const handleChangeCols = (n) => {
		if (n !== cols) {
			dispatch(setBoardCols(n))
		}
	}

	return <div className={clsx(classes.root, className)}>
		<Box color="inherit" fontSize={24} textAlign="center" className={classes.title}>Grid Layout</Box>

		<Grid
				container
				direction="row"
				justify="center"
				alignItems="center"
				className={classes.grid}
				spacing={4}
		>
			<Grid item className={classes.firstCol}></Grid>
			<Grid item className={classes.secondCol}>
				<NumberSelector min={3} max={10} value={cols} onChange={handleChangeCols}
												orientation="horizontal" className={classes.numberSelector}></NumberSelector>
			</Grid>
		</Grid>
		<Grid
				container
				direction="row"
				justify="center"
				alignItems="stretch"
				className={classes.grid}
				spacing={4}
		>
			<Grid item className={classes.firstCol}>
				<NumberSelector min={3} max={10} value={rows} onChange={handleChangeRows}
												orientation="vertical" className={classes.numberSelector}></NumberSelector>
			</Grid>
			<Grid item className={classes.secondCol}>
				<Preview board={fakeBoard} color="secondary"/>
			</Grid>
		</Grid>

		<Box color="inherit" fontSize={24} textAlign="center" className={classes.title}>Victory conditions</Box>
		<Grid
				container
				direction="row"
				justify="center"
				alignItems="stretch"
				className={classes.grid}
				spacing={4}
		>

			<Grid item>
				<Tooltip title={
					<React.Fragment>
						<Typography color="inherit" variant="caption">Item number to align (between 3
							and {Math.min(rows, cols)})</Typography>
					</React.Fragment>
				} arrow>
					<div className={clsx(classes.gridItem)}>
						<NumberSelector min={3} max={Math.min(rows, cols)} value={nb} onChange={handleChangeNb}
														orientation="vertical" className={classes.numberSelector}></NumberSelector>
					</div>
				</Tooltip>
			</Grid>

			<Grid item onClick={handleClick(!horizontal, setWinRulesHorizontal)}>
				<Tooltip title={
					<React.Fragment>
						<Typography color="inherit" variant="caption">Toggle horizontal victory condition</Typography>
					</React.Fragment>
				} arrow>
					<div className={clsx(classes.gridItem, {
						[classes.active]: horizontal
					})}>
						<Preview board={fakeBoardH} color={horizontal ? 'secondary' : 'disabled'} alignment="horizontal"
										 length={nb}/>
					</div>
				</Tooltip>
			</Grid>

			<Grid item onClick={handleClick(!vertical, setWinRulesVertical)}>
				<Tooltip title={
					<React.Fragment>
						<Typography color="inherit" variant="caption">Toggle vertical victory condition</Typography>
					</React.Fragment>
				} arrow>
					<div className={clsx(classes.gridItem, {
						[classes.active]: vertical
					})}>
						<Preview board={fakeBoardV} color={vertical ? 'secondary' : 'disabled'} alignment="vertical" length={nb}/>
					</div>
				</Tooltip>
			</Grid>

			<Grid item onClick={handleClick(!diagonal, setWinRulesDiagonal)}>
				<Tooltip title={
					<React.Fragment>
						<Typography color="inherit" variant="caption">Toggle diagonal victory condition</Typography>
					</React.Fragment>
				} arrow>
					<div className={clsx(classes.gridItem, {
						[classes.active]: diagonal
					})}>
						<Preview board={fakeBoardD} color={diagonal ? 'secondary' : 'disabled'} alignment="diagonal" length={nb}/>
					</div>
				</Tooltip>
			</Grid>

		</Grid>
	</div>;
}


export default Step0;