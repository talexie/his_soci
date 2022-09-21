import { forwardRef } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { List, ListItem,colors, useTheme } from '@mui/material';
import { 
  useLoginUser, 
  getDifference,
  useConfig
} from '@alkuip/core';
import SubMenu from './SubMenu';
import { MenuLink } from './MenuLink';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import concat from 'lodash/concat';
import size from 'lodash/size';

const  item = css`
    display: grid;
    padding-top: 0;
    padding-bottom: 0;
  `;

const icon = theme => css`
    color: ${ theme.palette.icon};
    width: 24;
    height: 24;
    display: flex;
    align-items: center;
    margin-right: ${ theme.spacing(1)};
  `;
const active =theme =>css`
    color: ${ theme.palette.primary.main};
    font-weight: ${ theme.typography.fontWeightMedium};
    '& $icon': {
      color: ${ theme.palette.primary.main};
    };
  `;

export const CustomRouterLink = forwardRef((props, ref) =>{
  return(
    <div
      ref={ref}
      style={{ flexGrow: 1 }}
    >
      <RouterLink {...props} />
    </div>
  )
  });

export const SidebarNav = props => {
  const { className,dispatch, ...rest } = props;
  const { permissions } = useLoginUser();
  const { baseUrl, apps } = useConfig();
  const theme = useTheme();
  const isPageAdmin = (permissions.isAppAdmin || permissions.isSuperAdmin);
  const pages = concat(apps,[{
    title: 'Exit',
    type: 'external',
    href: baseUrl,
    icon: <ExitToAppRoundedIcon />,
    elmis: true
    
  }]);
  const adminPages = pages?.filter((ad)=>ad?.isAdmin && !ad?.isUser && isPageAdmin);
  const userPages = pages?.filter((upg)=>upg?.isUser);
  const defaultPages = getDifference(userPages,adminPages);
  const menuPageLinks = adminPages.concat(userPages).filter(Boolean);
  return (
      <List
        {...rest}
        css={className}
      >
        {
        menuPageLinks?.map((page,index) => (
            <SubMenu
              css={[item,className]}
              name= { page.title??page.appName }
              page = { page }
              isOpen ={ Array.isArray(menuPageLinks) && (size(menuPageLinks) === 1) }
              handleToggle = { dispatch }
              key={ `hidden-admin-${page.title}-${index}`}
            >
              <MenuLink
                page = { page }
              />
            </SubMenu>
        ))}
      </List>
    );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
  dispatch: PropTypes.func
};
