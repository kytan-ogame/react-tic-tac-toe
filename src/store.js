import { configureStore } from '@reduxjs/toolkit';
import ui from './ducks/ui';
import players from "./ducks/players";
import config from "./ducks/config";
const store = configureStore({
	reducer: {
		ui,
		players,
		config
	},
});
export default store;
