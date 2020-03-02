import React, { useContext } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';
import CollectionsIcon from '@material-ui/icons/Collections';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';

import { Profile, SidebarNav } from '.';
import { UrlContext } from '../../App';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();
  const contextValue = useContext(UrlContext);
  const dhis2Link = contextValue.dhis2Url;
  const staticLogout = `${dhis2Link}`;
  const pages = [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: <DashboardIcon />,
      isAdminVisible: true,
      isAssessmentAdminVisible: true
    },
    {
      title: 'Assessment',
      href: '/setup',
      icon: <PeopleIcon />,
      isAdminVisible: true,
      isAssessmentAdminVisible: true
    },
    {
      title: 'Setup',
      href: '/admin',
      icon: <SettingsIcon />,
      isAdminVisible: contextValue.isAdmin,
      isAssessmentAdminVisible: contextValue.isAssessmentAdmin
    },
    {
      title: 'Overview',
      href: '/documentation',
      icon: <CollectionsIcon />,
      isAdminVisible: true,
      isAssessmentAdminVisible: true
    },
    {
      title: 'Logout',
      type: 'external',
      href: staticLogout,
      icon: <ExitToAppRoundedIcon />,
      isAdminVisible: true,
      isAssessmentAdminVisible: true
    },
  ];
   
  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <Profile />
        <Divider className={classes.divider} />
        <SidebarNav
          className={classes.nav}
          pages={pages}
        />
      </div>
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
