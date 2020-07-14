import React from "react";
import { Route, RouteProps } from "react-router-dom";
import PropTypes from "prop-types";

interface RouteWithLayoutProps extends RouteProps {
  layout: any;
}

const RouteWithLayout = (props: RouteWithLayoutProps) => {
  const { layout: Layout, component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

RouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string,
};

export default RouteWithLayout;
