import axios from "axios";
import history from "../history";
import { FETCH_EMPLOYEES, LOGIN_USER } from "./types";

export const loginUser = (formValues) => async (dispatch) => {
  const { data } = await axios.post("/api/login", formValues);
  dispatch({ type: LOGIN_USER, payload: data });
  if (data.user) {
    sessionStorage.setItem("user", data.user);
    history.push("/dashboard");
  }
};

export const fetchEmployees = () => async (dispatch) => {
  const { data } = await axios.get("/api/employees");
  dispatch({ type: FETCH_EMPLOYEES, payload: data.user });
};
