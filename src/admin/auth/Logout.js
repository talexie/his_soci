import { useCallback, forwardRef } from 'react';
import PropTypes from 'prop-types';
import {
    ListItemIcon,
    ListItemText,
    MenuItem,
    useMediaQuery,
} from '@mui/material';
import { useLogout } from '@alkuip/core';

/**
 * Logout button component, to be passed to the Admin component
 *
 * Used for the Logout Menu item in the sidebar
 */
export const Logout = forwardRef((props, ref)=> {
    const { className, redirectTo="/login", icon, ...rest } = props;
    const isXSmall = useMediaQuery((theme) =>
        theme.breakpoints.down('sm')
    );
    const logout = useLogout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleClick = useCallback(() => logout(null, redirectTo, false), [
        redirectTo,
        logout,
    ]);
    return (
        <MenuItem
            onClick={handleClick}
            ref={ref}
            // @ts-ignore
            component={isXSmall ? 'span' : 'li'}
            {...rest}
        >
            <ListItemText>Logout</ListItemText>
        </MenuItem>
    );
});

Logout.propTypes = {
    className: PropTypes.string,
    redirectTo: PropTypes.string,
    icon: PropTypes.element,
};
