import React from "react";
import Login from "../../pages/login";
import User from "../../pages/perfil-user";
import Home from "../../pages/home";
import NewServiceOrder from "../new-service-call";
import ServiceOrder from "../../pages/service-order";
import { Switch, Route } from "react-router-dom";
import Complaint from "../../pages/perfil-user/complaint-modal";
const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/test-modal">
          <Complaint visible={true} setVisible={true} />
        </Route>
        <Route exact path="/ranking">
          *PAGINA DE RANKING*
        </Route>
        <Route exact path="/profile/:userId">
          <User />
        </Route>
        <Route exact path="/services/:userId">
          <ServiceOrder />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
