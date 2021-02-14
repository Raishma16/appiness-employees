import React, { Fragment } from "react";
import { Router, Route, Switch } from "react-router-dom";
import EmployeeList from "./employees/EmployeeList";
import Header from "./Header";
import Login from "./login/Login";
import history from "../history";

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Fragment>
          <Header />
          <Route exact path="/dashboard" component={EmployeeList} />
        </Fragment>
      </Switch>
    </Router>
  );
};

export default App;
