import { combineReducers } from "redux";

import { TOTAL_COST_CHANGED } from "../actions/About";

/**
 * Total Cost
 * 
 * @param  {String} state
 * @param  {Object} action
 * @return {String}
 */
const totalCost = (state = "$", action) => {
  switch(action.type) {
    case TOTAL_COST_CHANGED:
      return action.totalCost;
    default:
      return state;
  }
};

/**
 * about
 */
export default combineReducers({
  totalCost
});
