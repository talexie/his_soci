import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
    Grid,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3)
    },
    content: {
        marginTop: theme.spacing(2)
    }
}));

export const HisOverview = (props) => {
    //const classes = useStyles();
    return (
        <div>
            <Grid container spacing={2} direction="column" justify="space-around">
                <Grid item>
                   <h3>What is the purpose of this toolkit?</h3>
                </Grid>
                <Grid item>	
                    <span>
                The Health Information System (HIS) Stages of Continuous Improvement (SOCI) Toolkit measures the status and goals of an HIS across five stages, identifies gaps, and supports the development of roadmaps to improve HIS capabilities related to processes, people, and systems essential for achieving a country’s health goals. 
           
                This toolkit responds to these research questions:

                1. What are the stages of HIS development?
                2. How can HIS be assessed and their maturity continuously improved to achieve better health outcomes?

                The toolkit consists of a measurement scale with 39 HIS subcomponents across five stages detailing improvement across each subcomponent, a data collection tool with data analysis tabs, and a user guide. The scale outlines key components of HIS improvement and defines attributes of each subcomponent on a five-point Likert scale.
            </span>
                </Grid>
                <Grid item>
                    <h3>Who should use this toolkit?</h3>
                </Grid>
                <Grid item>
                    <span>	
                        This version of the assessment toolkit is meant to be used for national-level HIS planning. This toolkit can be used by ministries, HIS units, and governing bodies or authorities, as well as nongovernmental organizations seeking to assess and improve their HIS.  	
                    </span>
                </Grid>
                <Grid item>
                    <h3>Who should participate in the assessment?</h3>	
                </Grid>
                <Grid item>
                    <span>
                        The assessment should be completed by relevant stakeholders. Leadership of the organizational unit for the HIS being assessed should be consulted to identify at least one key personnel who represents aspects of HIS leadership, management, and implementation. This may include HIS managers, policymakers, ICT specialists and others. For example, the director of the HIS unit would work with HIS.	
                    </span>	
                </Grid>
                <Grid item>
                    <h3>How should this assessment be completed?</h3>
                </Grid>
                <Grid item>
                    <span>	
                        The assessment background tab should be completed based on the information collected from the HIS leader/manager who is responsible for assessment of the HIS. The HIS assessment tab in this workbook should be completed by identified key stakeholders. Respondents will be asked to use the measurement scale in the stages measurement scale tab to specify HIS status and future goals across 39 distinct subcomponents. Using the measurement scale, users should identify where a given HIS subcomponent falls and what the goal is for that subcomponent. Upon completion of the individual assessment, the assessment leadership team will convene a stakeholder consultation (with help from  an internal or external expert) to discuss assessment findings and  come to a consensus in terms of a final score for each of the subcomponents, domains, and the overall HIS stage of development. Alternatively, responses could be collected from people by email or on site visits and individual results input in to the data entry tab to achieve consensus scores for each subcomponent. Any supporting documentary evidence (i.e., HIS strategic plans, monitoring and evaluation [M&E] plans, etc.), wherever applicable, should be attached to the assessment or provided through a URL, when applicable.

                        The assessment can be completed prior to annual HIS work planning and should be completed on regular basis (e.g. annually or biannually) to measure HIS performance progress and review targeted improvement  goals. "	
                    </span>	
                </Grid>
                <Grid item>
                    <h3>How can the results be used?</h3>	
                </Grid>
                <Grid item>
                    <span>
                        The resulting scores will identify the current status of the HIS at hand and present these results alongside identified future goals for the HIS. The measurement scale can then be used to identify gaps between current and desired status and concrete steps that should be taken for HIS performance to progress.  	
                    </span>
                </Grid>
            </Grid>
        </div>
    );
}
export default HisOverview;
