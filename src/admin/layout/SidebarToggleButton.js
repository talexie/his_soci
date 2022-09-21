import { useState } from 'react';
import { IconButton, Tooltip, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { css } from '@emotion/react';
/**
 * A button that toggles the sidebar. Used by default in the <AppBar>.
 * @param props The component props
 * @param {String} props.className An optional class name to apply to the button

 */
export const SidebarToggleButton = (props) => {

    const { className } = props;
    const [open, setOpen] = useState(true);
    const theme = useTheme();
    return (
        <Tooltip
            className={className}
            title={ open ? 'Close' : 'Open' }
            enterDelay={500}
        >
            <IconButton
                color="inherit"
                onClick={() => setOpen(!open)}
                size="large"
            >
                <MenuIcon
                    css={
                        open
                            ? menuButtonIconOpen(theme)
                            : menuButtonIconClosed(theme)
                    }
                />
            </IconButton>
        </Tooltip>
    );
};

const menuButtonIconClosed = (theme) => css({
    transition: theme.transitions.create(['transform'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    transform: 'rotate(0deg)',
});

const menuButtonIconOpen = (theme)=>css({
    transition: theme.transitions.create(['transform'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    transform: 'rotate(180deg)',
});