import React from 'react';
import ReactDOM from 'react-dom';
import {
  awaitFetcher,
} from '@alkuip/core';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router } from "react-router-dom";
import { AuthDhis2Provider  } from './AuthDhis2Provider';
import { Admin, LoginPage,SignInPage} from './admin';

/***
 * Exports 
 */
export { routes } from './Routes';


/**
 * Initialize the Platform Application
 */
const initApp = async () => {
  const appData  = await awaitFetcher(`AppConfig.json`,null);
  ReactDOM.render(
    <Router>
      {
        <Admin 
          authProvider={ AuthDhis2Provider }
          loginPage={<LoginPage/> } 
          registerPage={<SignInPage/> }
          apiConfig = { appData }
        />
      }
    </Router>,document.getElementById('root')
  );
};

initApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();