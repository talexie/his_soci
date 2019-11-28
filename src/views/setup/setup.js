import React, { useState, useEffect, useCallback, useContext, } from 'react';
import { makeStyles } from '@material-ui/styles';

import { HisJsonForm ,HisConfigSchema, UserButton,createEvent, createDataValues, updateDataStore,getMappings,getDataStoreValue, getUserDataStoreValue,checkAssessmentByRespondent } from 'components';
import { UrlContext } from '../../App';
import merge from 'lodash/merge';
import { useLocation } from 'react-router-dom';
import { generateUid } from 'd2/uid';
import moment from 'moment';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));
let tableData = [];
// A custom hook that builds on useLocation to parse
// the query string for you.
const useQuery=()=>{
  return new URLSearchParams(useLocation().search);
}
const HisSetup = (props) => {
  let query = useQuery();
  const urlContextValue = useContext(UrlContext);
  const d2 = urlContextValue.d2;
  const api = d2.Api.getApi();

  let formStatus = { 'open': true,'submitted':false };
  let data = [];
  let userStore = {};
  let defaultData = { 
    tracking:{ 
      id: query.get("id"),      
      respondentType:"Self",
      location: "",
      period: "",
      status: 'STARTED',
      date: moment().format('YYYY-MM-DD'),
      background:{
        reference: query.get("assessment"),
        stakeholders: [],
        coverage: []
      }
    }
  };
  const classes = useStyles();
  const [value,setValue] = useState(formStatus);
  const [state,setState] = useState([]);
  const [completed,setCompleted] = useState(false);
  const [isLoading,setIsLoading] = useState(false);
  const [uStore,setUstore] = useState({ userStore:{ defaultData: defaultData }});


  const currentEvents = {
    event: generateUid(),
    program:'EQnIPsQzZ8R',
    programStage:'hKuDUonVytS',
    orgUnit:'wMpIrpoib8b',
    status: 'COMPLETED',
  }
  const schema = HisConfigSchema.properties.hisstages;
  const uiSchema = HisConfigSchema.assessmentUiSchema;


  
  const getSubmittedData =(dataSaved)=>{
    formStatus = { 'open': true,'submitted':false };
    data = dataSaved;
    return { data:data,formStatus:formStatus}
  }
  const handleChange = useCallback(async(event) => {
    formStatus = { 'open': false,'submitted':false };
    await setValue(formStatus);
    tableData[0].tracking.userid = d2.currentUser.id;
    tableData[0].tracking.username = d2.currentUser.username;
    tableData[0].tracking.status = 'PENDING';
  },[]);

  const save = useCallback(async(event) => {
    formStatus = { 'open': true,'submitted':false };
    tableData.push(data.data);
    console.log("data",data);
    setState(data);
    setValue(formStatus);

    /**
    Creating Data Api
    **/
    const events = merge({},currentEvents,createEvent(tableData));
    const dhis2Events = createDataValues({events:[]},events);

    /*
    post data to DHIS2
    */
    tableData[0].tracking.userid = d2.currentUser.id;
    tableData[0].tracking.username = d2.currentUser.username;
    tableData[0].tracking.status = 'COMPLETED';
    const mappings = await getDataStoreValue(d2,'his_soci_tool','mappings');
    const mappedEvents =getMappings(mappings,dhis2Events);
    updateDataStore(d2,'his_soci_tool','assessments',tableData,'assessments');
    api.post('events',mappedEvents);
    setCompleted(true);
  },[]);
    
  useEffect(()=>{
    const initializeForm=async()=>{
      setIsLoading(true);
      userStore = await getUserDataStoreValue(d2,'his_soci_tool','assessments'); 
      const setupStore =  await getDataStoreValue(d2,'his_soci_tool','setup');
      // Check equality if setup store has id in respondents, assessment id with get(id,assessment);
      const assessment = checkAssessmentByRespondent(setupStore.setup,query.get("id"),query.get("assessment"));
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
      }
      else{
        defaultData.tracking.location = assessment.location;
        defaultData.tracking.period = assessment.period;
        defaultData.background.hisType = assessment.hisType;
        defaultData.background.purpose = assessment.purpose;
        defaultData.background.mainChallenge = assessment.mainChallenge;
        defaultData.background.stakeholders = assessment.respondents;
        defaultData.background.event = currentEvents.event;
        defaultData.background.stakeholders = assessment.respondents;
        defaultData.background.coverage = assessment.coverage;
      }
      userStore.defaultData = defaultData;
      setUstore(()=>{
        return {
          userStore: userStore 
        };
      });
      setIsLoading(false);
      return userStore;
    }
    initializeForm();
  },[]);
  return (
    <div className={classes.root}>
      { 
        <div className={classes.content}>
          <HisJsonForm title={ 'HIS SOCI Assessment' } data={ uStore.userStore.defaultData } schema={ schema } uiSchema= { uiSchema } getSubmittedData={ getSubmittedData }/>
        </div>
      }
      <UserButton disabled = { completed } color="primary" variant="contained" value="Save Draft" getFormData={ handleChange }/>
      <UserButton disabled = { completed } color="primary" variant="contained" value="Complete" getFormData={ (ev)=>save(ev) }/>
    </div>
  );
};

export default HisSetup;
