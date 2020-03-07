import { combineReducers } from "redux";

import {
  SEARCHING,
  SEARCH_COMPLETE,
  CLEAR
} from "../actions/search";

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

export default combineReducers({
  searchResults,
  searching
});
