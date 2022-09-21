import React from 'react';
import {
  Dashboard as DashboardView,
  NotFound as NotFoundView,
  HisAssessment as HisAssessView,
  HisDocumentation
} from './views';
import { LogoutButton } from './LogOut';
import PeopleIcon from '@mui/icons-material/People';

export const routes = [

  {
    path: '/',
    component: DashboardView,
    children:[
      {
        path: '/:appName',
        component: HisAssessView
      },
      {
        path: '/:appName/*',
        component: HisAssessView
      }
    ]
  },
  {
    path: '/dashboard',
    component: DashboardView
  },
  {
    path: "/logout",
    component: LogoutButton
  },
  {
    path: '*',
    component: NotFoundView,
    layout: 'minimal'
  },
  {
    path: '/assess/documentation',
    component: HisDocumentation,
    title: 'Documentation',
    href: '/assess/documentation',
    icon: <PeopleIcon />
  },
];