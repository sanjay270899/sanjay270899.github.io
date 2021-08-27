import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact to="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
