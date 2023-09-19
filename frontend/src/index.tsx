import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/App.css";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import AuthLayout from "./layouts/auth";
import AdminLayout from "./layouts/admin";
import { ChakraProvider } from "@chakra-ui/react";
import PrivateRoute from "components/privateRoute";
import NoSidebarLayout from "./layouts/admin/no-sidebar";

import { Auth0Provider } from "@auth0/auth0-react";
import theme from "./theme/theme";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
const client = new ApolloClient({
  uri: "https://app.puja.quest/graphql/",
  cache: new InMemoryCache(),
});
// const client = ...

ReactDOM.render(
  <Auth0Provider
    domain="dev-r3k5zkyg2cjmqq8d.us.auth0.com"
    clientId="lBfTeipVyAqFgrJrFZszIlp1IjA8STKf"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <React.StrictMode>
          <HashRouter>
            <Switch>
              <Route path={`/auth`} component={AuthLayout} />
              <PrivateRoute path={`/admin`} component={AdminLayout} />
              <PrivateRoute path={`/onboard`} component={NoSidebarLayout} />
              <Redirect from="/" to="/onboard" />
            </Switch>
          </HashRouter>
        </React.StrictMode>
      </ApolloProvider>
    </ChakraProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
