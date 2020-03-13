import React, { useContext, useState } from 'react';
import Hidden from '@material-ui/core/Hidden';
import {
  rankWith,
  optionIs,
  isEnumControl,
  and
} from '@jsonforms/core';
import merge from 'lodash/merge';
import isNull from 'lodash/isNull';
import AvailableOrganisationUnitsTree from './AvailableDhis2OrgUnit';

import { UrlContext } from '../../App';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/styles';
import { CustomSelectControl } from './customSelectControl';
import { Grid } from '@material-ui/core';
import { withJsonFormsControlProps } from '@jsonforms/react';


const useStyles = makeStyles(theme => ({
    container: {
      padding: '1em',
      width: '100px',
      marginTop: '43px'
    },
    root: {
      maxWidth: '150px',
      textOverflow: 'ellipsis',
      maxHeight: '45px'
    },
    card: {
        margin: 16,
        width: 370,
        float: 'left',
        transition: 'all 175ms ease-out',
    },
    cardText: {
        paddingTop: 0,
    },
    cardHeader: {
        padding: '0 16px 16px',
        margin: '16px -16px',
        borderBottom: '1px solid #eeeeee',
    },
    scroll:{

    },	
    customLabel: {
      fontStyle: 'italic',
      fontSize: '10px'
    },
    customLabelSelected: {
      color: 'blue',
      weight: 900,
    },
  })
);

const checkSelectControl = and(optionIs('locationSelector',true),isEnumControl);

/**
 * Default tester for custom select controls.
 * @type {RankedTester}
 */
export const CustomSelectOrgUnitControlTester =
  rankWith(Number.MAX_VALUE, checkSelectControl );


export const CustomSelectOrgUnitControl = (props) => {
  const {
    uischema,
    path,
    handleChange,
    config,
    label,
    visible,
  } = props;
  const urlContextValue = useContext(UrlContext);
  const d2 = urlContextValue.d2;
  const appliedUiSchemaOptions = merge({}, config, uischema.options);
  const onChange =(ev) => {
    update(props,'data',ev.target?ev.target.value:ev.displayName)
    handleChange(path, ev.target?ev.target.value:ev.displayName);    
  }
  const classes = useStyles();
  const [open, setOpen] = useState(false)
  const pickOrgUnit= (e) => {
    onChange(e);     
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Hidden xsUp={!visible}>
      <Grid container spacing= { 1 }>
        <Grid item>
          <CustomSelectControl { ...props} d2= { d2 } className={ classes.root}/>
        </Grid> 
          {
            appliedUiSchemaOptions.locationSelector && (!isNull(d2) || d2 !== undefined)?(
            <Grid item className={ classes.container }>
                <Button className={ classes.customLabel } variant="outlined" color="primary" onClick={handleClickOpen}>
                  Choose { label }
                </Button>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="max-width-dialog-title"
                >
                  <DialogTitle id="max-width-dialog-title">Choose { label }</DialogTitle>
                  <DialogContent>
                    <div className={classes.card}>
                      <AvailableOrganisationUnitsTree d2={ d2 } onChange={ pickOrgUnit }/>
                    </div>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="primary">
                      Close
                    </Button>
                  </DialogActions>
                </Dialog>
            </Grid>
            ):null
          }
          
      </Grid>
    </Hidden>
  )
}
export default withJsonFormsControlProps(CustomSelectOrgUnitControl);