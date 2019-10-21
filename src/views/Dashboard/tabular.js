import React, { useState } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Button,
  Divider,
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import { StatusBullet, SimpleTable, ENGINE_ROOT_API } from 'components';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 800
  },
  statusContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  status: {
    marginRight: theme.spacing(1)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const statusColors = {
  delivered: 'success',
  pending: 'info',
  refunded: 'danger'
};

const HSTabular = props => {
  const { className,baseUrl, ...rest } = props;


  const classes = useStyles();

  const [orders] = useState([]);
      let url =`${ENGINE_ROOT_API}lrs?dataType=json&serviceType=lrs`;
      let authString = `admin:district`;
      let headers = new Headers();
      headers.set('Authorization', 'Basic ' + btoa(authString));
      let data = [];
    const columns = [{'title':'Name','field':'name'},{'title':'ID','field':'id'}];

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        action={
          <Button
            color="primary"
            size="small"
            variant="outlined"
          >
            New entry
          </Button>
        }
        title="Location"
      />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <SimpleTable data={ data } url={ url} headers={headers} columns={columns} title={'Results'}/>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button
          color="primary"
          size="small"
          variant="text"
        >
          View all <ArrowRightIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

HSTabular.propTypes = {
  className: PropTypes.string
};

export default HSTabular;
