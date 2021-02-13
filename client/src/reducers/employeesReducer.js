import { FETCH_EMPLOYEES } from "../actions/types";

const employeesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES:
      return action.payload;
    default:
      return state;
  }
};

export default employeesReducer;
