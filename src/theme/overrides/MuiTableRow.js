import { palette }from '../palette';

export const MuiTableRow = theme => ({
  root: {
    '&$selected': {
      backgroundColor: palette(thee).background.default
    },
    '&$hover': {
      '&:hover': {
        backgroundColor: palette(theme).background.default
      }
    }
  }
});
export default MuiTableRow;
