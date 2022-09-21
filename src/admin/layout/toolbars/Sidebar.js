import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { Divider, Drawer, useTheme, Grid } from '@mui/material';
import { Profile } from './Profile';
import { SidebarNav } from './SidebarNav';
const paper = theme =>css({
  width: '240px',
  [`${ theme.breakpoints.up('lg')}`]: {
    marginTop: '64px',
    height: 'calc(80% - 64px)'
  }
});
export const Sidebar = props => {
  const { open, variant, onClose,dispatch } = props;
  const theme =  useTheme();

  return (
    <Drawer
      anchor="left"
      css={ paper(theme)}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <Grid
        container
        direction = "column"
        css={[css`
          margin-top: 64px;
          padding: ${theme.spacing(2)};
          max-width: 200px;
        `]}
        >
          <Grid item>
            <Profile />
            <Divider css={ css`
              margin: ${ theme.spacing(2, 0)};
            `} />
          </Grid>
          <Grid item>
            <SidebarNav
              dispatch = { dispatch }
              css={css`
              margin-bottom: ${theme.spacing(2)};
            `}
            />
          </Grid>
      </Grid>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
