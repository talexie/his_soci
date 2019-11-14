import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {
  HSVisualizer,
  HSTabular,
  HSTasksProgress,
  HSAssessmentCompletion,
  HSTotalAssessments
} from '.';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

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
            <HSAssessmentCompletion/>
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <HSTotalAssessments/>
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <HSTasksProgress/>
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
              <HSVisualizer/>
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
               <HSTabular/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
