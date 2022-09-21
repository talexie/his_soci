import { css } from '@emotion/react';
import {
    Grid,
    useTheme
} from '@mui/material';

    const root =theme =>css({
        padding: theme.spacing(2)
    });

export const HisStagesProgression = (props) => {
    const theme = useTheme();
    return (
        <div css={ root(theme)}>
            <Grid container spacing={2} direction="column" justifyContent="space-around">
                <Grid item>
                    <div>
                        <h3>HIS stages measurement scale and description used in the assessment tool:</h3>
                    </div>
                    
                </Grid>
                <Grid item container spacing={2} direction="row" justifyContent="space-around">
                    <Grid 
                        item
                        lg={3}
                        sm={6}
                        xl={3}
                        xs={12}
                    >
                        Stage
                    </Grid>
                    <Grid 
                        item
                        lg={9}
                        sm={6}
                        xl={9}
                        xs={12}
                    >
                        Description
                    </Grid>
                </Grid>
                <Grid item container spacing={2} direction="row" justifyContent="space-around">
                    <Grid 
                        item
                        lg={3}
                        sm={6}
                        xl={3}
                        xs={12}
                    >
                        Emerging/ad hoc	
                    </Grid>
                    <Grid 
                        item
                        lg={9}
                        sm={6}
                        xl={9}
                        xs={12}
                    >
                        Formal processes, capabilities, experience, or understanding of HIS issues/activities are limited or emerging. 
                        Formal processes are not documented, and functional capabilities are at the development stage. 
                        Success depends on individual effort.
                    </Grid>
                    <Grid 
                        item
                        lg={3}
                        sm={6}
                        xl={3}
                        xs={12}
                    >
                        Repeatable	
                    </Grid>
                    <Grid 
                        item
                        lg={9}
                        sm={6}
                        xl={9}
                        xs={12}
                    >
                        Basic processes are in place, based on previous activities or existing and accessible policies. 
                        The need for standardized processes and automated functional capabilities is known.
                        There are efforts to document current processes.
                    </Grid>
                    <Grid 
                        item
                        lg={3}
                        sm={6}
                        xl={3}
                        xs={12}
                    >
                        Defined	
                    </Grid>
                    <Grid 
                        item
                        lg={9}
                        sm={6}
                        xl={9}
                        xs={12}
                    >
                        There are approved documented processes and guidelines tailored to HIS projects or activities. 
                        There is increased collaboration and knowledge sharing.
                        Innovative methods and tools can be implemented and used to extend functional capabilities.
                    </Grid>
                    <Grid 
                        item
                        lg={3}
                        sm={6}
                        xl={3}
                        xs={12}
                    >
                        Managed	
                    </Grid>
                    <Grid 
                        item
                        lg={9}
                        sm={6}
                        xl={9}
                        xs={12}
                    >
                        Activities are under control using established processes. 
                        Requirements/goals have been developed and a feedback process is in place to ensure that they are met. 
                        Detailed measures for processes and products are being collected. 
                    </Grid>
                    <Grid 
                        item
                        lg={3}
                        sm={6}
                        xl={3}
                        xs={12}
                    >
                    Optimized	
                    </Grid>
                    <Grid 
                        item
                        lg={9}
                        sm={6}
                        xl={9}
                        xs={12}
                    >
                        Best practices are being applied, and the system is capable of learning and adapting. 
                        The system uses experiences and feedback to correct problems and continuously improve processes and capabilities.
                        Future challenges are anticipated, and a plan is in place to address them through innovation and new technology. 
                        Processes are in place to ensure review and incorporation of relevant innovation.
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
export default HisStagesProgression;
