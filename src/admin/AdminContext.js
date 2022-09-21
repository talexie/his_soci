
import { CoreAdminContext } from './CoreAdminContext';
import { ThemeProvider } from '@mui/material';
import { defaultTheme }  from '../theme';
export const AdminContext = (props) => {
    const { theme = defaultTheme(), apiConfig, children, ...rest } = props;
    return (
        <CoreAdminContext
            apiConfig ={ apiConfig }
            {...rest}
        >
             <ThemeProvider theme={ theme}>
                {children}
             </ThemeProvider>
        </CoreAdminContext>
    );
};