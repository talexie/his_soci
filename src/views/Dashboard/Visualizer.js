import React, { useState, useEffect, useCallback, useContext } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Hidden
} from '@material-ui/core';

import { UrlContext } from '../../App';

import {  Chart, UserButton, MultiFilter, changeChartType } from 'components';

const useStyles = makeStyles(() => ({
  root: {},
  chartContainer: {
    height: 400,
    position: 'relative'
  },
  chartDetailedContainer: {
    height: 600,
    position: 'relative'
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));
const HSVisualizer = ({ hisDomains, hisComponents,hisSubComponents, className, ...rest }) => {
  const urlContextValue = useContext(UrlContext);
  const d2 = urlContextValue.d2;
  const classes = useStyles();
  const filters = ['line','column','area','polar'];
  const [type, setType]= useState('line');
  const description = "";
  const domainChartOptions = changeChartType(hisDomains,'polar');

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
   * handleChange for chart re-drawing
   */
  const drawChart=async(ev)=>{
    getFilter(ev);
  }
  useEffect((ev)=>{
    drawChart(ev);
  },[hisDomains,hisSubComponents,hisComponents]);
  return (
    <div>
      <Grid container spacing={2} direction="column" justify="space-around" alignItems="center">
        <Grid item container spacing={2} direction="row" justify="space-around" alignItems="center">
          <Grid item lg={6} xs={12} md={6} xl={6}>
            <Card className={clsx(classes.root, className)}>
              <CardHeader
                action={
                  <Grid container>
                    <Grid item>
                      <MultiFilter label={'Chart Type' } data={ filters } getData={ getFilter} />
                    </Grid>
                    <Grid item>
                      <UserButton color="primary" variant="text" value="Update" getFormData={ drawChart }/>
                    </Grid>                 
                  </Grid>
                }
                title={ "HIS Domains" }
              />
              <Divider />
              <CardContent>
                <Chart options= { domainChartOptions } />
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
                  <Grid container>
                    <Grid item>
                      <MultiFilter label={'Chart Type' } data={ filters } getData={ getFilter} />
                    </Grid>
                    <Grid item>
                      <UserButton color="primary" variant="text" value="Update" getFormData={ drawChart }/>
                    </Grid>                 
                  </Grid>
                }
                title={ "HIS Subcomponents" }
              />
              <Divider />
              <CardContent>
                <Chart  options= { hisComponents }/>
              </CardContent>
              <Divider />
              <CardActions>
                <div>{ description }</div>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Hidden xsUp={ true }>
          <Grid item container spacing={2} direction="row" justify="space-around" alignItems="center">
            <Grid item lg={12} xs={12} md={12} xl={12}>
              <Card className={clsx(classes.chartDetailedContainer, className)}>
                <CardHeader
                  action={
                    <Grid container>
                      <Grid item>
                        <MultiFilter label={'Chart Type' } data={ filters } getData={ getFilter} />
                      </Grid>
                      <Grid item>
                        <UserButton color="primary" variant="text" value="Update" getFormData={ drawChart }/>
                      </Grid>                 
                    </Grid>
                  }
                  title={ "HIS Current Status Breakdown" }
                />
                <Divider />
                <CardContent>
                  <Chart options= { hisSubComponents } />
                </CardContent>
                <Divider />
                <CardActions>
                  <div>{ description }</div>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
};

HSVisualizer.propTypes = {
  className: PropTypes.string
};

export default HSVisualizer;
