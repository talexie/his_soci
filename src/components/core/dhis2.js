import React from 'react';
import isPlainObject from 'lodash/isPlainObject';
import concat from 'lodash/concat';
import intersection from 'lodash/intersection';
import isNull from 'lodash/isNull';

/**
 * Check if respondent id exist in an assessment and return assessment and respondent
 * @param { string } assessmentId Assessment Id
 * @param { string } respondentId respondent Id sent via email
 * @returns { object }
 */
export const checkAssessmentByRespondent=(assessments,assessmentId,respondentId)=>{
  let newAssessment = {};
  const currentAssessment = assessments.filter((assessment)=>{
    return (assessment.id === assessmentId)
  });
  if((currentAssessment !== undefined) && (currentAssessment.length > 0)){
    if((currentAssessment[0].respondents.length > 0) && (currentAssessment[0] !== undefined)){
      const currentRespondent = currentAssessment[0].respondents.filter((respondent)=>{
        return (respondent.id === respondentId);
      });
      newAssessment = currentAssessment[0];
      newAssessment.respondents= currentRespondent;
      
    } 
    else {
      newAssessment = currentAssessment[0];
      newAssessment['respondents']= [{
        id:currentAssessment[0].id,
      }];
    }
  }
  return newAssessment;
}
/**
 * Filter current assessments from all assessments
 * @param { string } assessmentId Assessment Id
 * @returns { array }
 */
export const filterAssessment=(assessments,assessmentId)=>{
  const currentAssessment = assessments.filter((assessment)=>{
    if ( assessment.background !== undefined){
      return (assessment.background.reference === assessmentId)
    }    
  });
  return currentAssessment;
}
/**
 * Filter data by parameter
 * @param { array } data Data to search from
 * @param { string } key Key used to do match
 * @param { string } search Word to search
 */
export const filterData=(data,key,search)=>{
  return data.filter((dv)=>{
    return (dv[key] === search);
  });
}
/**
 * Generate tabular data for data entry analysis
 * @param { object } assessment Can be current assessment or any
 * @param { array } hisComponentSchema 
 * @param { array } hisDomainSchema
 * @returns { array } 
 */
export const generateTable=(assessment, hisComponentSchema, hisDomainSchema)=>{
  let tableAssessments = [];
  hisDomainSchema.forEach((domain,dIndex)=>{
    tableAssessments.push({ 
      name: domain.name,
      current: filterData(assessment.domain.current,'name',domain.name),
      goal: filterData(assessment.domain.goal,'name',domain.name),
      subdomains:[]
    });
    const selectedSubDomains = getComponentsInDomain(domain.items,hisComponentSchema);
    selectedSubDomains.forEach((component,cIndex)=>{
      tableAssessments[dIndex].subdomains.push({
        name: component.name,
        current: filterData(assessment.component.current,'name',component.name),
        goal: filterData(assessment.component.goal,'name',component.name),
        subcomponents:[]
      });
      component.items.forEach((item)=>{
        const current = filterData(assessment.current,'key',item);
        const goal = filterData(assessment.goal,'key',item);
        tableAssessments[dIndex].subdomains[cIndex].subcomponents.push({
          current: current,
          goal: goal,
          name: current[0].name
        });
      });
    });
  });
  return tableAssessments;
}
/**
 * Get components that belong to a certain domain
 * @param {*} componentItems Assessment components in a subdomain
 * @param {*} domainItems Assessment components in a domain
 */
export const getComponentsInDomain=(domainItems,subDomainSchema)=>{
  return subDomainSchema.filter((subDomain)=>{
    const matchedItems = intersection(domainItems,subDomain.items);
    return ( matchedItems.length > 0);
  })
}
/**
 *
 Create events data payload for DHIS2 Event program without registration
**/
export const createDataValues=(currentData, event)=>{
  if(currentData !== undefined){
    currentData.events.push(event);
  }
  return currentData;
}
/**
 Create event from data submitted
**/
export const createEvent=(data)=>{
  let event = {
    dataValues:[]
  };
  if(data !== undefined){
    data.map((value)=>{
      Object.keys(value).map((keyValue)=>{
        event.dataValues=concat(event.dataValues,getValue(value[keyValue],keyValue));
      });
    });
  }
  return event;
}

