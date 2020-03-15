import React, { useEffect, useContext, useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { HisJsonForm ,HisSociSchema,HisSociUiSchema,getDataStoreValue,filterAssessmentById } from 'components';
import { UrlContext } from '../../App';
import isEmpty from 'lodash/isEmpty';
import { useLocation, Redirect } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

let hisSociData = [];
// A custom hook that builds on useLocation to parse
// the query string for you.
const useQuery=()=>{
  return new URLSearchParams(useLocation().search);
}
const getSubmittedData =(dataSaved)=>{
  hisSociData = dataSaved;
  return hisSociData;
}
const schema = HisSociSchema;
const uiSchema = HisSociUiSchema;

const HisSetup = (props) => {
  const query = useQuery();
  const urlContextValue = useContext(UrlContext);
  const d2 = urlContextValue.d2;
  //const api = d2.Api.getApi();
  const classes = useStyles();
  const queryId = query.get('id');
  const [assessment,setAssessment] = useState({});
  
  /**
   * Initialize form with default or existing data
   */
  const initializeForm= useCallback(async()=>{
    const assessmentsStore =  await getDataStoreValue(d2,'his_soci_tool','assessments');    
    // Check equality if store has id in assessments id with get(id,assessment);
    const existingAssessment = filterAssessmentById(assessmentsStore.assessments,queryId);
    if(!isEmpty(existingAssessment)){
      setAssessment(existingAssessment[0]);
    }
  },[d2,queryId]);

  useEffect(()=>{
    initializeForm();
  },[initializeForm]);

  if(queryId === null){
    return (
      <div className={classes.root}>
        <span>No assessment is available now. Consult your Data Management Team Lead to setup one.
        You will recieve a link for the assessment.</span>
      </div>
    );
  }
  else{
    return (
      query.get('continue')?
      (
        <div className={classes.root}>
          { 
            <div className={classes.content}>
              <HisJsonForm title={ 'HIS SOCI Assessment' } data={ assessment } schema={ schema } uiSchema= { uiSchema } getSubmittedData={ getSubmittedData }/>
            </div>
          }
        </div>
      ):
      (
        <Redirect to={ `/documentation?id=${ queryId }&continue=false`} />
      )
    );
  }
};

export default HisSetup;
