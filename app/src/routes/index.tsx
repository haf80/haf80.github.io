import React, { ReactElement, Suspense, lazy, FunctionComponent } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../utils/history";

const Home = lazy(() => import("../views/home"));
const Codebase = lazy(() => import("../views/codebase"));
const Helpers = lazy(() => import("../views/helpers"));
const Cleancode = lazy(() => import("../views/cleancode"));

const IndexRouter: FunctionComponent = (): ReactElement => {
  return (
    <Router history={history}>
      <Suspense fallback={<p>Loading</p>}>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/codebase" exact component={Codebase}></Route>
          <Route path="/clean-code" exact component={Cleancode}></Route>
          <Route path="/helpers" exact component={Helpers}></Route>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default IndexRouter;
