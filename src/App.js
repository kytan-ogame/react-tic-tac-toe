import React from 'react';

import {ThemeProvider} from '@material-ui/styles';
import Main from "./components/Main";
import {Provider} from "react-redux";
import theme from './theme';
import store from "./store";
import css from './app.css';

function App() {
	return (
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<Main></Main>
				</ThemeProvider>
			</Provider>

	);
}

export default App;
