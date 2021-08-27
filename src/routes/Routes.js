import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "../pages";

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>Page not found</Route>
      </Switch>
    </HashRouter>
  );
};

export default Routes;
