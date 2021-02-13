import React from "react";
import Modal from "../Modal";
import "./EmployeeDetail.css";

const EmployeeDetail = ({
  employee: { id, name, age, gender, email, phoneNo },
  setCurrentEmployee
}) => {
  const renderContent = () => {
    return (
      <div className="ui placeholder segment employee-detail">
        <div className="ui two column relaxed stackable grid">
          <div className="column middle aligned center aligned">
            <img
              className="image"
              src={
                gender === "male"
                  ? "https://semantic-ui.com/images/avatar2/large/matthew.png"
                  : "https://semantic-ui.com/images/avatar2/large/molly.png"
              }
              alt="employee"
            ></img>
          </div>
          <div className="middle aligned center aligned column">
            <h1>{name}</h1>
            <p>
              <strong>Employee ID: </strong>
              {id}
            </p>
            <p>
              <strong>Age: </strong>
              {age}
            </p>
            <p>
              <strong>Gender: </strong>
              {gender}
            </p>
            <p>
              <strong>Email: </strong>
              {email}
            </p>
            <p>
              <strong>Phone: </strong>
              {phoneNo}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Modal
      content={renderContent()}
      onDismiss={() => setCurrentEmployee(null)}
    />
  );
};

export default EmployeeDetail;
