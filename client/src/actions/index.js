// Create and export all action creators here

import axios from "axios";

import history from "../history";
import { FETCH_EMPLOYEES, LOGIN_USER } from "./types";

export const loginUser = (formValues) => async (dispatch) => {
  const { data } = await axios.post("/api/login", formValues);
  dispatch({ type: LOGIN_USER, payload: data });

  // Redirect user to dashboard page on successful login only
  if (data.user) {
    // Set the user object in session storage to handle authorized routes on page refresh.
    // This approach is used only for the sake of this application.
    // In real applications, this will be handled by other types of session management like cookies.
    sessionStorage.setItem("user", data.user);
    history.push("/dashboard");
  }
};

export const fetchEmployees = () => async (dispatch) => {
  const { data } = await axios.get("/api/employees");
  dispatch({ type: FETCH_EMPLOYEES, payload: data.user });
};
