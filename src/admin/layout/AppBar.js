import { Children, memo } from 'react';
import PropTypes from 'prop-types';
import {
    AppBar as MuiAppBar,
    Toolbar,
    Typography,
    useMediaQuery,
} from '@mui/material';
import { css } from '@emotion/react';

import { SidebarToggleButton } from './SidebarToggleButton';
import { LoadingIndicator } from './LoadingIndicator';
import { UserMenu } from './UserMenu';
import { HideOnScroll } from './HideOnScroll';

/**
 * The AppBar component renders a custom MuiAppBar.
 *
 * @param {Object} props
 * @param {ReactNode} props.children React node/s to be rendered as children of the AppBar
 * @param {string} props.className CSS class applied to the MuiAppBar component
 * @param {string} props.color The color of the AppBar
 * @param {boolean} props.open State of the <Admin/> Sidebar
 * @param {Element | boolean} props.userMenu A custom user menu component for the AppBar. <UserMenu/> component by default. Pass false to disable.
 *
 * @example
 *
 * const MyAppBar = props => {

 *   return (
 *       <AppBar {...props}>
 *           <Typography
 *               variant="h6"
 *               color="inherit"
 *               className={classes.title}
 *               id="react-admin-title"
 *           />
 *       </AppBar>
 *   );
 *};
 *
 * @example Without a user menu
 *
 * const MyAppBar = props => {

 *   return (
 *       <AppBar {...props} userMenu={false} />
 *   );
 *};
 */
export const AppBar = memo(props => {
    const {
        children,
        className,
        color = 'secondary',
        open,
        title,
        onSidebarOpen,
        userMenu = DefaultUserMenu,
        container: Container = HideOnScroll,
        ...rest
    } = props;

    const isXSmall = useMediaQuery(theme =>
        theme.breakpoints.down('sm')
    );

    return (
        <Container className={className}>
            <MuiAppBar
                color={color}
                {...rest}
                css={[root, className]}
            >
                <Toolbar
                    disableGutters
                    variant={isXSmall ? 'regular' : 'dense'}
                    css={toolbar}
                >
                    <SidebarToggleButton css={ menuButton} onClick={ onSidebarOpen } />
                    {Children.count(children) === 0 ? (
                        <Typography
                            variant="h6"
                            color="inherit"
                            css={ titleCss}
                            id="react-admin-title"
                        />
                    ) : (
                        children
                    )}
                    <LoadingIndicator />
                    {typeof userMenu === 'boolean' ? (
                        userMenu === true ? (
                            <UserMenu />
                        ) : null
                    ) : (
                        userMenu
                    )}
                </Toolbar>
            </MuiAppBar>
        </Container>
    );
});

AppBar.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.oneOf([
        'default',
        'inherit',
        'primary',
        'secondary',
        'transparent',
    ]),
    userMenu: PropTypes.oneOfType([PropTypes.element, PropTypes.bool]),
};

const DefaultUserMenu = <UserMenu />;



const toolbar = css({
    paddingRight: 24,
});

const menuButton = css({
    marginLeft: '0.2em',
    marginRight: '0.2em',
});

const titleCss = css({
    flex: 1,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
});

const root = css`
    box-shadow: none;
    background-color: #ffffff;
    position: 'sticky';
`;