import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import App from './App';
import { ENGINE_ROOT_API } from 'components';

let baseUrl = process.env.REACT_APP_DHIS2_BASE_URL;

if (!baseUrl) {
    console.warn('Set the environment variable `REACT_APP_DHIS2_BASE_URL` to your DHIS2 instance to override localhost:8080!');
    baseUrl = ENGINE_ROOT_API;
}

ReactDOM.render(<App baseUrl={ baseUrl} />, document.getElementById('root'));

serviceWorker.unregister();
