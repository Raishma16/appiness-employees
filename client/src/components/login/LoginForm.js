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

  const renderLoginError = () => {
    if (login.error) return login.error;
  };

  return (
    <form className="ui large form error" onSubmit={handleSubmit(loginUser)}>
      <div className="ui error message">{renderLoginError()}</div>
      <div className="ui segment">
        {renderFields()}
        <button className="ui fluid large submit button login-button">
          Login
        </button>
      </div>
    </form>
  );
};

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

const formWrapped = reduxForm({ form: "loginForm", validate })(LoginForm);

export default connect(mapStateToProps, { loginUser })(formWrapped);