/**
getValue from object
**/
const getValue=(value,key)=>{
  let objectArray= [];
  if(isPlainObject(value)){
    Object.keys(value).map((keyValue)=>{
      const keyProperty = '#/properties/'+ key +'/properties/'+ keyValue;
      objectArray.push({ value:value[keyValue],dataElement:keyProperty});
    });
  }
  else{
      objectArray.push({ value: value, dataElement: key });
  }
  return objectArray;
}
/**
 * Send notifications
 * @param {*} subject 
 * @param {*} sendType 
 * @param {*} message
 * @param {*} recipients
 * @param {*} sender
 */
export const sendMessage=(data,sendType,sender,api,messageType)=>{
  const notifications = {
    "programMessages": []      
  };
  const conversations = { 
    "messageConversations":[]
  };
  data.respondents.forEach((dv)=>{
    const message = "Please complete assessment for " + data.location + " for period " + data.period + ".<br><a href='"+api +"/api/apps/HIS-SOCI-tool/index.html#/setup?id="+ dv.id+"&assessment="+ data.id +"'>"+
    api +"/api/apps/HIS-SOCI-tool/index.html#/setup?id="+ dv.id+"&assessment="+ data.id +"</a>";
    const subject = data.location + " Assessment ("+ dv.id +")";
    notifications.programMessages.push(createMessage([dv.emailAddress],sender,subject,sendType,message,dv.event));
    conversations.messageConversations.push({ 
      text : message,
      subject: subject,
      users: [sender]
    });
  });
  return { 
    "programMessages": notifications,
    "conversations":conversations
  }
}
/**
 * Create notification/message
 */
export const createMessage=(recipients,sender,subject,sendType,message,event)=>{
  const notification = 
      {
        "recipients": {
          "emailAddresses": recipients
        },
        "programStageInstance": {
          "id": event
        },
        "deliveryChannels": sendType,
        "subject": subject,
        "text": message,
        "storeCopy": true
      }
  return notification;
}
/**
 * Create user datastore
 * @param {*} d2 
 * @param {*} namespace 
 * @param {*} key 
 */
export const createUserDatastore=async (d2,namespace,key)=>{
  if (!await d2.currentUser.dataStore.has(namespace)){
    const nsp= await d2.currentUser.dataStore.create(namespace, false);
    await nsp.set(key, {'current':[],'history':[]});
  }
  return;
}
/**
 * Update the user datastore
 * @param {*} d2 
 * @param {*} namespace 
 * @param {*} key 
 */
export const updateUserDataStore= (d2,namespace,key,data)=>{
  d2.currentUser.dataStore.get(namespace).then((nsp)=> {
    nsp.get(key).then(value => {
      value.history=concat(value.history,value.current);
      value.current=data;
      nsp.set(key,value);
    });
  });
  return;
}
/**
* Get User Data store namespace key values
* @param {*} d2 
* @param {*} namespace 
* @param {*} key 
**/
 export const getUserDataStoreValue= async (d2, namespace, key)=>{
  let values = {};
  const nsp = await d2.currentUser.dataStore.get(namespace);
  values= await getDataStoreKey(nsp,key);
  return values;
}
/**
 * Check and create dataStore
 * @param {*} d2 
 * @param {*} namespace 
 * @param {*} key 
 */

export const createDataStore= async (d2,namespace,key)=>{
  if(!await d2.dataStore.has(namespace)){
    d2.dataStore.create(namespace).then(nsp => {
        nsp.set(key, { 'assessments':[]});
        nsp.set('mappings',{'mappings':[]});
        nsp.set('setup',{'setup':[]});
    });
  }
  return;
}
/**
Save data to datastore
**/
export const updateDataStore= (d2,namespace,key,data,dataType)=>{
  d2.dataStore.get(namespace).then((nsp)=> {
    nsp.get(key).then(value => {
      if (isNull(value[dataType])){

      }
      else{
        value[dataType]=concat(value[dataType],data);
      }
      nsp.set(key,value);
    });
  });
}
/**
 Map DHIS2 data elements to HIS SOCI tool attributes
**/
export const getMappings= (mappings,data)=>{
  data.events.forEach((event)=>{
    return event.dataValues.map((value)=>{
      mappings.mappings.forEach((mapping)=>{
        if(mapping.property === value.dataElement){
          value.dataElement = mapping.id;
        }
      });
      return event;
    });
  });
  return data;
}
 /**
  * Get Data store namespace key values
  *
  *
  **/
