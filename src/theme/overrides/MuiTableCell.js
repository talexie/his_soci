import { palette } from '../palette';
import { typography } from '../typography';

export const MuiTableCell = theme =>({
  root: {
    ...typography(theme).body1,
    borderBottom: `1px solid ${palette(theme).divider}`
  }
});
export default MuiTableCell;
