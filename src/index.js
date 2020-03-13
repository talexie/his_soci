import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import App from './App';
import { init, getUserSettings,config, getManifest } from 'd2';
import i18n from './locales';
import { createDataStore,createUserDatastore } from 'components';
import { userIsAdmin } from 'components/core/dhis2';
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
    const isProd = process.env.NODE_ENV === 'production';

    // api config

    const baseUrl = isProd
        ? manifest.activities.dhis.href
        : process.env.REACT_APP_DHIS2_BASE_URL;
    const authorization = process.env.REACT_APP_DHIS2_AUTHORIZATION;

    config.baseUrl = `${baseUrl}/api`;
    config.headers = isProd ? null : { Authorization: authorization };
    config.schemas = ['userGroup','organisationUnit'];
    let d2 = null;
    let isAdmin= false;
    let isAssessmentAdmin = false;
    //d2 = await init(config);
    try{
      d2 = await init(config);
      const userSettings = await getUserSettings();
      
      configI18n(userSettings);

      // Create datastore if it does not exist
      const dataStoreCreated = createDataStore(d2,'his_soci_tool','assessments');
      if(!dataStoreCreated){
        createDataStore(d2,'his_soci_tool','assessments');
      }
      // Create user datastore for user tracking
      const userStoreCreated = createUserDatastore(d2,'his_soci_tool','assessments');
      if(!userStoreCreated){
        createDataStore(d2,'his_soci_tool','assessments');
      }
      // Check if user is admin or assessment admin
      const adminConfig = await userIsAdmin(d2);
      isAdmin = adminConfig.isAdmin;
      isAssessmentAdmin = adminConfig.isAssessmentAdmin;
      ReactDOM.render(
        <App baseUrl={baseUrl} d2={ d2 } apiEngineUrl
        ={ apiEngineUrl} isAdmin= { isAdmin } isAssessmentAdmin ={ isAssessmentAdmin } />, document.getElementById('root')
      );
    }
    catch(error){
      console.log("Unable to load DHIS2, App is not installed in DHIS2");
      // Check if user is admin or assessment admin
      ReactDOM.render(
        <App baseUrl={baseUrl} d2={ d2 } apiEngineUrl
        ={ apiEngineUrl} isAdmin= { isAdmin } isAssessmentAdmin ={ isAssessmentAdmin } />, document.getElementById('root')
      );
    }

};

initApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
