import React from "react";
import { Footer } from "../Footer";
import { CaseDetail } from "./CaseDetail";
import { PortfolioSwitch } from "./PortfolioSwitch";
import { Route, Switch, useRouteMatch } from "react-router-dom";

export const PortfolioPage = () => { 
  const { path } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route
          exact
          path={`${path}/showcases/:id/:slug`}
          validate={(params) => Number.isInteger(params.id)}
          render={() => <CaseDetail />}
        />
        <Route path={path} render={() => <PortfolioSwitch />} />
      </Switch>

      <Footer />
    </>
  );
};
