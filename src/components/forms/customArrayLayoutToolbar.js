import { Grid, Tooltip } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/styles';

import React, { useCallback, useState } from 'react';

import { UserButton } from 'components';
import { merge } from 'lodash/merge';
import {
  JsonFormsDispatch,
} from '@jsonforms/react';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

export const CustomArrayLayoutToolbar = React.memo(
  ({
    label,
    addItem,
    path,
    data,
    schema,
    uischema,
    createDefault,
    renderers,
    childPath,
    foundUISchema,
    config,
  }) => {
    let tableAddData = [];
    let pdata = [];
    const classes = useStyles();
    const initalData = (path, createDefault());
    const [create,setCreate] = useState(false);
    const appliedUiSchemaOptions = merge(
      {},
      config,
      uischema.options
    );
    const readOnly = schema.readOnly  || appliedUiSchemaOptions.readOnly;
    const getData =(dataSaved)=>{
      pdata = dataSaved;
      return data;
    }
    const addData = (event) => {
      tableAddData.push(pdata.data);
      setCreate(false);
    };
    const addItemCb = useCallback((p, value) => {
      setCreate(true);
    }, []);
    return (
      <>
        <Toolbar>
          <Grid container alignItems='center' justify='space-between'>
            <Grid item>
              <Typography variant={'h6'}>{label}</Typography>
            </Grid>
            <Grid item>
              <Grid container>
                <Grid item>
                  <Tooltip
                    id='tooltip-add'
                    title={`Add to ${label}`}
                    placement='bottom'
                    disableFocusListener = { readOnly }
                    disableHoverListener = { readOnly }
                    disableTouchListener = { readOnly }
                  >
                    <span>
                      <IconButton
                        aria-label={`Add to ${label}`}
                        onClick={ addItemCb }
                        disabled = { readOnly }
                      >
                        <AddIcon />
                      </IconButton>
                    </span>
                  </Tooltip>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
        <div className={classes.root}>
          { create?
            (
            <>
              <JsonFormsDispatch
                schema={ schema }
                uischema={foundUISchema}
                path={childPath}
                key={childPath}
                renderers={renderers}
              />
              <UserButton color="primary" variant="contained" value={ 'edit'+ label } getFormData={ (ev)=>addData(ev) }/>
            </>
              )
              :
            (
              <p>No data</p>
            )
          }

        </div>

      </>
    );
  }
);
