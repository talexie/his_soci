import { palette } from '../palette';

export const MuiInput = theme =>({
        '& ::before': {
            borderBottom: `1px solid ${palette(theme).primary.main}`
        }
});
export default MuiInput;