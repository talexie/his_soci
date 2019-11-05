import {
  mapStateToLayoutProps,
  rankWith,
  uiTypeIs,
  optionIs,
  and,
} from "@jsonforms/core";
import { MaterialLayoutRenderer } from "@jsonforms/material-renderers";
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Hidden,
  Typography,
  Paper,
  Grid,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    paddingRight:10,
    alignItems:'center',
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '80%',
    flexShrink: 0,
  },
  label: {
    flexBasis: '20%',
    flexShrink: 0,
    paddingRight:5,
    alignItems: 'center',
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  grid:{
    border: '1px solid #ececec',
  }
}));

export const CustomGroupRendererTester = rankWith(Number.MAX_VALUE, optionIs('customGroup',true));

const CustomGroupRenderer = props => {
  const classes = useStyles();
  const { uischema, schema, path, visible, renderers } = props;
  console.log("uischema",uischema);
  const [expanded, setExpanded] = useState(false);
  const [defaultExpanded, setDefaultExpanded] = useState(true);

  const handleChange = panel => (event, isExpanded) => {
    setDefaultExpanded(false);
    setExpanded(isExpanded ? panel : false);
  };
  const layoutProps = {
    elements: uischema.elements,
    schema: schema,
    path: path,
    direction: "column",
    visible: visible,
    uischema: uischema,
    renderers: renderers
  };
  return (
    <Hidden xsUp={!visible}>
      {
        uischema.options.grid?
          (
            <Paper style={{ padding: 10 }}>
              <Grid container spacing ={3} alignItems='stretch' justify='space-between'>
                <Grid item xs={1} className={ classes.grid}>
                  <Typography variant={'h6'} className={ classes.secondaryHeading}>{uischema.code}</Typography>
                </Grid>
                <Grid item xs={1} className={ classes.grid}>
                  <Typography variant={'h6'} className={ classes.secondaryHeading}>{uischema.label}</Typography>
                </Grid>
                <Grid item xs={3} className={ classes.grid}>
                  <Typography variant={'h6'} className={ classes.secondaryHeading} >{uischema.extraText===undefined?'':[uischema.extraText]}</Typography>
                </Grid>
                <Grid item xs={7} className={ classes.grid}>
                  <div className={ classes.column}>
                    <Typography className={ classes.secondaryHeading}>
                      <MaterialLayoutRenderer {...layoutProps} />
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          )
          :(<ExpansionPanel defaultExpanded={ defaultExpanded } expanded={expanded === path } onChange={handleChange(path)}>
            <ExpansionPanelSummary expandIcon={ uischema.level ==1 ?<ExpandMoreIcon />:"" }>
              <div className={ classes.label}>
                <Typography className={ classes.heading} >{uischema.label}</Typography>
                <Typography variant={'h7'}>{uischema.extraText===undefined?'':[uischema.extraText]}</Typography>
              </div>
              <div className={ classes.column}>
                <Typography className={ classes.secondaryHeading}>
                  <MaterialLayoutRenderer {...layoutProps} />
                </Typography>
              </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            </ExpansionPanelDetails>
          </ExpansionPanel>)
        }

    </Hidden>
  );
};

export default connect(mapStateToLayoutProps)(CustomGroupRenderer);
