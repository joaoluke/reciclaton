import React from "react";
import Login from "../../pages/login";
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
        <Route path="/profile">
          *PAGINA DE PROFILE*
        </Route>
        <Route path="/">
          *PAGINA INICIAL*
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
