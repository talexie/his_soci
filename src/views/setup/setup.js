import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import { HisJsonForm ,UsersToolbar,HisConfigSchema, UserButton, SimpleTable } from 'components';
import uuid from 'uuid/v1';

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
  let formStatus = { 'open': true,'submitted':false };
  const url =`${props.d2}lrs?dataType=json&serviceType=lrs`;
  const schema = HisConfigSchema.properties.hisstages;
  const uiSchema = HisConfigSchema.setupUiSchema;
  let data:any = [];
  let authString = `admin:district`;
  let headers = new Headers();
  headers.set('Authorization', 'Basic ' + btoa(authString));

  const classes = useStyles();
  const [value,setValue] = useState(formStatus);
  const [ddata,setDdata] = useState([]);
  const getSubmittedData =(dataSaved)=>{
    formStatus = { 'open': true,'submitted':false };
    data = dataSaved;
    return { data:data,formStatus:formStatus}
  }
  const handleChange = event => {
    formStatus = { 'open': false,'submitted':false };
    setValue(formStatus);
  };

  const saveData = (event) => {
    formStatus = { 'open': true,'submitted':false };
    tableData.push(data.data);
    console.log("Data",tableData);
    setValue(formStatus);
  };

  useEffect(()=>{
    let isLoaded = false;
    let totalCount = 0;

    /*
    post data to DHIS2
    */
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