import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from "./Components/Main";
import Signin from "./Components/Signin";
import Login from "./Components/Login";
import Create from "./Components/Create";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/signin" component={Signin} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/create" component={Create} />
  </Switch>
);

export default Routes;
