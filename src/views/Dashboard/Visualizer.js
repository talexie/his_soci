import React, { useState, useMemo, useEffect, useCallback, useContext } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button,
  Grid,
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { UrlContext } from '../../App';

import { LineChart, Chart, changeChartType,addChartSeries, getDataStoreValue, getDataForChart, UserButton, MultiFilter } from 'components';
import { setOptions } from 'highcharts';

const useStyles = makeStyles(() => ({
  root: {},
  chartContainer: {
    height: 400,
    position: 'relative'
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));
const HSVisualizer = ({ className, ...rest }) => {
  const urlContextValue = useContext(UrlContext);
  const d2 = urlContextValue.d2;
  const classes = useStyles();
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
  const initGoalOptions = {
      chart: {
        type: 'line',
        polar: true,
      },
      title: {
        text: 'HIS Goal Status',
        margin: 60
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
        max: 10,
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
      credits:{
        enabled:false,
      },
      legend: {
          align: 'right',
          verticalAlign: 'bottom',
          backgroundColor: '#FCFFC5',
          borderColor: '#C98657',
          borderWidth: 1
      },
      series: [
        {
          type: 'line',
          pointPlacement: 'on',
          name: 'HIS Goal Status',
          data: [
            {
              name:'HIS Strategy',
              y:0
            },
            {
              name:'Business Continuity',
              y:0
            },
            {
              name:'Data Use',
              y:0
            },
            {
              name:'Standards and Guidelines',
              y:0
            }
          ],
        }
      ]
    };
  
  const filters = ['line','column','area','polar','spline'];
  const [voptions,setVOptions] = useState({ current: initOptions, goal: initGoalOptions });
  const [subOptions, setSubOptions] = useState({subcurrent: initOptions, subgoal: initOptions });
  const [goalOptions, setGoalOptions] = useState({options: initGoalOptions});
  const [type, setType]= useState('line');
  const [data, setData] = useState({});
  const [title, setTitle] = useState('');
  const [updated, setUpdated] = useState(false);
  const description = "";


  const getFilter =useCallback((ev)=>{
    if(ev !== undefined){
      if(ev.length > 0 && ev.isArray){
      
        if (type !== ev[0]) {
          // Row changed since last render. Update isScrollingDown.
          setType(ev[0] !== null && type > ev[0]);
        }
      }
      else{
        setType(ev);
      }
    }

  },[]);
  /**
   * 
   * @param {*} ev 
   */
  const updateChart=event=>{
    if (type) {
      setUpdated(true);
    }
    setUpdated(false);
    event.preventDefault();
  }
    /**
   * handleChange for chart re-drawing
   */
  const vdrawCurrentChart=async(ev)=>{
    setData({});
    getFilter(ev);
    //updateChart(ev);
    setCurrentChartOptions();
  }
  const drawGoalChart=async(ev)=>{
    setData({});
    getFilter(ev);
    setGoalChartOptions();
  }
  const setCurrentChartOptions=async()=>{
    const assessments = await getDataStoreValue(d2,'his_soci_tool','assessments');
    const assessmentsSeries = getDataForChart([assessments.assessments[0]]); 
    console.log("assess",assessmentsSeries);
    const currentStatusSeries = createHisSociChart(assessmentsSeries.current,"HIS Current Status");
    const goalStatusSeries = createHisSociChart(assessmentsSeries.goal,"HIS Goal Status");
    const subCurrentStatusSeries = createHisSociChart(assessmentsSeries.component.current,"HIS Current Subcomponents");
    const subGoalStatusSeries = createHisSociChart(assessmentsSeries.component.goal,"HIS Goal Subcomponents");
    const updatedOptions = addChartSeries(initOptions,currentStatusSeries,false);
    const updatedSubOptions = addChartSeries(initOptions,subCurrentStatusSeries,false);
    setVOptions(()=>{
      return {
        current: addChartSeries(updatedOptions,goalStatusSeries,true)
      };
    });
    setSubOptions( () => {
      return {
        subcurrent: addChartSeries(updatedSubOptions,subGoalStatusSeries,true)
      };
    });
    return;
  }
  const setGoalChartOptions=async()=>{
    const assessments = await getDataStoreValue(d2,'his_soci_tool','assessments');
    const assessmentsSeries = getDataForChart([assessments.assessments[0]]); 
    const currentStatusSeries = createHisSociChart(assessmentsSeries.component.current,"HIS Current Subcomponents");
    const goalStatusSeries = createHisSociChart(assessmentsSeries.component.goal,"HIS Goal Subcomponents");
    /*setGoalOptions( (prevGoalOptions)=>{
      return { 
        ...prevGoalOptions,
        options: addChartSeries(goalOptions.options,currentStatusSeries,false)
      };
    });*/

    return;
  }
  /**
   * create his_soci chart
   */
  const createHisSociChart=(data,name)=>{
    const hisSociChart = {
      type: 'line',
      pointPlacement: 'on',
      name: name,
      data: data
    }
    return hisSociChart;
  }
  useEffect((ev)=>{
    console.log("veffect");
    vdrawCurrentChart(ev);
  },[]);
  return (
    <div>
      <Grid container spacing={2} direction="row" justify="space-around" alignItems="center">
        <Grid item lg={6} xs={12} md={6} xl={6}>
          <Card className={clsx(classes.root, className)}>
            <CardHeader
              action={
                <>
                <MultiFilter label={'Chart Type' } data={ filters } getData={ getFilter} />
                <UserButton color="primary" variant="text" value="Update" getFormData={ vdrawCurrentChart }
                />
                </>
              }
              title={ "HIS Current Status" }
            />
            <Divider />
            <CardContent>
              <Chart data = { data } options= { voptions.current }  title={ "HIS Current Status" } type={ type}/>
            </CardContent>
            <Divider />
            <CardActions>
              <div>{ description }</div>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={6} xs={12} md={6} xl={6}>
          <Card className={clsx(classes.root, className)}>
            <CardHeader
              action={
                <>
                <MultiFilter label={'Chart Type' } data={ filters } getData={ getFilter} />
                <UserButton color="primary" variant="text" value="Update" getFormData={ vdrawCurrentChart }
                />
                </>
              }
              title={ "HIS Subcomponents" }
            />
            <Divider />
            <CardContent>
              <Chart data = { data } type="line" options= { subOptions.subcurrent }  title={ "HIS Subcomponents" } type={ type}/>
            </CardContent>
            <Divider />
            <CardActions>
              <div>{ description }</div>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

HSVisualizer.propTypes = {
  className: PropTypes.string
};

export default HSVisualizer;
