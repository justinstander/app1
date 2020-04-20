import { combineReducers } from "redux";

import { TOTAL_COST_CHANGED } from "../actions/About";

/**
 * Total Cost
 * 
 * @param  {String} state  [description]
 * @param  {[type]} action [description]
 * @return {[type]}        [description]
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
 * 
 */
export default combineReducers({
  totalCost
});
