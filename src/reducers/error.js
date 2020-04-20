import { combineReducers } from "redux";

import {
  API_ERROR
} from "../actions/Error";

const message = (state = null, action) => {
  switch(action.type) {
    case API_ERROR:
      return action.message;
    default:
      return state; 
  }
};

export default combineReducers({
  message
});
