import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";

import { fetchEmployees } from "../../actions";
import history from "../../history";
import EmployeeDetail from "./EmployeeDetail";

const EmployeeList = ({ user, employees, fetchEmployees }) => {
  // This state is used both for setting the currentEmployee for the EmployeeDetail component
  // and to show or hide the modal based on the existence of the currentEmployee state
  const [currentEmployee, setCurrentEmployee] = useState(null);

  useEffect(() => {
    // This is to handle route authorization for this component.
    if (!sessionStorage.getItem("user")) history.push("/");

    fetchEmployees();
  }, [fetchEmployees, user]);

  // Helper function to render each employee card in the list
  const renderEmployeeCard = () => {
    return employees.map((employee) => {
      return (
        <div
          className="card"
          key={employee.id}
          onClick={() => setCurrentEmployee(employee)}
        >
          <div className="content">
            <img
              className="right floated mini ui image"
              src={
                employee.gender === "male"
                  ? "https://semantic-ui.com/images/avatar2/large/matthew.png"
                  : "https://semantic-ui.com/images/avatar2/large/molly.png"
              }
              alt="employee"
            />
            <div className="header">{employee.name}</div>
            <div className="meta">Emp ID:{employee.id}</div>
          </div>
        </div>
      );
    });
  };

  return (
    <Fragment>
      <div className="ui link cards centered" style={{ paddingTop: "20px" }}>
        {renderEmployeeCard()}
      </div>

      {/* conditionally render the EmployeeDetail component based on currentEmployee state */}
      {currentEmployee ? (
        <EmployeeDetail
          employee={currentEmployee}
          setCurrentEmployee={setCurrentEmployee}
        />
      ) : null}
    </Fragment>
  );
};

const mapStateToProps = ({ employees, login }) => {
  return { employees, user: login.user };
};

export default connect(mapStateToProps, { fetchEmployees })(EmployeeList);
