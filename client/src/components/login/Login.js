import React from "react";

import "./Login.css";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="login">
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <h2 className="ui header login-header">
            <img
              src="https://www.appinessworld.com/images/appiness-logo.png"
              className="image"
              alt="logo"
            ></img>
            <div className="content">Log-in to your account</div>
          </h2>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
