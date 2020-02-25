import { createSlice, createSelector } from '@reduxjs/toolkit';

const slice = createSlice({
	name: 'players',
	initialState: [],
	reducers: {
		addPlayer: (state, action) => {
			const players = [...state.players];
			players.push(action.payload);
			state.players = players;
		},
	},
});

const { reducer, actions } = slice;

const getPLayers = state => state.players;

// export const getPlayerById = createSelector([getPLayers], data => data.layout);

// export const { setLayout } = actions;
export default reducer;
