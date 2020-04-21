import { combineReducers } from "redux";

import { CLEAR, SEARCHING, SEARCH_COMPLETE } from "../actions/Search";

/**
 * Search Results
 * 
 * @param  {Object} state
 * @param  {Object} action 
 * @return {Object}       
 */
const searchResults = (state = null, action) => {
  switch(action.type) {
    case SEARCH_COMPLETE:
      return action.searchResults;
    case SEARCHING:
    case CLEAR:
      return null;
    default:
      return state;
  }
};

/**
 *  Searching Flag
 * 
 * @param  {Boolean} state 
 * @param  {Object}  action
 * @return {Boolean}        
 */
const searching = (state = false, action) => {
  switch(action.type) {
    case SEARCHING:
      return true;
    case SEARCH_COMPLETE:
    case CLEAR:
      return false;
    default:
      return state;
  }
};

/**
 * search
 */
export default combineReducers({
  searchResults,
  searching
});
