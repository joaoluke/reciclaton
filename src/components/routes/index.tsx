import React from "react";
import { Switch, Route } from "react-router-dom";

import BusinessRanking from '../business-ranking'


import BaseLayout from "../layout";
const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <BaseLayout> *PAGINA INICIAL*</BaseLayout>
        </Route>
        <Route exact path="/login">
          <BaseLayout>*PAGINA DE LOGIN*</BaseLayout>
        </Route>
        <Route exact path="/ranking">
          <BaseLayout>*PAGINA DE RANKING*</BaseLayout>
          <BusinessRanking />
        </Route>
        <Route exact path="/profile">
          <BaseLayout>*PAGINA DE PROFILE*</BaseLayout>
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