export const getDataStoreValue= async (d2, namespace, key)=>{
  let values = {};
  const nsp = await d2.dataStore.get(namespace);
  values= await getDataStoreKey(nsp,key);
  return values;
}
/**
 * Get key values from the datastore
 * @param { namespace } namespace 
 * @param {*} key 
 **/
export const getDataStoreKey=async (namespace,key)=>{
  let keyValues = {};
  const mappings = await namespace.get(key);
  keyValues= await mappings;
  return keyValues;
}
/**
 * HIS Soci Domain Schema
 */
export const hisDomainSchema  = [
  { 
    "name":"I HIS Leadership and Governance",
    "items":['me_plan','his_strategic_planning','his_policy_regulation','policy_compliance_enforcement','his_leadership_coordination','his_organization_structure_function'],
  },
  {
    "name":"II HIS Management and Workforce",
    "items":['his_competencies','his_training_education','hr_policy','his_financing_plan','resource_mobilization']
  },
  {
    "name":"III HIS Information and Communication Technologies (ICT) Infrastructure",
    "items":['reliable_power_electricity','ict_business_infrastructure','hardware','networks_internet_connectivity','business_continuity_processes_policies']
  },
  {
    "name":"IV HIS Standards and Interoperability",
    "items":['his_standard_guidelines','dataset_definitions','data_exchange_standards','master_facility_list','indicator_registry','terminology_management','unique_person_identity_management','enterprise_architecture','person_data_exchange','aggregate_data_exchange','commodity_management_data_exchange','data_security_exchange']
  },
  {
    "name":"V HIS Data Quality and Use",
    "items":['data_quality_assurance_quality_control','data_management','data_use_availability_strategy','information_data_availability','data_use_competencies','user_stakeholder_engagement','data_synthesis_communication','reporting_analytics_features','data_use_impact','data_collection_alignment_workflow','decision_support_clinical_other']
  }
]
/**
 * HIS Soci Subcomponent Schema
 */
export const hisComponentSchema  = [
  { 
    "name":"I.A HIS Strategic Plan or HIS Strategy",
    "items":['me_plan','his_strategic_planning'],
  },
  {
    "name":"I.B Policy, Legal, and Regulatory Framework, and Compliance",
    "items":['his_policy_regulation','policy_compliance_enforcement']
  },
  {
    "name":"I.C HIS Leadership and Governance Organizational Structures and Functions",
    "items":['his_leadership_coordination','his_organization_structure_function']
  },
  {
    "name":"II.A HIS Workforce Capacity and Development",
    "items":['his_competencies','his_training_education','hr_policy']
  },
  {
    "name":"II.B Financial Management",
    "items":['his_financing_plan','resource_mobilization']
  },
  {
    "name":"III.A Operations and Maintenance",
    "items":['reliable_power_electricity','ict_business_infrastructure','hardware']
  },
  {
    "name":"III.B Communication Network (LAN and WAN)",
    "items":['networks_internet_connectivity']
  },
  {
    "name":"III.C Business Continuity",
    "items":['business_continuity_processes_policies']
  },
  {
    "name":"IV.A Standards and Guidelines",
    "items":['his_standard_guidelines','dataset_definitions','data_exchange_standards']
  },
  {
    "name":"IV.B HIS Core Services",
    "items":['master_facility_list','indicator_registry','terminology_management','unique_person_identity_management','enterprise_architecture']
  },
  {
    "name":"IV.C Interoperability (Data Exchange)",
    "items":['person_data_exchange','aggregate_data_exchange','commodity_management_data_exchange','data_security_exchange']
  },
  {
    "name":"V.A Data Quality Assurance",
    "items":['data_quality_assurance_quality_control','data_management']
  },
  {
    "name":"V.B Data Use",
    "items":['data_use_availability_strategy','information_data_availability','data_use_competencies','user_stakeholder_engagement','data_synthesis_communication','reporting_analytics_features','data_use_impact','data_collection_alignment_workflow','decision_support_clinical_other']
  }
]
/**
 * HIS detailed components
 * @param {} data 
 */
