import { combineReducers } from "redux";

import {
  CLEAR,
  SEARCHING,
  SEARCH_COMPLETE
} from "../actions/Search";

/**
 * Search Results
 * 
 * @param  {[type]} state  [description]
 * @param  {[type]} action [description]
 * @return {[type]}        [description]
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
 * @param  {Boolean} state  [description]
 * @param  {[type]}  action [description]
 * @return {[type]}         [description]
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
 * 
 */
export default combineReducers({
  searchResults,
  searching
});
