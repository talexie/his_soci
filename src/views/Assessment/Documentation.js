import { useState, forwardRef } from 'react';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { UserButton } from '@alkuip/forms';
import PropTypes from 'prop-types';
import { HisOverview } from './Overview';
import { HisOverviewStages } from './Stages';
import { HisStagesProgression } from './StagesProgression';
import { css } from '@emotion/react';
import { useTheme } from '@mui/material';

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
    const root =theme=>css({
        padding: theme.spacing(3),
        backgroundColor: "#ffffff"
    });
    const image=css({
        marginTop:12,
        maxWidth:'179px',
        maxHeight:'150px'
    });
const CustomRouterLink = forwardRef((props, ref) => (
    <div
      ref={ref}
      style={{ flexGrow: 1 }}
    >
      <RouterLink {...props} />
    </div>
  ));

export const HisDocumentation = (props) => {
    const query = useQuery();
    const [value, setValue] = useState(0);
    const theme = useTheme();
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <div>
            <Grid container spacing={2} direction="column" justifyContent="space-around">
                <Grid item container spacing={2} direction="row" justifyContent="space-around">
                    <Grid 
                        item
                        lg={3}
                        sm={6}
                        xl={3}
                        xs={12}
                    >
                        <div css= { image }>
                            <img css= { image }
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
                    <div css={root(theme)}>
                        <AppBar elevation={ 0} position="static" css={css`background-color: #ffffff;`}>
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
            <Grid item container spacing={2} direction="row" justifyContent="space-around">
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
    index: PropTypes.any,
    value: PropTypes.any,
  };
export default HisDocumentation;
