import React from "react";
import { Footer } from "../Footer";
import { CaseDetail } from "./CaseDetail";
import { PortfolioSwitch } from "./PortfolioSwitch";
import { Route, Switch, useRouteMatch } from "react-router-dom";

export default function PortfolioPage(props) {
  const { path } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route
          exact
          path={`${path}/showcases/:id/:slug`}
          validate={(params) => Number.isInteger(params.id)}
          render={() => <CaseDetail showcases={props.showcases} />}
        />
        <Route path={path} render={() => <PortfolioSwitch {...props} />} />
      </Switch>

      <Footer />
    </>
  );
}
