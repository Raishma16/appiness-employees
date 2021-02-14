import React from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";

import { loginUser } from "../../actions";
import LoginField from "./LoginField";

const FIELDS = [
  {
    name: "username",
    type: "email",
    placeholder: "E-mail address",
    iconName: "user"
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
    iconName: "lock"
  }
];

const LoginForm = ({ loginUser, handleSubmit, login }) => {
  //Helper function used to render username and password fields in the login form.
  const renderFields = () => {
    return FIELDS.map(({ name, type, placeholder, iconName }) => {
      return (
        <Field
          key={name}
          name={name}
          type={type}
          placeholder={placeholder}
          iconName={iconName}
          component={LoginField}
        />
      );
    });
  };

  return (
    <form className="ui large form error" onSubmit={handleSubmit(loginUser)}>
      {/* Display server side validation errors */}
      <div className="ui error message">{login.error}</div>

      <div className="ui segment">
        {renderFields()}
        <button className="ui fluid large submit button login-button">
          Login
        </button>
      </div>
    </form>
  );
};

// Client side validation done with redux-form reducer
const validate = (values) => {
  const errors = {};

  const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!re.test(values.username))
    errors.username = "Please enter a valid email ID";

  if (values.password && values.password.length < 8)
    errors.password = "Password must be at least 8 characters long";

  FIELDS.forEach(({ name }) => {
    if (!values[name]) errors[name] = `Please enter the ${name}`;
  });

  return errors;
};

const mapStateToProps = ({ login }) => {
  return { login };
};

// Wrapping LoginForm with redux-form reducer
const formWrapped = reduxForm({ form: "loginForm", validate })(LoginForm);

export default connect(mapStateToProps, { loginUser })(formWrapped);
