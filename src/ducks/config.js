import {createSlice, createSelector} from '@reduxjs/toolkit';

const slice = createSlice({
	name: 'config',
	initialState: {
		board: {
			cols: 3,
			rows: 3,
		},
		winRules: {
			horizontal: true,
			vertical: true,
			diagonal: true,
			nb: 3
		}
	},
	reducers: {
		setBoardCols: (state, action) => {
			state.board.cols = action.payload
		},
		setBoardRows: (state, action) => { 
			state.board.rows = action.payload
		},
		setWinRulesHorizontal: (state, action) => {
			state.winRules.horizontal = action.payload
		},
		setWinRulesVertical: (state, action) => {
			state.winRules.vertical = action.payload
		},
		setWinRulesDiagonal: (state, action) => {
			state.winRules.diagonal = action.payload
		},
		setWinRulesNb: (state, action) => {
			state.winRules.nb = action.payload
		},
	},
});

const {reducer, actions} = slice;

const getConfig = state => {
	return state.config
};
export const getBoard = createSelector([getConfig], data => data.board);
export const getWinRules = createSelector([getConfig], data => data.winRules);

export const getBoardCols = createSelector([getBoard], data => data.cols);
export const getBoardRows = createSelector([getBoard], data => data.rows);
export const getWinRulesHorizontal = createSelector([getWinRules], data => data.horizontal);
export const getWinRulesVertical = createSelector([getWinRules], data => data.vertical);
export const getWinRulesDiagonal = createSelector([getWinRules], data => data.diagonal);
export const getWinRulesNb = createSelector([getWinRules], data => data.nb);


// export const getPlayerById = createSelector([getPLayers], data => data.layout);

export const {setBoardCols, setBoardRows, setWinRulesDiagonal, setWinRulesHorizontal, setWinRulesVertical, setWinRulesNb } = actions;
export default reducer;
