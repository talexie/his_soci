import React, { useEffect, useContext, useCallback } from 'react';
import { makeStyles } from '@material-ui/styles';

import { HisJsonForm ,HisSociSchema,HisSociUiSchema,getDataStoreValue, getUserDataStoreValue,checkAssessmentByRespondent,filterAssessmentById } from 'components';
import { UrlContext } from '../../App';
import merge from 'lodash/merge';
import isEmpty from 'lodash/isEmpty';
import { useLocation, Redirect } from 'react-router-dom';
import { generateUid } from 'd2/uid';
import moment from 'moment';
import each from 'lodash/each';
import forIn from 'lodash/forIn';
import has from 'lodash/has';

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
const HisSetup = (props) => {
  const query = useQuery();
  const urlContextValue = useContext(UrlContext);
  const d2 = urlContextValue.d2;
  //const api = d2.Api.getApi();

  let userStore = {};
  let defaultData = { 
    tracking:{ 
      id: query.get("id"),      
      respondentType:"Self",
      location: "",
      period: "",
      status: 'STARTED',
      date: moment().format('YYYY-MM-DD'),
    },
    background:{
      reference: query.get("assessment"),
      stakeholders: [],
      coverage: []
    }
  };
  const classes = useStyles();


  const schema = HisSociSchema;
  const uiSchema = HisSociUiSchema;
  
  const updateFuture=(data)=>{
    each(data,(value)=>{
      forIn(value,(v,k)=>{
        if (has(v,'future')){
          v.goal=v['future']
          value[k] = v;
          delete v['future']
          return value
        }
          
      })
    })
   return data;
  }


  /**
   * Initialize form with default or existing data
   */
  const initializeForm= async()=>{
    userStore = await getUserDataStoreValue(d2,'his_soci_tool','assessments');
    const setupStore =  await getDataStoreValue(d2,'his_soci_tool','setup');
    const assessmentsStore =  await getDataStoreValue(d2,'his_soci_tool','assessments');
    
    // Check equality if setup store has id in respondents, assessment id with get(id,assessment);
    const assessment = checkAssessmentByRespondent(setupStore.setup,query.get("assessment"),query.get("id"));
    const existingAssessment = filterAssessmentById(assessmentsStore.assessments,query.get("id"));
    if(!isEmpty(userStore.current)){
      userStore.current = updateFuture(userStore.current);
      if (userStore.current[0].respondentType === 'Consensus'){
        defaultData = { 
          tracking:{ 
            id: userStore.current[0].id,
            userid: userStore.current[0].userid,
            username: userStore.current[0].username, 
            location: userStore.current[0].location,
            period: userStore.current[0].period,
            status: 'STARTED',
            respondentType: 'Consensus',
            date: userStore.current[0].date,
          },
          background:{
            event: userStore.current[0].event,
            reference: userStore.current[0].reference,
            hisType: userStore.current[0].hisType,
            purpose: userStore.current[0].purpose,
            mainChallenge: userStore.current[0].mainChallenge,
            stakeholders: userStore.current[0].respondents,
            coverage: userStore.current[0].coverage,
          }
        };
        hisSociData.defaultData = merge(userStore.current[0],defaultData);
      }
      else
      {
        defaultData.tracking.location = assessment.location;
        defaultData.tracking.period = assessment.period;
        defaultData.background.hisType = assessment.hisType;
        defaultData.background.purpose = assessment.purpose;
        defaultData.background.mainChallenge = assessment.mainChallenge;
        defaultData.background.stakeholders = assessment.respondents;
        defaultData.background.event = userStore.current[0].event === undefined?generateUid():userStore.current[0].event;
        defaultData.background.stakeholders = assessment.respondents;
        defaultData.background.coverage = assessment.coverage;
        hisSociData.defaultData = merge(userStore.current[0],defaultData);
      }
    }
    else
    {
      defaultData.tracking.location = assessment.location;
      defaultData.tracking.period = assessment.period;
      defaultData.background.hisType = assessment.hisType;
      defaultData.background.purpose = assessment.purpose;
      defaultData.background.mainChallenge = assessment.mainChallenge;
      defaultData.background.stakeholders = assessment.respondents;
      defaultData.background.event = generateUid();
      defaultData.background.stakeholders = assessment.respondents;
      defaultData.background.coverage = assessment.coverage;
      hisSociData.defaultData = merge(defaultData,assessment);
    }
    hisSociData.defaultData = merge(defaultData,existingAssessment[0]);
    return hisSociData;
  }

  useEffect(()=>{
    hisSociData = initializeForm();
  },[]);

  if(query.get('id') === null && query.get('assessment') === null){
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
              <HisJsonForm title={ 'HIS SOCI Assessment' } data={ hisSociData.defaultData } schema={ schema } uiSchema= { uiSchema } getSubmittedData={ getSubmittedData }/>
            </div>
          }
        </div>
      ):
      (
        <Redirect to={ `/documentation?id=${query.get("id")}&assessment=${query.get("assessment")}&continue=false`} />
      )
    );
  }
};

export default HisSetup;
