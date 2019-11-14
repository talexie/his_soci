import React, { useState, useMemo, useEffect, useCallback } from 'react';
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

import { LineChart, Chart, changeChartType,addChartSeries, UserButton, MultiFilter } from 'components';

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
  const classes = useStyles();
  const initOptions = {
      chart: {
        type: 'polar',
        polar: true,
      },
      title: {
        text: 'HIS Current Status'
      },
      pane: {
        startAngle: 0,
        endAngle: 360
      },
      xAxis: {
        tickInterval: 90,
        min: 0,
        max: 360,
        labels: {
          format: '{value}°'
        }
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
          type: 'area',
          name: 'c1',
          data: [7.15, 10,  9.85, 8.81],
        },
        {
          type: 'line',
          name: 'c2',
          data: [4.65, 3.16, 4.30, 4.48],
        },
        {
          type: 'line',
          name: 'Fair Value',
          data: [4.77,6.67, 6.57, 5.87],
        }
      ]
    };
  const filters = ['line','column','area','polar','spline'];
  const [options, setOptions] = useState(initOptions);
  const [type, setType]= useState('line');
  const [data, setData] = useState({});
  const [title, setTitle] = useState('');
  const description = "";
  const handleChange=()=>{
    setData({});
  }
  const getFilter =useCallback((ev)=>{
    if(ev.length > 0 && ev.isArray){
      setType(ev[0]);
    }
    else{
      setType(ev);
    }
  },[]);
  useEffect(()=>{
    setOptions(changeChartType(options,type));
    setOptions(addChartSeries(options,data));
  },[type,options,data]);
  return (
    <div>
      <Grid container spacing={2} direction="row" justify="space-around" alignItems="center">
        <Grid item lg={6} xs={12} md={6} xl={6}>
          <Card className={clsx(classes.root, className)}>
            <CardHeader
              action={
                <>
                <MultiFilter label={'Chart Type' } data={ filters } getData={ getFilter} />
                <UserButton color="primary" variant="text" value="Update" getFormData={ handleChange }
                />
                </>
              }
              title={ "HIS Current Status" }
            />
            <Divider />
            <CardContent>
              <Chart data = { data } options= { options }  title={ "HIS Current Status" } type={ type}/>
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
                <UserButton color="primary" variant="text" value="Update" getFormData={ handleChange }
                />
                </>
              }
              title={ "HIS Goal Status" }
            />
            <Divider />
            <CardContent>
              <Chart data = { data } options= { options }  title={ "HIS Goal Status" } type={ type}/>
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
