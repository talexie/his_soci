import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  button: {
    height: '42px',
    display: 'row',
    alignItems: 'center',
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  spacer: {
    flexGrow: 1
  },
  title:{
    alignItems: 'center',
    marginLeft: theme.spacing(13)
  }
}));

const UserButton = ({ disabled, value,color,variant,component,to, getFormData=()=>{},children }) => {
  const classes = useStyles();
  return (
    <Button className={ classes.button}
      disabled = { disabled }
      color={ color }
      variant={ variant }
      component = { component }
      to = { to }
      onClick={ getFormData }

    >
      { value }
    </Button>
  );
};
export default UserButton;
