import React from "react";
import Login from "../../pages/login";
import User from "../../pages/perfil-user";
import Home from "../../pages/home";
import ServiceOrder from "../../pages/new-service-call";
import { Switch, Route } from "react-router-dom";
const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/ranking">
          *PAGINA DE RANKING*
        </Route>
        <Route exact path="/profile/:userId">
          <User />
        </Route>
        <Route exact path="/services/:userId">
          *PAGINA DE SERVICO*
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/new-service-order">
          <ServiceOrder />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