export const hisDetailedSchema = [
  { 
    "key":"his_strategic_planning",
    "name":"I.A.1 HIS strategy"  
  },
  { 
    "key":"me_plan",
    "name":"I.A.2 M&E plan"
  },
  {
    "key":"his_policy_regulation",
    "name":"I.B.1 Existence of HIS policies and legislation"
  },  
  {
    "key":"policy_compliance_enforcement",
    "name":"I.B.2 Policy compliance enforcement"
  },
  {
    "key":"his_leadership_coordination",
    "name": "I.C.1 HIS leadership and coordination"
  },
  { 
    "key":"his_organization_structure_function",
    "name": "I.C.2 HIS organization structure and function"
  },
  {
    "key":"his_competencies",
    "name": "II.A.1 HIS competencies (knowledge, skills, and abilities)"
  },
  {
    "key":"his_training_education",
    "name": "II.A.2 HIS training and education (includes continuous professional development)"
  },
  {
    "key":"hr_policy",
    "name": "II.A.3 HR policy"
  },
  {
    "key":  "his_financing_plan",
    "name":  "II.B.1 HIS financing plan"
  },
  {
    "key":  "resource_mobilization",
    "name": "II.B.2 Resource mobilization"
  },
  {
    "key":  "reliable_power_electricity",
    "name":  "III.A.1 Reliable power/electricity"
  },
  {
    "key":"ict_business_infrastructure",
    "name":"III.A.2 ICT business infrastructure"
  },
  {
    "key":"hardware",
    "name":"III.A.3 Hardware"
  },
  {
    "key":"networks_internet_connectivity",
    "name":"III.B.1 Networks and Internet connectivity"
  },
  {
    "key":"business_continuity_processes_policies",
    "name":"III.C.1 Business continuity and processes and policies"
  },
  {
    "key":"his_standard_guidelines",
    "name":"IV.A.1 HIS standard guidelines"
  },
  {
    "key":"dataset_definitions",
    "name":"IV.A.2 Data set definitions (clinical and indicator)"
  },
  {
    "key":"data_exchange_standards",
    "name":"IV.A.3 Data exchange standards"
  },
  {
    "key":"master_facility_list",
    "name":"IV.B.1 Master facility list"
  },
  {
    "key":"indicator_registry",
    "name":"IV.B.2 Indicator registry"
  },
  {
    "key":"terminology_management",
    "name":"IV.B.3 Terminology management"
  },
  {
    "key":"unique_person_identity_management",
    "name":"IV.B.4 Unique person identity management"
  },
  {
    "key":"enterprise_architecture",
    "name":"IV.B.5 Enterprise architecture"
  },
  {
    "key":"person_data_exchange",
    "name":"IV.C.1 Person data exchange"
  },
  {
    "key":"aggregate_data_exchange",
    "name":"IV.C.2 Aggregate data exchange"
  },
  {
    "key":"commodity_management_data_exchange",
    "name":"IV.C.3 Commodity management data exchange"
  },
  {
    "key":"data_security_exchange",
    "name":"IV.C.4 Data security exchange"
  },
  {
    "key":"data_quality_assurance_quality_control",
    "name":"V.A.1 Data quality assurance and quality control"
  },
  {
    "key":"data_management",
    "name":"V.A.2 Data management"
  },
  {
    "key":"data_use_availability_strategy",
    "name":"V.B.1 Data use availability strategy"
  },
  {
    "key":"information_data_availability",
    "name":"V.B.2 Information/data availability"
  },
  {
    "key":"data_use_competencies",
    "name":"V.B.3 Data use competencies"
  },
  {
    "key":"user_stakeholder_engagement",
    "name":"V.B.4 User/stakeholder engagement"
  },
  {
    "key":"data_synthesis_communication",
    "name":"V.B.5 Data synthesis and communication"
  },
  {
    "key":"reporting_analytics_features",
    "name":"V.B.6 Reporting and analytics features"
  },
  {
    "key":"data_use_impact",
    "name":"V.B.7 Data use impact"
  },
  {
    "key":"data_collection_alignment_workflow",
    "name":"V.B.8 Data collection alignment with workflow"
  },
  {
    "key":"decision_support_clinical_other",
    "name":"V.B.9 Decision support (clinical or other)"
  }
]
/**
 * Create chart series
 */
