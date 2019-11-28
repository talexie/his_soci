import React, { useState, useEffect, useCallback, useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {
  HSVisualizer,
  HSTabular,
  HSTasksProgress,
  HSAssessmentCompletion,
  HSTotalAssessments
} from '.';
import { UrlContext } from '../../App';

import {  createHisSociChart, generateTable,hisComponentSchema, hisDomainSchema,filterAssessment,getUserDataStoreValue,changeChartTitle, changeChartType,addChartSeries, getDataStoreValue, getDataForChart, } from 'components';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  const urlContextValue = useContext(UrlContext);
  const d2 = urlContextValue.d2;
  const initOptions = {
    chart: {
      type: 'line',
      polar: true,
    },
    title: {
      text: 'HIS Current Status versus HIS Goal Status',
      margin: 20
    },
    subtitle: {
      text: '',
    },
    pane: {
      size: '80%',
    },
    xAxis: {
      type:'category',
      tickmarkPlacement: 'on',
      lineWidth: 0
    },
    yAxis: {
      gridLineInterpolation: 'polygon',
      min: 0,
      max: 5,
    },
    plotOptions: {
      series: {
        pointStart: 0,
        pointInterval: 90
      },
      column: {
        pointPadding: 0,
        groupPadding: 0
      }
    },
    tooltip: {
      shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
    },
    exporting:{
      enabled: true,
    },
    credits:{
      enabled: false,
    },
    legend: {
        align: 'right',
        verticalAlign: 'bottom',
        margin: 16
    },
    series: [],
    caption: {
      text:""
    }
  };
  const [assessment,setAssessment] = useState({ assessments: {} });
  const [voptions,setVOptions] = useState({ current: initOptions, table: initOptions });
  const [subOptions, setSubOptions] = useState({subcurrent: initOptions, subTable: initOptions });
  const [domainOptions, setDomainOptions] = useState({domainCurrent: initOptions, domainTable: initOptions });
  const [progress,setProgress] = useState({ value:0,total: [],completed:[]});
  /**
   * Handle Change for chart re-drawing
   */
  const drawChart=async(ev)=>{
    setChartOptions();
  }
  const getTotalAssessments = (assessments,location, period)=>{
    return assessments.filter((assess)=>{
      if (assess.tracking !== undefined){
        return ((assess.tracking.location === location) && (assess.tracking.period === period));
      }
      else{
        return false;
      }
    });
  }
  const getCompletedAssessments = (assessments,location, period,status)=>{
    return assessments.filter((assess)=>{
      if (assess.tracking !== undefined){
        return ((assess.tracking.location === location) && (assess.tracking.period === period) && (assess.tracking.status ===status));
      }
      else{
        return false;
      }
    });
  }
  const getProgress = (assessment)=>{
    let progress = 0;
    if (assessment.tracking !== undefined){
      if(assessment.tracking.status === 'STARTED'){
        progress = 50;
      }
      else if(assessment.tracking.status === 'COMPLETED'){
        progress = 100;
      }
      else{
        progress = 0;
      }
    }
    return progress;
  }
  const setChartOptions=async()=>{
    const assessments = await getDataStoreValue(d2,'his_soci_tool','assessments');
    const userStore = await getUserDataStoreValue(d2,'his_soci_tool','assessments');
    let userAssessment = []
    if(userStore.current[0] !== undefined){
      userAssessment = filterAssessment(assessments.assessments,userStore.current[0].id);
    }  
    const assessmentsSeries = getDataForChart(userAssessment);
    const tableAssessments = generateTable(assessmentsSeries,hisComponentSchema, hisDomainSchema);
    const currentStatusSeries = createHisSociChart(assessmentsSeries.current,"HIS Current Status",'line');
    const goalStatusSeries = createHisSociChart(assessmentsSeries.goal,"HIS Goal Status",'line');
    const subCurrentStatusSeries = createHisSociChart(assessmentsSeries.component.current,"HIS Current Subcomponents",'line');
    const subGoalStatusSeries = createHisSociChart(assessmentsSeries.component.goal,"HIS Goal Subcomponents",'line');
    const domainCurrentStatusSeries = createHisSociChart(assessmentsSeries.domain.current,"HIS Current Domains",'line');
    const domainGoalStatusSeries = createHisSociChart(assessmentsSeries.domain.goal,"HIS Goal Domains",'line');    
    const updatedOptions = addChartSeries(changeChartTitle(initOptions,'HIS Current versus Goal Status Breakdown'),currentStatusSeries,false);
    const updatedSubOptions = addChartSeries(changeChartTitle(initOptions,'HIS Current versus Goal Components'),subCurrentStatusSeries,false);
    const updatedDomainOptions = addChartSeries(changeChartTitle(initOptions,'HIS Current versus Goal Domains'),domainCurrentStatusSeries,false);
    
    // Column charts
    const currentStatusSeriesTable = createHisSociChart(assessmentsSeries.current,"HIS Current Status",'column');
    const goalStatusSeriesTable = createHisSociChart(assessmentsSeries.goal,"HIS Goal Status",'column');
    const updatedOptionsTable = addChartSeries(changeChartTitle(initOptions,'HIS Current versus Goal Status Breakdown'),currentStatusSeriesTable,false);
    
    const subCurrentStatusSeriesTable = createHisSociChart(assessmentsSeries.component.current,"HIS Current Subcomponents",'column');
    const subGoalStatusSeriesTable = createHisSociChart(assessmentsSeries.component.goal,"HIS Goal Subcomponents",'column');
    const updatedSubOptionsTable = addChartSeries(changeChartTitle(initOptions,'HIS Current versus Goal Components'),subCurrentStatusSeriesTable,false);
    
    const domainCurrentStatusSeriesTable = createHisSociChart(assessmentsSeries.domain.current,"HIS Current Domains",'column');
    const domainGoalStatusSeriesTable = createHisSociChart(assessmentsSeries.domain.goal,"HIS Goal Domains",'column');
    const updatedDomainOptionsTable = addChartSeries(changeChartTitle(initOptions,'HIS Current versus Goal Domains'),domainCurrentStatusSeriesTable,false);

    setAssessment(()=>{
      return {
        assessments: assessmentsSeries
      };
    });
    setVOptions(()=>{
      return {
        current: addChartSeries(updatedOptions,goalStatusSeries,true),
        table: addChartSeries(changeChartType(updatedOptionsTable,'column'),goalStatusSeriesTable,true)
      };
    });
    setSubOptions( () => {
      return {
        subcurrent: addChartSeries(updatedSubOptions,subGoalStatusSeries,true),
        subTable: addChartSeries(changeChartType(updatedSubOptionsTable,'column'),subGoalStatusSeriesTable,true),
      };
    });
    setDomainOptions( (prevDomainOptions) => {
      return {
        ...prevDomainOptions,
        domainCurrent: addChartSeries(updatedDomainOptions,domainGoalStatusSeries,true),
        domainTable: addChartSeries(changeChartType(updatedDomainOptionsTable,'column'),domainGoalStatusSeriesTable,true),
      };
    });
    setProgress(()=>{
      return {
        total: getTotalAssessments(assessments.assessments,userStore.current[0].location, userStore.current[0].period),
        value: getProgress(userAssessment),
        completed:  getTotalAssessments(assessments.assessments,userStore.current[0].location, userStore.current[0].period,'COMPLETED')
      }      
    })
    return;
  }
  useEffect((ev)=>{
    console.log("Dashboard loaded.");
    drawChart(ev);
  },[]);
  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item container spacing={4}>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <HSAssessmentCompletion completed ={  progress.completed.length } />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <HSTotalAssessments total={ progress.total.length } />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <HSTasksProgress progressValue = { progress.value } />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            Percentage Completion
          </Grid>
        </Grid>
        <Grid item container direction="column" spacing={4}>
          <Grid item container spacing={4}>
            <Grid
              item
              lg={12}
              md={12}
              xl={12}
              xs={12}
            >
              <HSVisualizer hisDomains={ domainOptions.domainCurrent } hisComponents={ subOptions.subcurrent } hisSubComponents= { voptions.current} />
            </Grid>
          </Grid>
          <Grid item container spacing={4}>
            <Grid
              item
              lg={12}
              md={12}
              xl={12}
              xs={12}
            >
               <HSTabular hisDomainsTable={ domainOptions.domainTable } hisComponentsTable={ subOptions.subTable } hisSubComponentsTable= { voptions.table} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
