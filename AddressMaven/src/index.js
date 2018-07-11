import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
const RouteMaster = require('./components/RouteMaster');

// Render application
ReactDOM.render(<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}><App /></MuiThemeProvider>, document.getElementById('root'));
