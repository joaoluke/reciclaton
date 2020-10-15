import React from "react";
import Login from "../../pages/login";
import User from "../../pages/perfil-user";
import Home from "../../pages/home";
import { Switch, Route } from "react-router-dom";
import Complaint from "../../pages/complaints";

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
        <Route exact path="/complaints">
          <Complaint />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
