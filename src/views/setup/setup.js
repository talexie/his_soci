import React, { useState, useEffect, useCallback, useContext } from 'react';
import { makeStyles } from '@material-ui/styles';

import { HisJsonForm ,UsersToolbar,HisConfigSchema, UserButton,createEvent, createDataValues, getDataStore,updateDataStore, } from 'components';
import uuid from 'uuid/v1';
import { UrlContext } from '../../App';
import merge from 'lodash/merge';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));
let tableData:any = [];

const HisSetup = (props) => {
  const urlContextValue = useContext(UrlContext);
  const d2 = urlContextValue.d2;
  let formStatus = { 'open': true,'submitted':false };
  const api = d2.Api.getApi();
  const currentEvents = {
    program:'EQnIPsQzZ8R',
    programStage:'hKuDUonVytS',
    orgUnit:'wMpIrpoib8b',
  }
  const schema = HisConfigSchema.properties.hisstages;
  const uiSchema = HisConfigSchema.setupUiSchema;
  let data:any = [];
  const classes = useStyles();
  const [value,setValue] = useState(formStatus);
  const [state,setState] = useState([]);
  const [completed,setCompleted] = useState(false);
  const getSubmittedData =(dataSaved)=>{
    formStatus = { 'open': true,'submitted':false };
    data = dataSaved;
    return { data:data,formStatus:formStatus}
  }
  const handleChange = useCallback(async(event) => {
    formStatus = { 'open': false,'submitted':false };
    await setValue(formStatus);
  },[]);

  const saveData = useCallback(async(event) => {
    formStatus = { 'open': true,'submitted':false };
    tableData.push(data.data);
    await setState(tableData);
    await setValue(formStatus);
    /**
    Creating Data Api
    **/
    const events = merge({},currentEvents,createEvent(tableData));
    const dhis2Events = createDataValues({events:[]},events);
    /*
    post data to DHIS2
    */
    getDataStore(d2,'his_soci_tool','assessments');
    updateDataStore(d2,'his_soci_tool','assessments',dhis2Events);
    api.post('events',dhis2Events);
  },[]);

  useEffect(()=>{
    let isLoaded = false;
    let totalCount = 0;
    console.log("data",data);
  },[value]);

  return (
    <div className={classes.root}>
      <UsersToolbar title={ 'HIS SOCI Assessment' } item="Domains" placeholder="Search" />
      {
        <div className={classes.content}>
          <HisJsonForm data={ { id:uuid()} } schema={ schema } uiSchema= { uiSchema } getSubmittedData={ getSubmittedData }/>
        </div>
      }
      <UserButton color="primary" variant="contained" value="Save" getFormData={ handleChange }/>
      <UserButton color="primary" variant="contained" value="Complete" getFormData={ (ev)=>saveData(ev) }/>
    </div>
  );
};

export default HisSetup;
