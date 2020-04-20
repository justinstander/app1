import { combineReducers } from "redux";

import {
  API_ERROR,
  TOTAL_COST_CHANGED
} from "../actions/Main";

const totalCost = (state = "$", action) => {
  switch(action.type) {
    case TOTAL_COST_CHANGED:
      return action.totalCost;
    default:
      return state;
  }
};

const message = (state = null, action) => {
  switch(action.type) {
    case API_ERROR:
      return action.message;
    default:
      return state; 
  }
};

export default combineReducers({
  totalCost,
  message
});
