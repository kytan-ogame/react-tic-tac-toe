import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
	palette: {
		type: 'dark',
		primary: {
			light: '#fbc02d',
			main: '#ffa000',
			dark: '#ca7d00'
		},
		secondary: {
			light: '#00a4b4',
			main: '#0097a7',
			dark: '#007c8c'
		},
	},
});


// console.log('theme ->  | theme', theme);


export default theme;
