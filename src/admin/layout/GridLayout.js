import { useState } from 'react';
import { css } from '@emotion/react';
import { 
    useTheme,
    useMediaQuery 
} from '@mui/material';
import { AppBar as DefaultAppBar } from './AppBar';

//import { useSidebarState } from './useSidebarState';
import { 
    Footer,
    SidebarNav as DefaultMenu,
    Sidebar as DefaultSidebar
 } from './toolbars';

export const GridLayout = (props) => {
    const {
        appBar: AppBar = DefaultAppBar,
        children,
        className,
        dashboard,
        error,
        menu: Menu = DefaultMenu,
        sidebar: Sidebar = DefaultSidebar,
        title,
        resources,
        ...rest
    } = props;
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
        defaultMatches: true
    });
    const [openSidebar, setOpenSidebar] = useState(false);
    const handleSidebarOpen = () => {
        setOpenSidebar(true);
    };
    
    const handleSidebarClose = () => {
        setOpenSidebar(false);
    };
    const shouldOpenSidebar = isDesktop ? true : openSidebar; 

    return (
        <div css={[root(theme),'layout', className]} {...rest}>
            <div css={ appFrame}>
                <AppBar onSidebarOpen ={handleSidebarOpen} title={title} />
                <main css={contentWithSidebar}>
                    <Sidebar  
                        onClose={handleSidebarClose}
                        open={shouldOpenSidebar}
                        variant={isDesktop ? 'persistent' : 'temporary'}
                        css = { sidebarcss }
                    >
                        <Menu pages ={ resources } />
                    </Sidebar>
                    <div id="main-content"  css ={ [root(theme),content(theme)]}>
                        { children}
                    </div>
                </main>
                <Footer/>
            </div>
        </div>
    );
};
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
    //width: 'calc(100% -218px)'
});
const appFrame =(theme)=>css({
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    [theme.breakpoints.up('xs')]: {
        marginTop: theme.spacing(6),
    },
    [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(7),
    },
});
const contentWithSidebar = (theme)=>css({
    display: 'flex',
    flexGrow: 1,
});
const sidebarcss = css({
    marginTop: '48px'
})
