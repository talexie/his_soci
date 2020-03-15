import React, { forwardRef } from 'react';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { UserButton } from 'components';
import PropTypes from 'prop-types';
import { HisOverview } from './Overview';
import { HisOverviewStages } from './Stages';
import { HisStagesProgression } from './StagesProgression';
// A custom hook that builds on useLocation to parse
// the query string for you.
const useQuery=()=>{
    return new URLSearchParams(useLocation().search);
}
export const TabPanel=(props)=>{
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

const a11yProps=(index)=> {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

const LinkTab=(props)=> {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}
const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3)
    },
    content: {
        marginTop: theme.spacing(2)
    },
    continue:{
        fontSize: 24
    },
    image:{
        marginTop:12,
        maxWidth:'179px',
        maxHeight:'150px'
    }
}));
const CustomRouterLink = forwardRef((props, ref) => (
    <div
      ref={ref}
      style={{ flexGrow: 1 }}
    >
      <RouterLink {...props} />
    </div>
  ));

export const HisDocumentation = (props) => {
    const classes = useStyles();
    const query = useQuery();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <div>
            <Grid container spacing={2} direction="column" justify="space-around">
                <Grid item container spacing={2} direction="row" justify="space-around">
                    <Grid 
                        item
                        lg={3}
                        sm={6}
                        xl={3}
                        xs={12}
                    >
                        <div className= { classes.image }>
                            <img className= { classes.image }
                                alt="HIS Stages ToolKit"
                                src="static/images/logos/his_stages_logo.png"
                            />
                        </div>
                    </Grid>
                    <Grid 
                        item
                        lg={2}
                        sm={12}
                        xl={2}
                        xs={12}
                    >
                        
                    </Grid>
                    <Grid 
                        item
                        lg={7}
                        sm={12}
                        xl={7}
                        xs={12}
                    >
                        <h1>Stages of Continuous</h1>
                        <h1>Improvement Toolkit</h1>
                    </Grid>
                </Grid>
                <Grid item>                    
                    <a href="https://www.measureevaluation.org/his-strengthening-resource-center/his-stages-of-continuous-improvement-toolkit">https://www.measureevaluation.org/his-strengthening-resource-center/his-stages-of-continuous-improvement-toolkit</a>
                </Grid>
                <Grid item>
                    <div className={classes.root}>
                        <AppBar position="static">
                            <Tabs
                            variant="fullWidth"
                            value={value}
                            onChange={handleChange}
                            aria-label="nav tabs example"
                            >
                            <LinkTab label="Background" href="/" {...a11yProps(0)} />
                            <LinkTab label="Stages of Progression" href="/" {...a11yProps(1)} />
                            <LinkTab label="Stage Measurement Scale" href="/" {...a11yProps(2)} />
                            </Tabs>
                        </AppBar>
                        <TabPanel value={value} index={0}>
                            <HisOverview/>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <HisStagesProgression/>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <h3>Health Information System (HIS) Stages of Continuous Improvement (SOCI)</h3>
                            <span style={{ color: 'blue' }}>Click to display details</span>
                            <HisOverviewStages/>
                        </TabPanel>
                    </div>
                </Grid>
                <Grid item>
                    We acknowledge the substantive contributions made by the United States Centers for Disease Control and Prevention team. We also thank the members of the Digital Health and Interoperability Technical Working Group	
                    of the Health Data Collaborative.	
                </Grid>


            </Grid>
            <Divider></Divider>
            <Grid item container spacing={2} direction="row" justify="space-around">
                <Grid 
                    item
                    lg={8}
                    sm={6}
                    xl={8}
                    xs={12}
                >
                    This publication was produced with the support of the United States Agency for International Development (USAID) under the terms of MEASURE Evaluation cooperative agreement AID-OAA-L-14-00004. MEASURE Evaluation is implemented by the Carolina Population Center, University of North Carolina at Chapel Hill in partnership with ICF International; John Snow, Inc.; Management Sciences for Health; Palladium; and Tulane University. Views expressed are not necessarily those of USAID or the United States government. TL-18-09
                </Grid>
                <Grid 
                    item
                    lg={4}
                    sm={6}
                    xl={4}
                    xs={12}
                >
                    <img
                        alt="USAID"
                        src="static/images/logos/usaid_hdc_measure.png"
                    />
                </Grid>
                <Grid 
                    lg={4}
                    sm={6}
                    xl={4}
                    xs={12}
                    item>
                    { (query.get('id') !== null)?
                        (
                            <UserButton
                                value ={ 'Continue'}
                                color = "primary"
                                variant= "contained"
                                component={CustomRouterLink}
                                to={`/setup?id=${query.get('id')}&continue=true`}
                            />
                        ):
                        (
                            <div></div>
                        )
                    }
                </Grid>
            </Grid>	
        </div>
    );
}
HisDocumentation.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
export default HisDocumentation;
