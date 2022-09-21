import { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { useMediaQuery, useTheme,Grid, Container } from '@mui/material';

import { 
  Sidebar, 
  Topbar, 
  Footer
} from './toolbars';
const root =css({
  minHeight: '90%'
});
const content = theme => css`
    overflow-x: auto;
    height: 100%;
    min-height: '90%';
    width: 100%;
    margin-top: 64px;
    background-color: ${ theme.palette.white };
  `;
const sidebar = theme => css`
  max-width: 186px;
  background-color: ${ theme.palette.primary.light };
`;
const banner= theme =>css({
  maxHeight: '62px',
  backgroundColor: `${ theme.palette.white }`,
  zIndex: `${ theme.zIndex.drawer + 1 }`,
});
const footer= theme =>css({
  backgroundColor: `${ theme.palette.primary.dark}`,
  marginLeft: '12%',
  marginBottom: '0%'
})

export const Main = props => {
  const { children,...rest} = props;
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
    <Grid
      container
      spacing ={ 2 }
      direction = "column"
      justifyContent="flex-start"
      alignItems="stretch"
    >
      <Grid item  zeroMinWidth css={ banner}>
        <Topbar onSidebarOpen={handleSidebarOpen} />
      </Grid>
      <Grid 
        item 
        container 
        spacing ={ 2 }
        direction="row"
        justifyContent="flex-start"
        alignItems="stretch"
        zeroMinWidth
        css={ root }
      >
        <Grid item zeroMinWidth xs={12} md={2} css={ sidebar(theme)}>
          <Sidebar
            { ...rest }
            onClose={handleSidebarClose}
            open={shouldOpenSidebar}
            variant={isDesktop ? 'persistent' : 'temporary'}
          />      
        </Grid>
        <Grid item zeroMinWidth xs={12} md={10} css={ content(theme)}>
            { children }
        </Grid>
      </Grid>
      <Grid item zeroMinWidth css={ footer(theme)}>
          <Footer 
            sx={{ top: 'auto', bottom: 0 }}
          />
      </Grid>
    </Grid>
  );
}

Main.propTypes = {
  children: PropTypes.node
};

export default Main;
