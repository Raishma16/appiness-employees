import React from "react";

const LoginField = ({
  input,
  type,
  placeholder,
  iconName,
  meta: { touched, error }
}) => {
  return (
    <div className="field">
      <div className="ui left icon input">
        <i className={`${iconName} icon`}></i>
        <input
          {...input}
          type={type}
          placeholder={placeholder}
          autoComplete="off"
        />
      </div>
      <div className="validation-error">{touched && error}</div>
    </div>
  );
};

export default LoginField;
