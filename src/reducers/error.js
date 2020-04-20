import { combineReducers } from "redux";

import { API_ERROR } from "../actions/Error";

/**
 * Error Message
 * 
 * @param  {[type]} state  [description]
 * @param  {[type]} action [description]
 * @return {[type]}        [description]
 */
const message = (state = null, action) => {
  switch(action.type) {
    case API_ERROR:
      return action.message;
    default:
      return state; 
  }
};

/**
 * 
 */
export default combineReducers({
  message
});
