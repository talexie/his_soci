import { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { 
    useAuthProvider, 
    useGetIdentity 
} from '@alkuip/core';
import {
    Tooltip,
    IconButton,
    Menu,
    Button,
    Avatar,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { UserMenuContextProvider } from './UserMenuContextProvider';
import { Logout } from '../auth/Logout';
import { css } from '@emotion/react';

/**
 * The UserMenu component renders a Mui Button that shows a Menu.
 * It accepts children that must be Mui MenuItem components.
 *
 * @example
 * import { Logout, UserMenu, useUserMenu } from '../admin';
 * import MenuItem from '@mui/material/MenuItem';
 * import ListItemIcon from '@mui/material/ListItemIcon';
 * import ListItemText from '@mui/material/ListItemText';
 * import SettingsIcon from '@mui/icons-material/Settings';

 * const ConfigurationMenu = React.forwardRef((props, ref) => {
 *     const { onClose } = useUserMenu();
 *     return (
 *         <MenuItem
 *             ref={ref}
 *             {...props}
 *             to="/configuration"
 *             onClick={onClose}
 *         >
 *             <ListItemIcon>
 *                 <SettingsIcon />
 *             </ListItemIcon>
 *             <ListItemText>Configuration</ListItemText>
 *         </MenuItem>
 *     );
 * });
 *
 * export const MyUserMenu = () => (
 *     <UserMenu>
 *         <ConfigurationMenu />
 *         <Logout />
 *     </UserMenu>
 * );
 * @param props
 * @param {ReactNode} props.children React node/s to be rendered as children of the UserMenu. Must be Mui MenuItem components
 * @param {string} props.className CSS class applied to the MuiAppBar component
 * @param {string} props.label The label of the UserMenu button. Accepts translation keys
 * @param {Element} props.icon The icon of the UserMenu button.
 *
 */
export const UserMenu = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const { isLoading, identity } = useGetIdentity();
    const authProvider = useAuthProvider();
    const isLargeEnough = useMediaQuery(theme =>
        theme.breakpoints.up('sm')
    );

    const {
        children = !!authProvider ? <Logout /> : null,
        className,
        label = 'Account',
        icon = defaultIcon,
    } = props;
    const currentTheme = useTheme();
    const handleMenu = event => setAnchorEl(event.currentTarget);
    const handleClose = useCallback(() => setAnchorEl(null), []);
    const context = useMemo(() => ({ onClose: handleClose }), [handleClose]);
    if (!children) return null;
    const open = Boolean(anchorEl);

    return (
        <div className={className}>
            {isLargeEnough && !isLoading && identity?.fullName ? (
                <Button
                    aria-label={label }
                    css={ userButton}
                    color="inherit"
                    startIcon={
                        identity?.avatar ? (
                            <Avatar
                                css={ avatar(currentTheme)}
                                src={identity?.avatar}
                                alt={identity?.fullName??identity?.displayName}
                            />
                        ) : (
                            icon
                        )
                    }
                    onClick={handleMenu}
                >
                    {identity?.fullName??identity?.displayName}
                </Button>
            ) : (
                <Tooltip title={label }>
                    <IconButton
                        aria-label={label }
                        aria-owns={open ? 'menu-appbar' : null}
                        aria-haspopup={true}
                        color="inherit"
                        onClick={handleMenu}
                        size="large"
                    >
                        {!isLoading && identity?.avatar ? (
                            <Avatar
                                css={ avatar(currentTheme)}
                                src={identity?.avatar}
                                alt={identity?.fullName??identity?.displayName}
                            />
                        ) : (
                            icon
                        )}
                    </IconButton>
                </Tooltip>
            )}
            <UserMenuContextProvider value={context}>
                <Menu
                    id="menu-appbar"
                    disableScrollLock
                    anchorEl={anchorEl}
                    anchorOrigin={AnchorOrigin}
                    transformOrigin={TransformOrigin}
                    open={open}
                    onClose={handleClose}
                >
                    {children}
                </Menu>
            </UserMenuContextProvider>
        </div>
    );
};

UserMenu.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    label: PropTypes.string,
    icon: PropTypes.node,
};


const userButton =css({
    textTransform: 'none'
});

const avatar=(theme)=>css({
    width: theme.spacing(4),
    height: theme.spacing(4),
});

const defaultIcon = <AccountCircle />;

const AnchorOrigin = {
    vertical: 'bottom',
    horizontal: 'right',
};

const TransformOrigin = {
    vertical: 'top',
    horizontal: 'right',
};