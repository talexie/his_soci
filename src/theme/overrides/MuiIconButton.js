import { palette } from '../palette';

export const MuiIconButton = theme =>({
  root: {
    color: palette(theme).icon,
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.03)'
    }
  }
});
export default MuiIconButton;
