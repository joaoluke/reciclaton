import React from "react";
import Login from "../../pages/login";
import { Switch, Route } from "react-router-dom";
import Ranking from '../../pages/ranking'
const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/ranking">
            <Ranking/>
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
