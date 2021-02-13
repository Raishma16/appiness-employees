import React from "react";
import { Link } from "react-router-dom";
import history from "../history";
import "./Header.css";

const Header = () => {
  const width = window.screen.width;
  const logout = () => {
    sessionStorage.removeItem("user");
    history.push("/");
  };
  return (
    <div
      className={`ui inverted pointing menu page-header ${
        width < 600 ? "stackable" : ""
      }`}
    >
      <Link to="/" className="item">
        <img
          src="https://www.appinessworld.com/images/appiness-logo.png"
          className="image"
          alt="logo"
        ></img>
      </Link>

      <div className="item">
        <h2 className="margin-auto">
          <i className="user icon"></i> Employees Dashboard
        </h2>
      </div>
      <div className="right menu">
        <div className="item ui button" onClick={logout}>
          <h4 className="margin-auto">Log Out</h4>
        </div>
      </div>
    </div>
  );
};

export default Header;
