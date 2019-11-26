import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout,Main as MainLayout, Minimal as MinimalLayout } from 'components';

import {
  Dashboard as DashboardView,
  HisSetup as HisSetupView,
  HisAdmin as HisAdminView,
  NotFound as NotFoundView,

} from './views';

const Routes = ( props ) => {

  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/dashboard"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        d2={ props.d2 }
        path="/dashboard"
      />
      <RouteWithLayout
        component={HisSetupView}
        exact
        layout={MainLayout}
        d2= { props.d2 }
        path="/setup"
      />
      <RouteWithLayout
        component={HisAdminView}
        exact
        layout={MainLayout}
        d2= { props.d2 }
        path="/admin"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
