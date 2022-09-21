import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { AppBar, Toolbar, Badge, IconButton,Divider, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';
import InputIcon from '@mui/icons-material/Input';
import { useConfig } from '@alkuip/core';
import { Logout } from '../../auth/Logout';
  
const root = theme => css`
    box-shadow: none;
    max-height: '62px';
    background-color: ${ theme.palette.primary.main };
  `;
const logoCss = css`
    max-width: 300px;
    max-height: 60px;
  `;
const flexGrow = css`
    flex-grow: 1;
  `;
const divider = css`
    background-color: rgb(190, 208, 225);
    `;
const signOutButton = theme =>css`
    margin-left: ${ theme.spacing(1)};
    color: rgb(7, 68, 129);
  `;
const banner = (image)=>css({
    background: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    objectFit: 'fill'
});
export const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;
  const { baseUrl, standalone, logo, bannerImage } = useConfig();
  const [notifications] = useState([]);
  const theme = useTheme();

  return (
    <AppBar
      {...rest}
      css={ bannerImage?[root(theme),banner(bannerImage),className]:[root(theme), className]}
    >
      <Toolbar>
        {
          logo?(
            <RouterLink to="/">
              {
                (
                  <img css={ logoCss } 
                    alt="Logo"
                    src={ `${logo}` }
                  />
                )
              }
            </RouterLink>
          ):null
        }
        <div css={ flexGrow} />
          <IconButton css={signOutButton(theme)} size="large">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <a href={ baseUrl }>
            <IconButton css={ signOutButton(theme)} size="large">
              <InputIcon />
            </IconButton>
          </a>
          <IconButton css={ signOutButton(theme) } onClick={ onSidebarOpen } size="large">
            <MenuIcon />
          </IconButton>
          {
              standalone?(
                <Logout/>
              ):null
          }
      </Toolbar>
      <Divider css={divider}/>
    </AppBar>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func
};

export default Topbar;
