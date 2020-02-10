import React, { useState, useEffect, useCallback, useContext, } from 'react';
import { makeStyles } from '@material-ui/styles';

import { HisJsonForm ,HisConfigSchema, UserButton,createEvent, createDataValues, updateDataStore,getMappings,getDataStoreValue, getUserDataStoreValue,checkAssessmentByRespondent,updateUserDataStore,filterAssessmentById } from 'components';
import { UrlContext } from '../../App';
import merge from 'lodash/merge';
import isEmpty from 'lodash/isEmpty';
import { useLocation, Redirect } from 'react-router-dom';
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
let data = [];
// A custom hook that builds on useLocation to parse
// the query string for you.
const useQuery=()=>{
  return new URLSearchParams(useLocation().search);
}
const HisSetup = (props) => {
  const query = useQuery();
  const urlContextValue = useContext(UrlContext);
  const d2 = urlContextValue.d2;
  //const api = d2.Api.getApi();

  let formStatus = { 'open': true,'submitted':false };

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
  const [value,setValue] = useState(formStatus);
  const [submission,setSubmission] = useState({ data:[],defaultData:defaultData });
  const [completed,setCompleted] = useState(false);
  const [isLoading,setIsLoading] = useState(false);
  const [status,setStatus] = useState('PENDING');
  const [uStore,setUstore] = useState({ userStore:{ defaultData: defaultData }});

  const currentEvents = {
    event: generateUid(),
    program:'EQnIPsQzZ8R',
    programStage:'hKuDUonVytS',
    orgUnit:'wMpIrpoib8b',
    status: 'COMPLETED',
    eventDate: moment().format('YYYY-MM-DD'),
    completedDate: moment().format('YYYY-MM-DD'),
  }
  const schema = HisConfigSchema.properties.hisstages;
  const uiSchema = HisConfigSchema.assessmentUiSchema;
  
  const getSubmittedData =(dataSaved)=>{
    formStatus = { 'open': true,'submitted':false };
    data = dataSaved;
    return { data:data,formStatus:formStatus}
  }
  const handleChange = async(currentStatus) => {
    formStatus = { 'open': false,'submitted':false };
    setValue(formStatus);
    setStatus(currentStatus);
    tableData.push(data.data);
    setUstore(()=>{
      return {
        ...uStore,
        userStore: { defaultData: data }
      };
    });
    save(tableData,currentStatus);
    return currentStatus;
  };

  const save = async(values,status) => {
    const api = d2.Api.getApi();
    setSubmission(()=>{
      return {
        ...submission,
        data: data.data,
        defaultData:data.data
      }
    });
    

    /**
    Creating Data Api
    **/

    const events = merge(currentEvents,createEvent(values));
    const dhis2Events = createDataValues({events:[]},events);

    /*
    post data to DHIS2
    */
    values[0].tracking.userid = d2.currentUser.id;
    values[0].tracking.username = d2.currentUser.username;
    values[0].tracking.status = status;
    const mappings = await getDataStoreValue(d2,'his_soci_tool','mappings');
    const mappedEvents =getMappings(mappings,dhis2Events);
    updateDataStore(d2,'his_soci_tool','assessments',values,'assessments','tracking.id');
    updateUserDataStore(d2,'his_soci_tool','assessments',values);
    api.post('events?strategy=CREATE_AND_UPDATE',mappedEvents);
    setValue({ 'open': true,'submitted':false });

    userStore.defaultData = values;
    setUstore(()=>{
      return {
        ...uStore,
        userStore: { defaultData: data }
      };
    });
    if (status === 'COMPLETED'){
      setCompleted(true);
      //return (<Redirect to="/dashboard" />); 
    }
    initializeForm();
    return values;
  };
  /**
   * Initialize form with default or existing data
   */
  const initializeForm=useCallback(async()=>{
    setIsLoading(true);
    userStore = await getUserDataStoreValue(d2,'his_soci_tool','assessments');
    const setupStore =  await getDataStoreValue(d2,'his_soci_tool','setup');
    const assessmentsStore =  await getDataStoreValue(d2,'his_soci_tool','assessments');
    
    // Check equality if setup store has id in respondents, assessment id with get(id,assessment);
    const assessment = checkAssessmentByRespondent(setupStore.setup,query.get("assessment"),query.get("id"));
    const existingAssessment = filterAssessmentById(assessmentsStore.assessments,query.get("id"));
    if(!isEmpty(userStore.current)){
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
        userStore.defaultData = merge(userStore.current[0],defaultData);
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
        userStore.defaultData = merge(userStore.current[0],defaultData);
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
      userStore.defaultData = merge(defaultData,assessment);
    }
    userStore.defaultData = merge(defaultData,existingAssessment[0]);
    setUstore(()=>{      
      return {
        ...uStore,
        userStore: userStore 
      };
    });
    setIsLoading(false);
    return userStore;
  },[]);

  useEffect(()=>{
    initializeForm();
  },[initializeForm]);

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
              <HisJsonForm title={ 'HIS SOCI Assessment' } data={ uStore.userStore.defaultData } schema={ schema } uiSchema= { uiSchema } getSubmittedData={ getSubmittedData }/>
            </div>
          }
          <UserButton disabled = { completed } color="primary" variant="contained" value="Save Draft" getFormData={ ()=>handleChange('PENDING') }/>
          <UserButton disabled = { completed } color="primary" variant="contained" value="Submit" getFormData={ ()=>handleChange('COMPLETED')}/>
        </div>
      ):
      (
        <Redirect to={ `/documentation?id=${query.get("id")}&assessment=${query.get("assessment")}&continue=false`} />
      )
    );
  }
};

export default HisSetup;
