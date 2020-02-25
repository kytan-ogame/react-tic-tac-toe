import { createSlice, createSelector } from '@reduxjs/toolkit';

const slice = createSlice({
	name: 'ui',
	initialState: {
		step: 0,
	},
	reducers: {
		setStep: (state, action) => {
			state.step = action.payload;
		},
	},
});

const { reducer, actions } = slice;

const getUi = state => state.ui;

export const getStep = createSelector([getUi], data => data.step);

export const { setStep } = actions;
export default reducer;
