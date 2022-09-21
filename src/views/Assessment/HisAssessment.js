import React from 'react';
import { HisViewWrapper } from '@alkuip/jsonforms';

export const HisAssessment = (props) => {
  return ( 
      <HisViewWrapper 
        {...props}
        footer= {`
        This web-based version of HIS Stages of Continuous Improvement  Tool was created using source code/user guides developed with the support of the MEASURE Evaluation project at the University of North Carolina at Chapel Hill, and was funded by the U.S. Agency for International Development (USAID) under the terms of MEASURE Evaluation cooperative agreement AID-OAA-L-14-00004. The original tool can be found at: https://www.measureevaluation.org/his-strengthening-resource-center/his-stages-of-continuous-improvement-toolkit/his-stages-of-continuous-improvement-toolkit. Views expressed are not necessarily those of USAID or the United States government.	
        `}
        appName = { `hissoci`}
        appDataStore ={ `alkuistore`}
        appSetupStore ={ `alkuistore`}  
        isDefaultUiSchema = { false }  

      />          
  );
};
export default HisAssessment;
