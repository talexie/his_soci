import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import map from 'lodash/map';

const HtmlToolTip = withStyles(theme => ({
  tooltip: {
    backgroundColor: '#b6b8c0',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 960,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #ffffff',
  },
}))(Tooltip);

export const ToolTip=(props)=> {
  const { tooltip,path } = props;
  return (
    <div>
      <HtmlToolTip
        title={
          map(tooltip,(value,key)=>{
            return (<Typography key = { 'tooltip-'+path+"-"+key } color="inherit"><h5>{ Object.keys(value) }</h5>{ value[Object.keys(value)] }</Typography>)
          })            
        }
      >
        <Button><HelpOutlineIcon/></Button>
      </HtmlToolTip>
    </div>
  );
}
export default ToolTip;