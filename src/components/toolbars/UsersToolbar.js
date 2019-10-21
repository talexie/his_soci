import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';

import { SearchInput, UserButton } from 'components';

const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  searchInput: {
    marginRight: theme.spacing(1)
  },
  title:{
    alignItems: 'center',
    marginLeft: theme.spacing(13)
  }
}));

const UsersToolbar = props => {
  const { className,title,item,placeholder,getItem, ...rest } = props;

  const classes = useStyles();
  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.row}>
        <span className={classes.title} ><h2> { title } </h2></span>
        <span className={classes.spacer} />
        <UserButton value="Import" />
        <UserButton value="Export" />
        <UserButton color="primary" variant="contained" value={ item }/>
      </div>
      <div className={classes.row}>
        <SearchInput
          className={classes.searchInput}
          placeholder={ placeholder }
        />
      </div>
    </div>
  );
};

UsersToolbar.propTypes = {
  className: PropTypes.string
};

export default UsersToolbar;
