import React, { ComponentType } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

interface IPrivateRouteProps extends RouteProps {
  component: ComponentType<any>;
}
const PrivateRoute: React.FC<IPrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { isAuthenticated } = useAuth0();
  console.log(isAuthenticated);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/auth/sign-in/default" />
        )
      }
    />
  );
};

export default PrivateRoute;
