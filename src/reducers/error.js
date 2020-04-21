import { combineReducers } from "redux";

import { API_ERROR } from "../actions/Error";

/**
 * Error Message
 * 
 * @param  {String} state  
 * @param  {Object} action 
 * @return {String}        
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
 * error
 */
export default combineReducers({
  message
});
