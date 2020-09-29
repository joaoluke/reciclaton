import React from "react";
import Login from "../../pages/login";
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
        <Route exact path="/profile">
          *PAGINA DE PROFILE*
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
