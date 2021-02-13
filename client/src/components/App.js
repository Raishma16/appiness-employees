import React from "react";
import { Router, Route } from "react-router-dom";
import EmployeeList from "./employees/EmployeeList";
import Header from "./Header";
import Landing from "./Landing";
import Login from "./login/Login";
import history from "../history";

const App = ({ login, loginUser }) => {
  return (
    <div>
      <Router history={history}>
        <div>
          {/* <Header /> */}
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={EmployeeList} />
        </div>
      </Router>
    </div>
  );
};

export default App;
