import React from "react";
import Login from "../../pages/login";
import { Switch, Route } from "react-router-dom";
import Header from '../header'

import BusinessRanking from '../business-ranking'

import BaseLayout from "../layout";
const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          *PAGINA INICIAL*
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/ranking">
          <Header children='nada'/>
          <BusinessRanking/>
        </Route>
        <Route exact path="/profile">
          *PAGINA DE PROFILE*
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
