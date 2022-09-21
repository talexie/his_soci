import React from 'react';
import { useTheme } from '@mui/material';
import {
  GridDashboard
} from '@alkuip/visualization';
import { css } from '@emotion/react';
import { HisViewWrapper } from '@alkuip/jsonforms';
import { useConfig } from '@alkuip/core';

const Dashboard = (props) => {
  const theme = useTheme();
  const { defaultPage } = useConfig();
  const [ panels, setPanels] = React.useState([]);

  const getPanels =(dashItems)=>{
    setPanels(dashItems);
  }
  return (
    <div css={css`
      padding: ${theme.spacing(4)}
    `}>
      <HisViewWrapper 
        {...props}
        footer= {`
        This web-based version of HIS Stages of Continuous Improvement  Tool was created using source code/user guides developed with the support of the MEASURE Evaluation project at the University of North Carolina at Chapel Hill, and was funded by the U.S. Agency for International Development (USAID) under the terms of MEASURE Evaluation cooperative agreement AID-OAA-L-14-00004. The original tool can be found at: https://www.measureevaluation.org/his-strengthening-resource-center/his-stages-of-continuous-improvement-toolkit/his-stages-of-continuous-improvement-toolkit. Views expressed are not necessarily those of USAID or the United States government.	
        `}
        appName = { defaultPage??`dashboard`}
        appDataStore ={ `alkuistore`}
        appSetupStore ={ `metadata`} 
        isDashboard = { false } 

      >         
        <GridDashboard
          {...props }
          options = { panels }
          getPanels = { getPanels }
          isDraggable = { true }
          isResizable = { true }
        />
      </HisViewWrapper>
    </div>
  );
};

export default Dashboard;
