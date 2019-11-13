import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import App from './App';
import { init, getUserSettings,config, getManifest, } from 'd2';
import i18n from './locales'
/**
  Specify the api Engine Url for Integration
**/
const apiEngineUrl = process.env.REACT_APP_ENGINE_ROOT_API;

const configI18n = userSettings => {
    const uiLocale = userSettings.keyUiLocale;

    if (uiLocale && uiLocale !== 'en') {
        config.i18n.sources.add(`./i18n/i18n_module_${uiLocale}.properties`);
    }

    config.i18n.sources.add('./i18n/i18n_module_en.properties');
    i18n.changeLanguage(uiLocale);
};

const initApp = async () => {
    const manifest = await getManifest('./manifest.webapp');

    // log app info
    console.info(
        `HIS SOCI app, v${manifest.version}, ${
            manifest.manifest_generated_at
        }`
    );
    console.log(process.env.NODE_ENV);
    const isProd = process.env.NODE_ENV === 'production';

    /*if (
        !isProd &&
        (!process.env.REACT_APP_DHIS2_BASE_URL ||
            !process.env.REACT_APP_DHIS2_AUTHORIZATION)
    ) {
        throw new Error(
            'Missing env variables REACT_APP_DHIS2_BASE_URL and REACT_APP_DHIS2_AUTHORIZATION'
        );
    }*/
    // api config

    const baseUrl = isProd
        ? manifest.activities.dhis.href
        : process.env.REACT_APP_DHIS2_BASE_URL;
    const authorization = process.env.REACT_APP_DHIS2_AUTHORIZATION;

    config.baseUrl = `${baseUrl}/api`;
    config.headers = isProd ? null : { Authorization: authorization };
    config.schemas = [];
    let d2 = null;
    try{
      d2 = await init(config);
      const userSettings = await getUserSettings();
      configI18n(userSettings);
      ReactDOM.render(
        <App baseUrl={baseUrl} d2={ d2 } apiEngineUrl
        ={ apiEngineUrl}/>, document.getElementById('root')
      );
    }
    catch(error){
      console.log("Unable to load DHIS2, App is not installed in DHIS2");
      ReactDOM.render(
        <App baseUrl={baseUrl} d2={ d2 } apiEngineUrl
        ={ apiEngineUrl}/>, document.getElementById('root')
      );
    }

};

initApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
