import { css } from '@emotion/react';
import { 
    useTheme,
    Grid
} from '@mui/material';
import { AppBar as DefaultAppBar } from './AppBar';
//import { Sidebar as DefaultSidebar } from './Sidebar';
//import { Menu as DefaultMenu } from './Menu';
//import { useSidebarState } from './useSidebarState';
import { 
    Footer as DefaultFooter,
    SidebarNav as DefaultMenu,
    Sidebar as DefaultSidebar
 } from './toolbars';
export const Layout = (props) => {
    const {
        appBar: AppBar = DefaultAppBar,
        children,
        className,
        dashboard,
        error,
        menu: Menu = DefaultMenu,
        sidebar: Sidebar = DefaultSidebar,
        footer: Footer = DefaultFooter
    } = props;
    const theme = useTheme();
    return (
        <div css={ main(theme)}>
            { children}
        </div>
           
    );
};
const main = theme =>css({
    minHeight: '100%',
    backgroundColor: theme.palette.background.default
});
const root =(theme)=>css({
    display: 'flex',
    flexDirection: 'column',
    zIndex: 1,
    minHeight: '100vh',
    backgroundColor: theme.palette.background.default,
    position: 'relative',
    minWidth: 'fit-content',
    width: '100%',
    color: theme.palette.getContrastText(theme.palette.background.default),
});
const content = (theme)=> css({
    backgroundColor: theme.palette.background.default,
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    flexBasis: 0,
    [theme.breakpoints.up('xs')]: {
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(1),
    },
    [theme.breakpoints.down('md')]: {
        padding: 0,
    },
    width: 'calc(100% -218px)'
});
const appFrame =(theme)=>css({
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    [theme.breakpoints.up('xs')]: {
        marginTop: '5%',
    },
    [theme.breakpoints.down('sm')]: {
        marginTop: '5%',
    },
});
const contentWithSidebar = (theme)=>css({
    display: 'flex',
    flexGrow: 1,
});
const sidebarcss = css({
    marginTop: '48px'
})
