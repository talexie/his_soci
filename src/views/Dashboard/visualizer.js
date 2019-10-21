import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import { LineChart } from 'components';

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
const title="Results";
const chartType = 'pie';
const HSVisualizer = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <LineChart title= { title } charttype= { chartType }/>
  );
};

HSVisualizer.propTypes = {
  className: PropTypes.string
};

export default HSVisualizer;
