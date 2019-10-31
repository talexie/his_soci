import find from 'lodash/find';
import map from 'lodash/map';
import merge from 'lodash/merge';
import React from 'react';
import { ArrayControlProps, composePaths,findUISchema } from '@jsonforms/core';
import { ResolvedJsonForms, JsonFormsDispatch,} from '@jsonforms/react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import { Grid, Hidden, Tooltip } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import ValidationIcon from '@jsonforms/material-renderers/lib/complex/ValidationIcon';
import CustomMaterialArrayTableRenderer from './customMaterialArrayTableLayoutRenderer';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

export const MaterialArrayLayout =
  ( props ) => {
    const {
       data,
       path,
       label,
       schema,
       createDefaultValue,
       uischema,
       errors,
       addItem,
       removeItems,
       config,
       rootSchema,
       renderers,
       childLabel,
       childPath,
       uischemas,
       visible,
       key,
     } = props;
    const appliedUiSchemaOptions = merge({}, config, uischema.options);
    const classes = useStyles();
    return (
      <Paper style={{ padding: 10 }}>
        <Toolbar>
          <Grid container alignItems='center' justify='space-between'>
            <Grid item xs={10}>
              <Typography variant={'h3'}>{label}</Typography>
              <Typography variant={'h6'}>{uischema.extraText===undefined?'':[uischema.extraText]}</Typography>
            </Grid>
            <Hidden smUp={errors.length === 0}>
              <Grid item>
                { <ValidationIcon id='tooltip-validation' errorMessages={errors}/> }
              </Grid>
            </Hidden>
            <Grid item xs={1}>
              <Grid container>
                <Grid item>
                  <Tooltip
                    id='tooltip-add'
                    title={`Add to ${label}`}
                    placement='bottom'
                  >
                    <IconButton
                      aria-label={`Add to ${label}`}
                      onClick={addItem(path, createDefaultValue())}
                    >
                      <AddIcon/>
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>

        <div>
          {
            data ? map(data, (childData, index) => {
              const foundUISchema = findUISchema(
                   uischemas,
                   schema,
                   uischema.scope,
                   path,
                   undefined,
                   uischema,
                   rootSchema
                 );
              const childPath = composePaths(path, `${index}`);
              return (
                  <div key= { index }>
                    <Grid container alignItems={'center'}>
                      <Grid item xs={1}>
                        <Avatar aria-label='Index'>
                          {index + 1}
                        </Avatar>
                      </Grid>
                      <Grid item xs={10}>
                        <JsonFormsDispatch
                          index={index}
                          schema={schema}
                          uischema={foundUISchema}
                          path={childPath}
                          key={childPath}
                          renderers={renderers}
                        />
                      </Grid>
                      <Grid item xs={1}>
                        <IconButton
                          onClick={removeItems(path, [data[index]])}
                          style={{ float: 'right' }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </div>
              );
            }) :
            <div>No data (Click
              <IconButton
                aria-label={`Add to ${label}`}
                onClick={addItem(path, createDefaultValue())}
              >
                <AddIcon/>
              </IconButton> to add)
            </div>
          }
        </div>
      </Paper>
    );
  };