export const getDataForChart=(data)=>{
  let chartSeries = { current:[],goal:[],component:{ subcurrent:[],subgoal:[]},domain:{ current:[],goal:[] } };
  if(data !== undefined){
    data.map((value)=>{
      Object.keys(value).map((keyValue)=>{
        if((keyValue !== 'background') || (keyValue !== 'tracking') || (keyValue !== 'id')){
          chartSeries.current.push({ key:keyValue, y:computeValues(value[keyValue].current) });
          chartSeries.goal.push({key:keyValue, y:computeValues(value[keyValue].future) });
         
        }
        //chartSeries.push();
        
      });
    });
  }
  chartSeries.current = computeHisLabels(chartSeries.current,hisDetailedSchema);
  chartSeries.goal = computeHisLabels(chartSeries.goal,hisDetailedSchema);
  chartSeries.component.current = computeHisComponentValues(chartSeries.current,hisComponentSchema);
  chartSeries.component.goal = computeHisComponentValues(chartSeries.goal,hisComponentSchema);
  chartSeries.domain.current = computeHisComponentValues(chartSeries.current,hisDomainSchema);
  chartSeries.domain.goal = computeHisComponentValues(chartSeries.goal,hisDomainSchema);
  return chartSeries;
}

/**
 * Create components data from sub components
 * @param {} value 
 */
export const computeHisComponentValues=(data,schemas)=>{
  let schemaData = [];
  schemas.forEach((schema)=>{
    const extractedItemData = extractData(data,schema.items);
    let acc = accumulatorSchema(extractedItemData);
    if (schema.items.length > 0){   
      const averageAcc = acc/(schema.items.length);   
      schemaData.push({ name: schema.name, y: parseFloat(averageAcc.toFixed(2))  });
    }
    else{
      schemaData.push({ name: schema.name, y: acc });
    }
  });
  return schemaData;
}
/**
 * data accumulator for each sub component
 * @param {} value 
 */
export const accumulatorSchema=(data)=>{
  return data.reduce((acc,value)=>{
    return acc + value.y;
  },0);
}
/**
 * Extract sub component data from main data
 * @param {} value 
 */
export const extractData=(data,items)=>{
  let extractedData = [];
  items.forEach((item)=>{
    data.forEach((dv)=>{
      if(dv.key === item){
        extractedData.push(dv);
      }      
    });
  });
  return extractedData;
}
/**
 * compute the values for Goal and current status
 */
export const computeValues=(value)=>{ 
  if( value === '0 = Not Applicable'){
    return 0;
  }
  else if( value ==='1 = Emerging/Ad hoc'){
    return 1;
  }
  else if( value ==='2 = Repeatable'){
    return 2;
  }
  else if( value ==='3 = Defined'){
    return 3;
  }
  else if( value ==='4 = Managed'){
    return 4
  }
  else if( value ==='5 = Optimized'){
    return 5;
  }
  else{
    return 0;
  }
}
/**
 * Compute label for different HIS components
 */
export const computeHisLabels=(data,schemas)=>{
  let schemaData = [];
  schemas.forEach((schema)=>{
    const schemaDataValue = filterSchemaData(data,schema.key);
    if (schemaDataValue.length > 0){
      schemaData.push({ key: schema.key, name: schema.name, y: schemaDataValue[0].y });
    }
    else{
      schemaData.push({ key: schema.key, name: schema.name, y: 0 });
    }
  });    
  return schemaData;
}
/**
 * Filter data by key 
 */
export const filterSchemaData=(data,keySchema)=>{
  return data.filter((dv)=>{
    return (dv.key === keySchema);
  });
}