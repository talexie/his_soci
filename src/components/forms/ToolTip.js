import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const HtmlToolTip = withStyles(theme => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 800,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);

export const ToolTip=(props)=> {
  const { description } = props;
  return (
    <div>
      <HtmlToolTip
        title={
          <>
            <Typography color="inherit">{ description }</Typography>
          </>
        }
      >
        <Button><HelpOutlineIcon/></Button>
      </HtmlToolTip>
    </div>
  );
}
export default ToolTip;