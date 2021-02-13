import React from "react";
import { Router, Route } from "react-router-dom";
import EmployeeList from "./employees/EmployeeList";
import Header from "./Header";
import Login from "./login/Login";
import history from "../history";

const App = () => {
  return (
    <Router history={history}>
      <div>
        <Route exact path="/" component={Login} />
        {/* <div className="ui container"> */}
        <Header />
        <Route exact path="/dashboard" component={EmployeeList} />
        {/* </div> */}
      </div>
    </Router>
  );
};

export default App;
