import axios from "axios";
import history from "../history";
import { LOGIN_USER } from "./types";

export const loginUser = (formValues) => async (dispatch) => {
  const { data } = await axios.post("/api/login", formValues);
  console.log(data);
  dispatch({ type: LOGIN_USER, payload: data });
  if (data.user) history.push("/dashboard");
};
