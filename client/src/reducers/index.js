import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import employeesReducer from "./employeesReducer";
import loginReducer from "./loginReducer";

export default combineReducers({
  form: formReducer,
  login: loginReducer,
  employees: employeesReducer
});
