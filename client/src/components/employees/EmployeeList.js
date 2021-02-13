import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchEmployees } from "../../actions";
import history from "../../history";
import EmployeeDetail from "./EmployeeDetail";

const EmployeeList = ({ user, employees, fetchEmployees }) => {
  const [currentEmployee, setCurrentEmployee] = useState(null);

  useEffect(() => {
    if (!sessionStorage.getItem("user")) history.push("/");
    fetchEmployees();
  }, [fetchEmployees, user]);

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

  const renderEmployeeDetail = () => {
    if (!currentEmployee) return;
    return (
      <EmployeeDetail
        employee={currentEmployee}
        setCurrentEmployee={setCurrentEmployee}
      />
    );
  };

  return (
    <Fragment>
      <div className="ui link cards centered">{renderEmployeeCard()}</div>
      {renderEmployeeDetail()}
    </Fragment>
  );
};

const mapStateToProps = ({ employees, login }) => {
  return { employees, user: login.user };
};

export default connect(mapStateToProps, { fetchEmployees })(EmployeeList);
