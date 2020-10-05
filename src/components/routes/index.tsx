import React from "react";
import Login from "../../pages/login";
import User from "../../pages/perfil-user";
import { Switch, Route } from "react-router-dom";
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
          *PAGINA DE RANKING*
        </Route>
        <Route exact path="/profile/:userId">
          <User />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
