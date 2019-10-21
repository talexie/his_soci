import { Grid, Hidden, Tooltip } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/styles';

import React, { useCallback, useState } from 'react';

import { HisJsonForm, UserButton, SimpleTable } from 'components';
import uuid from 'uuid/v1';
import {
  JsonFormsDispatch,
  JsonFormsStateContext,
} from '@jsonforms/react';
import { Resolve, } from '@jsonforms/core';

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
    errors,
    addItem,
    path,
    data,
    schema,
    uischema,
    createDefault,
    renderers,
    childPath,
    foundUISchema,
    props,
    ctx,
  }) => {
    let tableAddData:any = [];
    let pdata:any = [];
    const classes = useStyles();
    const initalData = (path, createDefault());
    const [create,setCreate] = useState(false);
    const getData =(dataSaved)=>{
      pdata = dataSaved;
      console.log("sdata",pdata);
      return data;
    }
    const addData = (event) => {
      tableAddData.push(pdata.data);
      console.log("addData",tableAddData);
      setCreate(false);
    };
    const addItemCb = useCallback((p: string, value: any) => {
      setCreate(true);

      console.log("call2",path);


    }, [addItem,create]);
    const columns = [{'title':'id','field':'id'},{'title':'source','field':'source'}]
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
                  >
                    <IconButton
                      aria-label={`Add to ${label}`}
                      onClick={ addItemCb }
                    >
                      <AddIcon />
                    </IconButton>
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
