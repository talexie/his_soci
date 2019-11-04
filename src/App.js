import React, { Component } from 'react';
import { HashRouter as Router} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import validate from 'validate.js';

import theme from './theme';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';
import validators from './common/validators';
import Routes from './Routes';

validate.validators = {
  ...validate.validators,
  ...validators
};

const App = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes baseUrl={ props.baseUrl }  d2= { props.d2 }/>
      </Router>
    </ThemeProvider>
  );
}
export default App;
