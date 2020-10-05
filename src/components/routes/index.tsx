import React from "react";
import Login from "../../pages/login";
import User from "../../pages/perfil-user";
import { Switch, Route } from "react-router-dom";
const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/ranking">
          *PAGINA DE RANKING*
        </Route>
        <Route exact path="/profile/:userId">
          <User />
        </Route>
        <Route path="/">
          *PAGINA INICIAL*
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
