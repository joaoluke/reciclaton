import React from "react";
import { Switch, Route } from "react-router-dom";

import BusinessRanking from '../business-ranking'

const Routes = () => {
  return <>
    <Switch>
      <Route exact path="/">
        *PAGINA INICIAL*
    </Route>
      <Route exact path="/login">
        *PAGINA DE LOGIN*
    </Route>
      <Route exact path="/ranking">
        *PAGINA DE RANKING*
        <BusinessRanking />
    </Route>
      <Route exact path="/profile">
        *PAGINA DE PROFILE*
    </Route>
    </Switch>
  </>
}

export default Routes;
