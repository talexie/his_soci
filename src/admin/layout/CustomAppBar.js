import { forwardRef } from 'react';
import { Logout  } from '../auth';
import { Link } from 'react-router-dom';
import {
    Box,
    MenuItem,
    ListItemIcon,
    ListItemText,
    Typography,
    useMediaQuery,
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

const ConfigurationMenu = forwardRef((props, ref) => {
    return (
        <MenuItem
            component={Link}
            ref={ref}
            {...props}
            to="/configuration"
        >
            <ListItemIcon>
                <SettingsIcon />
            </ListItemIcon>
            <ListItemText>{`Configure`}</ListItemText>
        </MenuItem>
    );
});
const CustomUserMenu = () => (
    <UserMenu>
        <ConfigurationMenu />
        <Logout />
    </UserMenu>
);

const CustomAppBar = (props) => {
    const isLargeEnough = useMediaQuery(theme =>
        theme.breakpoints.up('sm')
    );
    return (
        <AppBar
            {...props}
            color="secondary"
            elevation={1}
            userMenu={<CustomUserMenu />}
        >
            <Typography
                variant="h6"
                color="inherit"
                sx={{
                    flex: 1,
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                }}
                id="react-admin-title"
            />
            {isLargeEnough && <Logo />}
            {isLargeEnough && <Box component="span" sx={{ flex: 1 }} />}
        </AppBar>
    );
};

export default CustomAppBar;