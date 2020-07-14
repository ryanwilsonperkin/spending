import React from "react";
import { Switch, Redirect } from "react-router-dom";

import { RouteWithLayout } from "./components";
import { Main as MainLayout, Minimal as MinimalLayout } from "./layouts";

import {
  Dashboard as DashboardView,
  ProductList as ProductListView,
  UserList as UserListView,
  Typography as TypographyView,
  Icons as IconsView,
  Account as AccountView,
  Settings as SettingsView,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView,
} from "./views";

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/dashboard" />
      <RouteWithLayout
        exact
        component={DashboardView}
        layout={MainLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        exact
        component={UserListView}
        layout={MainLayout}
        path="/users"
      />
      <RouteWithLayout
        exact
        component={ProductListView}
        layout={MainLayout}
        path="/products"
      />
      <RouteWithLayout
        exact
        component={TypographyView}
        layout={MainLayout}
        path="/typography"
      />
      <RouteWithLayout
        exact
        component={IconsView}
        layout={MainLayout}
        path="/icons"
      />
      <RouteWithLayout
        exact
        component={AccountView}
        layout={MainLayout}
        path="/account"
      />
      <RouteWithLayout
        exact
        component={SettingsView}
        layout={MainLayout}
        path="/settings"
      />
      <RouteWithLayout
        exact
        component={SignUpView}
        layout={MinimalLayout}
        path="/sign-up"
      />
      <RouteWithLayout
        exact
        component={SignInView}
        layout={MinimalLayout}
        path="/sign-in"
      />
      <RouteWithLayout
        exact
        component={NotFoundView}
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
