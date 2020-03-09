import React, { useState,useCallback, } from 'react';
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
  Hidden,
} from '@material-ui/core';

import {  Chart,UserButton, MultiFilter } from 'components';

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
const HSTabular = ({ hisDomainsTable, hisComponentsTable, hisSubComponentsTable,className, ...rest }) => {
  const classes = useStyles();

  const filters = ['line','column','area','polar','spline'];
  const [type, setType]= useState({ doptions: {}});
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
        setType(ev=> { return ev }  );
      }
    }

  },[type]);
    /**
   * handleChange for chart re-drawing
   */
  const drawTable=async(ev)=>{
    // Re-draw
  }

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
                      <UserButton color="primary" variant="text" value="Update" getFormData={ drawTable }/>
                    </Grid>                 
                  </Grid>
                }
                title={ "HIS Domains" }
              />
              <Divider />
              <CardContent>
                <Chart options= { hisDomainsTable } type={ type } />
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
                      <UserButton color="primary" variant="text" value="Update" getFormData={ drawTable }/>
                    </Grid>                 
                  </Grid>
                }
                title={ "HIS Subcomponents" }
              />
              <Divider />
              <CardContent>
                <Chart options= { hisComponentsTable } />
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
              <Card className={clsx(classes.root, className)}>
                <CardHeader
                  action={
                    <Grid container>
                      <Grid item>
                        <MultiFilter label={'Chart Type' } data={ filters } getData={ getFilter} />
                      </Grid>
                      <Grid item>
                        <UserButton color="primary" variant="text" value="Update" getFormData={ drawTable }/>
                      </Grid>                 
                    </Grid>
                  }
                  title={ "HIS Current Status Breakdown" }
                />
                <Divider />
                <CardContent>
                  <Chart options= { hisSubComponentsTable } />
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


HSTabular.propTypes = {
  className: PropTypes.string
};

export default HSTabular;
