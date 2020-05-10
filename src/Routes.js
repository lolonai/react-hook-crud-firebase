import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from "./Components/Main";
import Signin from "./Components/Signin";
import Login from "./Components/Login";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/signin" component={Signin} />
    <Route exact path="/login" component={Login} />
  </Switch>
);

export default Routes;
