import React, { useState, useMemo, useEffect, useCallback, useContext,useReducer } from 'react';
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

import { Chart, changeChartType,addChartSeries,getDataStoreValue, getDataForChart, UserButton, MultiFilter } from 'components';

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
const HSTabular = ({ className, ...rest }) => {
  const urlContextValue = useContext(UrlContext);
  const d2 = urlContextValue.d2;
  const classes = useStyles();
  const initOptions = {
      chart: {
        type: 'column',
        polar: false,
      },
      title: {
        text: 'HIS Current Status'
      },
      pane: {
        startAngle: 0,
        endAngle: 360
      },
      xAxis: {
        type:'category',
      },
      yAxis: {
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
      series: [
        {
          type: 'column',
          colorByPoint: true,
          name: 'Domains',
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
  const initGoalOptions = {
      chart: {
        type: 'column',
        polar: false,
      },
      title: {
        text: 'HIS Goal Status'
      },
      pane: {
        startAngle: 0,
        endAngle: 360
      },
      xAxis: {
        type:'category',
      },
      yAxis: {
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
      series: [
        {
          type: 'column',
          colorByPoint: true,
          name: 'Domains',
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
  const [options, setOptions] = useState(initOptions);
  const [goalOptions, setGoalOptions] = useState(initGoalOptions);
  const [type, setType]= useState('column');
  const [data, setData] = useState({});
  const [title, setTitle] = useState('');
  const description = "";
  const reducer=(state, action)=>{
    switch (action.type) {
      case 'current':
        return { options: setCurrentChartOptions()};
      case 'goal':
        return {goalOptions: state.goalOptions};
      default:
        throw new Error();
    }
  }
  const [state, dispatch] = useReducer(reducer, { options:initOptions});

  const getFilter =useCallback((ev)=>{
    if(ev.length > 0 && ev.isArray){
      
      if (type !== ev[0]) {
        // Row changed since last render. Update isScrollingDown.
        setType(ev[0] !== null && type > ev[0]);
        //setOptions(options);
      }
    }
    else{
      setType(ev);
    }
  },[]);
    /**
   * handleChange for chart re-drawing
   */
  const drawCurrentChart=(ev)=>{
    setData({});
    getFilter(ev);
    setOptions(state.options);
    //setCurrentChartOptions();
    return ()=> dispatch({type: 'current'});
  }
  const drawGoalChart=async(ev)=>{
    setData({});
    getFilter(ev);
  }
  const setCurrentChartOptions=async()=>{
    const assessments = await getDataStoreValue(d2,'his_soci_tool','assessments');
    const assessmentsSeries = getDataForChart([assessments.assessments[0]]); 
    const currentStatusSeries = createHisSociChart(assessmentsSeries.current);
    setOptions(addChartSeries(options,currentStatusSeries,false));
    return addChartSeries(options,currentStatusSeries,false);
  }
  const setGoalChartOptions=async()=>{
    const assessments = await getDataStoreValue(d2,'his_soci_tool','assessments');
    const assessmentsSeries = getDataForChart([assessments.assessments[0]]); 
    const currentStatusSeries = createHisSociChart(assessmentsSeries.goal);
    //setGoalOptions(addChartSeries(goalOptions,currentStatusSeries,false));
    return;
  }
  /**
   * create his_soci chart
   */
  const createHisSociChart=(data)=>{
    const hisSociChart = {
      type: 'column',
      colorByPoint: true,
      name: 'Domains',
      data: data
    }
    return hisSociChart;
  }
  /*useEffect(()=>{
    console.log("effect");
    setCurrentChartOptions();
    setGoalChartOptions();
    //setOptions(changeChartType(options,type));
    //setOptions(addChartSeries(options,data));
  },[drawCurrentChart]);*/
  console.log("state",state.options);
  return (
    <div>
      <Grid container spacing={2} direction="row" justify="space-around" alignItems="center">
        <Grid item lg={6} xs={12} md={6} xl={6}>
          <Card className={clsx(classes.root, className)}>
            <CardHeader
              action={
                <>
                <MultiFilter label={'Chart Type' } data={ filters } getData={ getFilter} />
                <UserButton color="primary" variant="text" value="Update" getFormData={ drawCurrentChart }
                />
                </>
              }
              title={ "HIS-Current Status Breakdown" }
            />
            <Divider />
            <CardContent>
              <Chart data = { data } options= { state.options }  title={ "HIS- Current Status Breakdown" } type={ type}/>
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
                <UserButton color="primary" variant="text" value="Update" getFormData={  (ev)=>drawGoalChart(ev)  }
                />
                </>
              }
              title={ "HIS-Goal Status Breakdown " }
            />
            <Divider />
            <CardContent>
              <Chart data = { data } options= { goalOptions }  title={ "HIS- Goal Status Breakdown" } type={ type}/>
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

HSTabular.propTypes = {
  className: PropTypes.string
};

export default HSTabular;
