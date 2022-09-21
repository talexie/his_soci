import { useState } from 'react';
import PropTypes from 'prop-types';
import { Drawer, useMediaQuery, useTheme } from '@mui/material';
import lodashGet from 'lodash/get';
import { css } from '@emotion/react';

export const Sidebar = (props) => {
    const { children, closedSize, size,variant,open,onClose, ...rest } = props;
    const currentTheme = useTheme();
    const isXSmall = useMediaQuery(theme =>
        theme.breakpoints.down('sm')
    );
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('md'));
    if(isXSmall){
        return (
            <Drawer
                anchor="left"
                onClose={onClose}
                open={open}
                variant={variant}
                css={ [root(open,currentTheme),fixed]}
                {...rest}
            >
                {children}
            </Drawer>
        )
    }
    else{
        if(isSmall){
            return (
                <Drawer
                    anchor="left"
                    onClose={onClose}
                    open={open}
                    variant={variant}
                    css={ [root(open,currentTheme),fixed]}
                    {...rest}
                >
                    <div 
                        css={ fixed }
                    >   
                        {children}
                    </div>
                </Drawer>
            )
        }
        else{
            return (
                <Drawer
                    anchor="left"
                    onClose={onClose}
                    open={open}
                    variant={variant}
                    css={ sidebarCss(currentTheme) }
                    {...rest}
                >
                    <div 
                        css={dcss(currentTheme)}
                    >   
                        {children}
                    </div>
                </Drawer>
            );
        }
    }
};

Sidebar.propTypes = {
    children: PropTypes.node.isRequired,
};
const dcss = theme=>css({
    backgroundColor: `${ theme.palette.white}`,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    overflowX: 'hidden',
    // hide scrollbar
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    '&::-webkit-scrollbar': {
        display: 'none',
    },
    padding: `${ theme.spacing(2)}`
});
const fixed = css({
    position: 'fixed',
    height: 'calc(100vh - 3em)',
    overflowX: 'hidden',
    // hide scrollbar
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    '&::-webkit-scrollbar': {
        display: 'none',
    }
})
const sidebarCss = theme =>css({
    width: '240px',
    [`${ theme.breakpoints.up('lg')}`]: {
        marginTop: '64px',
        height: 'calc(100% - 64px)'
    }
});
const root =( open, theme ) => css({
    height: 'calc(100vh - 3em)',
    [`& .MuiPaper-root`]: {
        position: 'relative',
        width: open
            ? lodashGet(theme, 'sidebar.width', DRAWER_WIDTH)
            : lodashGet(theme, 'sidebar.closedWidth', CLOSED_DRAWER_WIDTH),
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: 'transparent',
        borderRight: 'none',
        [theme.breakpoints.only('xs')]: {
            marginTop: 0,
            height: '100vh',
            position: 'inherit',
            backgroundColor: theme.palette.background.default,
        },
        [theme.breakpoints.up('md')]: {
            border: 'none',
        },
        zIndex: 'inherit',
    },
});
const rootTop = theme => css`
padding-top: 56px;
height: 100%;
[${theme.breakpoints.up('sm')}]: {
  padding-top: 64px;
}
`;
const shiftContent =css({
    paddingLeft: 240,
    paddingTop: 64,
});
export const DRAWER_WIDTH = 240;
export const CLOSED_DRAWER_WIDTH = 55;